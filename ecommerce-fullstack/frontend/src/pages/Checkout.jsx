import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../api/apiClient';

export default function Checkout() {
  const { data: cart, loading, error } = useFetch('/cart', []);
  const [shippingInfo, setShippingInfo] = useState({
    address: '', city: '', postalCode: '', country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const navigate = useNavigate();

  const handleChange = e =>
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const itemsPrice = cart.items.reduce(
      (acc, i) => acc + i.product.price * i.quantity,
      0
    );
    const orderPayload = {
      orderItems: cart.items.map(i => ({
        product: i.product._id,
        name: i.product.name,
        price: i.product.price,
        quantity: i.quantity,
        image: i.product.images[0].url
      })),
      shippingInfo,
      paymentMethod,
      itemsPrice,
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: itemsPrice
    };
    const res = await api.post('/orders', orderPayload);
    navigate(`/orders/${res.data._id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cart.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['address','city','postalCode','country'].map(field => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              name={field}
              value={shippingInfo[field]}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            />
          </div>
        ))}
        <div>
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="stripe">Stripe</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
