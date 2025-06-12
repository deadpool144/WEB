import React from 'react';

function ProductCard({ product }) {
  const { productName, description, rating, price, imageUrl, tags } = product;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{productName}</h2>

        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-green-600">₹{price}</span>
          <span className="bg-yellow-400 text-sm font-medium text-white px-2 py-1 rounded-full">
            ⭐ {rating}
          </span>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
