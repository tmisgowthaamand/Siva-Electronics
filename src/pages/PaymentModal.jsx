import React, { useState, useEffect } from 'react';
import { Loader, AlertCircle, Shield, ChevronRight } from 'lucide-react';
import './Checkout.css';

const PaymentModal = ({ orderId, amount, onClose, onPaymentComplete, customerPhone, customerEmail }) => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactionInProgress, setTransactionInProgress] = useState(false);

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
      setError('Failed to generate QR Code. Please try Net Banking instead.');
    } finally {
      setLoading(false);
    }
  };

  const handleNetBanking = async () => {
    if (transactionInProgress) return;

    try {
      setTransactionInProgress(true);
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

      // Open Paytm checkout with DEFAULT flow for Net Banking
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
              setTransactionInProgress(false);
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
      setTransactionInProgress(false);
    }
  };

  const handleUPI = async () => {
    if (transactionInProgress) return;

    try {
      setTransactionInProgress(true);
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

      // Open Paytm checkout with HYBRID flow for UPI options
      const config = {
        root: '',
        flow: 'HYBRID',
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
              setTransactionInProgress(false);
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
      setTransactionInProgress(false);
    }
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-mv-style">
        {/* Header with Close Button */}
        <div className="payment-modal-header-mv">
          <button onClick={onClose} className="payment-modal-close-btn" title="Close">
            ✕
          </button>
        </div>

        {/* Merchant Info + Paytm PG Badge */}
        <div className="payment-merchant-section">
          <h2>SIVA ELECTRONICS AND HOME APPLIANCES</h2>
          <div className="paytm-badge">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 30'%3E%3Crect fill='%231f7ce6' width='80' height='30' rx='4'/%3E%3Ctext x='40' y='20' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3EPaytm PG%3C/text%3E%3C/svg%3E" alt="Paytm PG" />
          </div>
        </div>

        {/* Amount Section */}
        <div className="payment-amount-section">
          <p className="select-text">Select an option to pay</p>
          <p className="amount-large">₹{amount}</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="payment-error-banner">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {/* Main QR Code Section */}
        <div className="payment-content-mv">
          {loading ? (
            <div className="qr-loading-container">
              <Loader size={48} className="spinner" />
              <p>Generating QR Code...</p>
            </div>
          ) : qrCode ? (
            <div className="qr-main-section">
              <div className="qr-code-container">
                <img src={qrCode} alt="UPI Payment QR Code" className="qr-code-image" />
              </div>
              <p className="qr-scan-text">Scan with any UPI App</p>
              <div className="upi-apps-logos">
                <span>Paytm</span>
                <span>Google Pay</span>
                <span>PhonePe</span>
                <span>& more</span>
              </div>
              <p className="powered-by-upi">Powered by UPI</p>
            </div>
          ) : null}
        </div>

        {/* More Payment Options */}
        <div className="more-payment-options">
          <h3>More Payment Options</h3>

          {/* UPI Option */}
          <button
            className="payment-option-item"
            onClick={handleUPI}
            disabled={transactionInProgress}
          >
            <div className="option-content">
              <span className="option-icon upi-icon">💳</span>
              <div className="option-text">
                <p className="option-title">UPI</p>
                <p className="option-subtitle">Paytm • Google Pay • & more</p>
              </div>
            </div>
            <ChevronRight size={20} />
          </button>

          {/* Net Banking Option */}
          <button
            className="payment-option-item"
            onClick={handleNetBanking}
            disabled={transactionInProgress}
          >
            <div className="option-content">
              <span className="option-icon bank-icon">🏦</span>
              <div className="option-text">
                <p className="option-title">Net Banking</p>
                <p className="option-subtitle">All major banks supported</p>
              </div>
            </div>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Security Footer */}
        <div className="payment-security-footer">
          <Shield size={16} />
          <span>100% Secure Payments Powered by</span>
          <span className="paytm-text">Paytm PG</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
