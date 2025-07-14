// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name) {
    alert('Please enter your name');
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email');
    return;
  }
  if (!message) {
    alert('Please enter a message');
    return;
  }
  
  // Simulate form submission (replace with actual submission logic, e.g., fetch to a backend)
  alert('Thank you for your message, ' + name + '!');
  this.reset();
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '↑';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Animation for Sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});