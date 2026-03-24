import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Users, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { scrollToTop } from '../lib/scrollToTop';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="about-page">
      <div className="container">
        {/* Back Button */}
        <button onClick={handleBackClick} className="back-button">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* About Hero */}
        <div className="about-hero">
          <h1>About Siva Electronics & Home Appliances</h1>
          <p>Your trusted partner for premium electronics and home appliances since 2017</p>
          <div className="website-info">
            <p>Visit us online at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a></p>
          </div>
        </div>

        {/* Company Story */}
        <div className="company-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2017, Siva Electronics & Home Appliances has been serving customers with
              high-quality electronics and home appliances for several years. What started as a small
              family business has grown into one of the most trusted electronics retailers in the region.
            </p>
            <p>
              We believe in providing our customers with the latest technology at competitive prices,
              backed by exceptional customer service and comprehensive warranty support. Our commitment
              to quality and customer satisfaction has made us the preferred choice for thousands of
              happy customers.
            </p>
            <p>
              Over the years, we have built strong partnerships with leading brands like LG, Samsung,
              Whirlpool, Bosch, Panasonic, Sony, and many more. Our extensive product range covers
              everything from smart televisions and energy-efficient refrigerators to advanced washing
              machines and modern kitchen appliances.
            </p>
            <p>
              Our team of experienced professionals is dedicated to helping customers find the perfect
              appliances for their homes. We provide expert guidance, professional installation services,
              and comprehensive after-sales support to ensure complete customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h2>Why Choose Siva Electronics?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>🏆 Authorized Dealer</h3>
              <p>We are authorized dealers for all major brands, ensuring genuine products with valid warranties.</p>
            </div>
            <div className="feature-item">
              <h3>🚚 Free Delivery</h3>
              <p>Enjoy free delivery and installation services across the city for all major appliances.</p>
            </div>
            <div className="feature-item">
              <h3>🔧 Expert Installation</h3>
              <p>Our certified technicians provide professional installation and setup services.</p>
            </div>
            <div className="feature-item">
              <h3>💰 Best Prices</h3>
              <p>Competitive pricing with regular offers and discounts on premium appliances.</p>
            </div>
            <div className="feature-item">
              <h3>🛠️ Service Support</h3>
              <p>Comprehensive after-sales service and maintenance support for all products.</p>
            </div>
            <div className="feature-item">
              <h3>📞 24/7 Support</h3>
              <p>Round-the-clock customer support for any queries or technical assistance.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Values */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Award size={48} />
              <h3>Quality First</h3>
              <p>We only stock products from trusted brands that meet our high quality standards.</p>
            </div>
            <div className="value-card">
              <Users size={48} />
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. Your satisfaction is our priority.</p>
            </div>
            <div className="value-card">
              <Clock size={48} />
              <h3>Reliable Service</h3>
              <p>Fast delivery, professional installation, and prompt after-sales support.</p>
            </div>
            <div className="value-card">
              <MapPin size={48} />
              <h3>Local Expertise</h3>
              <p>Deep understanding of local needs and preferences with personalized service.</p>
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-content">
            <p>
              With over 8 years of experience in the electronics and home appliances industry,
              we have developed deep expertise across multiple product categories:
            </p>
            <div className="expertise-list">
              <div className="expertise-item">
                <h4>📺 Smart Televisions</h4>
                <p>Latest 4K, OLED, and QLED TVs from premium brands with smart features and streaming capabilities.</p>
              </div>
              <div className="expertise-item">
                <h4>❄️ Refrigerators</h4>
                <p>Energy-efficient single door, double door, and side-by-side refrigerators with advanced cooling technology.</p>
              </div>
              <div className="expertise-item">
                <h4>🧺 Washing Machines</h4>
                <p>Front load and top load washing machines with smart features, inverter technology, and water-saving options.</p>
              </div>
              <div className="expertise-item">
                <h4>🌀 Air Conditioners</h4>
                <p>Split and window ACs with inverter technology, energy star ratings, and smart connectivity features.</p>
              </div>
              <div className="expertise-item">
                <h4>🔥 Kitchen Appliances</h4>
                <p>Induction cooktops, mixer grinders, microwave ovens, and other modern kitchen solutions.</p>
              </div>
              <div className="expertise-item">
                <h4>🧹 Home Care</h4>
                <p>Vacuum cleaners, air purifiers, water purifiers, and other home maintenance appliances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To provide our customers with the best electronics and home appliances at competitive
              prices, backed by exceptional service and support that exceeds expectations. We strive
              to make modern technology accessible to every household while maintaining the highest
              standards of quality and customer satisfaction.
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To be the leading electronics retailer in the region, known for quality products,
              innovative solutions, and outstanding customer relationships. We envision a future
              where every home is equipped with the latest technology that enhances comfort,
              convenience, and quality of life.
            </p>
          </div>
        </div>

        {/* Customer Promise */}
        <div className="customer-promise">
          <h2>Our Promise to You</h2>
          <div className="promise-content">
            <p>
              At Siva Electronics & Home Appliances, we don't just sell products – we build lasting
              relationships with our customers. Our commitment goes beyond the point of sale.
              Browse our complete collection online at <a href="http://sivaappliances.shop/" target="_blank" rel="noopener noreferrer" className="website-link">sivaappliances.shop</a>:
            </p>
            <ul className="promise-list">
              <li>✅ <strong>Genuine Products:</strong> 100% authentic products with manufacturer warranties</li>
              <li>✅ <strong>Expert Guidance:</strong> Professional advice to help you choose the right appliance</li>
              <li>✅ <strong>Competitive Pricing:</strong> Best prices in the market with transparent pricing</li>
              <li>✅ <strong>Free Installation:</strong> Professional installation and setup at no extra cost</li>
              <li>✅ <strong>After-Sales Service:</strong> Comprehensive support and maintenance services</li>
              <li>✅ <strong>Customer Satisfaction:</strong> Your happiness is our top priority</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
