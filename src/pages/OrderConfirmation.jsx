import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar, Download, ArrowRight } from 'lucide-react';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Get order data from localStorage
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };


  const getEstimatedDelivery = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3); // 3 days from now
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!orderData) {
    return (
      <div className="order-confirmation">
        <div className="container">
          <div className="no-order">
            <h1>No Order Found</h1>
            <p>We couldn't find your order details.</p>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const orderId = orderData.orderId || 'SE' + Date.now().toString().slice(-8);
  const estimatedDelivery = orderData.estimatedDelivery ? 
    new Date(orderData.estimatedDelivery).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : getEstimatedDelivery();

  return (
    <div className="order-confirmation">
      <div className="container">
        {/* Success Header */}
        <div className="success-header">
          <div className="success-icon">
            <CheckCircle size={64} />
          </div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase. Your order has been successfully placed.</p>
        </div>

        {/* Order Details */}
        <div className="order-details">
          <div className="order-info-card">
            <div className="order-header">
              <h2>Order Details</h2>
              <div className="order-id">Order ID: <strong>{orderId}</strong></div>
            </div>

            <div className="order-timeline">
              <div className="timeline-item active">
                <div className="timeline-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="timeline-content">
                  <h4>Order Confirmed</h4>
                  <p>Your order has been received and confirmed</p>
                  <span className="timeline-time">Just now</span>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">
                  <Package size={20} />
                </div>
                <div className="timeline-content">
                  <h4>Processing</h4>
                  <p>We're preparing your items for shipment</p>
                  <span className="timeline-time">Within 24 hours</span>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">
                  <Truck size={20} />
                </div>
                <div className="timeline-content">
                  <h4>Shipped</h4>
                  <p>Your order is on its way to you</p>
                  <span className="timeline-time">1-2 days</span>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon">
                  <Calendar size={20} />
                </div>
                <div className="timeline-content">
                  <h4>Delivered</h4>
                  <p>Estimated delivery date</p>
                  <span className="timeline-time">{estimatedDelivery}</span>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="info-section">
              <h3>Shipping Address</h3>
              <div className="address-info">
                <p><strong>{orderData.shippingInfo.firstName} {orderData.shippingInfo.lastName}</strong></p>
                <p>{orderData.shippingInfo.address}</p>
                <p>{orderData.shippingInfo.city}, {orderData.shippingInfo.state} - {orderData.shippingInfo.pincode}</p>
                <p>Phone: {orderData.shippingInfo.phone}</p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="info-section">
              <h3>Payment Method</h3>
              <div className="payment-info">
                {orderData.paymentMethod === 'online' && <p>Online Payment (Paytm)</p>}
                {orderData.paymentMethod === 'card' && <p>Credit/Debit Card</p>}
                {orderData.paymentMethod === 'upi' && <p>UPI Payment</p>}
                {orderData.paymentMethod === 'cod' && <p>Cash on Delivery</p>}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            
            <div className="ordered-items">
              {orderData.items.map((item) => (
                <div key={item.id} className="ordered-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>{item.brand}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(orderData.total - (orderData.total * 0.18) - (orderData.paymentMethod === 'cod' ? 50 : 0))}</span>
              </div>
              <div className="summary-row">
                <span>Tax (GST 18%)</span>
                <span>{formatPrice(orderData.total * 0.18)}</span>
              </div>
              {orderData.paymentMethod === 'cod' && (
                <div className="summary-row">
                  <span>COD Charges</span>
                  <span>₹50</span>
                </div>
              )}
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total Paid</span>
                <span>{formatPrice(orderData.total)}</span>
              </div>
            </div>

            <div className="order-actions">
              <button className="btn btn-outline">
                <Download size={16} />
                Download Invoice
              </button>
              <Link to="/shop" className="btn btn-primary">
                Continue Shopping
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-info">
          <div className="info-card">
            <h3>What's Next?</h3>
            <ul>
              <li>You'll receive an email confirmation shortly</li>
              <li>We'll send you tracking information once your order ships</li>
              <li>Your items will be delivered within 3-5 business days</li>
              <li>Contact us if you have any questions about your order</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Need Help?</h3>
            <p>If you have any questions about your order, please contact our customer support team.</p>
            <div className="contact-options">
              <Link to="/contact" className="contact-link">
                📧 Contact Support
              </Link>
              <a href="tel:+919876543210" className="contact-link">
                📞 Call Us: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
