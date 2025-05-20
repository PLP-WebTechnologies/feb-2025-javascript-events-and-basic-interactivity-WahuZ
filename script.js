// Event Handling Section

const encourageBtn = document.getElementById('encourageBtn');
const encouragements = [
  "You are stronger than you think!",
  "Keep going, you're doing great!",
  "Mental health matters. Take a deep breath.",
  "Every day is a fresh start.",
  "You are not alone."
];

// Change text and color on button click
encourageBtn.addEventListener('click', () => {
  const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
  encourageBtn.textContent = msg;
  encourageBtn.style.backgroundColor = getRandomColor();
});

// Hover effect changes text color (handled in CSS but let's add JS too)
encourageBtn.addEventListener('mouseover', () => {
  encourageBtn.style.color = '#f4a261';
});
encourageBtn.addEventListener('mouseout', () => {
  encourageBtn.style.color = 'white';
});

// Keypress detection on whole document
document.addEventListener('keypress', (e) => {
  console.log(`You pressed "${e.key}". Keep focused on mental wellness!`);
});

// Secret double click action - show alert
encourageBtn.addEventListener('dblclick', () => {
  alert('Double-click detected! Remember to take breaks and relax.');
});

// Helper function to generate random hex color
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Image Slideshow Section
const images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1025/600/300",
  "https://picsum.photos/id/1039/600/300",
  "https://picsum.photos/id/1043/600/300",
  "https://picsum.photos/id/1050/600/300"
];
let currentImageIndex = 0;

const slideImage = document.getElementById('slideImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  slideImage.src = images[index];
}

prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Tabs Section
const tabs = document.querySelectorAll('.tablinks');
const contents = document.querySelectorAll('.tabcontent');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active to clicked tab and related content
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Form Validation Section
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

function validateEmail(email) {
  // Simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
  } else {
    passwordError.textContent = "";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailInput.value) {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (!passwordInput.value) {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    formMessage.textContent = "Thank you for subscribing! 💚";
    form.reset();
  } else {
    formMessage.textContent = "";
  }
});

