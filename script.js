// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        if (sectionId.startsWith('#')) {
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open(sectionId, '_blank');
        }
    });
});

// Responsive Design: Show/Hide Details on MobileAdd responsive
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.more-details').forEach(details => {
            details.style.display = 'none';
        });

        // Initialize compact navbar on mobile
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.height = '50px';
        }
    }
});

// Highlight Active Section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');

    // Compact navbar when scrolling
    if (window.scrollY > 100) {
        nav.style.height = '50px';
        nav.style.overflow = 'hidden';
    } else {
        nav.style.height = 'auto';
    }

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Project Card Expansion
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
        const moreDetails = button.previousElementSibling;
        if (moreDetails.style.display === 'none' || moreDetails.style.display === '') {
            moreDetails.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            moreDetails.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

// Dark Mode Toggle with Icon
const toggleIcon = document.getElementById('dark-mode-toggle');
toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle between sun and moon icons based on dark mode state
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! (This is a demo - no real submission yet)');
    e.target.reset();
});

// Touch support for mobile navbar
let navTapTimer;
document.querySelector('nav').addEventListener('touchstart', function() {
    this.style.height = 'auto';
    clearTimeout(navTapTimer);
});

document.querySelector('nav').addEventListener('touchend', function() {
    navTapTimer = setTimeout(() => {
        if (window.scrollY > 100) {
            this.style.height = '50px';
        }
    }, 2000); // Collapse after 2 seconds
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.height = '50px';
        }
    } else {
        document.querySelector('nav').style.height = 'auto';
    }
});