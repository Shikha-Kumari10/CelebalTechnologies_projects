import React, { useState, useEffect } from "react";

const API = "https://celebaltechnologies-projects-2.onrender.com";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("products");

  useEffect(() => {
    fetch(`${API}/products`)
      .then((r) => r.json())
      .then(setProducts);
    if (token) {
      fetch(`${API}/cart`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json()).then(setCart);
    }
  }, [token]);

  // Signup/Login handlers
  const auth = (endpoint) => {
    fetch(`${API}/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(r => r.json())
      .then(data => data.token && setToken(data.token));
  };

  const addToCart = (productId) => {
    fetch(`${API}/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ productId, quantity: 1 })
    }).then(r => r.json()).then(setCart);
  };

  const placeOrder = () => {
    fetch(`${API}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ address: "123 Main St", paymentMethod: "COD" })
    }).then(r => r.json()).then(res => alert(res.msg));
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>E-Commerce Demo</h2>
      {!token ? (
        <div>
          <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={() => auth("signup")}>Signup</button>
          <button onClick={() => auth("login")}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setToken("")}>Logout</button>
          <button onClick={() => setPage("products")}>Products</button>
          <button onClick={() => setPage("cart")}>Cart</button>
          <button onClick={() => setPage("orders")}>Orders</button>
        </div>
      )}

      {page === "products" && (
        <div>
          <h3>Products</h3>
          {products.map(p => (
            <div key={p._id} style={{ border: "1px solid #ccc", padding: 10, margin: 5 }}>
              <b>{p.name}</b> ₹{p.price}
              {token && <button onClick={() => addToCart(p._id)}>Add to Cart</button>}
            </div>
          ))}
        </div>
      )}

      {page === "cart" && token && (
        <div>
          <h3>Cart</h3>
          {cart.map(item => (
            <div key={item.product._id}>{item.product.name} x {item.quantity}</div>
          ))}
          <button onClick={placeOrder}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default App;
