/* Nails by Prisca — main.js */

// Navbar scroll + back-to-top
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Back to top
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Gallery filter
const filterBtns  = document.querySelectorAll('.gf-btn');
const galItems    = document.querySelectorAll('.gal-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galItems.forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.service-card, .price-card, .testi-card, .gal-item, .ah-item, .bcc').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObs.observe(el);
});

// Booking form
function handleBook(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Confirming…';
  btn.disabled  = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Booking Confirmed!';
    document.getElementById('bookSuccess').style.display = 'flex';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-calendar-check"></i> Confirm Booking Request';
      btn.disabled  = false;
      document.getElementById('bookSuccess').style.display = 'none';
      e.target.reset();
    }, 6000);
  }, 1600);
}
