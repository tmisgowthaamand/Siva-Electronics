import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { products, categories, brands } from '../constants/products';
import ProductCard from '../components/ui/ProductCard';
import QuickViewModal from '../components/ui/QuickViewModal';
import './Shop.css';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    priceRange: [0, 100000],
    rating: 0,
    inStock: false
  });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => {
        const searchTerms = [
          product.name.toLowerCase(),
          product.brand.toLowerCase(),
          product.category.toLowerCase().replace('-', ' '), // Convert 'vacuum-cleaner' to 'vacuum cleaner'
          product.description.toLowerCase(),
          ...product.features.map(feature => feature.toLowerCase()),
          ...Object.values(product.specifications || {}).map(spec => spec.toString().toLowerCase())
        ];
        
        // Check if any search term contains the query
        return searchTerms.some(term => term.includes(query)) ||
               // Also check if the query matches category names from the categories array
               categories.some(cat => cat.name.toLowerCase().includes(query) && cat.id === product.category);
      });
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply brand filter
    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    // Apply price range filter
    filtered = filtered.filter(product => {
      const price = product.price;
      const minPrice = filters.priceRange[0];
      const maxPrice = filters.priceRange[1];
      return price >= minPrice && price <= maxPrice;
    });

    // Apply rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating);
    }

    // Apply stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchParams, filters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handlePriceRangeChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], value]
    }));
  };

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setFilters(prev => ({
      ...prev,
      priceRange: [value, prev.priceRange[1]]
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      priceRange: [0, 100000],
      rating: 0,
      inStock: false
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const searchQuery = searchParams.get('search');

  return (
    <div className="shop">
      <div className="container">
        {/* Page Header */}
        <div className="shop-header">
          <div className="shop-title-section">
            <h1>
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
            </h1>
            <p className="results-count">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="shop-controls">
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
            
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="shop-content">
          {/* Sidebar Filters */}
          <aside className={`shop-sidebar ${showFilters ? 'show-filters' : ''}`}>
            <div className="filters">
              <div className="filters-header">
                <h3>Filters</h3>
                <button onClick={clearFilters} className="clear-filters">
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h4>Category</h4>
                <select 
                  value={filters.category} 
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <h4>Brand</h4>
                <select 
                  value={filters.brand} 
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-range">
                  <div className="price-inputs">
                    <div className="price-input-group">
                      <label>Min Price</label>
                      <input
                        type="number"
                        min="0"
                        max="100000"
                        step="1000"
                        value={filters.priceRange[0]}
                        onChange={handleMinPriceChange}
                        className="price-input"
                        placeholder="₹0"
                      />
                    </div>
                    <div className="price-input-group">
                      <label>Max Price</label>
                      <input
                        type="number"
                        min="0"
                        max="100000"
                        step="1000"
                        value={filters.priceRange[1]}
                        onChange={handlePriceRangeChange}
                        className="price-input"
                        placeholder="₹100,000"
                      />
                    </div>
                  </div>
                  <div className="price-slider-container">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={filters.priceRange[1]}
                      onChange={handlePriceRangeChange}
                      className="price-slider"
                    />
                  </div>
                  <div className="price-labels">
                    <span>{formatPrice(filters.priceRange[0])}</span>
                    <span>{formatPrice(filters.priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="filter-group">
                <h4>Minimum Rating</h4>
                <div className="rating-filters">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="rating-filter">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={filters.rating === rating}
                        onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
                      />
                      <span className="rating-text">
                        {rating}+ ⭐
                      </span>
                    </label>
                  ))}
                  <label className="rating-filter">
                    <input
                      type="radio"
                      name="rating"
                      value={0}
                      checked={filters.rating === 0}
                      onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
                    />
                    <span className="rating-text">All Ratings</span>
                  </label>
                </div>
              </div>

              {/* Stock Filter */}
              <div className="filter-group">
                <label className="checkbox-filter">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="shop-main">
            {filteredProducts.length > 0 ? (
              <div className={`products-container ${viewMode}`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <div className="no-products-icon">📦</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
