/**
 * RISE ARC - Premium Agency Website
 * Main JavaScript File
 * Handles all interactivity, animations, and dynamic content
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initScrollAnimations();
  renderServices();
  renderClients();
  renderFounder();
  initContactForm();
  initScrollToTop();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.navbar-menu a');

  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Updates the active navigation link based on scroll position
 */
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-menu a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// ============================================
// DYNAMIC CONTENT RENDERING
// ============================================

/**
 * Renders services cards from data.js
 */
function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  
  if (!servicesGrid || !siteData.services) return;

  servicesGrid.innerHTML = siteData.services.map((service, index) => `
    <div class="service-card reveal" style="transition-delay: ${index * 0.1}s">
      <span class="service-icon">${service.icon}</span>
      <h4>${service.title}</h4>
      <p>${service.description}</p>
    </div>
  `).join('');

  // Reinitialize scroll animations for new elements
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
}

/**
 * Renders client cards from data.js
 */
function renderClients() {
  const clientsGrid = document.getElementById('clients-grid');
  
  if (!clientsGrid || !siteData.clients) return;

  clientsGrid.innerHTML = siteData.clients.map((client, index) => `
    <div class="client-card reveal" style="transition-delay: ${index * 0.1}s">
      <div class="client-logo">${client.initial}</div>
      <h4>${client.name}</h4>
      <p>${client.industry}</p>
    </div>
  `).join('');

  // Reinitialize scroll animations for new elements
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
}

/**
 * Renders founder credentials from data.js
 */
function renderFounder() {
  const credentialsList = document.getElementById('founder-credentials');
  
  if (!credentialsList || !siteData.founder) return;

  credentialsList.innerHTML = siteData.founder.credentials.map(credential => `
    <li>${credential}</li>
  `).join('');
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate form
    if (!name || !email || !message) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Hello RISE ARC!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/91${siteData.brand.phone}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    showToast('Redirecting to WhatsApp...', 'success');
    
    // Reset form
    form.reset();
  });
}

/**
 * Shows a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast (success/error)
 */
function showToast(message, type = 'success') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);

  // Hide toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// SCROLL TO TOP
// ============================================

function initScrollToTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: 16px 32px;
    background: var(--charcoal);
    border: 1px solid var(--grey);
    border-radius: 8px;
    color: var(--white);
    font-size: 0.9375rem;
    z-index: 10000;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  
  .toast-success {
    border-color: var(--gold);
    background: linear-gradient(135deg, var(--charcoal), rgba(201, 169, 98, 0.1));
  }
  
  .toast-error {
    border-color: #ef4444;
    background: linear-gradient(135deg, var(--charcoal), rgba(239, 68, 68, 0.1));
  }
`;
document.head.appendChild(toastStyles);


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !phone || !service) {
      alert("Please fill all fields");
      return;
    }

    // ✅ YOUR WhatsApp number (NO +, NO spaces)
    const whatsappNumber = "917981634286";

    const message = `Hi, I'm ${name}. I'm interested in ${service}. Can we have a quick call?`;

    const whatsappURL =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
});


