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
