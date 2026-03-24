import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-main">Siva Electronics</span>
                <span className="logo-sub">& Home Appliances</span>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for premium electronics and home appliances.
              Quality products, competitive prices, and exceptional service since 2017.
            </p>

          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/support">Customer Support</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-links">
              <li><Link to="/category/tv">Televisions</Link></li>
              <li><Link to="/category/refrigerator">Refrigerators</Link></li>
              <li><Link to="/category/washing-machine">Washing Machines</Link></li>
              <li><Link to="/category/fan">Fans</Link></li>
              <li><Link to="/category/stove">Stoves</Link></li>
              <li><Link to="/category/iron">Iron Box</Link></li>
              <li><Link to="/category/vacuum-cleaner">Vacuum Cleaner</Link></li>
              <li><Link to="/category/air-purifier">Air Purifiers</Link></li>
              <li><Link to="/category/blender">Blenders</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 99436 91712 / +91 63837 91917</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>sivahomeappliances033@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Siva Electronics & Home Appliances. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/shipping">Shipping Policy</Link>
              <Link to="/cancellation">Cancellation & Refund</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
