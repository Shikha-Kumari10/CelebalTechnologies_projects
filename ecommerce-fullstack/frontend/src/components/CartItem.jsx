import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center space-x-4 border-b py-2">
      <img
        src={item.product.images[0].url}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p>
          {item.quantity} × {formatCurrency(item.product.price)}
        </p>
      </div>
      <button
        onClick={() => onRemove(item.product._id)}
        className="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
}
