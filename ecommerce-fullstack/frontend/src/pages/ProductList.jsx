import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
  const { data, loading, error } = useFetch('/products', []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
