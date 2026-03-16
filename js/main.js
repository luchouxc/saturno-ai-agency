/* ============================================
   SATURNO CREATIVO — main.js
   ============================================ */

(() => {
  'use strict';

  /* ── Custom cursor ──────────────────────── */
  const dot  = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (dot && ring) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    };
    tick();

    document.querySelectorAll('a, button, .svc-card, .client-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
  }

  /* ── Nav scroll state ───────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ────────────────────────── */
  const ham   = document.getElementById('nav-ham');
  const mmenu = document.getElementById('mobile-menu');
  if (ham && mmenu) {
    ham.addEventListener('click', () => {
      mmenu.classList.toggle('open');
      document.body.style.overflow = mmenu.classList.contains('open') ? 'hidden' : '';
    });
    mmenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mmenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll reveal ──────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  /* ── Active nav link ────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + id
            ? 'var(--text-bright)'
            : 'var(--text-mid)';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => sectionIO.observe(s));

  /* ── Year in footer ─────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
