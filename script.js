// Product Data
const products = [
    { name: "Organic Apples", price: 3.5, image: "https://i.pinimg.com/1200x/95/59/60/955960841293985ca85e20d08ac6ef83.jpg", desc: "Crisp, sweet, and pesticide-free apples." },
    { name: "Bananas", price: 1.5, image: "https://i.pinimg.com/736x/81/6e/04/816e04320c5a1f4ddb2ddfa3895d8cf1.jpg", desc: "Fresh and ripe bananas, perfect for smoothies." },
    { name: "Tomatoes", price: 2.0, image: "https://i.pinimg.com/736x/b8/ca/6a/b8ca6ad5fcb00c5379592a95f9fbf969.jpg", desc: "Juicy, farm-fresh tomatoes for your salads." },
    { name: "Milk (1L)", price: 2.5, image: "https://i.pinimg.com/1200x/29/48/da/2948da4f33f4966144b5f0fa1d842168.jpg", desc: "Fresh farm milk, pasteurized and chilled." },
    { name: "Bread Loaf", price: 1.8, image: "https://i.pinimg.com/736x/41/87/e8/4187e8d14ec6dc84dabb5ab8f3729e3d.jpg", desc: "Soft white sandwich bread, freshly baked." },
    { name: "Carrots", price: 1.2, image: "https://i.pinimg.com/736x/e7/e5/e7/e7e5e72dd497b91d75a69685bf325492.jpg", desc: "Crunchy and sweet organic carrots." }
    
];

// DOM Elements
const productList = document.getElementById("product-list");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");

let cartData = [];

// Render Products
function renderProducts() {
    productList.innerHTML = products.map(p => `
    <div class="product-card" data-name="${p.name}" data-price="${p.price}">
      <img src="${p.image}" alt="${p.name}" class="product-image" />
      <h3>${p.name}</h3>
      <p class="product-description">${p.desc}</p>
      <p>$${p.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `).join('');

    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", addToCart);
    });
}

// Add to Cart
function addToCart(e) {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    const existing = cartData.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cartData.push({ name, price, qty: 1 });
    }
    updateCart();
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = cartData.map(item => `
    <li>
      ${item.name} x${item.qty} 
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </li>
  `).join('');

    const total = cartData.reduce((sum, i) => sum + i.price * i.qty, 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cartData.reduce((sum, i) => sum + i.qty, 0);
}

// Toggle Cart
cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cart.classList.toggle("hidden");
});

closeCart.addEventListener("click", () => cart.classList.add("hidden"));

// Init
renderProducts();

// Eid Sale Products
const eidProducts = [
  { name: "Dates Pack (500g)", price: 3.0, image: "https://i.pinimg.com/736x/a8/fb/87/a8fb87cb2d59c2bacd179b544aa819ed.jpg", desc: "Premium quality Ajwa dates, perfect for Eid celebrations." },
  { name: "Mutton (1kg)", price: 12.0, image: "https://i.pinimg.com/736x/34/d5/a1/34d5a1f79c018b74e466124552f55b59.jpg", desc: "Fresh, tender mutton with Eid special 15% discount." },
  { name: "Sweet Box", price: 5.0, image: "https://i.pinimg.com/736x/55/3a/14/553a144a9758bd2bba70447874cacba8.jpg", desc: "Assorted Eid sweets to make your celebration special." },
  { name: "Basmati Rice (5kg)", price: 8.5, image: "https://i.pinimg.com/1200x/f6/16/59/f616592a533e5af12ca83854f530800e.jpg", desc: "Long-grain basmati rice for your Eid feast." },
  { name: "Cooking Oil (2L)", price: 4.0, image: "https://i.pinimg.com/736x/ae/91/e6/ae91e65bae64450c482dc382559a3093.jpg", desc: "Pure sunflower oil with special Eid discount." },
];

// DOM for Eid section
const eidProductList = document.getElementById("eid-product-list");

// Render Eid Products
function renderEidProducts() {
  eidProductList.innerHTML = eidProducts.map(p => `
    <div class="product-card" data-name="${p.name}" data-price="${p.price}">
      <img src="${p.image}" alt="${p.name}" class="product-image" />
      <h3>${p.name}</h3>
      <p class="product-description">${p.desc}</p>
      <p>$${p.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `).join('');

  eidProductList.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", addToCart);
  });
}

// Initialize Eid Sale Section
renderEidProducts();
