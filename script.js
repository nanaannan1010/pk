// Welcome alert on page load
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Five Star Hotel! Enjoy your stay.");
    startImageSlider();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
        });
    });

    // Example of sorting cards by price
    const container = document.getElementById("card-container");
    const sortByPrice = () => {
        const sortedCards = Array.from(cards).sort((a, b) => {
            return a.dataset.price - b.dataset.price;
        });
        sortedCards.forEach(card => container.appendChild(card));
    };

    // Uncomment to sort cards by price on page load
    // sortByPrice();
});

// Simple auto-slider for image sliders
document.querySelectorAll('.image-slider').forEach(slider => {
    let imgs = slider.querySelectorAll('img');
    let idx = 0;
    setInterval(() => {
        imgs.forEach((img, i) => img.style.display = i === idx ? 'block' : 'none');
        idx = (idx + 1) % imgs.length;
    }, 2500);
    // Show only the first image initially
    imgs.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');
});

// Booking Form Validation
const bookingForm = document.querySelector(".booking-form");
if (bookingForm)
    bookingForm.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;

        if (!name || !email || !checkin || !checkout) {
            alert("Please fill out all required fields.");
            event.preventDefault();
        } else if (new Date(checkin) >= new Date(checkout)) {
            alert("Check-out date must be after check-in date.");
            event.preventDefault();
        } else {
            alert("Your booking request has been successfully submitted!");
        }
    });

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});