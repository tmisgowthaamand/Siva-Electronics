import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Star, ShoppingCart, Eye, ArrowLeft } from 'lucide-react';
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './QuickViewModal.css';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} fill="currentColor" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={14} fill="currentColor" style={{ opacity: 0.5 }} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={14} />);
    }

    return stars;
  };

  const discount = calculateDiscount();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBack = (e) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <div className="quick-view-modal-overlay" onClick={handleBackdropClick}>
      <div className="quick-view-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-buttons">
          <button className="modal-back-btn" onClick={handleBack}>
            <ArrowLeft size={20} />
            Back
          </button>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="modal-image-section">
            <div className="modal-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="modal-product-image"
              />
              {discount > 0 && (
                <div className="modal-discount-badge">
                  {discount}% OFF
                </div>
              )}
            </div>
          </div>

          <div className="modal-info-section">
            <div className="modal-product-brand">{product.brand}</div>
            <h2 className="modal-product-name">{product.name}</h2>

            <div className="modal-product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="modal-product-pricing">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <div className="modal-product-stock">
              {product.inStock ? (
                <span className="in-stock">✓ In Stock</span>
              ) : (
                <span className="out-of-stock">✗ Out of Stock</span>
              )}
            </div>

            <div className="modal-product-description">
              <p>{product.description}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="modal-product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-actions">
              <button
                className={`modal-add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={16} />
                {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>

              <Link
                to={`/product/${product.id}`}
                className="modal-view-details-btn"
                onClick={onClose}
              >
                <Eye size={16} />
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default QuickViewModal;
