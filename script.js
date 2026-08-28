/* =========================================================
   SCRIPT.JS
   Seluruh interaktivitas halaman portofolio:
   1. Tahun otomatis di footer
   2. Toggle menu mobile (hamburger)
   3. Smooth scrolling untuk semua link anchor (#)
   4. Animasi reveal saat section masuk viewport
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------
  // 1. Tahun otomatis di footer
  // ---------------------------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------------------------------------------------------
  // 2. Toggle menu mobile (hamburger)
  // ---------------------------------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden', isHidden);
      iconClose.classList.toggle('hidden', !isHidden);
      menuBtn.setAttribute('aria-expanded', String(isHidden));
    });
  }

  // ---------------------------------------------------------
  // 3. Smooth scrolling + auto-close menu saat link diklik
  // ---------------------------------------------------------
  document.querySelectorAll('.nav-link, a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        closeMobileMenu();
      }
    });
  });

  // ---------------------------------------------------------
  // 4. Animasi reveal saat section masuk viewport
  // ---------------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
});
