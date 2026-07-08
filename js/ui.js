/* ============================================================
   FREESTACK OS — ui.js
   DOM rendering · accent swap · stats count-up · live clock ·
   scanline/noise init · shortcut modal · toast system
   ============================================================ */

import { DATA, BADGES, TOTAL_SOURCES, sourceId } from './data.js';
import { initNoise } from '../assets/noise.js';

/* ---------- tiny DOM helpers ---------- */
export const $ = (sel) => document.querySelector(sel);
export const $$ = (sel) => [...document.querySelectorAll(sel)];

export const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ============================================================
   accent color — swaps the global --accent via theme class
   ============================================================ */
export function updateAccentColor(catIndex) {
  const cat = DATA[catIndex];
  DATA.forEach((c) => document.body.classList.remove(c.theme));
  document.body.classList.add(cat.theme);
}

/* ============================================================
   sidebar + navbar tabs
   ============================================================ */
export function renderSidebar(onSelect) {
  const catList = $('#catList');
  const navTabs = $('#navTabs');

  navTabs.innerHTML = DATA.map((c, i) =>
    `<button class="tab" role="tab" data-i="${i}">
       <span class="key">${i + 1}</span>${esc(c.name)}
     </button>`
  ).join('');

  DATA.forEach((c, i) => {
    const item = document.createElement('button');
    item.className = 'cat-item';
    item.dataset.i = i;
    item.style.setProperty('--c', c.accent);
    item.innerHTML =
      `<span class="dot" aria-hidden="true"></span>` +
      `${c.glyph} ${esc(c.name)}<span class="cnt">${c.sources.length}</span>`;
    catList.appendChild(item);
  });

  navTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (tab) onSelect(+tab.dataset.i);
  });
  catList.addEventListener('click', (e) => {
    const item = e.target.closest('.cat-item');
    if (item) onSelect(+item.dataset.i);
  });
}

export function setActiveCategory(catIndex) {
  $$('.tab').forEach((t, i) => t.classList.toggle('active', i === catIndex));
  $$('.cat-item').forEach((t, i) => t.classList.toggle('active', i === catIndex));

  const cat = DATA[catIndex];
  $('#catTitle .glyph').textContent = cat.glyph;
  $('#catTitle .ct-text').textContent = cat.name;
  $('#heroEyebrow').textContent =
    `// ZERO-SUBSCRIPTION PROTOCOL v2.6 :: ${cat.id.toUpperCase()}`;

  moveIndicator(catIndex);
}

/* spring-eased sidebar active indicator */
export function moveIndicator(catIndex) {
  const indicator = $('#catIndicator');
  const items = $$('.cat-item');
  const el = items[catIndex];
  if (!el || !indicator) return;
  indicator.style.top = el.offsetTop + 'px';
  indicator.style.height = el.offsetHeight + 'px';
}

/* ============================================================
   card grid — staggered reveal (index * 60ms)
   ============================================================ */
export function renderCards(sources, cat, isSaved, query = '') {
  const grid = $('#grid');

  if (!sources.length) {
    grid.innerHTML =
      `<div class="no-results">
         NO SIGNAL — nothing in <b>${esc(cat.name)}</b> matches
         &ldquo;${esc(query)}&rdquo;.<br>Press <b>Esc</b> to clear the filter.
       </div>`;
    return;
  }

  grid.innerHTML = sources.map((s, idx) => {
    const badge = BADGES[s.tag];
    const id = sourceId(s);
    const saved = isSaved(id);
    const num = String(cat.sources.indexOf(s) + 1).padStart(2, '0');
    return `<article class="card" style="animation-delay:${idx * 60}ms">
      <div class="card-top">
        <a class="card-name" href="${s.url}" target="_blank" rel="noopener noreferrer">
          ${esc(s.name)}<span class="ext" aria-hidden="true">↗</span>
        </a>
        <span class="badge ${badge.cls}">${badge.label}</span>
      </div>
      <p class="card-desc"><b>Best for:</b> ${esc(s.best)}</p>
      <div class="term-row">
        <span class="term" title="${esc(s.bookmark)}">${esc(s.bookmark)}</span>
        <button class="mini-btn copy-btn" data-term="${esc(s.bookmark)}">[COPY]</button>
      </div>
      <div class="card-foot">
        <span class="cat-tag">${cat.glyph} ${esc(cat.id)}//${num}</span>
        <button class="save-btn ${saved ? 'saved' : ''}" data-id="${esc(id)}">
          ${saved ? '[SAVED ✓]' : '[SAVE]'}
        </button>
      </div>
    </article>`;
  }).join('');
}

/* fade grid out, rerender, cards stagger back in */
export function transitionGrid(rerender) {
  const grid = $('#grid');
  grid.classList.add('leaving');
  setTimeout(() => {
    rerender();
    grid.classList.remove('leaving');
  }, 160);
}

/* ============================================================
   stats bar count-up
   ============================================================ */
function countUp(el, target, duration = 1100) {
  el.classList.add('counting');
  const t0 = performance.now();
  const step = (now) => {
    const k = Math.min(1, (now - t0) / duration);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
    else el.classList.remove('counting');
  };
  requestAnimationFrame(step);
}

export function animateStatsBar() {
  countUp($('#statSources'), TOTAL_SOURCES);
  countUp($('#statCats'), DATA.length);
  $('#statSubs').textContent = '0'; // stays proudly at zero
}

/* ============================================================
   live clock — HH:MM:SS, blinking colons
   ============================================================ */
export function startClock() {
  const clock = $('#clock');
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const d = new Date();
    clock.innerHTML =
      `${pad(d.getHours())}<span class="colon">:</span>` +
      `${pad(d.getMinutes())}<span class="colon">:</span>` +
      `${pad(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   atmosphere — scanline is pure CSS; noise needs the canvas
   ============================================================ */
export function initAtmosphere() {
  initNoise('noise');
}

/* ============================================================
   keyboard shortcut modal
   ============================================================ */
export function toggleModal(force) {
  const scrim = $('#modalScrim');
  const open = force !== undefined ? force : !scrim.classList.contains('open');
  scrim.classList.toggle('open', open);
  return open;
}

export function isModalOpen() {
  return $('#modalScrim').classList.contains('open');
}

/* ============================================================
   toast system — stacked · bottom-right · 2.5s auto-dismiss
   category-colored border comes from the live --accent var
   ============================================================ */
export function toast(html) {
  const wrap = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = html;
  wrap.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    el.addEventListener('animationend', () => el.remove(), { once: true });
    // safety net in case animations are disabled
    setTimeout(() => el.remove(), 400);
  }, 2500);
}

/* ============================================================
   clipboard with legacy fallback — button flips state for 2s
   ============================================================ */
export function copyTerm(text, btn) {
  const done = () => {
    toast(`<b>[COPIED]</b> ${esc(text)}`);
    if (btn) {
      btn.textContent = '[COPIED ✓]';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '[COPY]';
        btn.classList.remove('copied');
      }, 2000);
    }
  };
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); }
    catch { toast('<b>[ERROR]</b> clipboard blocked — copy manually'); }
    ta.remove();
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else {
    fallback();
  }
}
