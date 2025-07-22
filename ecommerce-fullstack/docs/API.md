# API Reference

Base URL: `http://localhost:5000/api/v1`

---

## Authentication

### Register User

`POST /auth/register`

**Request Body** (JSON):

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePass123"
}
```

**Response** (201 Created):

```json
{
  "_id": "64",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "user"
}
```

---

### Login User

`POST /auth/login`

**Request Body** (JSON):

```json
{
  "email": "jane@example.com",
  "password": "securePass123"
}
```

**Response** (200 OK):

```json
{
  "_id": "64",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "user"
}
```

*(Also sets HTTP-only cookie `token`.)*

---

### Logout User

`POST /auth/logout` *(protected)*

**Response** (200 OK):

```json
{ "message": "Logged out successfully" }
```

---

### Get User Profile

`GET /auth/profile` *(protected)*

**Response** (200 OK):

```json
{
  "_id": "64",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "user"
}
```

---

## Products

### List Products

`GET /products`

**Query Parameters**:

* `keyword` (string) — search term
* `page` (number) — page number
* `limit` (number) — items per page
* `price[gte]`, `price[lte]` (number) — price filter

**Response** (200 OK):

```json
{
  "success": true,
  "count": 10,
  "productsCount": 42,
  "products": [
    {
      "_id": "101",
      "name": "T‑Shirt",
      "price": 19.99,
      "category": "Apparel",
      "stock": 100,
      "images": [{ "url": "https://..." }]
    },
    // ...
  ]
}
```

---

### Get Product by ID

`GET /products/:id`

**Response** (200 OK):

```json
{
  "_id": "101",
  "name": "T‑Shirt",
  "description": "Comfortable cotton T‑shirt",
  "price": 19.99,
  "category": "Apparel",
  "stock": 100,
  "ratings": 4.5,
  "numOfReviews": 12,
  "images": [ ... ],
  "reviews": [ ... ],
  "createdAt": "2025-07-20T12:34:56.789Z"
}
```

---

### Create Product

`POST /products` *(protected, admin)*

**Request Body** (JSON):

```json
{
  "name": "New Product",
  "description": "Details...",
  "price": 29.99,
  "category": "Gadgets",
  "stock": 50,
  "images": [ { "public_id": "xxx", "url": "https://..." } ]
}
```

**Response** (201 Created): New product object

---

### Update Product

`PUT /products/:id` *(protected, admin)*

**Request Body**: any updatable fields

**Response** (200 OK): Updated product object

---

### Delete Product

`DELETE /products/:id` *(protected, admin)*

**Response** (200 OK):

```json
{ "message": "Product removed" }
```

---

### Create/Update Review

`PUT /products/:id/review` *(protected)*

**Request Body** (JSON):

```json
{ "rating": 5, "comment": "Great!" }
```

**Response** (201 Created):

```json
{ "message": "Review added" }
```

---

## Cart

### Get Cart

`GET /cart` *(protected)*

**Response** (200 OK):

```json
{
  "_id": "c64",
  "user": "64",
  "items": [
    { "product": {"_id": "101","name":"T‑Shirt","price":19.99,"images":[...]}, "quantity": 2 }
  ]
}
```

---

### Add to Cart

`POST /cart` *(protected)*

**Request Body** (JSON):

```json
{ "productId": "101", "quantity": 2 }
```

**Response** (200 OK): Updated cart object

---

### Remove from Cart

`DELETE /cart/:productId` *(protected)*

**Response** (200 OK): Updated cart object

---

## Orders

### Create Order

`POST /orders` *(protected)*

**Request Body** (JSON):

```json
{
  "orderItems": [ { "product":"101","name":"T‑Shirt","price":19.99,"quantity":2,"image":"https://..." } ],
  "shippingInfo": {"address":"123 St","city":"City","postalCode":"12345","country":"Country"},
  "paymentMethod":"stripe",
  "itemsPrice":39.98,
  "taxPrice":0,
  "shippingPrice":0,
  "totalPrice":39.98
}
```

**Response** (201 Created): Order object

---

### Get My Orders

`GET /orders` *(protected)*

**Response** (200 OK): Array of user’s orders

---

### Get Order by ID

`GET /orders/:id` *(protected)*

**Response** (200 OK): Order object

---

### Get All Orders

`GET /orders/all` *(protected, admin)*

**Response** (200 OK): Array of all orders

---

### Mark Order as Delivered

`PUT /orders/:id/deliver` *(protected, admin)*

**Response** (200 OK): Updated order object
