const destinations = [
  { name: "Cape Town", region: "Western Cape", rating: 5, image: "images/capetown.jpg" },
  { name: "Kruger National Park", region: "Mpumalanga", rating: 5, image: "images/kruger.jpg" },
  { name: "Durban", region: "KwaZulu-Natal", rating: 4, image: "images/durban.jpg" }
];

function displayDestinations(list, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = list.map(dest => `
    <div class="card">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" width="100%">
      <h3>${dest.name}</h3>
      <p>Region: ${dest.region}</p>
      <p>Rating: ${"⭐".repeat(dest.rating)}</p>
      <button onclick="saveFavorite('${dest.name}')">❤ Save</button>
    </div>
  `).join("");
}

function filterDestinations() {
  const filter = document.getElementById("regionFilter").value;
  const filtered = filter === "all"
    ? destinations
    : destinations.filter(dest => dest.region === filter);

  displayDestinations(filtered, "destinationList");
}

function saveFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${name} saved to favorites!`);
  }
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  let count = localStorage.getItem("messageCount") || 0;
  document.getElementById("messageCount").textContent = count;

  form.addEventListener("submit", e => {
    e.preventDefault();
    count++;
    localStorage.setItem("messageCount", count);
    document.getElementById("messageCount").textContent = count;
    document.getElementById("formMessage").textContent = "Message sent successfully!";
    form.reset();
  });
}

function setupMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("nav-menu");
  if (btn) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
}

function setupDarkMode() {
  const toggle = document.getElementById("darkToggle");
  if (!toggle) return;

  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
      document.body.classList.contains("dark") ? "on" : "off");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayDestinations(destinations, "featured");
  displayDestinations(destinations, "destinationList");

  const filter = document.getElementById("regionFilter");
  if (filter) {
    filter.addEventListener("change", filterDestinations);
  }

  setupContactForm();
  setupMenu();
  setupDarkMode();
});
