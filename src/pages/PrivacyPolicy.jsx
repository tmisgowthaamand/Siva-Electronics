import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import BackButton from '../components/ui/BackButton';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <div className="policy-page">
      <div className="container">
        <BackButton />
        
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">Your privacy is important to us</p>
          <p className="website-info">Visit us at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a></p>
        </div>
        <p className="last-updated">Last Updated: August 2025</p>

        <div className="policy-content">
          <section className="policy-section">
            <p>
              At <strong>Siva Electronics & Home Appliances</strong>, we respect your trust and are committed to protecting your personal information. 
              As a retailer and service provider of home appliances and electronics, we ensure that all customer data is collected, 
              stored, and used responsibly—aligned with the Indian IT Act and international data protection principles such as GDPR.
            </p>
            <p>
              This Privacy Policy explains what data we collect, how we use it, how we safeguard it, and your rights as a valued customer.
            </p>
          </section>

          <section className="policy-section">
            <h2>Information We Collect</h2>
            <p>When you interact with us (online store, service requests, or in-store purchases), we may collect:</p>
            <ul>
              <li>Full Name</li>
              <li>Contact Information (phone number, email address)</li>
              <li>Billing & Shipping Address</li>
              <li>Order & Payment Details (via secure third-party gateways)</li>
              <li>Service/Repair Requests & Warranty Information</li>
              <li>Device & Browser Data (for website analytics)</li>
              <li>Cookies & Tracking Data (for personalized experiences)</li>
            </ul>
            <p>We collect only the information necessary to provide reliable products and services.</p>
          </section>

          <section className="policy-section">
            <h2>Why We Collect Your Information</h2>
            <p>Your data is used for legitimate business purposes, including:</p>
            <ul>
              <li>Processing orders and managing deliveries</li>
              <li>Handling installation, service, and warranty requests</li>
              <li>Providing updates on purchases, repairs, or support queries</li>
              <li>Sending optional promotional offers and product launches (with your consent)</li>
              <li>Improving our website, products, and customer experience</li>
              <li>Meeting legal, tax, and regulatory obligations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>How We Protect Your Information</h2>
            <p>We implement strong safeguards to ensure your data is protected at all times:</p>
            <ul>
              <li><strong>SSL Encryption</strong> for all online transactions</li>
              <li><strong>Secure Payment Gateways</strong> – we never store card or UPI details</li>
              <li><strong>Firewall & Access Controls</strong> on servers</li>
              <li><strong>Restricted Data Access</strong> – only authorized staff handle sensitive data</li>
              <li><strong>Periodic Audits</strong> to maintain compliance and security standards</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Your Rights & Choices</h2>
            <p>You have full control of your data. At any time, you may:</p>
            <ul>
              <li>Request a copy of your personal data held by us</li>
              <li>Ask for updates or corrections to your information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt out of promotional messages (email, SMS, WhatsApp)</li>
              <li>Raise concerns about data handling practices</li>
            </ul>
            <p>We aim to respond to verified requests within 30 days.</p>
          </section>

          <section className="policy-section">
            <h2>Third-Party Sharing</h2>
            <p>We do not sell or rent your personal information. Data may be shared only with:</p>
            <ul>
              <li>Courier/logistics partners (for delivery of appliances)</li>
              <li>Authorized service technicians (for repair & warranty)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Government/regulatory bodies (when legally required)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Policy Updates</h2>
            <p>
              This Privacy Policy may be updated from time to time to reflect changes in our business practices, 
              technology, or legal requirements. The revised version will always be available on our website 
              with the updated "Last Revised" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>For questions, concerns, or privacy requests, please contact:</p>
            <div className="contact-details">
              <p><strong>Siva Electronics & Home Appliances</strong></p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 99436 91712 / +91 63837 91917</p>
              <p>📧 Email: sivahomeappliances033@gmail.com</p>
              <p>📧 Customer Support: contact@sivaappliances.shop</p>
              <p>🌐 Website: <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer">http://sivaappliances.shop/</a></p>
            </div>
            <p className="copyright-notice">© 2025 Siva Electronics & Home Appliances. All Rights Reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
