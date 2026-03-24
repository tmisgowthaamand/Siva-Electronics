import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Last updated: December 2024</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="terms-section">
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Siva Electronics & Home Appliances' website for personal, non-commercial transitory viewing only.</p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Product Information</h2>
            <p>We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
          </section>

          <section className="terms-section">
            <h2>Pricing and Payment</h2>
            <ul>
              <li>All prices are subject to change without notice</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Payment must be received before products are shipped</li>
              <li>We accept various payment methods as displayed during checkout</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Shipping and Delivery</h2>
            <ul>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss passes to you upon delivery</li>
              <li>We are not responsible for delays caused by shipping carriers</li>
              <li>Additional charges may apply for remote locations</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Returns and Refunds</h2>
            <p>Please refer to our Return Policy for detailed information about returns, exchanges, and refunds.</p>
          </section>

          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>In no event shall Siva Electronics & Home Appliances or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
          </section>

          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India.</p>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
            <p>Email: sivahomeappliances033@gmail.com<br />Phone: +91 99436 91712</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
