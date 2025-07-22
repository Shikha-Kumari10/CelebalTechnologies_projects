import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-48 object-cover mb-2 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p>{product.description.substring(0, 100)}...</p>
        <p className="mt-2 font-bold">{formatCurrency(product.price)}</p>
      </Link>
    </div>
  );
}
