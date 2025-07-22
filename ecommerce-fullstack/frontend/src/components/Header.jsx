import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="p-4 shadow flex justify-between items-center bg-white">
      <h1 className="text-xl font-bold">
        <Link to="/">E‑Shop</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">Login</Link>
        )}
      </nav>
    </header>
  );
}
