import React from 'react';
import ProductList from './ProductList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to E‑Shop</h1>
      <ProductList />
    </div>
  );
}
