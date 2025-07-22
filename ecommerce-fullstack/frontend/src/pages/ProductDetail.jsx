import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { formatCurrency } from '../utils/formatCurrency';
import api from '../api/apiClient';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`, [id]);
  const [qty, setQty] = useState(1);

  const addToCart = async () => {
    await api.post('/cart', { productId: id, quantity: qty });
    alert('Added to cart');
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product.</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <img
        src={product.images[0].url}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded"
      />
      <div className="md:ml-6">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="my-4">{product.description}</p>
        <p className="text-xl font-semibold">{formatCurrency(product.price)}</p>
        <div className="mt-4">
          <label htmlFor="quantity" className="mr-2">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(Number(e.target.value))}
            className="border rounded p-1 w-16"
          />
        </div>
        <button
          onClick={addToCart}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
