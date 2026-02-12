let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

count++;
localStorage.setItem("reviewCount", count);

document.getElementById("reviewCount").textContent = count;

// Footer year
document.getElementById("currentyear").textContent = new Date().getFullYear();
