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