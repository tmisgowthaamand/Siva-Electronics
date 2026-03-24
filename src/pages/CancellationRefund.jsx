import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import BackButton from '../components/ui/BackButton';
import './PrivacyPolicy.css';

const CancellationRefund = () => {
  useScrollToTop();

  return (
    <div className="policy-page">
      <div className="container">
        <BackButton />
        <div className="policy-header">
          <h1>Cancellation & Refund Policy</h1>
          <p className="policy-subtitle">Flexible cancellation and hassle-free refunds</p>
          <p className="website-info">Visit us at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a></p>
        </div>
        <p className="last-updated">Last Updated: August 2025</p>

        <div className="policy-content">
          <section className="policy-section">
            <p>
              At <strong>Siva Electronics & Home Appliances</strong>, customer satisfaction is our priority. 
              While we strive to deliver high-quality appliances and services, we understand that cancellations 
              or refunds may occasionally be required. This policy outlines how we handle such requests in a 
              clear and transparent manner.
            </p>
          </section>

          <section className="policy-section">
            <h2>Order Cancellations</h2>
            <h3>Cancellation Window:</h3>
            <ul>
              <li>Orders can be cancelled within 2 hours of purchase, provided they have not yet been processed, packed, or dispatched.</li>
              <li>Once an order has been shipped or handed over to the courier, cancellations are no longer possible.</li>
              <li>To cancel an order, customers must contact our support team with their Order ID.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Returns & Replacements</h2>
            <p>We accept returns or offer replacements in the following situations:</p>
            <ul>
              <li>Product received is damaged in transit.</li>
              <li>Wrong item delivered.</li>
              <li>Verified manufacturing defects within warranty terms.</li>
            </ul>
            
            <h3>Conditions for Returns:</h3>
            <ul>
              <li>Return requests must be raised within 48 hours of delivery.</li>
              <li>The product must be unused, with all original packaging, manuals, and accessories intact.</li>
              <li>Installation-based appliances (e.g., ACs, washing machines) must not be uninstalled without authorization from Siva Electronics & Home Appliances or the manufacturer.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Non-Returnable Items</h2>
            <p>We cannot accept returns/refunds for:</p>
            <ul>
              <li>Products damaged due to customer misuse, negligence, or unauthorized installation.</li>
              <li>Items without original packaging or invoice.</li>
              <li>Opened consumables or accessories (filters, batteries, etc.).</li>
              <li>Custom orders or special bulk requests.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Refund Process</h2>
            <ul>
              <li>Once approved, refunds are initiated within 3–5 business days.</li>
              <li>Refunds are processed via the original payment method (UPI, bank transfer, card, etc.).</li>
              <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
              <li>In certain cases, refunds may be issued as store credit or replacement based on customer preference.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Warranty & Service Claims</h2>
            <ul>
              <li>Most appliances come with a manufacturer's warranty. Warranty claims must be processed directly with the authorized service center.</li>
              <li>For installation or service issues handled by Siva Electronics & Home Appliances, customers can reach out to our support team for assistance.</li>
              <li>Refunds are not applicable for issues covered under warranty but will be handled through repair/replacement as per manufacturer policy.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Exceptions</h2>
            <p>Refunds/cancellations are not applicable in cases of:</p>
            <ul>
              <li>Delays caused by logistics/courier providers beyond our control.</li>
              <li>Customer unavailability during scheduled delivery/installation.</li>
              <li>Price fluctuations after order placement.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Need Help?</h2>
            <p>For cancellation, return, or refund assistance, please contact:</p>
            <div className="contact-details">
              <p><strong>Siva Electronics & Home Appliances</strong></p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 99436 91712 / +91 63837 91917</p>
              <p>📧 Email: sivahomeappliances033@gmail.com</p>
              <p>📧 Customer Support: contact@sivaappliances.shop</p>
              <p>🌐 Website: <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer">http://sivaappliances.shop/</a></p>
              <p><strong>Our team is available Mon–Sat, 10 AM – 7 PM IST.</strong></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefund;
