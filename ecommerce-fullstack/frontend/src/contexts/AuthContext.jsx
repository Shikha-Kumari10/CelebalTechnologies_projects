import React, { createContext, useState, useEffect } from 'react';
import api from '../api/apiClient';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const res = await api.get('/auth/profile');
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = async (email, password) => {
    await api.post('/auth/login', { email, password });
    loadUser();
  };

  const register = async (name, email, password) => {
    await api.post('/auth/register', { name, email, password });
    loadUser();
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
