import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart, Zap, Shield, Truck, Headphones } from 'lucide-react';
import { categories, getFeaturedProducts } from '../constants/products';
import ProductCard from '../components/ui/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-highlight">Wide Range of</span><br />
                <span className="hero-gradient-text">Large Appliances</span> to<br />
                Choose From
              </h1>
              <p className="hero-description">
                <span className="hero-tagline">Appliances Designed to Ease Your Life</span><br />
                Discover premium home appliances from trusted brands - refrigerators, 
                washing machines, air purifiers, and more for modern Indian homes.
              </p>
              <div className="hero-actions">
                <Link to="/category/refrigerator" className="btn btn-primary btn-lg">
                  Shop Appliances <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Learn More
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Brands</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5K+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="hero-appliances">
              <div className="appliances-showcase">
                <div className="appliance-row back-row">
                  <div className="appliance-item">
                    <img src="/Tv/Sony tv.jpg" alt="Sony Smart TV" />
                  </div>
                  <div className="appliance-item">
                    <img src="/Refrig/samsung ref.jpg" alt="Samsung Refrigerator" />
                  </div>
                  <div className="appliance-item">
                    <img src="/Refrig/lg ref.jpg" alt="LG Refrigerator" />
                  </div>
                  <div className="appliance-item">
                    <img src="/WM/lg washing.jpg" alt="LG Washing Machine" />
                  </div>
                </div>
                <div className="appliance-row front-row">
                  <div className="appliance-item">
                    <img src="/Refrig/whirlpool ref.jpg" alt="Whirlpool Refrigerator" />
                  </div>
                  <div className="appliance-item">
                    <img src="/Blender/cookwell.jpg" alt="Premium Mixer Grinder" />
                  </div>
                  <div className="appliance-item">
                    <img src="/vaccum/Inalsa Spruce.jpg" alt="Vacuum Cleaner" />
                  </div>
                  <div className="appliance-item">
                    <img src="/Stove/prestige.jpg" alt="Induction Cooktop" />
                  </div>
                  <div className="appliance-item">
                    <img src="/Air/Honeywall air.jpg" alt="Air Purifier" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Latest Technology</h3>
              <p>Cutting-edge electronics with the newest features and innovations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Warranty Protection</h3>
              <p>Comprehensive warranty coverage on all products for peace of mind</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3>Free Delivery</h3>
              <p>Fast and free delivery on orders above ₹2,000 across the city</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Headphones size={32} />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for all your queries and needs</p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked products with the best ratings and reviews</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/shop" className="btn btn-secondary btn-lg">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <h2>Special Festive Offers!</h2>
              <p>Get up to 30% off on selected home appliances. Limited time offer!</p>
            </div>
            <div className="promo-action">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Shop Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted Brands</h2>
            <p>We partner with the world's leading electronics manufacturers</p>
          </div>
          <div className="brands-grid">
            <div className="brand-item">
              <img src="/brand/lg logo.jpg" alt="LG" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/whirlpool logo.png" alt="Whirlpool" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/samsung logo.png" alt="Samsung" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/godrej logo.jpg" alt="Godrej" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/harvells logo.png" alt="Havells" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/prestige logo.png" alt="Prestige" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/preethi logo.jpg" alt="Preethi" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src="/brand/voltas logo.png" alt="Voltas" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
