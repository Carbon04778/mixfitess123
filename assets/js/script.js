/* =====================================================================
   MIXX FITNESS — SHARED SCRIPT
   Used by every page. Handles: header scroll state, mobile menu,
   scroll-reveal animations, back-to-top button.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Header scroll state + back-to-top ---------- */
  var header = document.getElementById('siteHeader');
  var topBtn = document.getElementById('topBtn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header && header.classList.add('scrolled');
    } else {
      header && header.classList.remove('scrolled');
    }
    if (window.scrollY > 600) {
      topBtn && topBtn.classList.add('show');
    } else {
      topBtn && topBtn.classList.remove('show');
    }
  });

  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Mobile menu toggle ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var primaryNav = document.getElementById('primaryNav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      primaryNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
    primaryNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        primaryNav.classList.remove('open');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

});
