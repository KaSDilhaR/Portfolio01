// ─── Year in footer ────────────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Mobile nav toggle ─────────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Active nav link on scroll ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveLink() {
  const scrollY = window.scrollY + 100;
  let current   = '';

  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ─── Contact form ──────────────────────────────────────────────────────────
const contactForm    = document.getElementById('contactForm');
const formFeedback   = document.getElementById('formFeedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.style.color = '#f87171';
      formFeedback.textContent = 'Please fill in all fields.';
      return;
    }

    // Placeholder: replace with your actual form submission logic
    formFeedback.style.color = '#4ade80';
    formFeedback.textContent = `Thanks, ${name}! I'll get back to you soon.`;
    contactForm.reset();
  });
}

