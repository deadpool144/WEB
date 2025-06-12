import React from 'react';
import ProductCard from '../components/productCard';




const products = [
  {
    productName: "Eco Bottle",
    description: "Reusable BPA-free water bottle for everyday use.",
    rating: 4.5,
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6edcbf7f7d4f?auto=format&fit=crop&w=600&q=80",
    tags: ["Eco", "Reusable", "Plastic-Free"]
  },
  {
    productName: "Smart Watch",
    description: "Track your fitness, sleep, and notifications.",
    rating: 4.2,
    price: 1499,
    imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
    tags: ["Gadget", "Fitness", "Bluetooth"]
  },
  {
    productName: "Bluetooth Speaker",
    description: "Portable speaker with high-quality audio and bass.",
    rating: 4.7,
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a415522c270d?auto=format&fit=crop&w=600&q=80",
    tags: ["Audio", "Portable", "Wireless"]
  },
  {
    productName: "Noise Cancelling Headphones",
    description: "Immersive sound with powerful noise cancellation.",
    rating: 4.8,
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1585386959980-b648d2ac4a4f?auto=format&fit=crop&w=600&q=80",
    tags: ["Audio", "Comfort", "Travel"]
  },
  {
    productName: "Laptop Stand",
    description: "Ergonomic aluminum stand for better posture.",
    rating: 4.3,
    price: 799,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b82b5f9?auto=format&fit=crop&w=600&q=80",
    tags: ["Office", "Portable", "Aluminum"]
  },
  {
    productName: "Wireless Mouse",
    description: "Sleek design with silent clicks and smooth tracking.",
    rating: 4.1,
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1587825140400-76a6a5ccad51?auto=format&fit=crop&w=600&q=80",
    tags: ["Peripheral", "Office", "Wireless"]
  }
];



function product() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default product