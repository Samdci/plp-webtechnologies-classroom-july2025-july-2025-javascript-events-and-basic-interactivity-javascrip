// =======================================
// 🎉 PART 1: Event Handling
// =======================================

// Respond to a button click
const greetBtn = document.getElementById("greetBtn");
const greetMessage = document.getElementById("greetMessage");

greetBtn.addEventListener("click", () => {
  greetMessage.textContent = "Hello there 👋, welcome to interactive JavaScript!";
});

// Respond to mouseover on input
const hoverInput = document.getElementById("hoverInput");
const hoverMessage = document.getElementById("hoverMessage");

hoverInput.addEventListener("mouseover", () => {
  hoverMessage.textContent = "You hovered over the input box 🖱️!";
});

hoverInput.addEventListener("mouseout", () => {
  hoverMessage.textContent = "";
});

// =======================================
// 🎮 PART 2: Interactive Elements
// =======================================

// --- Light/Dark Mode Toggle ---
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleThemeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Switch to Light Mode"
    : "🌙 Toggle Dark Mode";
});

// --- Counter ---
let count = 0;
const countValue = document.getElementById("countValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

// --- Collapsible FAQ ---
const faqTitle = document.querySelector(".faq-title");
const faqAnswer = document.querySelector(".faq-answer");

faqTitle.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// =======================================
// 📋✅ PART 3: Form Validation
// =======================================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

// Function to validate email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validate form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset error messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  formMessage.textContent = "";

  let valid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Please fix the errors and try again.";
  }
});
