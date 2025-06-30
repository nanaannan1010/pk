// This file contains JavaScript functionality for "The PERICLES Hotel" website.

// Function to initialize the image slider
function initImageSlider() {
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('img');
        const totalImages = images.length;

        // Hide all images except the first one
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });

        // Function to show the next image
        function showNextImage() {
            images[currentIndex].style.display = 'none'; // Hide current image
            currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
            images[currentIndex].style.display = 'block'; // Show next image
        }

        // Set interval for automatic image sliding
        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });
}

// Function to validate the booking form
function validateBookingForm() {
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error'); // Add error class for styling
            } else {
                field.classList.remove('error'); // Remove error class if valid
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
            alert('Please fill in all required fields.');
        }
    });
}

// Function to smooth scroll to sections
function smoothScroll() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Initialize functions on window load
window.onload = function() {
    initImageSlider();
    validateBookingForm();
    smoothScroll();
};