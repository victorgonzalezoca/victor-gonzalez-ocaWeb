let isEnglish = false;

document.addEventListener('DOMContentLoaded', () => {

  /* ===== IDIOMA ===== */
  function toggleLang() {
    document.querySelectorAll('.es').forEach(el => {
      el.style.display = isEnglish ? 'block' : 'none';
      el.style.opacity = isEnglish ? '1' : '0';
    });

    document.querySelectorAll('.en').forEach(el => {
      el.style.display = isEnglish ? 'none' : 'block';
      el.style.opacity = isEnglish ? '0' : '1';
    });

    document.querySelector('.lang-switch').innerText = isEnglish ? 'EN' : 'ES';
    isEnglish = !isEnglish;
  }

  window.toggleLang = toggleLang;

  // Idioma inicial: español
  document.querySelectorAll('.es').forEach(el => {
    el.style.display = 'block';
    el.style.opacity = '1';
  });
  document.querySelectorAll('.en').forEach(el => {
    el.style.display = 'none';
    el.style.opacity = '0';
  });

  document.querySelector('.lang-switch').innerText = 'EN';
  isEnglish = false;

  /* ===== DARK MODE ===== */
  function toggleDark() {
    document.body.classList.toggle('dark');
    document.querySelector('.dark-switch').innerText =
      document.body.classList.contains('dark') ? '☀️' : '🌙';
  }

  window.toggleDark = toggleDark;

  /* ===== ACORDEÓN EXPERIENCIA / FORMACIÓN ===== */
  document.querySelectorAll('.job-header').forEach(header => {
    header.addEventListener('click', () => {
      const job = header.parentElement;
      const body = job.querySelector('.job-body');

      job.classList.toggle('open');

      if (job.classList.contains('open')) {
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = '0px';
      }
    });
  });

  /* ===== CONTACTO SUPERIOR ===== */
  const toggleContactBtn = document.getElementById('toggle-contact');
  const topContact = document.querySelector('.top-contact');

  if (toggleContactBtn && topContact) {
    toggleContactBtn.addEventListener('click', () => {
      topContact.classList.toggle('hidden');
    });
  }

});