
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;