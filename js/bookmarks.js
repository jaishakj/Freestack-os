/* ============================================================
   FREESTACK OS — bookmarks.js
   save/remove sources · localStorage key "freestack_saved" ·
   drawer rendering · [EXPORT .txt] · live navbar count badge
   ============================================================ */

import { BADGES, findSource } from './data.js';
import { $, esc, toast } from './ui.js';

const STORAGE_KEY = 'freestack_saved';

/* localStorage with in-memory fallback (sandboxed iframes, blocked storage) */
const store = (() => {
  let mem = null;
  try {
    const probe = '__fs_probe__';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    return {
      get: () => localStorage.getItem(STORAGE_KEY),
      set: (v) => localStorage.setItem(STORAGE_KEY, v)
    };
  } catch {
    return {
      get: () => mem,
      set: (v) => { mem = v; }
    };
  }
})();

let saved = new Set();
try {
  saved = new Set(JSON.parse(store.get() || '[]'));
} catch {
  saved = new Set();
}

let onChange = () => {};

export const isSaved = (id) => saved.has(id);
export const savedSize = () => saved.size;

function persist() {
  store.set(JSON.stringify([...saved]));
}

/* ---------- save / remove ---------- */
export function toggleSave(id) {
  if (saved.has(id)) {
    saved.delete(id);
    toast('<b>[−]</b> removed from stack');
  } else {
    saved.add(id);
    toast('<b>[+]</b> added to stack');
  }
  persist();
  updateCountBadge();
  renderDrawer();
  onChange();
}

/* ---------- navbar count badge ---------- */
export function updateCountBadge() {
  const badge = $('#savedCount');
  badge.textContent = saved.size;
  badge.classList.remove('bump');
  void badge.offsetWidth; // restart the bump animation
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 250);
}

/* ---------- drawer ---------- */
export function renderDrawer() {
  const body = $('#drawerBody');

  if (!saved.size) {
    body.innerHTML =
      `<div class="drawer-empty">
         STACK EMPTY<br>hit <b>[SAVE]</b> on any card<br>
         to pin it here — survives reloads.
       </div>`;
    return;
  }

  body.innerHTML = [...saved].map((id) => {
    const found = findSource(id);
    if (!found) return '';
    const { cat, source } = found;
    return `<div class="saved-item" style="--c:${cat.accent}">
      <span class="si-dot" aria-hidden="true"></span>
      <a class="si-name" href="${source.url}" target="_blank" rel="noopener noreferrer">${esc(source.name)}</a>
      <button class="rm" data-id="${esc(id)}" aria-label="Remove ${esc(source.name)}">✕</button>
    </div>`;
  }).join('');
}

export function setDrawer(open) {
  $('#drawer').classList.toggle('open', open);
  $('#drawerToggle').setAttribute('aria-expanded', String(open));
}

export function isDrawerOpen() {
  return $('#drawer').classList.contains('open');
}

/* ---------- export as .txt ---------- */
export function exportTxt() {
  if (!saved.size) {
    toast('<b>[!]</b> stack is empty — nothing to export');
    return;
  }
  const lines = [
    'FREESTACK OS — SAVED STACK',
    'exported ' + new Date().toISOString(),
    '='.repeat(42),
    ''
  ];
  [...saved].forEach((id) => {
    const found = findSource(id);
    if (!found) return;
    const { cat, source } = found;
    lines.push(`[${cat.name.toUpperCase()}] ${source.name}`);
    lines.push(`  url    : ${source.url}`);
    lines.push(`  access : ${BADGES[source.tag].label}`);
    lines.push(`  search : ${source.bookmark}`);
    lines.push('');
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'freestack-stack.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast(`<b>[EXPORT]</b> freestack-stack.txt · ${saved.size} sources`);
}

/* ---------- wiring ---------- */
export function initBookmarks(rerenderCards) {
  onChange = rerenderCards;

  $('#drawerToggle').addEventListener('click', () => setDrawer(!isDrawerOpen()));
  $('#drawerClose').addEventListener('click', () => setDrawer(false));
  $('#exportBtn').addEventListener('click', exportTxt);

  $('#drawerBody').addEventListener('click', (e) => {
    const rm = e.target.closest('.rm');
    if (rm) toggleSave(rm.dataset.id);
  });

  $('#savedCount').textContent = saved.size;
  renderDrawer();
}
