const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-link');
const contactUsBtn = document.querySelector('#contact-us-btn');

// Open mobile menu
menuOpenButton.addEventListener('click', () => {
    document.body.classList.add("show-mobile-menu");
});

// Close mobile menu
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('#menu-open-button')) {
        document.body.classList.remove("show-mobile-menu");
    }
});

// Function to handle smooth scrolling to target section
function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        // Smooth scroll to target
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Close mobile menu when clicking navigation links and handle smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close mobile menu
        document.body.classList.remove('show-mobile-menu');
        
        // Get target section
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Handle contact us button click
contactUsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('#contact');
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) {
        scrollToSection(hash);
    }
});

// Initialize Swiper 
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  
  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
