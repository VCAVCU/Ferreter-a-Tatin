const products = [
    { name: "Martillo de Acero", price: 12, image: "https://via.placeholder.com/200?text=Martillo" },
    { name: "Juego de Llaves", price: 25, image: "https://via.placeholder.com/200?text=Llaves" },
    { name: "Taladro Eléctrico", price: 60, image: "https://via.placeholder.com/200?text=Taladro" },
    { name: "Cinta Métrica", price: 5, image: "https://via.placeholder.com/200?text=Cinta+Métrica" },
    { name: "Caja de Tornillos", price: 8, image: "https://via.placeholder.com/200?text=Tornillos" }
];

let cart = [];

function loadProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach((product, index) => {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toFixed(2)} USD</p>
                <button onclick="addToCart(${index})">Agregar</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${i})">X</button></p>`;
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('show');
}

function checkout() {
    alert("Tu pedido ha sido confirmado. Nos pondremos en contacto contigo para la entrega en Cuba.");
    cart = [];
    updateCart();
    toggleCart();
}

window.onload = loadProducts;
