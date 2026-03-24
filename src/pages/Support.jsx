import React, { useState, useEffect } from 'react';
import { HelpCircle, MessageCircle, Phone, Mail, FileText, Shield, RotateCcw, Wrench } from 'lucide-react';
import { scrollToTop } from '../lib/scrollToTop';
import './Support.css';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');

  useEffect(() => {
    scrollToTop();
  }, []);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products. Items must be in original condition with all accessories and packaging. Please contact our support team to initiate a return."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for major appliances like refrigerators, washing machines, and air conditioners. Installation charges may apply based on the product and location."
    },
    {
      question: "What warranty do you offer on products?",
      answer: "All products come with manufacturer warranty. Additionally, we provide extended warranty options for most products. Warranty terms vary by product and manufacturer."
    },
    {
      question: "Do you offer EMI options?",
      answer: "Yes, we offer EMI options through various banks and financial institutions. You can choose from 3, 6, 9, 12, 18, and 24-month EMI plans with competitive interest rates."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can use this number to track your order on our website or the courier partner's website."
    },
    {
      question: "What if I receive a damaged product?",
      answer: "If you receive a damaged product, please contact us immediately with photos of the damage. We'll arrange for a replacement or refund as per our damage policy."
    }
  ];

  return (
    <div className="support-page">
      <div className="container">
        {/* Page Header */}
        <div className="support-header">
          <h1>Customer Support</h1>
          <p>We're here to help you with any questions or concerns</p>
        </div>

        {/* Support Options */}
        <div className="support-options">
          <div className="support-option">
            <div className="option-icon">
              <Phone size={32} />
            </div>
            <h3>Call Support</h3>
            <p>Speak directly with our support team</p>
            <div className="option-details">
              <strong>+91 99436 91712</strong>
              <strong>+91 63837 91917</strong>
              <span>Mon-Sat: 9 AM - 8 PM</span>
            </div>
          </div>

          <div className="support-option">
            <div className="option-icon">
              <MessageCircle size={32} />
            </div>
            <h3>Live Chat</h3>
            <p>Get instant help through live chat</p>
            <button className="btn btn-primary">Start Chat</button>
          </div>

          <div className="support-option">
            <div className="option-icon">
              <Mail size={32} />
            </div>
            <h3>Email Support</h3>
            <p>Send us your queries via email</p>
            <div className="option-details">
              <strong>sivahomeappliances033@gmail.com</strong>
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Support Content */}
        <div className="support-content">
          <div className="support-tabs">
            <button 
              className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              <HelpCircle size={20} />
              FAQ
            </button>
            <button 
              className={`tab-btn ${activeTab === 'warranty' ? 'active' : ''}`}
              onClick={() => setActiveTab('warranty')}
            >
              <Shield size={20} />
              Warranty
            </button>
            <button 
              className={`tab-btn ${activeTab === 'returns' ? 'active' : ''}`}
              onClick={() => setActiveTab('returns')}
            >
              <RotateCcw size={20} />
              Returns
            </button>
            <button 
              className={`tab-btn ${activeTab === 'service' ? 'active' : ''}`}
              onClick={() => setActiveTab('service')}
            >
              <Wrench size={20} />
              Service
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'faq' && (
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="warranty-section">
                <h2>Warranty Information</h2>
                <div className="warranty-content">
                  <div className="warranty-card">
                    <h3>Manufacturer Warranty</h3>
                    <ul>
                      <li>All products come with manufacturer warranty</li>
                      <li>Warranty period varies by product (1-5 years)</li>
                      <li>Covers manufacturing defects and component failures</li>
                      <li>Free repair or replacement during warranty period</li>
                    </ul>
                  </div>
                  
                  <div className="warranty-card">
                    <h3>Extended Warranty</h3>
                    <ul>
                      <li>Additional protection beyond manufacturer warranty</li>
                      <li>Available for most products at purchase</li>
                      <li>Covers accidental damage and wear & tear</li>
                      <li>On-site service for major appliances</li>
                    </ul>
                  </div>
                  
                  <div className="warranty-card">
                    <h3>Warranty Claims</h3>
                    <ul>
                      <li>Contact our support team to initiate a claim</li>
                      <li>Provide purchase receipt and product details</li>
                      <li>Our technician will diagnose the issue</li>
                      <li>Free repair or replacement if covered</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'returns' && (
              <div className="returns-section">
                <h2>Returns & Refunds</h2>
                <div className="returns-content">
                  <div className="return-policy">
                    <h3>Return Policy</h3>
                    <ul>
                      <li><strong>30-day return window:</strong> Items can be returned within 30 days of purchase</li>
                      <li><strong>Original condition:</strong> Products must be unused and in original packaging</li>
                      <li><strong>All accessories:</strong> Include all accessories, manuals, and warranty cards</li>
                      <li><strong>Return shipping:</strong> Free return pickup for defective items</li>
                    </ul>
                  </div>
                  
                  <div className="return-process">
                    <h3>Return Process</h3>
                    <ol>
                      <li>Contact our support team with your order details</li>
                      <li>Provide reason for return and any relevant photos</li>
                      <li>Receive return authorization and pickup details</li>
                      <li>Pack the item securely with all accessories</li>
                      <li>Hand over to our pickup partner</li>
                      <li>Refund processed within 5-7 business days</li>
                    </ol>
                  </div>
                  
                  <div className="non-returnable">
                    <h3>Non-Returnable Items</h3>
                    <ul>
                      <li>Personalized or customized products</li>
                      <li>Products damaged due to misuse</li>
                      <li>Items without original packaging</li>
                      <li>Products beyond 30-day return window</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'service' && (
              <div className="service-section">
                <h2>Service & Maintenance</h2>
                <div className="service-content">
                  <div className="service-card">
                    <h3>Installation Services</h3>
                    <p>Professional installation for major appliances:</p>
                    <ul>
                      <li>Refrigerators and freezers</li>
                      <li>Washing machines and dryers</li>
                      <li>Air conditioners</li>
                      <li>Water heaters and geysers</li>
                      <li>Built-in kitchen appliances</li>
                    </ul>
                  </div>
                  
                  <div className="service-card">
                    <h3>Repair Services</h3>
                    <p>Expert repair services for all brands:</p>
                    <ul>
                      <li>Authorized service centers</li>
                      <li>Genuine spare parts</li>
                      <li>Trained technicians</li>
                      <li>On-site and workshop repairs</li>
                      <li>Post-repair warranty</li>
                    </ul>
                  </div>
                  
                  <div className="service-card">
                    <h3>Annual Maintenance</h3>
                    <p>Keep your appliances running efficiently:</p>
                    <ul>
                      <li>Preventive maintenance plans</li>
                      <li>Regular cleaning and servicing</li>
                      <li>Performance optimization</li>
                      <li>Priority service support</li>
                      <li>Discounted repair charges</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="contact-support">
          <div className="contact-card">
            <h3>Still Need Help?</h3>
            <p>Can't find what you're looking for? Our support team is ready to assist you.</p>
            <div className="contact-actions">
              <a href="tel:+919943691712" className="btn btn-primary">
                <Phone size={16} />
                Call Now
              </a>
              <a href="mailto:sivahomeappliances033@gmail.com" className="btn btn-outline">
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
