import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import BackButton from '../components/ui/BackButton';
import './PrivacyPolicy.css';

const ShippingPolicy = () => {
  useScrollToTop();

  return (
    <div className="policy-page">
      <div className="container">
        <BackButton />
        <div className="policy-header">
          <h1>Shipping Policy</h1>
          <p className="policy-subtitle">Fast and reliable delivery services</p>
          <p className="website-info">Visit us at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a></p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <p>
              At <strong>Siva Electronics & Home Appliances</strong>, we are committed to delivering your home appliances 
              and electronics securely and within the promised time frame. This Shipping Policy outlines our procedures 
              for order processing, delivery, charges, and customer support.
            </p>
          </section>

          <section className="policy-section">
            <h2>Order Processing Time</h2>
            <ul>
              <li>Orders are processed within 2–4 business days after payment confirmation.</li>
              <li>Orders placed on Sundays or public holidays are processed on the next working day.</li>
              <li>In the case of high-demand or out-of-stock products, customers will be notified with revised timelines or offered alternatives.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Shipping Destinations & Delivery Timelines</h2>
            <h3>Domestic Shipping (India)</h3>
            <ul>
              <li><strong>Metro Cities:</strong> 3–7 business days after dispatch</li>
              <li><strong>Non-Metro Cities:</strong> 5–10 business days after dispatch</li>
              <li><strong>Remote/Rural Areas:</strong> 7–12 business days after dispatch</li>
            </ul>
            
            <h3>International Shipping</h3>
            <p>
              At present, international shipping is not available. If launched in the future, 
              timelines and charges will be updated accordingly.
            </p>
          </section>

          <section className="policy-section">
            <h2>Shipping Charges</h2>
            <ul>
              <li>Shipping charges vary based on product category, weight, dimensions, and destination.</li>
              <li>Large appliances (e.g., refrigerators, washing machines, air conditioners) may incur special handling charges due to size and logistics.</li>
              <li>Free shipping offers may be available during promotions or for orders above a certain value.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Packaging & Handling</h2>
            <ul>
              <li>All appliances are packed in manufacturer-approved packaging to ensure safe transit.</li>
              <li>Fragile items (televisions, glass panels, electronics) are double-cushioned and clearly labeled.</li>
              <li>Customers are advised to check packaging at the time of delivery. If tampering or damage is visible, the delivery should be reported immediately.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Tracking Your Order</h2>
            <p>Once dispatched, you will receive:</p>
            <ul>
              <li>A tracking number via SMS/email</li>
              <li>A tracking link for real-time shipment updates</li>
            </ul>
            <p>Please allow 24–48 hours for tracking details to update after dispatch.</p>
          </section>

          <section className="policy-section">
            <h2>Installation & Assembly</h2>
            <ul>
              <li>For select appliances, installation/assembly is included and carried out by authorized technicians.</li>
              <li>Installation timelines may differ from delivery timelines, depending on technician availability.</li>
              <li>Customers will be informed at checkout whether installation is included or charged separately.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Delays & Exceptions</h2>
            <p>While we strive for prompt delivery, delays may occur due to:</p>
            <ul>
              <li>Courier/logistics disruptions</li>
              <li>Regional holidays or strikes</li>
              <li>Extreme weather or natural calamities</li>
              <li>Customer unavailability at the time of delivery</li>
            </ul>
            <p>In such cases, our support team will keep you informed and assist with rescheduling.</p>
          </section>

          <section className="policy-section">
            <h2>Need Help With Shipping?</h2>
            <p>For shipping-related questions, please contact:</p>
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

export default ShippingPolicy;
