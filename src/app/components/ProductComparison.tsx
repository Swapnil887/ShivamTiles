"use client";

import { X, Star, Check, X as XIcon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  discount: string;
  specifications?: {
    material: string;
    size: string;
    thickness: string;
    finish: string;
    warranty: string;
    installation: string;
  };
}

interface ProductComparisonProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductComparison({ products, isOpen, onClose }: ProductComparisonProps) {
  if (!isOpen || products.length === 0) return null;

  const getProductSpecs = (product: Product) => {
    return product.specifications || {
      material: "Premium Quality",
      size: "Standard",
      thickness: "10mm",
      finish: "Polished",
      warranty: "5 Years",
      installation: "Professional"
    };
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '72rem',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Product Comparison</h2>
            <button
              onClick={onClose}
              style={{
                padding: '8px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  {/* Specifications */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(getProductSpecs(product)).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-sm font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Premium Quality Material</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Easy Installation</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Long Warranty</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">Professional Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Summary */}
          {products.length === 2 && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparison Summary</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium text-gray-700">Feature</div>
                  <div className="font-medium text-gray-700">{products[0].name}</div>
                  <div className="font-medium text-gray-700">{products[1].name}</div>
                  
                  <div className="text-gray-600">Price</div>
                  <div className="font-medium">{products[0].price}</div>
                  <div className="font-medium">{products[1].price}</div>
                  
                  <div className="text-gray-600">Rating</div>
                  <div className="font-medium">{products[0].rating}/5</div>
                  <div className="font-medium">{products[1].rating}/5</div>
                  
                  <div className="text-gray-600">Material</div>
                  <div className="font-medium">{getProductSpecs(products[0]).material}</div>
                  <div className="font-medium">{getProductSpecs(products[1]).material}</div>
                  
                  <div className="text-gray-600">Warranty</div>
                  <div className="font-medium">{getProductSpecs(products[0]).warranty}</div>
                  <div className="font-medium">{getProductSpecs(products[1]).warranty}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 