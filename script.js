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

// Highlight Active Section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

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