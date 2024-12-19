let wcuCards = document.querySelectorAll(".wcu-card");
// let p = document.querySelector("p");
// if (p) {
//   p.style.color = "white";
// }
wcuCards.forEach((card) => {
  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "#F08080";
    card.style.transform = "scale(1.1)";
    card.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    let p = card.querySelector("p");
    if (p) {
      p.style.color = "white";
    }
  });

  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
    card.style.transform = "scale(1)";
    const p = card.querySelector("p");
    p.style.color = "grey";
    // card.remove("p");
    // p.style.color = "black";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const viewMenuBtn = document.getElementById("viewMenuBtn");
  const exploreMenuSection = document.getElementById("exploremenusection");

  viewMenuBtn.addEventListener("click", function () {
    exploreMenuSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const orderNow = document.getElementById("orderNow");
  const exploreMenuSection = document.getElementById("exploremenusection");

  orderNow.addEventListener("click", function () {
    window.location.href = "./order.html";
  });
});

const redeemButton = document.getElementById("redeemButton");
let isGiftOn = false;
function giftoff() {
  document.getElementById("gift-image").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png";
  redeemButton.textContent = "Redeem Gift";
  isGiftOn = true;
}
function gifton() {
  document.getElementById("gift-image").src =
    "https://t4.ftcdn.net/jpg/01/60/73/11/360_F_160731171_MG785GG34Rx1jiCNfx2esOdxHgFfOt2b.jpg";
  redeemButton.textContent =
    "🎉 Congratulations! You've unlocked a special surprise gift! 🎁";
  isGiftOn = false;
}

function openPopup(videoId) {
  const overlay = document.getElementById("overlay");
  const popupContainer = document.getElementById("popupContainer");
  const videoFrame = document.getElementById("videoFrame");

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  videoFrame.src = embedUrl;

  overlay.classList.remove("hidden");
  popupContainer.classList.remove("hidden");
}

function closePopup() {
  const overlay = document.getElementById("overlay");
  const popupContainer = document.getElementById("popupContainer");
  const videoFrame = document.getElementById("videoFrame");

  overlay.classList.add("hidden");
  popupContainer.classList.add("hidden");

  videoFrame.src = "";
}
// function submitReview() {
//   const rating = document.getElementById("rating").value;

//   localStorage.setItem("userRating", rating);
//   console.log(`Rating submitted: ${rating}`);

//   const reviewDiv = document.querySelector(".review");
//   reviewDiv.innerHTML = "";

//   reviewDiv.textContent = "Thank you for your rating!";
// }

// let submitRating = document.getElementById("submitRating");
// submitRating.addEventListener("click", (e) => {
//   e.preventDefault();
//   let ratingValue = document.getElementById("rating").value;
//   localStorage.setItem("userRating", ratingValue);

//   let message = document.querySelector(".review");
//   message.textContent = "thanks for your submission";
// });
// document.querySelectorAll(".menu-item-card").forEach((card) => {
//   let ratingInput = card.querySelector(".rating-input");
//   let submitButton = card.querySelector(".submit-rating");

//   submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let ratingValue = ratingInput.value;

//     if (ratingValue >= 1 && ratingValue <= 5) {
//       const reviewDiv = card.querySelector(".review");
//       reviewDiv.innerHTML = "";
//       reviewDiv.innerHTML = `<p>Thank you for your rating!</p>`;
//       localStorage.setItem("rating", ratingValue);
//     }
//   });
// });

// let menuItemLink = document
//   .querySelector(".menu-item-link")
//   .addEventListener("click", () => {
//     window.location.href = "./viewall.html";
//   });

function viewAll(event, category) {
  event.preventDefault();

  // bhargavi(category);
  // console.log(category);
  localStorage.setItem("category", category);
  window.location.href = "./viewall.html";
}
