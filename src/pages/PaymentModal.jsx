import React, { useState } from 'react';
import { Loader, AlertCircle, Shield, ChevronLeft } from 'lucide-react';
import './Checkout.css';

const PaymentModal = ({ orderId, amount, onClose, onPaymentComplete, customerPhone, customerEmail }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
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

      // Open Paytm checkout with native QR + NetBanking + all payment options
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
      console.error('Payment initiation error:', err);
      setError(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-container">
        {/* Header */}
        <div className="payment-modal-header">
          <button onClick={onClose} className="payment-modal-close" title="Go back">
            <ChevronLeft size={24} />
          </button>
          <div className="payment-modal-title">
            <h2>Siva Electronics</h2>
            <p className="payment-amount">₹{amount}</p>
          </div>
        </div>

        {/* Content */}
        <div className="payment-modal-content-simple">
          {error ? (
            <div className="payment-error-state">
              <AlertCircle size={48} color="#ff6b6b" />
              <h3>Payment Error</h3>
              <p>{error}</p>
              <button onClick={handlePayment} className="btn-payment-retry">
                Try Again
              </button>
            </div>
          ) : loading ? (
            <div className="payment-loading-state">
              <Loader size={48} className="spinner" />
              <h3>Opening Payment Gateway</h3>
              <p>Please wait while we connect you to Paytm...</p>
            </div>
          ) : (
            <div className="payment-ready-state">
              <div className="payment-info">
                <h3>Choose Your Payment Method</h3>
                <p>Paytm will show you all available payment options:</p>
                <ul className="payment-methods-list">
                  <li>✓ UPI QR Code - Scan with any UPI app</li>
                  <li>✓ Net Banking - All major banks</li>
                  <li>✓ Credit & Debit Cards</li>
                  <li>✓ Digital Wallets (Paytm, Apple Pay, etc.)</li>
                  <li>✓ Buy Now Pay Later</li>
                </ul>
              </div>
              <button onClick={handlePayment} disabled={loading} className="btn-payment-proceed">
                <Shield size={18} />
                Proceed to Paytm Payment
              </button>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="payment-security-badge">
          <Shield size={16} />
          <span>100% Secure Payments Powered by Paytm PG</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
