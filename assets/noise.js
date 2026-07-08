/* ============================================================
   FREESTACK OS — assets/noise.js
   canvas-based animated film grain
   fixed to viewport · z-index 0 · opacity 0.04 (set in main.css)
   regenerates every 100ms · respects prefers-reduced-motion
   ============================================================ */

export function initNoise(canvasId = 'noise') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // render at half resolution — grain reads identically, costs 4x less
  function resize() {
    canvas.width = Math.max(1, Math.floor(window.innerWidth / 2));
    canvas.height = Math.max(1, Math.floor(window.innerHeight / 2));
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    const img = ctx.createImageData(canvas.width, canvas.height);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }

  draw(); // static frame even with reduced motion (CSS hides it anyway)
  if (!reduced) {
    setInterval(draw, 100);
  }
}
