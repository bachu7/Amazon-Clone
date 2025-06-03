let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout() {
    const ul = document.getElementById("checkout-item");
    const totalEL = document.getElementById("checkout-total");
    let total = 0;
    ul.innerHTML = "";

    cart.forEach((item, i) => {
        const price = parseFloat(item.price) || 0;
        total += price;

        const li = document.createElement("li");
        li.textContent = `${item.name} - NRS. ${price.toFixed(2)}`;
        ul.appendChild(li);
    });

    totalEL.textContent = `NRS. ${total.toFixed(2)}`;
}

function completeCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    alert("Thank you. Your order has been placed.");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "index.html";
}

renderCheckout();

