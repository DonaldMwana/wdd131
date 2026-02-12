// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "block" ? "none" : "block";
    });
}

// Dynamic Destinations
const destinations = [
    { name: "Cape Town", info: "Home of Table Mountain and beautiful beaches." },
    { name: "Kruger National Park", info: "Famous wildlife safari destination." },
    { name: "Durban", info: "Warm beaches and rich Zulu culture." }
];

const container = document.getElementById("destinationContainer");

if (container) {
    destinations.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = place.name;

        const description = document.createElement("p");
        description.textContent = place.info;

        card.appendChild(title);
        card.appendChild(description);
        container.appendChild(card);
    });
}

// Form Handling
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formResponse").textContent =
            `Thank you, ${name}! Your message has been received.`;

        form.reset();
    });
}

// Footer Last Modified
const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = "Last Modified: " + document.lastModified;
}