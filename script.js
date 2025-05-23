document.addEventListener('DOMContentLoaded', () => {
    // Basic slider functionality (you'd need more advanced logic for a real one)
    const heroSliderImages = document.querySelectorAll('.hero-slider img');
    let currentSlide = 0;

    function showSlide(index) {
        heroSliderImages.forEach((img, i) => {
            img.classList.remove('active');
            // For a real slider, you'd manage opacity, position, etc.
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    // This part would ideally be an actual rotating slider
    // For now, it just shows the first image, as all images are in the HTML
    if (heroSliderImages.length > 0) {
        showSlide(0);
    }

    // Add more JavaScript for interactive elements like search, cart, etc.
    // Example: simple alert for search button
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', () => {
        alert('Mencari: ' + searchInput.value);
    });

    // Example: add to cart button (would require backend for real functionality)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produk ditambahkan ke keranjang!');
        });
    });
});
