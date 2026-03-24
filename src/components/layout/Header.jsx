import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { scrollToTop } from '../../lib/scrollToTop';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      scrollToTop();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
    scrollToTop();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleNavClick}>
            <div className="logo-text">
              <span className="logo-main">Siva Electronics</span>
              <span className="logo-sub">& Home Appliances</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
            <Link to="/shop" className="nav-link" onClick={scrollToTop}>Shop</Link>
            <div className="dropdown">
              <span className="nav-link dropdown-trigger">Categories</span>
              <div className="dropdown-menu">
                <Link to="/category/tv" className="dropdown-item" onClick={scrollToTop}>Televisions</Link>
                <Link to="/category/refrigerator" className="dropdown-item" onClick={scrollToTop}>Refrigerators</Link>
                <Link to="/category/washing-machine" className="dropdown-item" onClick={scrollToTop}>Washing Machines</Link>
                <Link to="/category/fan" className="dropdown-item" onClick={scrollToTop}>Fans</Link>
                <Link to="/category/stove" className="dropdown-item" onClick={scrollToTop}>Stoves</Link>
                <Link to="/category/iron-box" className="dropdown-item" onClick={scrollToTop}>Iron Box</Link>
                <Link to="/category/vacuum-cleaner" className="dropdown-item" onClick={scrollToTop}>Vacuum Cleaners</Link>
                <Link to="/category/air-purifier" className="dropdown-item" onClick={scrollToTop}>Air Purifiers</Link>
                <Link to="/category/blender" className="dropdown-item" onClick={scrollToTop}>Blenders</Link>
              </div>
            </div>
            <Link to="/about" className="nav-link" onClick={scrollToTop}>About</Link>
            <Link to="/contact" className="nav-link" onClick={scrollToTop}>Contact</Link>
          </nav>

          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Header Actions */}
          <div className="header-actions">
            <Link to="/favorites" className="favorites-link" onClick={scrollToTop}>
              <div className="favorites-icon-wrapper">
                <Heart size={24} />
              </div>
            </Link>

            <Link to="/cart" className="cart-link" onClick={scrollToTop}>
              <div className="cart-icon-wrapper">
                <ShoppingCart size={24} />
                {getCartItemsCount() > 0 && (
                  <span className="cart-badge">{getCartItemsCount()}</span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={handleNavClick}>Home</Link>
            <Link to="/shop" className="mobile-nav-link" onClick={handleNavClick}>Shop</Link>
            
            <div className="mobile-categories">
              <span className="mobile-nav-title">Categories</span>
              <Link to="/category/tv" className="mobile-nav-link" onClick={handleNavClick}>Televisions</Link>
              <Link to="/category/refrigerator" className="mobile-nav-link" onClick={handleNavClick}>Refrigerators</Link>
              <Link to="/category/washing-machine" className="mobile-nav-link" onClick={handleNavClick}>Washing Machines</Link>
              <Link to="/category/fan" className="mobile-nav-link" onClick={handleNavClick}>Fans</Link>
              <Link to="/category/stove" className="mobile-nav-link" onClick={handleNavClick}>Stoves</Link>
              <Link to="/category/iron-box" className="mobile-nav-link" onClick={handleNavClick}>Iron Box</Link>
              <Link to="/category/vacuum-cleaner" className="mobile-nav-link" onClick={handleNavClick}>Vacuum Cleaners</Link>
              <Link to="/category/air-purifier" className="mobile-nav-link" onClick={handleNavClick}>Air Purifiers</Link>
              <Link to="/category/blender" className="mobile-nav-link" onClick={handleNavClick}>Blenders</Link>
            </div>

            <Link to="/favorites" className="mobile-nav-link" onClick={handleNavClick}>Favorites</Link>
            <Link to="/about" className="mobile-nav-link" onClick={handleNavClick}>About</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={handleNavClick}>Contact</Link>
            <Link to="/support" className="mobile-nav-link" onClick={handleNavClick}>Support</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
