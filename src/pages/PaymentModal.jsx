import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Loader, ChevronLeft, Shield, QrCode, Landmark } from 'lucide-react';
import './Checkout.css';

const PaymentModal = ({ orderId, amount, onClose, onPaymentComplete, customerPhone, customerEmail }) => {
  const [activeTab, setActiveTab] = useState('qr'); // 'qr' or 'netbanking'
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (activeTab === 'qr') {
      generateQRCode();
    }
  }, [activeTab]);

  const generateQRCode = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/payment/qr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: String(orderId),
          amount: String(amount),
          description: 'Siva Electronics Payment'
        }),
      });

      const data = await response.json();
      if (data.success && data.qrCode) {
        setQrCode(data.qrCode);
      } else {
        throw new Error(data.error || 'Failed to generate QR code');
      }
    } catch (err) {
      console.error('QR Generation Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const initiateNetBankingPayment = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/payment/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          amount: String(amount),
          customerId: `CUST_${customerPhone}`,
          customerEmail,
          customerPhone,
        }),
      });

      const data = await response.json();
      if (!data.success || !data.txnToken) {
        throw new Error(data.message || 'Failed to initiate payment');
      }

      // Open Paytm checkout
      const config = {
        root: '',
        flow: 'DEFAULT',
        data: {
          orderId: data.orderId,
          token: data.txnToken,
          tokenType: 'TXN_TOKEN',
          amount: data.amount,
        },
        handler: {
          notifyMerchant: (eventName, data) => {
            console.log('Paytm event:', eventName, data);
          },
          transactionStatus: async (paymentStatus) => {
            console.log('Payment status:', paymentStatus);
            if (window.Paytm && window.Paytm.CheckoutJS) {
              window.Paytm.CheckoutJS.close();
            }
            if (paymentStatus.STATUS === 'TXN_SUCCESS') {
              onPaymentComplete({ status: 'success', paymentStatus });
            } else {
              setError(`Payment ${paymentStatus.STATUS === 'TXN_FAILURE' ? 'failed' : 'was not completed'}`);
            }
          },
        },
        merchant: {
          mid: data.mid,
          redirect: false,
        },
        mapClientData: {
          env: data.isProduction ? 'PRODUCTION' : 'STAGE',
        },
      };

      if (window.Paytm && window.Paytm.CheckoutJS) {
        await window.Paytm.CheckoutJS.init(config);
        window.Paytm.CheckoutJS.invoke();
      } else {
        throw new Error('Paytm Checkout JS not loaded');
      }
    } catch (err) {
      console.error('Payment initiation error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    onPaymentComplete({ status: 'success' });
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-container">
        {/* Header */}
        <div className="payment-modal-header">
          <button onClick={onClose} className="payment-modal-close">
            <ChevronLeft size={24} />
          </button>
          <div className="payment-modal-title">
            <h2>Select Payment Method</h2>
            <p className="payment-amount">₹{amount}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="payment-tabs">
          <button
            className={`payment-tab ${activeTab === 'qr' ? 'active' : ''}`}
            onClick={() => setActiveTab('qr')}
          >
            <QrCode size={20} />
            <span>UPI QR Code</span>
          </button>
          <button
            className={`payment-tab ${activeTab === 'netbanking' ? 'active' : ''}`}
            onClick={() => setActiveTab('netbanking')}
          >
            <Landmark size={20} />
            <span>Net Banking</span>
          </button>
        </div>

        {/* Content */}
        <div className="payment-modal-content">
          {/* QR Code Tab */}
          {activeTab === 'qr' && (
            <div className="payment-qr-section">
              <div className="qr-header">
                <h3>Scan with any UPI App</h3>
                <p className="upi-apps">Paytm • Google Pay • PhonePe • & more</p>
              </div>

              {loading ? (
                <div className="qr-loading">
                  <Loader size={40} className="spinner" />
                  <p>Generating QR Code...</p>
                </div>
              ) : error ? (
                <div className="qr-error">
                  <AlertCircle size={48} color="#ff6b6b" />
                  <p>{error}</p>
                  <button onClick={generateQRCode} className="btn-retry">
                    Try Again
                  </button>
                </div>
              ) : qrCode ? (
                <div className="qr-display">
                  <img src={qrCode} alt="UPI QR Code" className="qr-image" />
                  <p className="qr-instruction">Scan the code with any UPI app</p>
                </div>
              ) : null}

              <button
                onClick={handlePaymentSuccess}
                className="btn-payment-confirm"
              >
                ✓ I have completed the payment
              </button>
            </div>
          )}

          {/* Net Banking Tab */}
          {activeTab === 'netbanking' && (
            <div className="payment-netbanking-section">
              <div className="netbanking-header">
                <h3>Select your Bank</h3>
                <p>All major banks supported</p>
              </div>

              {error && (
                <div className="error-banner">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={initiateNetBankingPayment}
                disabled={loading}
                className="btn-payment-netbanking"
              >
                {loading ? (
                  <>
                    <Loader size={18} className="spinner" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield size={18} />
                    Proceed to Net Banking
                  </>
                )}
              </button>

              <p className="netbanking-note">
                You will be redirected to Paytm's secure payment gateway
              </p>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="payment-security-badge">
          <Shield size={16} />
          <span>100% Secure Payments Powered by Paytm</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
