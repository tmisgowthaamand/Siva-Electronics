import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { scrollToTop } from "../lib/scrollToTop";
import './Favorites.css';

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="container">
          <button className="back-button" onClick={handleBackClick}>
            <ArrowLeft size={20} />
            Back
          </button>
          
          <div className="favorites-header">
            <h1>My Favorites</h1>
            <p>Your wishlist of favorite products</p>
          </div>

          <div className="empty-favorites">
            <Heart size={64} className="empty-heart" />
            <h2>No favorites yet</h2>
            <p>Start adding products to your favorites to see them here.</p>
            <Link to="/shop" className="shop-button">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <button className="back-button" onClick={handleBackClick}>
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="favorites-header">
          <h1>My Favorites</h1>
          <p>Your wishlist of favorite products ({favorites.length} items)</p>
        </div>

        <div className="favorites-grid">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-card">
              <div className="favorite-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="favorite-content">
                <h3 className="favorite-name">{product.name}</h3>
                <p className="favorite-brand">{product.brand}</p>
                <div className="favorite-price">₹{product.price.toLocaleString()}</div>
                
                {product.originalPrice && (
                  <div className="favorite-original-price">
                    ₹{product.originalPrice.toLocaleString()}
                  </div>
                )}
                
                <div className="favorite-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">({product.rating})</span>
                </div>
              </div>
              
              <div className="favorite-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                
                <button 
                  className="remove-favorite-btn"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  <Heart size={18} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
