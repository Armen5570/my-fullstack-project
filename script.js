
// =====================================
// DEVELOPER HUB - MAIN JAVASCRIPT
// =====================================

// 1. Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    menuToggle.textContent = navigation.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// 2. Reveal Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".skill-card, .project-card, .about-box, .section-heading"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


// 3. Contact Form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your demo message was received.`;

    contactForm.reset();
});


// 4. Current Year

const year = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `Designed & Built by Armen © ${year}`;


// 5. Console Welcome

console.log("%c Welcome to Developer Hub! ", 
    "background: #f43f96; color: white; padding: 10px; font-size: 16px;");

console.log("Created by Armen5570");
