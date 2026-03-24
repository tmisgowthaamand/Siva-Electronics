import https from 'https';
import PaytmChecksum from 'paytmchecksum';
import QRCode from 'qrcode';

// Initiate Paytm Payment using new Initiate Transaction API v1
export async function initiatePayment(req, res) {
  try {
    const { orderId, amount, customerId, customerEmail, customerPhone } = req.body;

    // Validate input
    if (!orderId || !amount || !customerId || !customerPhone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: orderId, amount, customerId, customerPhone'
      });
    }

    // Paytm Configuration from environment variables
    const MID = process.env.PAYTM_MID;
    const MERCHANT_KEY = process.env.PAYTM_MERCHANT_KEY;
    const WEBSITE = process.env.PAYTM_WEBSITE || 'DEFAULT';
    const CALLBACK_URL = process.env.PAYTM_CALLBACK_URL || `http://localhost:${process.env.PORT || 5000}/api/payment/callback`;

    // Validate Paytm credentials
    if (!MID || !MERCHANT_KEY) {
      console.error('Missing Paytm credentials in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Paytm credentials not configured'
      });
    }

    // Prepare body for Initiate Transaction API v1
    const paytmBody = {
      requestType: 'Payment',
      mid: MID,
      websiteName: WEBSITE,
      orderId: orderId,
      callbackUrl: CALLBACK_URL,
      txnAmount: {
        value: amount,
        currency: 'INR',
      },
      userInfo: {
        custId: customerId,
        mobile: customerPhone,
        email: customerEmail || '',
      },
    };

    // Generate checksum (signature) on the body
    console.log('Generating checksum for order:', orderId);
    console.log('Amount:', amount);
    console.log('Customer:', customerId);

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmBody),
      MERCHANT_KEY
    );

    const paytmParams = {
      body: paytmBody,
      head: {
        signature: checksum,
      },
    };

    const postData = JSON.stringify(paytmParams);

    // Determine hostname based on environment
    // Production: secure.paytmpayments.com
    // Staging: securestage.paytmpayments.com
    const isProduction = process.env.PAYTM_ENVIRONMENT !== 'staging';
    const hostname = isProduction
      ? 'secure.paytmpayments.com'
      : 'securestage.paytmpayments.com';

    const path = `/theia/api/v1/initiateTransaction?mid=${MID}&orderId=${orderId}`;

    console.log(`Calling Paytm Initiate Transaction API: https://${hostname}${path}`);

    // Call Paytm Initiate Transaction API
    const paytmResponse = await new Promise((resolve, reject) => {
      const options = {
        hostname: hostname,
        port: 443,
        path: path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      };

      let responseData = '';
      const postReq = https.request(options, (postRes) => {
        postRes.on('data', (chunk) => {
          responseData += chunk;
        });
        postRes.on('end', () => {
          try {
            resolve(JSON.parse(responseData));
          } catch (e) {
            reject(new Error(`Invalid JSON response: ${responseData}`));
          }
        });
      });

      postReq.on('error', (error) => {
        reject(error);
      });

      postReq.write(postData);
      postReq.end();
    });

    console.log('Paytm API Response:', JSON.stringify(paytmResponse));

    // Check if initiate transaction was successful
    if (
      paytmResponse.body &&
      paytmResponse.body.resultInfo &&
      paytmResponse.body.resultInfo.resultStatus === 'S'
    ) {
      const txnToken = paytmResponse.body.txnToken;
      console.log('✅ txnToken received successfully');

      res.json({
        success: true,
        txnToken: txnToken,
        orderId: orderId,
        mid: MID,
        amount: amount,
        isProduction: isProduction,
        message: 'Transaction initiated successfully',
      });
    } else {
      const resultMsg =
        paytmResponse.body?.resultInfo?.resultMsg || 'Unknown error from Paytm';
      const resultCode =
        paytmResponse.body?.resultInfo?.resultCode || 'UNKNOWN';
      console.error('❌ Paytm Initiate Transaction failed:', resultMsg);

      res.status(400).json({
        success: false,
        message: `Paytm error: ${resultMsg}`,
        resultCode: resultCode,
      });
    }
  } catch (error) {
    console.error('Payment initiation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to initiate payment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Generate QR code for UPI payment
export async function generateQRCode(req, res) {
  try {
    const { orderId, amount, description } = req.body;

    if (!orderId || !amount) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: orderId, amount'
      });
    }

    // Using Paytm UPI ID format
    const upiId = 'sivaelectronics@paytm';
    const merchantName = 'SIVA ELECTRONICS';
    const transactionRef = orderId;
    const upiDescription = description || 'Payment for order';

    // Standard UPI format for Paytm
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&tn=${encodeURIComponent(upiDescription)}&tr=${transactionRef}`;

    console.log('Generating UPI QR for:', {
      upiId,
      merchantName,
      amount,
      orderId
    });

    // Generate QR code from UPI string
    const qrCode = await QRCode.toDataURL(upiString, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 300,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    res.json({
      success: true,
      qrCode,
      upiString,
      upiId,
      amount,
      orderId,
      merchantName,
      message: 'QR code generated successfully'
    });
  } catch (error) {
    console.error('QR generation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate QR code',
      details: error.message
    });
  }
}

// Verify payment
export async function verifyPayment(req, res) {
  try {
    const { orderId, transactionId } = req.body;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        error: 'Order ID is required'
      });
    }

    const MID = process.env.PAYTM_MID;
    const MERCHANT_KEY = process.env.PAYTM_MERCHANT_KEY;
    const WEBSITE = process.env.PAYTM_WEBSITE || 'DEFAULT';

    if (!MID || !MERCHANT_KEY) {
      return res.status(500).json({
        success: false,
        message: 'Paytm credentials not configured'
      });
    }

    // Prepare body for Verify Transaction API
    const paytmBody = {
      mid: MID,
      orderId: orderId,
      websiteName: WEBSITE
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmBody),
      MERCHANT_KEY
    );

    const paytmParams = {
      body: paytmBody,
      head: {
        signature: checksum,
      },
    };

    const postData = JSON.stringify(paytmParams);

    // Determine hostname based on environment
    const isProduction = process.env.PAYTM_ENVIRONMENT !== 'staging';
    const hostname = isProduction
      ? 'secure.paytmpayments.com'
      : 'securestage.paytmpayments.com';

    const path = `/theia/api/v1/verifyTransaction?mid=${MID}&orderId=${orderId}`;

    console.log(`Verifying transaction from Paytm: https://${hostname}${path}`);

    // Call Paytm Verify Transaction API
    const verifyResponse = await new Promise((resolve, reject) => {
      const options = {
        hostname: hostname,
        port: 443,
        path: path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      };

      let responseData = '';
      const postReq = https.request(options, (postRes) => {
        postRes.on('data', (chunk) => {
          responseData += chunk;
        });
        postRes.on('end', () => {
          try {
            resolve(JSON.parse(responseData));
          } catch (e) {
            reject(new Error(`Invalid JSON response: ${responseData}`));
          }
        });
      });

      postReq.on('error', (error) => {
        reject(error);
      });

      postReq.write(postData);
      postReq.end();
    });

    console.log('Paytm Verify Response:', JSON.stringify(verifyResponse));

    if (
      verifyResponse.body &&
      verifyResponse.body.resultInfo &&
      verifyResponse.body.resultInfo.resultStatus === 'TXN_SUCCESS'
    ) {
      res.json({
        success: true,
        message: 'Payment verified successfully',
        data: verifyResponse.body
      });
    } else {
      const resultMsg =
        verifyResponse.body?.resultInfo?.resultMsg || 'Unable to verify payment';

      res.status(400).json({
        success: false,
        message: resultMsg,
        data: verifyResponse.body
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

// Payment Callback from Paytm
export async function paymentCallback(req, res) {
  try {
    console.log('Payment callback received');
    console.log('Callback data:', req.body);

    // Extract payment details from callback
    const { ORDERID, TXNAMOUNT, TXNID, STATUS, RESPCODE } = req.body;

    if (!ORDERID) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is missing'
      });
    }

    // You can store callback data in your database here
    // For now, we'll just verify the transaction

    if (STATUS === 'TXN_SUCCESS') {
      console.log('✅ Payment successful for order:', ORDERID);
      res.json({
        success: true,
        message: 'Payment verified successfully',
        orderId: ORDERID,
        amount: TXNAMOUNT,
        transactionId: TXNID
      });
    } else {
      console.log('❌ Payment failed for order:', ORDERID);
      res.status(400).json({
        success: false,
        message: 'Payment failed',
        orderId: ORDERID,
        status: STATUS
      });
    }
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
