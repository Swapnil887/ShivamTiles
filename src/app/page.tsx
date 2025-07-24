"use client";

import { useState } from "react";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Star,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import ProductComparison from "./components/ProductComparison";
import { products, categories } from "./data/products";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [compareItems, setCompareItems] = useState<number[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  const toggleCompare = (productId: number) => {
    setCompareItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCompareClick = () => {
    setIsComparisonOpen(true);
  };

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => {
      const newCart = [...prev, productId];
      return newCart;
    });
    alert("Product added to cart!");
  };

  const handleAddToWishlist = (productId: number) => {
    setWishlistItems(prev => {
      const newWishlist = prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      return newWishlist;
    });
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    // Scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewCatalog = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = selectedCategory === "All" 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products.filter(product => 
        product.category === selectedCategory &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         product.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );



  const productsToCompare = products.filter(product => compareItems.includes(product.id));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Logo */}
            <div style={{ 
              fontSize: window.innerWidth < 768 ? '20px' : '24px', 
              fontWeight: 'bold', 
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              Shivam Tiles
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div style={{ 
              flex: 1, 
              maxWidth: '400px', 
              margin: window.innerWidth >= 768 ? '0 2rem' : '0 1rem', 
              position: 'relative',
              display: window.innerWidth < 768 ? 'none' : 'block'
            }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Search for tiles, sanitary products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '12px 12px 12px 40px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav style={{ 
              display: window.innerWidth >= 768 ? 'flex' : 'none', 
              alignItems: 'center', 
              gap: '2rem' 
            }}>
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Categories
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Products
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Contact
              </button>
            </nav>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button style={{ padding: '8px', color: '#374151' }}>
                <Heart size={20} />
              </button>
              <button style={{ padding: '8px', color: '#374151', position: 'relative' }}>
                <ShoppingCart size={20} />
                <span style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  right: '-4px', 
                  backgroundColor: '#ef4444', 
                  color: 'white', 
                  fontSize: '12px', 
                  borderRadius: '50%', 
                  height: '20px', 
                  width: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {cartItems.length}
                </span>
              </button>
              <button style={{ padding: '8px', color: '#374151' }}>
                <User size={20} />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ 
                  display: window.innerWidth < 768 ? 'block' : 'none', 
                  padding: '8px', 
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          <div style={{ 
            display: window.innerWidth < 768 ? (isMenuOpen ? 'block' : 'none') : 'none',
            marginBottom: '16px'
          }}>
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Search for tiles, sanitary products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '12px 12px 12px 40px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <div style={{ 
            display: window.innerWidth < 768 && isMenuOpen ? 'block' : 'none',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '16px',
            paddingBottom: '16px'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  color: '#374151', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                Categories
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  color: '#374151', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                Products
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  color: '#374151', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                About
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  color: '#374151', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%)',
        padding: window.innerWidth < 768 ? '40px 0' : '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ 
            fontSize: window.innerWidth < 768 ? '32px' : '48px', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Premium <span style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tiles</span> & 
            <br />
            <span style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sanitary Products</span>
          </h1>
          <p style={{ 
            fontSize: window.innerWidth < 768 ? '16px' : '20px', 
            color: '#6b7280', 
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto'
          }}>
            Discover the finest collection of tiles and sanitary products. Quality materials, 
            beautiful designs, and exceptional service at Shivam Tiles.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row'
          }}>
            <button 
              onClick={handleExploreProducts}
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: window.innerWidth < 768 ? '16px 24px' : '12px 24px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: window.innerWidth < 768 ? '18px' : '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                width: window.innerWidth < 768 ? '100%' : 'auto'
              }}
            >
              Explore Products
            </button>
            <button 
              onClick={handleViewCatalog}
              style={{
                background: 'white',
                color: '#374151',
                padding: window.innerWidth < 768 ? '16px 24px' : '12px 24px',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: window.innerWidth < 768 ? '18px' : '16px',
                cursor: 'pointer',
                width: window.innerWidth < 768 ? '100%' : 'auto'
              }}
            >
              View Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" style={{ padding: window.innerWidth < 768 ? '40px 0' : '64px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: window.innerWidth < 768 ? '32px' : '48px' }}>
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? '24px' : '32px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '16px' 
            }}>
              Shop by Category
            </h2>
            <p style={{ 
              color: '#6b7280', 
              fontSize: window.innerWidth < 768 ? '16px' : '18px' 
            }}>
              Find the perfect tiles and sanitary products for your needs
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? 'repeat(2, 1fr)' 
              : 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: window.innerWidth < 768 ? '16px' : '24px' 
          }}>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: window.innerWidth < 768 ? '16px' : '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  ...(selectedCategory === category.name && {
                    borderColor: '#3b82f6',
                    backgroundColor: '#eff6ff'
                  })
                }}
              >
                <div style={{ 
                  fontSize: window.innerWidth < 768 ? '32px' : '48px', 
                  marginBottom: '12px' 
                }}>{category.icon}</div>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '4px',
                  fontSize: window.innerWidth < 768 ? '14px' : '16px'
                }}>{category.name}</h3>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '12px' : '14px', 
                  color: '#6b7280' 
                }}>{category.count} products</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{ padding: window.innerWidth < 768 ? '40px 0' : '64px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '32px',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            gap: window.innerWidth < 768 ? '16px' : '0'
          }}>
            <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
              <h2 style={{ 
                fontSize: window.innerWidth < 768 ? '24px' : '32px', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '8px' 
              }}>
                Featured Products
              </h2>
              <p style={{ 
                color: '#6b7280',
                fontSize: window.innerWidth < 768 ? '14px' : '16px'
              }}>
                Handpicked products for your home and sanitary needs
              </p>
            </div>
            {compareItems.length > 0 && (
              <button 
                onClick={handleCompareClick}
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  padding: window.innerWidth < 768 ? '12px 20px' : '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: window.innerWidth < 768 ? '14px' : '16px'
                }}
              >
                Compare ({compareItems.length})
              </button>
            )}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? 'repeat(auto-fill, minmax(280px, 1fr))' 
              : 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: window.innerWidth < 768 ? '20px' : '32px' 
          }}>
            
            {filteredProducts.length === 0 ? (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                padding: '48px',
                color: '#6b7280'
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>No products found</h3>
                <p>Try adjusting your search or category filter</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '16px'
                  }}
                >
                  Show All Products
                </button>
              </div>
            ) : (
              // Show filtered products or fallback to all products
              (filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
              <div key={product.id} style={{
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ 
                      width: '100%', 
                      height: window.innerWidth < 768 ? '200px' : '250px', 
                      objectFit: 'cover' 
                    }}
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: window.innerWidth < 768 ? '10px' : '12px',
                      fontWeight: '600'
                    }}>
                      {product.discount}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleCompare(product.id)}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: window.innerWidth < 768 ? '6px' : '8px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: compareItems.includes(product.id) ? '#3b82f6' : 'white',
                      color: compareItems.includes(product.id) ? 'white' : '#6b7280'
                    }}
                  >
                    <svg width={window.innerWidth < 768 ? "16" : "20"} height={window.innerWidth < 768 ? "16" : "20"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                </div>
                
                <div style={{ padding: window.innerWidth < 768 ? '16px' : '24px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '8px',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                    alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
                    gap: window.innerWidth < 768 ? '4px' : '0'
                  }}>
                    <span style={{ 
                      fontSize: window.innerWidth < 768 ? '12px' : '14px', 
                      color: '#3b82f6', 
                      fontWeight: '500' 
                    }}>{product.category}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Star style={{ color: '#fbbf24', fill: 'currentColor' }} size={window.innerWidth < 768 ? 14 : 16} />
                      <span style={{ 
                        fontSize: window.innerWidth < 768 ? '12px' : '14px', 
                        color: '#6b7280', 
                        marginLeft: '4px' 
                      }}>{product.rating}</span>
                      <span style={{ 
                        fontSize: window.innerWidth < 768 ? '12px' : '14px', 
                        color: '#9ca3af', 
                        marginLeft: '4px' 
                      }}>({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '16px' : '18px', 
                    fontWeight: '600', 
                    color: '#111827', 
                    marginBottom: '8px' 
                  }}>
                    {product.name}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ 
                      fontSize: window.innerWidth < 768 ? '18px' : '20px', 
                      fontWeight: 'bold', 
                      color: '#111827' 
                    }}>{product.price}</span>
                    <span style={{ 
                      fontSize: window.innerWidth < 768 ? '12px' : '14px', 
                      color: '#6b7280', 
                      textDecoration: 'line-through' 
                    }}>
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
                  }}>
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      style={{
                        flex: 1,
                        background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                        color: 'white',
                        padding: window.innerWidth < 768 ? '12px 16px' : '8px 16px',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: window.innerWidth < 768 ? '16px' : '14px',
                        cursor: 'pointer'
                      }}
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => handleAddToWishlist(product.id)}
                      style={{
                        padding: window.innerWidth < 768 ? '12px' : '8px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                       }}
                     >
                       <Heart 
                         size={20} 
                         color={wishlistItems.includes(product.id) ? "#ef4444" : "#6b7280"}
                         fill={wishlistItems.includes(product.id) ? "#ef4444" : "none"}
                       />
                     </button>
                                      </div>
                 </div>
               </div>
             ))
            )}
           </div>
        </div>
      </section>

      

      {/* About Section */}
      <section id="about" style={{ padding: window.innerWidth < 768 ? '40px 0' : '64px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', 
            gap: window.innerWidth < 768 ? '32px' : '48px', 
            alignItems: 'center' 
          }}>
            <div style={{ order: window.innerWidth < 768 ? 2 : 1 }}>
              <h2 style={{ 
                fontSize: window.innerWidth < 768 ? '24px' : '32px', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '24px',
                textAlign: window.innerWidth < 768 ? 'center' : 'left'
              }}>
                About Shivam Tiles
              </h2>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '24px', 
                lineHeight: '1.6',
                fontSize: window.innerWidth < 768 ? '16px' : '18px',
                textAlign: window.innerWidth < 768 ? 'center' : 'left'
              }}>
                With over 15 years of experience, Shivam Tiles has been the trusted name in premium 
                tiles and sanitary products. We offer the finest quality materials, innovative designs, 
                and exceptional customer service.
              </p>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                alignItems: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#dbeafe', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '12px' 
                  }}>
                    <Star size={16} color="#3b82f6" />
                  </div>
                  <span style={{ color: '#374151' }}>Premium Quality Materials</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#dbeafe', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '12px' 
                  }}>
                    <Star size={16} color="#3b82f6" />
                  </div>
                  <span style={{ color: '#374151' }}>Expert Installation Services</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#dbeafe', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginRight: '12px' 
                  }}>
                    <Star size={16} color="#3b82f6" />
                  </div>
                  <span style={{ color: '#374151' }}>Wide Range of Products</span>
                </div>
              </div>
            </div>
            <div style={{ order: window.innerWidth < 768 ? 1 : 2 }}>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                alt="Shivam Tiles Showroom"
                style={{ 
                  borderRadius: '12px', 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: window.innerWidth < 768 ? '40px 0' : '64px 0', backgroundColor: '#111827', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: window.innerWidth < 768 ? '32px' : '48px' }}>
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? '24px' : '32px', 
              fontWeight: 'bold', 
              marginBottom: '16px' 
            }}>Get in Touch</h2>
            <p style={{ 
              color: '#d1d5db',
              fontSize: window.innerWidth < 768 ? '16px' : '18px'
            }}>We&apos;re here to help you find the perfect tiles and sanitary products</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? 'repeat(auto-fit, minmax(200px, 1fr))' 
              : 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: window.innerWidth < 768 ? '24px' : '32px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px auto' 
              }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Call Us</h3>
              <p style={{ color: '#d1d5db' }}>+91 98765 43210</p>
              <p style={{ color: '#d1d5db' }}>+91 98765 43211</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px auto' 
              }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Visit Us</h3>
              <p style={{ color: '#d1d5db' }}>123 Tile Street, City Center</p>
              <p style={{ color: '#d1d5db' }}>Mumbai, Maharashtra 400001</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px auto' 
              }}>
                <MessageCircle size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>WhatsApp</h3>
              <p style={{ color: '#d1d5db' }}>Quick support via WhatsApp</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: window.innerWidth < 768 ? '16px' : '24px',
          right: window.innerWidth < 768 ? '16px' : '24px',
          backgroundColor: '#10b981',
          color: 'white',
          padding: window.innerWidth < 768 ? '12px' : '16px',
          borderRadius: '50%',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textDecoration: 'none',
          zIndex: 50,
          transition: 'all 0.3s ease'
        }}
      >
        <MessageCircle size={window.innerWidth < 768 ? 20 : 24} />
      </a>

      {/* Product Comparison Modal */}
      <ProductComparison
        products={productsToCompare}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />
    </div>
  );
}
