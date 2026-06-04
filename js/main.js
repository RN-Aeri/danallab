// DANAL Lab — main.js
// Language toggle + mobile menu + active nav

(function () {
  const STORAGE_KEY = 'danal-lang';
  const html = document.documentElement;

  // Restore language preference
  const savedLang = localStorage.getItem(STORAGE_KEY);
  if (savedLang === 'en' || savedLang === 'ko') {
    html.setAttribute('lang', savedLang);
  }

  // Language toggle
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-toggle');
    if (!btn) return;
    const cur = html.getAttribute('lang') || 'ko';
    const next = cur === 'ko' ? 'en' : 'ko';
    html.setAttribute('lang', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateToggleLabel();
  });

  function updateToggleLabel() {
    const cur = html.getAttribute('lang') || 'ko';
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = cur === 'ko' ? 'EN' : '한';
    });
  }

  // Mobile menu
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.mobile-menu-btn');
    if (!btn) return;
    const nav = document.querySelector('nav.main-nav');
    if (nav) nav.classList.toggle('open');
  });

  // Active nav highlighting
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  document.addEventListener('DOMContentLoaded', updateToggleLabel);
})();
