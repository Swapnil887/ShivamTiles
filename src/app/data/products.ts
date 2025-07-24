export interface Product {
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

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Marble Tiles",
    category: "Marble",
    price: "₹2,500/sq ft",
    originalPrice: "₹3,200/sq ft",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    discount: "22% OFF",
    specifications: {
      material: "Natural Marble",
      size: "24x24 inches",
      thickness: "12mm",
      finish: "Polished",
      warranty: "10 Years",
      installation: "Professional"
    }
  },
  {
    id: 2,
    name: "Granite Flooring Tiles",
    category: "Granite",
    price: "₹1,800/sq ft",
    originalPrice: "₹2,400/sq ft",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    discount: "25% OFF",
    specifications: {
      material: "Natural Granite",
      size: "18x18 inches",
      thickness: "10mm",
      finish: "Honed",
      warranty: "15 Years",
      installation: "Professional"
    }
  },
  {
    id: 3,
    name: "Ceramic Bathroom Tiles",
    category: "Ceramic",
    price: "₹450/sq ft",
    originalPrice: "₹600/sq ft",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: "25% OFF",
    specifications: {
      material: "Ceramic",
      size: "12x12 inches",
      thickness: "8mm",
      finish: "Glazed",
      warranty: "5 Years",
      installation: "DIY Friendly"
    }
  },
  {
    id: 4,
    name: "Porcelain Kitchen Tiles",
    category: "Porcelain",
    price: "₹750/sq ft",
    originalPrice: "₹950/sq ft",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: "21% OFF",
    specifications: {
      material: "Porcelain",
      size: "12x24 inches",
      thickness: "9mm",
      finish: "Matte",
      warranty: "8 Years",
      installation: "Professional"
    }
  },
  {
    id: 5,
    name: "Premium Sanitary Ware",
    category: "Sanitary",
    price: "₹15,000",
    originalPrice: "₹20,000",
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: "25% OFF",
    specifications: {
      material: "Vitreous China",
      size: "Standard",
      thickness: "8mm",
      finish: "Glossy",
      warranty: "5 Years",
      installation: "Professional"
    }
  },
  {
    id: 6,
    name: "Luxury Bathroom Suite",
    category: "Sanitary",
    price: "₹25,000",
    originalPrice: "₹32,000",
    rating: 4.7,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: "22% OFF",
    specifications: {
      material: "Premium Ceramic",
      size: "Complete Set",
      thickness: "10mm",
      finish: "Matte",
      warranty: "7 Years",
      installation: "Professional"
    }
  },
  {
    id: 7,
    name: "Vitrified Flooring Tiles",
    category: "Flooring",
    price: "₹850/sq ft",
    originalPrice: "₹1,100/sq ft",
    rating: 4.5,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    discount: "23% OFF",
    specifications: {
      material: "Vitrified",
      size: "24x24 inches",
      thickness: "11mm",
      finish: "Polished",
      warranty: "7 Years",
      installation: "Professional"
    }
  },
  {
    id: 8,
    name: "Mosaic Wall Tiles",
    category: "Bathroom",
    price: "₹1,200/sq ft",
    originalPrice: "₹1,500/sq ft",
    rating: 4.6,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: "20% OFF",
    specifications: {
      material: "Glass Mosaic",
      size: "12x12 inches",
      thickness: "6mm",
      finish: "Glossy",
      warranty: "3 Years",
      installation: "Professional"
    }
  }
];

export const categories = [
  { name: "All", icon: "🏠", count: 8 },
  { name: "Marble", icon: "🏛️", count: 1 },
  { name: "Granite", icon: "🪨", count: 1 },
  { name: "Ceramic", icon: "🧱", count: 1 },
  { name: "Porcelain", icon: "🏺", count: 1 },
  { name: "Sanitary", icon: "🚽", count: 2 },
  { name: "Bathroom", icon: "🚿", count: 1 },
  { name: "Flooring", icon: "🏠", count: 1 }
]; 