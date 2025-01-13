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
    const toggler = document.getElementById('navbar-toggler');
const cancel = document.getElementById('navbar-cancel');

toggler.addEventListener('click', function() {
    // Hide toggler and show cancel button
    toggler.style.display = 'none';
    cancel.style.display = 'block';
});

cancel.addEventListener('click', function() {
    // Hide cancel button and show toggler
    toggler.style.display = 'block';
    cancel.style.display = 'none';
});
// Back to top button functionality
window.onscroll = function() {scrollFunction()};

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
    // Back to top button functionality
 window.onscroll = function() {scrollFunction()};

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
    