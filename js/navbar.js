// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default behavior
    event.preventDefault();

    // Get the href value of the clicked link
    const href = link.getAttribute('href');

    // Load the content of the respective page into the container
    fetch(href)
      .then(response => response.text())
      .then(html => {
        document.getElementById('container').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  });
});