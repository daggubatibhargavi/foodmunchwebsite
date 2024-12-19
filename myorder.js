document.addEventListener("DOMContentLoaded", function () {
  const ordersContainer = document.getElementById("ordersContainer");

  const pastOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];

  if (pastOrders.length === 0) {
    ordersContainer.innerHTML = "<p>No past orders found.</p>";
    return;
  }
  console.log(pastOrders);
  console.log(pastOrders[0].items[0].Image);

  pastOrders.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order");
    // orderDiv.style.width = "80%";

    const orderHeader = document.createElement("h3");
    orderHeader.textContent = `Order ID: ${order.orderID} | Customer: ${order.name}`;
    orderDiv.appendChild(orderHeader);

    order.items.forEach((item, itemIndex) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("order-item");
      // itemInfo.style.display = "flex";
      // itemInfo.style.alignItems = "center";
      // itemInfo.style.gap = "10px";

      // const itemInfo = document.createElement("p");
      const itemInfo = document.createElement("div");
      itemInfo.innerHTML = `
  <div style="display: flex; align-items: center; gap: 50px;">
    <img src="${item.Image}" style="width:100px;height:100px;object-fit:cover;" />
    <p style="margin: 0;">${item.Name} - ${item.price}</p>
  </div>
`;

      // console.log(item.Name);

      // console.log(item.Image);
      // console.log(item.Name);
      itemInfo.style.display = "flex";
      itemInfo.style.alignItems = "center";
      itemInfo.style.gap = "10px";

      const ratingInput = document.createElement("input");
      ratingInput.type = "number";
      ratingInput.min = "1";
      ratingInput.max = "5";
      ratingInput.value =
        localStorage.getItem(`rating-${order.orderID}-${itemIndex}`) || "";

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit Rating";

      submitButton.addEventListener("click", () => {
        const rating = parseInt(ratingInput.value, 10);
        if (rating >= 1 && rating <= 5) {
          localStorage.setItem(`rating-${order.orderID}-${itemIndex}`, rating);
          alert(`Thank you for rating ${item.Name}: ${rating} stars!`);
        } else {
          alert("Please enter a rating between 1 and 5.");
        }
      });
      itemDiv.appendChild(itemInfo);
      itemDiv.appendChild(ratingInput);
      itemDiv.appendChild(submitButton);
      orderDiv.appendChild(itemDiv);
    });

    ordersContainer.appendChild(orderDiv);
  });
});
