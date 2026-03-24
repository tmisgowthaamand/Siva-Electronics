import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { highlightText } from '../../utils/highlightText';
import QuickViewModal from './QuickViewModal';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
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

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          {discount > 0 && (
            <div className="discount-badge">
              {discount}% OFF
            </div>
          )}
          <div className="product-overlay">
            <button className="quick-view-btn" onClick={handleQuickView}>
              <Eye size={16} />
              Quick View
            </button>
          </div>
        </div>
        
        <div className="product-info">
          <div className="product-brand">{highlightText(product.brand, searchQuery)}</div>
          <h3 className="product-name">{highlightText(product.name, searchQuery)}</h3>
          
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="product-pricing">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          
          <div className="product-stock">
            {product.inStock ? (
              <span className="in-stock">✓ In Stock</span>
            ) : (
              <span className="out-of-stock">✗ Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="product-actions">
        <button 
          className={`favorite-btn ${isFavorite(product.id) ? 'favorited' : ''}`}
          onClick={handleToggleFavorite}
          title={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={16} fill={isFavorite(product.id) ? 'currentColor' : 'none'} />
        </button>
        
        <button 
          className={`add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} />
          {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
      
      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />
    </div>
  );
};

export default ProductCard;
