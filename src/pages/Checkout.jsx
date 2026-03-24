import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Phone, Mail, User, Shield, Wallet, Banknote, Loader, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'online',
  });

  const [errors, setErrors] = useState({});

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      // Validate shipping information
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      // Phone validation
      const phoneRegex = /^[6-9]\d{9}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }

      // Pincode validation
      const pincodeRegex = /^\d{6}$/;
      if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
        newErrors.pincode = 'Please enter a valid 6-digit pincode';
      }
    }

    if (step === 2) {
      // Simplified payment validation - no card details required
      // Payment method selection is enough
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const generateOrderId = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SE${timestamp.slice(-6)}${random}`;
  };

  const initiatePaytmPayment = useCallback(async (orderId, amount) => {
    setPaymentLoading(true);
    setPaymentError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/payment/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          amount: String(amount),
          customerId: `CUST_${formData.phone}`,
          customerEmail: formData.email,
          customerPhone: formData.phone,
        }),
      });

      const data = await response.json();
      if (!data.success || !data.txnToken) {
        throw new Error(data.message || 'Failed to initiate payment');
      }

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
              const orderData = {
                orderId,
                items,
                total: amount,
                shippingInfo: {
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
                  phone: formData.phone,
                  address: formData.address,
                  city: formData.city,
                  state: formData.state,
                  pincode: formData.pincode,
                },
                paymentMethod: 'online',
                paymentStatus: 'confirmed',
                transactionId: paymentStatus.TXNID,
                orderDate: new Date().toISOString(),
                estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              };
              localStorage.setItem('lastOrder', JSON.stringify(orderData));
              clearCart();
              navigate('/order-confirmation');
            } else {
              setPaymentError(`Payment ${paymentStatus.STATUS === 'TXN_FAILURE' ? 'failed' : 'was not completed'}. Please try again.`);
              setPaymentLoading(false);
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
        customConfig: {
          udf1: '',
          udf2: '',
          udf3: '',
        },
      };

      if (window.Paytm && window.Paytm.CheckoutJS) {
        await window.Paytm.CheckoutJS.init(config);
        window.Paytm.CheckoutJS.invoke();
      } else {
        throw new Error('Paytm Checkout JS not loaded. Please refresh the page.');
      }
    } catch (err) {
      console.error('Payment initiation error:', err);
      setPaymentError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setPaymentLoading(false);
    }
  }, [formData, items, clearCart, navigate]);

  const handlePlaceOrder = () => {
    if (validateStep(2)) {
      const orderId = generateOrderId();
      const finalTotal = total + (formData.paymentMethod === 'cod' ? 50 : 0);

      if (formData.paymentMethod === 'online') {
        initiatePaytmPayment(orderId, finalTotal);
      } else {
        const orderData = {
          orderId,
          items,
          total: finalTotal,
          shippingInfo: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
          paymentMethod: 'cod',
          paymentStatus: 'pending',
          orderDate: new Date().toISOString(),
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        };
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        clearCart();
        navigate('/order-confirmation');
      }
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const isTestOrder = items.every(item => item.id === 100);
  const shipping = isTestOrder ? 0 : (subtotal > 2000 ? 0 : 99);
  const tax = isTestOrder ? 0 : Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Review</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <div className="checkout-form">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="form-section">
                <div className="section-header">
                  <Truck size={24} />
                  <h2>Shipping Information</h2>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">
                      <MapPin size={16} />
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`form-input ${errors.address ? 'error' : ''}`}
                      placeholder="Enter your full address"
                      rows="3"
                    />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`form-input ${errors.city ? 'error' : ''}`}
                      placeholder="Enter your city"
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`form-input ${errors.state ? 'error' : ''}`}
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Delhi">Delhi</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    {errors.state && <span className="error-message">{errors.state}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin size={16} />
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className={`form-input ${errors.pincode ? 'error' : ''}`}
                      placeholder="Enter pincode"
                      maxLength="6"
                    />
                    {errors.pincode && <span className="error-message">{errors.pincode}</span>}
                  </div>
                </div>

                <div className="form-actions">
                  <button onClick={handleNextStep} className="btn btn-primary btn-lg">
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="form-section">
                <div className="section-header">
                  <CreditCard size={24} />
                  <h2>Choose Payment Method</h2>
                </div>

                <div className="payment-methods-redesign">
                  <label className={`payment-card ${formData.paymentMethod === 'online' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-card-content">
                      <div className="payment-card-icon online">
                        <Wallet size={28} />
                      </div>
                      <div className="payment-card-info">
                        <h3>Online Payment</h3>
                        <p>Pay securely via UPI, Cards, Net Banking, Wallets</p>
                      </div>
                      <div className="payment-card-badge">
                        <Shield size={14} />
                        <span>Secure</span>
                      </div>
                    </div>
                    {formData.paymentMethod === 'online' && (
                      <div className="payment-card-details">
                        <div className="payment-providers">
                          <span className="provider-tag">UPI</span>
                          <span className="provider-tag">Credit Card</span>
                          <span className="provider-tag">Debit Card</span>
                          <span className="provider-tag">Net Banking</span>
                          <span className="provider-tag">Paytm Wallet</span>
                        </div>
                        <p className="payment-note">
                          <Shield size={14} />
                          You'll be redirected to Paytm's secure payment gateway after placing the order.
                        </p>
                      </div>
                    )}
                  </label>

                  <label className={`payment-card ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-card-content">
                      <div className="payment-card-icon cod">
                        <Banknote size={28} />
                      </div>
                      <div className="payment-card-info">
                        <h3>Cash on Delivery</h3>
                        <p>Pay when your order arrives at your doorstep</p>
                      </div>
                      <div className="payment-card-badge cod-badge">
                        <span>+₹50</span>
                      </div>
                    </div>
                    {formData.paymentMethod === 'cod' && (
                      <div className="payment-card-details">
                        <div className="cod-warning">
                          <AlertCircle size={16} />
                          <div>
                            <p><strong>COD Charges:</strong> An additional fee of ₹50 will be added to your order total.</p>
                            <p>Please keep the exact amount ready at the time of delivery.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </label>
                </div>

                {paymentError && (
                  <div className="payment-error-banner">
                    <AlertCircle size={18} />
                    <span>{paymentError}</span>
                  </div>
                )}

                <div className="form-actions">
                  <button onClick={handlePrevStep} className="btn btn-outline">
                    Back to Shipping
                  </button>
                  <button onClick={handleNextStep} className="btn btn-primary btn-lg">
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="form-section">
                <div className="section-header">
                  <h2>Review Your Order</h2>
                </div>

                <div className="order-review">
                  <div className="review-section">
                    <h3>Shipping Address</h3>
                    <div className="address-display">
                      <p><strong>{formData.firstName} {formData.lastName}</strong></p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} - {formData.pincode}</p>
                      <p>Phone: {formData.phone}</p>
                      <p>Email: {formData.email}</p>
                    </div>
                  </div>

                  <div className="review-section">
                    <h3>Payment Method</h3>
                    <div className="payment-display">
                      {formData.paymentMethod === 'online' && (
                        <div className="review-payment-badge">
                          <Wallet size={18} />
                          <span>Online Payment (UPI / Card / Net Banking)</span>
                        </div>
                      )}
                      {formData.paymentMethod === 'cod' && (
                        <div className="review-payment-badge">
                          <Banknote size={18} />
                          <span>Cash on Delivery (+₹50)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button onClick={handlePrevStep} className="btn btn-outline">
                    Back to Payment
                  </button>
                  <div className="checkout-action-buttons">
                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="btn btn-outline btn-lg"
                      disabled={paymentLoading}
                    >
                      Cancel Order
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className={`btn btn-primary btn-lg ${formData.paymentMethod === 'online' ? 'btn-pay-online' : ''}`}
                      disabled={paymentLoading}
                    >
                      {paymentLoading ? (
                        <><Loader size={18} className="spin-icon" /> Processing...</>
                      ) : formData.paymentMethod === 'online' ? (
                        <><Wallet size={18} /> Pay {formatPrice(total)} Online</>
                      ) : (
                        'Place Order (COD)'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="order-items">
                {items.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <div className="item-price">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-calculations">
                <div className="summary-row">
                  <span>Subtotal ({items.length} items)</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="free-shipping">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Tax (GST 18%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>

                {formData.paymentMethod === 'cod' && (
                  <div className="summary-row">
                    <span>COD Charges</span>
                    <span>₹50</span>
                  </div>
                )}

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{formatPrice(total + (formData.paymentMethod === 'cod' ? 50 : 0))}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
