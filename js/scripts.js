const E_NAME = document.getElementById('name');

////////////////////
// Email obfuscation
//
const ADDR = 'aderonkeoadejare',
      DOMAIN = 'gmail.com';
document.getElementById('email').href = 'mailto' + ':' + ADDR + '@' + DOMAIN;

  // Show a specific page
  function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(link => {
      if (link.dataset.page === pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navigate to a page (updates URL hash)
  function navigateTo(pageName) {
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('active');
    
    // Update URL hash (this will trigger handleHashChange)
    window.location.hash = pageName;
  }

  // Handle browser back/forward buttons and direct hash URLs
  function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    console.log('Hash changed to:', hash); // ADD THIS LINE
    showPage(hash);
  }

  // Mobile Menu Toggle
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }

  // Scroll to Explore Section
  function scrollToExplore() {
    const exploreSection = document.getElementById('explore-work');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    console.log('Found links:', navLinks.length);
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Link clicked! Page:', this.dataset.page); // ADD THIS
        const page = this.dataset.page;
        if (page) {
          console.log('Calling navigateTo with:', page); // ADD THIS
          navigateTo(page);
        }
      });
    });
  
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  });