/* ============================================================
   FREESTACK OS — search.js
   real-time filtering by name + best-for text
   result count · ✕ clear button · empty state via ui.renderCards
   ============================================================ */

import { $ } from './ui.js';

let query = '';
let onChange = () => {};

export const getQuery = () => query;

/* filter a category's sources against the live query */
export function filterSources(sources) {
  const q = query.trim().toLowerCase();
  if (!q) return sources;
  return sources.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.best.toLowerCase().includes(q)
  );
}

/* "X results for 'query'" line under the search bar */
export function updateResultCount(shown) {
  const el = $('#resultCount');
  const q = query.trim();
  if (!q) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  el.innerHTML = `<b>${shown}</b> result${shown === 1 ? '' : 's'} for &lsquo;${escapeHtml(q)}&rsquo;`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function clearSearch() {
  const input = $('#search');
  query = '';
  input.value = '';
  $('#searchClear').hidden = true;
  updateResultCount(0);
  onChange();
}

export function focusSearch() {
  const input = $('#search');
  input.focus();
  input.select();
}

/* wire up input + clear button; callback fires on every change */
export function initSearch(callback) {
  onChange = callback;
  const input = $('#search');
  const clearBtn = $('#searchClear');

  input.addEventListener('input', () => {
    query = input.value;
    clearBtn.hidden = query.length === 0;
    onChange();
  });

  clearBtn.addEventListener('click', () => {
    clearSearch();
    input.focus();
  });
}
