document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const orderButton = document.getElementById("orderButton");
  const orderStatus = document.getElementById("orderStatus");
  const cartItemsContainer = document.getElementById("cartItems");

  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  if (!Array.isArray(cartData)) {
    cartData = Object.values(cartData);
  }
  console.log(cartData);
  // console.log(cartData[0]);
  // console.log(cartData[0].Name);
  // console.log(cartData[0].Image);
  const itemHeader = document.createElement("div");
  itemHeader.classList.add("cart-header");
  itemHeader.innerHTML = `
      <p><strong>Item Image</strong></p>
      <p><strong>Item Name</strong></p>
      <p><strong>Item Price</strong></p>
      <p><strong>Item Quantity</strong></p>
    `;
  cartItemsContainer.appendChild(itemHeader);

  function displayCart() {
    // cartItemsContainer.innerHTML = "";
    if (cartData.length === 0) {
      cartItemsContainer.textContent =
        "Your cart is currently empty. Add items to place an order!";
      return;
    }

    let totalAmount = 0;
    cartData.forEach((item) => {
      const price = parseFloat(item.price?.replace("$", "")) || 0;
      const quantity = parseInt(item.quantity, 10) || 1;
      totalAmount += price * quantity;
      // console.log(item.Image);
      // console.log(item.Name);

      const itemContainer = document.createElement("div");
      itemContainer.classList.add("cart-item");
      itemContainer.innerHTML = `
  <img src="${item.Image}" alt="${item.Name}" />
  <div class="cart-details">
    <p>${item.Name}</p>
    <p>${price}</p>
    <p>${quantity}</p>
  </div>
`;
      console.log(item);
      console.log(item.Image);

      cartItemsContainer.appendChild(itemContainer);
    });

    const totalContainer = document.createElement("div");
    totalContainer.classList.add("cart-total");
    totalContainer.innerHTML = `<h3>Total: $${totalAmount.toFixed(2)}</h3>`;
    cartItemsContainer.appendChild(totalContainer);
  }

  orderButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const notes = document.getElementById("notes").value;

    if (!name || !email) {
      orderStatus.textContent = "Name and Email are required.";
      return;
    }

    const orderDetails = {
      orderID: Date.now(),
      name,
      email,
      notes,
      items: cartData,
    };

    let pastOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];
    pastOrders.push(orderDetails);
    localStorage.setItem("pastOrders", JSON.stringify(pastOrders));

    processPayment();
  });

  function processPayment() {
    const paymentMethod = document.getElementById("payment").value;
    orderButton.disabled = true;
    orderButton.textContent = "Processing Payment...";

    setTimeout(() => {
      orderStatus.textContent = `Your order has been placed successfully! Payment Method: ${paymentMethod}`;
      // console.log("Order Details:", {
      //   name: document.getElementById("name").value,
      //   email: document.getElementById("email").value,
      // });

      localStorage.removeItem("cart");
      cartData = [];

      displayCart();
      orderForm.reset();

      orderButton.textContent = "Place Order";
      orderButton.disabled = false;
      setTimeout(() => {
        window.location.href = "./myorder.html";
      }, 3000);
    }, 2000);
  }

  displayCart();
});
// window.location.href = "./myorder.html";
