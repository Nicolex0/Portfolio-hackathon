// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        if (sectionId.startsWith('#')) {
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
            // Collapse nav after clicking on mobile
            if (window.innerWidth <= 768) {
                document.querySelector('nav').style.height = '50px';
            }
        } else {
            window.open(sectionId, '_blank');
        }
    });
});

// Initialize mobile settings
window.addEventListener('DOMContentLoaded', () => {
    // Hide project details on mobile
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.more-details').forEach(details => {
            details.style.display = 'none';
        });
        
        // Set initial navbar state
        const nav = document.querySelector('nav');
        nav.style.height = '50px';
        nav.style.overflow = 'hidden';
    }
});

// Highlight Active Section and Handle Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('nav');

    // Compact navbar when scrolling down
    if (window.scrollY > 100 && window.innerWidth <= 768) {
        nav.style.height = '50px';
    }

    // Active section detection
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

// Dark Mode Toggle
const toggleIcon = document.getElementById('dark-mode-toggle');
toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
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

// Mobile Navbar Touch Handling
let lastTap = 0;
const nav = document.querySelector('nav');

nav.addEventListener('touchstart', function(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
        // Double tap to toggle
        this.style.height = this.style.height === '50px' ? 'auto' : '50px';
        e.preventDefault();
    }
    lastTap = currentTime;
});

// Auto-collapse when clicking outside
document.addEventListener('touchstart', function(e) {
    if (!nav.contains(e.target) && window.scrollY > 100 && window.innerWidth <= 768) {
        nav.style.height = '50px';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768) {
        if (window.scrollY > 100) {
            nav.style.height = '50px';
        }
    } else {
        nav.style.height = 'auto';
    }
});