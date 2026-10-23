// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });
}

// Animasi Scroll Reveal (Memperbaiki layar putih)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Jika elemen masuk ke layar, tambahkan class in-view yang ada di CSS
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1 // Memicu animasi saat 10% bagian elemen sudah terlihat
});

// Ambil semua elemen dengan class 'reveal' dan mulai pantau
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));
