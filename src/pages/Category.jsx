import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory, categories } from "../constants/products";
import ProductCard from "../components/ui/ProductCard";
import './Category.css';

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const products = getProductsByCategory(categoryId);
  const category = categories.find(cat => cat.id === categoryId);

  const handleBackClick = () => {
    navigate('/');
  };

  if (!category) {
    return (
      <div className="category-not-found">
        <div className="container">
          <h1>Category Not Found</h1>
          <p>The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <button className="back-button" onClick={handleBackClick}>
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="category-info">
            <div className="category-icon">{category.icon}</div>
            <div>
              <h1>{category.name}</h1>
              <p>{products.length} product{products.length !== 1 ? 's' : ''} available</p>
            </div>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">📦</div>
            <h3>No products available</h3>
            <p>We're working on adding products to this category. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
