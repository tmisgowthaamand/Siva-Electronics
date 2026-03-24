import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Loader, ChevronLeft, Shield } from 'lucide-react';
import './Checkout.css';

const QRPayment = ({ orderId, amount, description, onBack, onPaymentComplete }) => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('pending');

  useEffect(() => {
    const timer = setTimeout(() => {
      generateQR();
    }, 500); // Small delay to ensure component is mounted

    return () => clearTimeout(timer);
  }, [orderId, amount]);

  const generateQR = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = import.meta.env.VITE_API_URL?.trim() || '';
      const endpoint = `${apiUrl}/api/payment/qr`;

      console.log('🔍 QRPayment Debug Info:');
      console.log('  API URL:', apiUrl);
      console.log('  Endpoint:', endpoint);
      console.log('  Order ID:', orderId);
      console.log('  Amount:', amount);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          orderId: String(orderId).trim(),
          amount: String(amount).trim(),
          description: description || 'Siva Electronics Payment'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('Response Status:', response.status);

      if (!response.ok) {
        let errorMsg = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || errorData.message || errorMsg;
        } catch (e) {
          const text = await response.text();
          errorMsg = text || errorMsg;
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log('✓ API Response:', {
        success: data.success,
        hasQR: !!data.qrCode,
        upiId: data.upiId
      });

      if (data.success && data.qrCode) {
        setQrCode(data.qrCode);
        console.log('✓ QR Code loaded successfully');
      } else {
        throw new Error(data.error || 'No QR code in response');
      }
    } catch (err) {
      console.error('❌ QR Generation Error:', err.message);

      let userMessage = err.message;
      if (err.name === 'AbortError') {
        userMessage = 'Request timeout - Backend may be slow. Check internet connection.';
      } else if (err.message.includes('Failed to fetch')) {
        userMessage = 'Backend not accessible. Make sure server is running at: ' +
                      (process.env.REACT_APP_API_URL || 'http://localhost:10000');
      }

      setError(userMessage);
      setQrCode(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    setTimeout(() => {
      if (onPaymentComplete) {
        onPaymentComplete({ status: 'success' });
      }
    }, 2000);
  };

  return (
    <div className="qr-payment-overlay">
      <div className="qr-payment-modal">
        {/* Back Button */}
        <button onClick={onBack} className="modal-back-button" title="Go back">
          <ChevronLeft size={20} />
        </button>

        {/* Merchant Info Header */}
        <div className="merchant-header">
          <div className="merchant-info">
            <div className="merchant-icon">🏪</div>
            <div className="merchant-details">
              <h3>SIVA ELECTRONICS</h3>
              <p>Electronics & Gadgets</p>
            </div>
          </div>
        </div>

        {/* Amount Display */}
        <div className="amount-section">
          <p className="select-option-text">Select an option to pay</p>
          <p className="payment-amount">₹{amount}</p>
        </div>

        {/* QR Code Section */}
        {loading ? (
          <div className="qr-loading-modal">
            <Loader className="spinner" size={40} />
            <p>Generating QR Code...</p>
            <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
              Please wait, connecting to payment gateway...
            </p>
          </div>
        ) : error ? (
          <div className="qr-error-modal">
            <AlertCircle size={48} color="#ff6b6b" />
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Unable to load QR Code</p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.5' }}>
              {error}
            </p>
            <button
              onClick={generateQR}
              className="confirm-payment-btn"
              style={{ background: '#ffc107', color: '#000', fontWeight: '600' }}
            >
              TRY AGAIN
            </button>
          </div>
        ) : qrCode ? (
          <div className="payment-options-section">
            <div className="qr-option-card">
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={qrCode}
                  alt="UPI Payment QR Code"
                  className="qr-code-large"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    console.error('QR Image load failed');
                    setError('Failed to display QR image');
                  }}
                />
              </div>
              <div className="upi-info">
                <p className="scan-text">Scan with any UPI App</p>
                <div className="upi-apps-modal">
                  <span className="app-badge">Paytm</span>
                  <span className="app-badge">Google Pay</span>
                  <span className="app-badge">PhonePe</span>
                  <span className="app-badge more">& more</span>
                </div>
              </div>
            </div>

            {/* Payment Confirmation */}
            <div className="payment-confirm-section">
              <button
                onClick={handlePaymentSuccess}
                className="confirm-payment-btn"
              >
                ✓ I have completed the payment
              </button>
            </div>
          </div>
        ) : (
          <div className="qr-loading-modal">
            <Loader className="spinner" size={40} />
            <p>Initializing...</p>
          </div>
        )}

        {/* More Options */}
        <div className="more-options-section">
          <h4>More Payment Options</h4>
          <div className="more-options-grid">
            <button className="more-option-btn" disabled>💳 Credit/Debit Card</button>
            <button className="more-option-btn" disabled>🏦 Net Banking</button>
            <button className="more-option-btn" disabled>📱 Wallet</button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="security-badge-section">
          <Shield size={16} />
          <span>100% Secure Payments Powered by UPI</span>
        </div>

        {/* Success Overlay */}
        {paymentStatus === 'success' && (
          <div className="payment-success-overlay">
            <div className="success-popup">
              <CheckCircle size={60} className="success-icon" />
              <h3>Payment Successful!</h3>
              <p>Your order has been confirmed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRPayment;
