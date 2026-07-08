/* ============================================================
   FREESTACK OS — app.js (entry point)
   init order: sidebar → default category → stats → clock → events
   ============================================================ */

import { DATA } from './data.js';
import {
  $, renderSidebar, setActiveCategory, updateAccentColor,
  renderCards, transitionGrid, moveIndicator,
  animateStatsBar, startClock, initAtmosphere,
  toggleModal, isModalOpen, toast, copyTerm
} from './ui.js';
import {
  initSearch, filterSources, getQuery, clearSearch,
  focusSearch, updateResultCount
} from './search.js';
import {
  initBookmarks, isSaved, toggleSave, setDrawer, isDrawerOpen
} from './bookmarks.js';

/* ---------- state ---------- */
let activeCat = 0;

/* ---------- render pipeline ---------- */
function rerenderCards() {
  const cat = DATA[activeCat];
  const shown = filterSources(cat.sources);
  renderCards(shown, cat, isSaved, getQuery());
  updateResultCount(shown.length);
}

function switchCategory(i, announce = true) {
  if (i === activeCat && announce) return;
  activeCat = i;
  const cat = DATA[i];

  updateAccentColor(i);
  setActiveCategory(i);
  transitionGrid(rerenderCards);

  if (announce) {
    toast(`<b>&gt;</b> loaded ${cat.name} — ${cat.sources.length} sources`);
  }
}

/* ---------- keyboard shortcuts ---------- */
function initShortcuts() {
  document.addEventListener('keydown', (e) => {
    const inField = /input|textarea|select/i.test(document.activeElement.tagName);

    if (e.key === 'Escape') {
      if (isModalOpen()) { toggleModal(false); return; }
      if (inField && getQuery()) { clearSearch(); return; }
      if (inField) { document.activeElement.blur(); return; }
      if (isDrawerOpen()) { setDrawer(false); return; }
      if (getQuery()) clearSearch();
      return;
    }

    if (inField) return;

    if (e.key === '/') { e.preventDefault(); focusSearch(); return; }
    if (e.key === '?') { e.preventDefault(); toggleModal(true); return; }
    if (e.key.toLowerCase() === 's') { setDrawer(!isDrawerOpen()); return; }
    if (/^[1-5]$/.test(e.key)) { switchCategory(+e.key - 1); }
  });

  // click outside the modal panel closes it
  $('#modalScrim').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) toggleModal(false);
  });
}

/* ---------- card grid delegation (copy / save) ---------- */
function initGridEvents() {
  $('#grid').addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) { copyTerm(copyBtn.dataset.term, copyBtn); return; }

    const saveBtn = e.target.closest('.save-btn');
    if (saveBtn) toggleSave(saveBtn.dataset.id);
  });
}

/* ============================================================
   boot — exact init order from the spec
   ============================================================ */
function init() {
  initAtmosphere();                       // canvas noise + (CSS) scanline
  renderSidebar(switchCategory);          // 1. render sidebar
  updateAccentColor(0);                   // 2. render default category
  setActiveCategory(0);
  rerenderCards();
  animateStatsBar();                      // 3. animate stats
  startClock();                           // 4. start clock
  initSearch(rerenderCards);              // 5. attach all listeners
  initBookmarks(rerenderCards);
  initGridEvents();
  initShortcuts();

  // indicator position depends on final layout
  window.addEventListener('load', () => moveIndicator(activeCat));
  window.addEventListener('resize', () => moveIndicator(activeCat));
}

let booted = false;
function boot() {
  if (booted) return;
  booted = true;
  init();
}
document.addEventListener('DOMContentLoaded', boot);
// modules are deferred, so the DOM may already be ready:
if (document.readyState !== 'loading') boot();
