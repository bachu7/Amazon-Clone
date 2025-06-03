const products = [
    { id: 1, name: "Iphone 14 Pro Max", price: 180000, image: "images/download2.jpg" },
    { id: 2, name: "Samsung Ultra 24", price: 190000, image: "images/download3.jpg" },
    { id: 3, name: "JBL Speaker", price: 80000, image: "images/download4.jpg" },
    { id: 4, name: "Wireless Headphone", price: 18000, image: "images/images1.jpg" },
    { id: 5, name: "Rolex Premium Watch", price: 20000000, image: "images/images2.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProduct() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

renderProduct();
updateCartCount();
