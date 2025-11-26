const E_NAME = document.getElementById('name');

////////////////////
// Email obfuscation
//
const ADDR = 'aderonkeoadejare',
      DOMAIN = 'gmail.com';
document.getElementById('email').href = 'mailto' + ':' + ADDR + '@' + DOMAIN;

const scientist = {
    certifications: ['Microsoft Azure Fundamentals (AZ-900)'],
    education: [''],
    experience: ['Chubb - Technology Associate Program'],
    projects: [''],
    skills: ['']
}

   // Page Navigation
  //  function navigateTo(pageName) {
  //   // Hide all pages
  //   const pages = document.querySelectorAll('.page');
  //   pages.forEach(page => page.classList.remove('active'));
    
  //   // Show selected page
  //   const selectedPage = document.getElementById(pageName);
  //   if (selectedPage) {
  //     selectedPage.classList.add('active');
  //   }
    
  //   // Update nav links
  //   const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  //   navLinks.forEach(link => {
  //     if (link.dataset.page === pageName) {
  //       link.classList.add('active');
  //     } else {
  //       link.classList.remove('active');
  //     }
  //   });
    
  //   // Close mobile menu
  //   document.getElementById('mobileMenu').classList.remove('active');
    
  //   // Update URL hash ← NEW!
  //   window.location.hash = pageName;

  //   // Scroll to top
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

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

  // Handle browser back/forward buttons
  // function handleHashChange() {
  //   const hash = window.location.hash.slice(1) || 'home';
  //   const pages = document.querySelectorAll('.page');
  //   pages.forEach(page => page.classList.remove('active'));
    
  //   const selectedPage = document.getElementById(hash);
  //   if (selectedPage) {
  //     selectedPage.classList.add('active');
      
  //     // Update nav links
  //     const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  //     navLinks.forEach(link => {
  //       if (link.dataset.page === hash) {
  //         link.classList.add('active');
  //       } else {
  //         link.classList.remove('active');
  //       }
  //     });
  //   }
  
  // window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  // // Add click listeners to nav links
  // document.addEventListener('DOMContentLoaded', function() {
  //   const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', function(e) {
  //       e.preventDefault();
  //       const page = this.dataset.page;
  //       if (page) {
  //         navigateTo(page);
  //       }
  //     });
  //   });
  //   // Listen for hash changes (back/forward buttons) ← NEW!
  //   window.addEventListener('hashchange', handleHashChange);
      
  //   // Load correct page on initial load ← NEW!
  //   handleHashChange();

  // });

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
  showPage(hash);
}
