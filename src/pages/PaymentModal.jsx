import React, { useState, useEffect } from 'react';
import { AlertCircle, Loader, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import './Checkout.css';

const PaymentModal = ({ orderId, amount, onClose, onPaymentComplete, customerPhone, customerEmail }) => {
  const [activeTab, setActiveTab] = useState('qr'); // 'qr' or 'netbanking'
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    generateQRCode();
  }, []);

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

  const handlePaymentComplete = () => {
    onPaymentComplete({ status: 'success' });
  };

  const initiateNetBanking = async () => {
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
          transactionStatus: async (paymentStatus) => {
            if (window.Paytm && window.Paytm.CheckoutJS) {
              window.Paytm.CheckoutJS.close();
            }
            if (paymentStatus.STATUS === 'TXN_SUCCESS') {
              onPaymentComplete({ status: 'success', paymentStatus });
            } else {
              setError('Payment failed. Please try again.');
              setLoading(false);
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
      console.error('Payment error:', err);
      setError(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-large">
        {/* Header */}
        <div className="payment-header-large">
          <button onClick={onClose} className="modal-back-btn">
            <ChevronLeft size={24} />
          </button>
          <div className="merchant-section">
            <div className="merchant-icon">🏪</div>
            <div>
              <h3>SIVA ELECTRONICS AND HOME APPLIANCES</h3>
              <p>Paytm PG</p>
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="amount-display-large">
          <p className="select-text">Select an option to pay</p>
          <p className="amount-value">₹{amount}</p>
        </div>

        {/* Main Content */}
        <div className="payment-content-large">
          {/* QR Code Section - Always Visible */}
          <div className="qr-section-large">
            <div className="qr-content">
              {loading ? (
                <div className="qr-loading-large">
                  <Loader size={48} className="spinner" />
                  <p>Generating QR Code...</p>
                </div>
              ) : error ? (
                <div className="qr-error-large">
                  <AlertCircle size={48} color="#ff6b6b" />
                  <p>{error}</p>
                  <button onClick={generateQRCode} className="btn-retry-large">
                    TRY AGAIN
                  </button>
                </div>
              ) : qrCode ? (
                <div className="qr-image-container">
                  <img src={qrCode} alt="UPI Payment QR Code" className="qr-image-large" />
                  <p className="upi-text">Scan with any UPI App</p>
                  <div className="upi-apps-container">
                    <span className="upi-app">Paytm</span>
                    <span className="upi-app">Google Pay</span>
                    <span className="upi-app">PhonePe</span>
                    <span className="upi-app">& more</span>
                  </div>
                </div>
              ) : null}

              <p className="powered-by">Powered by UPI</p>
            </div>

            {/* Confirm Payment Button for QR */}
            <button onClick={handlePaymentComplete} className="btn-qr-confirm">
              ✓ I have completed the payment
            </button>
          </div>

          {/* More Payment Options */}
          <div className="more-options-section-large">
            <h4>More Payment Options</h4>

            {/* UPI Option */}
            <div className="payment-option-box">
              <button className="option-header">
                <div className="option-info">
                  <span className="option-icon">💳</span>
                  <div>
                    <p className="option-name">UPI</p>
                    <p className="option-desc">Paytm • Google Pay • & more</p>
                  </div>
                </div>
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Net Banking Option */}
            <div className="payment-option-box">
              <button className="option-header" onClick={initiateNetBanking} disabled={loading}>
                <div className="option-info">
                  <span className="option-icon">🏦</span>
                  <div>
                    <p className="option-name">Net Banking</p>
                    <p className="option-desc">All major banks supported</p>
                  </div>
                </div>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="security-footer-large">
          <Shield size={16} />
          <span>100% Secure Payments Powered by Paytm PG</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
