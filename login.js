const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(){}:"><?~"])[a-zA-Z0-9!@#$%^&*(){}:"><?~"]{6,}$/;
const usernameRegex = /^[A-Za-z0-9]{8,}$/;

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

username.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    usernameError.textContent = "Required*";
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailError.textContent = "Required*";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("blur", function () {
  if (password.value === "") {
    passwordError.textContent = "Required*";
  } else {
    passwordError.textContent = "";
  }
});

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // usernameError.textContent = "";
    // emailError.textContent = "";
    // passwordError.textContent = "";

    // const userValue = username.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();

    if (!usernameRegex.test(username.value)) {
      usernameError.textContent = "username must be at least 8 characters.";
      isValid = false;
    }

    if (!emailRegex.test(email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!passwordRegex.test(password.value)) {
      passwordError.textContent =
        "password must be at least 6 characters with uppercase, lowercase, number, and special characters.";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userEmail", email.value);
      localStorage.setItem("userPassword", password.value);
      alert("Signup Successful!");

      document.getElementById("signupForm").classList.add("hidden");
      document.getElementById("loginForm").classList.remove("hidden");
    }
    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("loginEmailErrMsg").textContent = "";
        document.getElementById("loginPasswordErrMsg").textContent = "";
        const loginEmail = document.getElementById("loginEmail").value.trim();
        const loginPassword = document
          .getElementById("loginPassword")
          .value.trim();
        const signUpEmail = localStorage.getItem("userEmail");
        const signUpPassword = localStorage.getItem("userPassword");
        let isLoginValid = true;

        if (loginEmail !== signUpEmail) {
          document.getElementById("loginEmailErrMsg").textContent =
            "Email not found. Please sign up first.";
          isLoginValid = false;
        }
        if (loginPassword !== signUpPassword) {
          document.getElementById("loginPasswordErrMsg").textContent =
            "Incorrect password.";
          isLoginValid = false;
        }

        if (isLoginValid) {
          alert("Login Successful!");
          window.location.href = "./index.html";
        }
      });
  });
