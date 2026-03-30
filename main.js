// main.js — Nails by Prisca homepage JS

document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  toggle?.addEventListener('click', () => nav?.classList.toggle('open'));

  // Gallery teaser — load first 6 images
  const teaserGrid = document.getElementById('galleryTeaser');
  if (teaserGrid && window.NBP) {
    const { BASE, IMAGES } = window.NBP;
    const shown = IMAGES.slice(0, 6);
    teaserGrid.innerHTML = '';
    shown.forEach(file => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = BASE + file;
      img.alt = 'Nails by Prisca';
      img.loading = 'lazy';
      item.appendChild(img);
      teaserGrid.appendChild(item);
    });
  }

  // Smooth active nav
  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if (l.getAttribute('href') === location.pathname.split('/').pop()) {
      l.classList.add('active');
    }
  });

  // Header scroll effect
  const header = document.getElementById('top')?.closest('.site-header') || document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
});
