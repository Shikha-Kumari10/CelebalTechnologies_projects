import React from 'react';
import useFetch from '../hooks/useFetch';
import CartItem from '../components/CartItem';
import api from '../api/apiClient';
import { Link, useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

export default function Cart() {
  const { data: cart, loading, error } = useFetch('/cart', []);
  const navigate = useNavigate();

  const removeItem = async id => {
    await api.delete(`/cart/${id}`);
    window.location.reload();
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart.</p>;

  if (!cart.items.length) {
    return <p>Your cart is empty. <Link to="/">Shop now</Link>.</p>;
  }

  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.items.map(item => (
        <CartItem key={item.product._id} item={item} onRemove={removeItem} />
      ))}
      <div className="mt-6">
        <p className="text-lg">
          Subtotal: <span className="font-bold">{formatCurrency(subtotal)}</span>
        </p>
        <button
          onClick={() => navigate('/checkout')}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
