
const productGrid = document.getElementById("product-grid");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const cropFilter = document.getElementById("crop-filter");
const sortFilter = document.getElementById("sort-filter");
const resultsCount = document.getElementById("results-count");

let activeCategory = "All";
let cart = [];

function renderProducts() {
  if (!productGrid || typeof products === "undefined") return;

  const search = searchInput.value.trim().toLowerCase();
  const crop = cropFilter.value.trim().toLowerCase();
  const maxPrice = Number(priceFilter.value);

  let filtered = products.filter((product) => {
    const searchable = [
      product.name,
      product.variety,
      product.category,
      product.description
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(search);
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesCrop =
      !crop || product.variety.toLowerCase().includes(crop);
    const matchesPrice =
      !priceFilter.value || product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesCrop && matchesPrice;
  });

  if (sortFilter.value === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortFilter.value === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortFilter.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  resultsCount.textContent = `${filtered.length} products found`;

  if (filtered.length === 0) {
    productGrid.innerHTML =
      '<p class="empty-message">No products found. Try changing your filters.</p>';
    return;
  }

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
<div class="product-image">
  ${product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : product.emoji}
</div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="product-variety">Variety: ${product.variety}</p>
        <p class="product-unit">${product.unit}</p>
        <div class="product-bottom">
          <strong>₹${product.price.toLocaleString("en-IN")}</strong>
          <button type="button" class="add-cart-button"
            data-product-id="${product.id}">Add to Cart</button>
        </div>
        <small class="demo-note">Demo price · Verify with seller</small>
      </div>
    </article>
  `).join("");
}

function updateCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;

  const product = products.find(
    (item) => item.id === Number(button.dataset.productId)
  );
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  button.textContent = "Added ✓";
  setTimeout(() => {
    button.textContent = "Add to Cart";
  }, 900);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", () => {
  activeCategory = categoryFilter.value;
  renderProducts();
});
priceFilter.addEventListener("input", renderProducts);
cropFilter.addEventListener("input", renderProducts);
sortFilter.addEventListener("change", renderProducts);

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryFilter.value = activeCategory;
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "All";
  priceFilter.value = "";
  cropFilter.value = "";
  sortFilter.value = "featured";
  activeCategory = "All";
  renderProducts();
});

document.getElementById("cart-button").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const lines = cart.map((item) =>
    `${item.name} x ${item.quantity} — ₹${item.price * item.quantity}`
  );
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  alert("YOUR DEMO CART\n\n" + lines.join("\n") +
    "\n\nTotal: ₹" + total.toLocaleString("en-IN") +
    "\n\nCheckout and payment are not enabled yet.");
});

document.getElementById("account-button").addEventListener("click", () => {
  alert("Account registration will be added with the backend.");
});

document.getElementById("farmer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("farmer-name").value.trim();
  document.getElementById("form-message").textContent =
    `Thank you, ${name}! Your demo submission was received in this page.`;
  event.target.reset();
});

document.getElementById("feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("feedback-status").textContent =
    "Thank you for your feedback! This demo does not save it to a server.";
  event.target.reset();
});

const chatPanel = document.getElementById("chat-panel");

document.getElementById("chat-toggle").addEventListener("click", () => {
  chatPanel.hidden = !chatPanel.hidden;
});

document.getElementById("chat-close").addEventListener("click", () => {
  chatPanel.hidden = true;
});

document.getElementById("chat-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const question = input.value.trim().toLowerCase();

  const userMessage = document.createElement("p");
  userMessage.className = "user-message";
  userMessage.textContent = input.value.trim();
  messages.appendChild(userMessage);

  let answer = "Try searching for a product or selecting a category. I am a demo assistant.";

  if (question.includes("cart")) {
    answer = `Your cart currently has ${cart.reduce((n, item) => n + item.quantity, 0)} item(s).`;
  } else if (question.includes("price")) {
    answer = "Prices shown are illustrative demo prices. Please verify actual prices with the seller.";
  } else if (question.includes("seed") || question.includes("paddy")) {
    answer = "Browse Seeds or Paddy & Rice, then use filters to find a variety. Check local growing suitability before buying.";
  } else if (question.includes("feedback")) {
    answer = "You can share suggestions using the Feedback section near the bottom of the page.";
  } else if (question.includes("hello") || question.includes("hi")) {
    answer = "Hello! I can help you find products, understand filters or check your demo cart.";
  }

  const botMessage = document.createElement("p");
  botMessage.className = "bot-message";
  botMessage.textContent = answer;
  messages.appendChild(botMessage);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});

renderProducts();