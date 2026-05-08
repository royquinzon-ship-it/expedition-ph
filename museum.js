/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HAMBURGER MENU ── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.querySelector('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
    else { el.textContent = Math.floor(current).toLocaleString(); }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));

/* ── MODAL ── */
function _populateModal(src, tag, titleHTML, desc, statusText, statusClass, funfact) {
  document.getElementById('modal-img').src = src;
  document.getElementById('modal-tag').textContent = tag || '';
  document.getElementById('modal-title').innerHTML = titleHTML || '';
  document.getElementById('modal-desc').textContent = desc || '';
  const statusEl = document.getElementById('modal-status');
  if (statusEl) {
    if (statusText) {
      statusEl.textContent = statusText;
      statusEl.className = 'card-status ' + (statusClass || '');
    } else {
      statusEl.className = 'modal-status-hidden';
    }
  }
  const funfactEl = document.getElementById('modal-funfact');
  if (funfactEl) {
    if (funfact) {
      document.getElementById('modal-funfact-text').textContent = funfact;
      funfactEl.className = 'modal-card-funfact';
    } else {
      funfactEl.className = 'modal-card-funfact modal-status-hidden';
    }
  }
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCard(el) {
  const img = el.querySelector('img');
  const tag = el.querySelector('.card-tag') || el.querySelector('.featured-label');
  const title = el.querySelector('.card-title') || el.querySelector('.featured-name');
  const desc = el.querySelector('.card-desc') || el.querySelector('.featured-desc');
  const status = el.querySelector('.card-status');
  const src = img ? img.src.replace(/\/\d+\/\d+$/, '/1200/800') : '';
  _populateModal(
    src,
    tag ? tag.textContent : '',
    title ? title.innerHTML : '',
    desc ? desc.textContent : '',
    status ? status.textContent : '',
    status ? status.className.replace('card-status', '').trim() : '',
    el.dataset.funfact || ''
  );
}

function openModal(src, caption) {
  _populateModal(src, '', caption || '', '', '', '', '');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
});

/* ── SOUND ── */
let playing = false;

function _setBtn(isPlaying) {
  const btn = document.getElementById('audio-btn');
  if (!btn) return;
  btn.textContent = isPlaying ? 'Now Playing' : 'Ambient Music';
  isPlaying ? btn.classList.add('playing') : btn.classList.remove('playing');
}

// Resume music across pages if user opted in this session
window.addEventListener('DOMContentLoaded', () => {
  const s = document.getElementById('sound');
  if (!s) return;
  s.volume = 0.4;
  if (sessionStorage.getItem('musicPlaying') === 'true') {
    s.play().then(() => { playing = true; _setBtn(true); }).catch(() => {
      sessionStorage.removeItem('musicPlaying');
    });
  }
});

function toggleSound() {
  const s = document.getElementById('sound');
  if (!s) return;
  if (!playing) {
    s.volume = 0.4;
    s.play().then(() => {
      playing = true;
      _setBtn(true);
      sessionStorage.setItem('musicPlaying', 'true');
    });
  } else {
    s.pause();
    playing = false;
    _setBtn(false);
    sessionStorage.removeItem('musicPlaying');
  }
}

/* ── FILTER ── */
function filterCards(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.filterable').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
