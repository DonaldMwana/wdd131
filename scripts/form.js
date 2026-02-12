const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
];

const productSelect = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

let reviewCount = localStorage.getItem('reviewCount') || 0;

if (window.location.href.includes('review.html')) {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('review-count').textContent = `Review Count: ${reviewCount}`;
} 