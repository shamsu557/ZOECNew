// Animate the stats count
document.querySelectorAll('.stat-count').forEach(function(stat) {
    let count = 0;
    let target = parseInt(stat.getAttribute('data-count'));
    let interval = setInterval(function() {
        count += Math.ceil(target / 100);
        stat.innerText = count;
        if (count >= target) clearInterval(interval);
    }, 50);
});

// Navbar toggler and cancel button functionality
const toggler = document.getElementById('navbar-toggler');
const cancel = document.getElementById('navbar-cancel');
const navbarNav = document.getElementById('navbarNav');
const navLinks = document.querySelectorAll('.nav-link');

toggler.addEventListener('click', function () {
    // Hide toggler and show cancel button
    toggler.style.display = 'none';
    cancel.style.display = 'block';
});

cancel.addEventListener('click', function () {
    // Hide cancel button and show toggler
    toggler.style.display = 'block';
    cancel.style.display = 'none';
    navbarNav.classList.remove('show'); // Collapse the navbar
});

// Close the navbar when a nav-link is clicked (on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        toggler.style.display = 'block'; // Show toggler
        cancel.style.display = 'none'; // Hide cancel button
        navbarNav.classList.remove('show'); // Collapse the navbar
    });
});

// Back to top button functionality
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const slides = [
    { image: "nursemdb.jfif", message: "Your Trusted Partner in Construction", subtext: "We turn dreams into elegant structures, offering fast, efficient, and affordable building solutions." },
    { image: "nursemdb1.jfif", message: "ZOEC Construction Nigeria Limited", subtext: "With expansive expertise, we handle residential, commercial, industrial, and specialty projects with unmatched quality and resilience." },
    { image: "vivala1.jpeg", message: "Building a Sustainable Future", subtext: "We incorporate modern technology and sustainable materials to create long-lasting and eco-friendly structures." },
    { image: "agric.jfif", message: "Agricultural Infrastructure Development", subtext: "Supporting agricultural growth through efficient and innovative construction projects." },
    { image: "bagauda.jfif", message: "Precision & Quality", subtext: "We maintain the highest industry standards, ensuring every project is completed with excellence." },
    { image: "roadcon.jfif", message: "Reliable Road Construction", subtext: "From highways to rural roads, we deliver top-quality road construction solutions." },
    { image: "nursemdb1.jfif", message: "Innovative Engineering Solutions", subtext: "Our expertise covers a wide range of engineering projects, meeting modern infrastructure needs." }
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero-section");
const messageElement = document.getElementById("carousel-message");
const subtextElement = document.getElementById("carousel-subtext");

// Preload images to ensure smooth transitions
slides.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
});

// Function to update the background with smooth crossfade
function updateSlide() {
    const nextSlide = slides[currentIndex];

    // Apply the new background to a pseudo-element for smooth transition
    heroSection.style.backgroundImage = `linear-gradient(to right, rgba(0, 188, 212, 0.3), rgba(129, 212, 250, 0.3)), url('${nextSlide.image}')`;
    
    // Smoothly update text
    messageElement.style.opacity = "0"; // Fade out text
    subtextElement.style.opacity = "0";

    setTimeout(() => {
        messageElement.textContent = nextSlide.message;
        subtextElement.textContent = nextSlide.subtext;
        messageElement.style.opacity = "1"; // Fade in new text
        subtextElement.style.opacity = "1";
    }, 500);

    currentIndex = (currentIndex + 1) % slides.length;
}

// Change slide every 5 seconds
setInterval(updateSlide, 5000);
const ceoImages = ["ceo.jpg", "ceo.jpg", "ceo.jpg"]; // Add multiple CEO images
let currentImageIndex = 0;
const ceoImageElement = document.getElementById("ceo-image");

function changeCeoImage() {
    currentImageIndex = (currentImageIndex + 1) % ceoImages.length;
    ceoImageElement.style.opacity = "0"; // Fade out

    setTimeout(() => {
        ceoImageElement.src = ceoImages[currentImageIndex]; // Change image
        ceoImageElement.style.opacity = "1"; // Fade in
    }, 500);
}

setInterval(changeCeoImage, 3000); // Change CEO image every 3 seconds
