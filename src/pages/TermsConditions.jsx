import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import BackButton from '../components/ui/BackButton';
import './PrivacyPolicy.css';

const TermsConditions = () => {
  useScrollToTop();

  return (
    <div className="policy-page">
      <div className="container">
        <BackButton />
        <div className="policy-header">
          <h1>Terms & Conditions</h1>
          <p className="policy-subtitle">Please read these terms carefully</p>
          <p className="website-info">Visit us at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a></p>
          <p className="last-updated">Last Updated: August 2025</p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <p>
              Welcome to <strong>Siva Electronics & Home Appliances</strong>. By accessing our website, purchasing our products, 
              or booking our services, you agree to the following Terms & Conditions. These terms govern all sales, services, 
              warranties, and interactions with Siva Electronics & Home Appliances.
            </p>
            <p>
              If you do not agree with these terms, we recommend you discontinue use of our services.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. General Use of Website & Services</h2>
            <ul>
              <li>By using our services, you confirm that you are at least 18 years old or using under the supervision of a parent/guardian.</li>
              <li>You agree to provide accurate, complete details when placing orders or booking services.</li>
              <li>Any misuse, fraudulent activity, or violation of these terms may result in suspension of service.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. Products & Pricing</h2>
            <ul>
              <li>We offer a wide range of home appliances and electronics, including but not limited to refrigerators, washing machines, air conditioners, televisions, and small appliances.</li>
              <li>Product descriptions and specifications are displayed as accurately as possible. Minor differences (e.g., design/color variations due to lighting or screen settings) may occur.</li>
              <li>Prices are listed in Indian Rupees (INR ₹) and may change due to market fluctuations or policy updates without prior notice.</li>
              <li>We reserve the right to correct errors in product listings, descriptions, or pricing, even after orders are placed.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Orders & Payments</h2>
            <ul>
              <li>Orders are confirmed only upon successful payment.</li>
              <li>We accept payments via UPI, debit/credit cards, net banking, wallets, and EMI (if applicable).</li>
              <li>We do not store payment details; transactions are processed securely by verified third-party gateways.</li>
              <li>In case of payment errors, duplicates, or discrepancies, please contact our support team immediately.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Shipping & Delivery</h2>
            <ul>
              <li>We ship products across India using trusted courier/logistics providers.</li>
              <li>Estimated delivery times are provided at checkout but may vary depending on location and product availability.</li>
              <li>Tracking details will be shared once an order is dispatched.</li>
              <li>Siva Electronics & Home Appliances is not liable for delivery delays caused by third-party logistics, weather, or unforeseen events.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Installation, Warranty & Service</h2>
            <ul>
              <li>Select products include installation services, which may be provided by Siva Electronics & Home Appliances or the manufacturer's authorized team.</li>
              <li>Warranty terms vary by product and manufacturer and will be communicated at the time of purchase.</li>
              <li>Warranty does not cover damage due to misuse, improper installation (if done by non-authorized personnel), or unauthorized repairs.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Cancellations & Returns</h2>
            <p>Orders may be cancelled within 2 hours of purchase, provided the product has not yet been shipped.</p>
            <p>Returns are accepted only for:</p>
            <ul>
              <li>Damaged products received</li>
              <li>Incorrect products shipped</li>
              <li>Verified manufacturing defects</li>
            </ul>
            <p>For detailed procedures, refer to our Cancellation & Refund Policy.</p>
          </section>

          <section className="policy-section">
            <h2>7. User Responsibilities</h2>
            <p>By engaging with Siva Electronics & Home Appliances, you agree not to:</p>
            <ul>
              <li>Provide false or misleading order/service information</li>
              <li>Tamper with products or misuse warranty claims</li>
              <li>Copy, reproduce, or misuse our content, branding, or trademarks</li>
              <li>Circumvent our payment or order systems for fraudulent purposes</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Intellectual Property</h2>
            <p>
              All content on our website—including product images, descriptions, logos, and branding—is the intellectual property 
              of Siva Electronics & Home Appliances. Unauthorized reproduction or commercial use is prohibited.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Limitation of Liability</h2>
            <p>Siva Electronics & Home Appliances is not liable for:</p>
            <ul>
              <li>Indirect or incidental damages arising from product use</li>
              <li>Delays in delivery or installation caused by third parties</li>
              <li>Product issues resulting from misuse, neglect, or unauthorized alterations</li>
            </ul>
            <p>Our liability is limited to the value of the product/service purchased.</p>
          </section>

          <section className="policy-section">
            <h2>10. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any disputes will fall under the 
              jurisdiction of the courts in Tamil Nadu.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Contact Us</h2>
            <p>For queries, assistance, or clarifications, please contact:</p>
            <div className="contact-details">
              <p><strong>Siva Electronics & Home Appliances</strong></p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 99436 91712 / +91 63837 91917</p>
              <p>📧 Email: sivahomeappliances033@gmail.com</p>
              <p>📧 Customer Support: contact@sivaappliances.shop</p>
              <p>🌐 Website: <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer">http://sivaappliances.shop/</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
