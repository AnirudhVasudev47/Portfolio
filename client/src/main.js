// Detect when sections enter viewport to trigger animations
function handleSectionVisibility() {
  const sections = document.querySelectorAll('.section');
  
  const revealSection = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', revealSection);
  window.addEventListener('load', revealSection);
}

// Toggle mobile menu
function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileMenuButton.contains(event.target) && 
          !mobileMenu.contains(event.target) && 
          !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// Handle navbar scroll behavior
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow');
        navbar.classList.add('bg-opacity-95');
      } else {
        navbar.classList.remove('shadow');
        navbar.classList.remove('bg-opacity-95');
      }
    });
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenu = document.getElementById('mobile-menu');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Hide mobile menu after clicking a link
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// Handle dark/light mode toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const html = document.documentElement;
  
  const toggleDarkMode = () => {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  };
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
  }
  
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark-mode');
  }
}

// Form validation
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // In a real implementation, this would submit to a server
      window.location.href = `mailto:anirudh040799@gmail.com?subject=Contact from ${name}&body=${message}`;
      contactForm.reset();
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  handleSectionVisibility();
  setupMobileMenu();
  setupNavbarScroll();
  setupSmoothScrolling();
  setupThemeToggle();
  setupContactForm();
});
