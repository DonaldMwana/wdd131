// ------------------ Temple Data ------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19100,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  }
];

// ------------------ DOM Elements ------------------
const container = document.querySelector("#temple-cards");
const title = document.querySelector("#page-title");

// ------------------ Functions ------------------
function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <div class="info">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// ------------------ Filtering ------------------
function filterTemples(type) {
  let filtered = [];

  switch (type) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      title.textContent = "Old Temples";
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      title.textContent = "New Temples";
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      title.textContent = "Large Temples";
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      title.textContent = "Small Temples";
      break;
    default:
      filtered = temples;
      title.textContent = "All Temples";
  }

  displayTemples(filtered);
}

// ------------------ Navigation Events ------------------
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    filterTemples(link.dataset.filter);
  });
});

// ------------------ Footer Dates ------------------
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// ------------------ Initial Load ------------------
displayTemples(temples); 