const TOKEN_CSS = `
:root {
  /* ── Primitives ──────────────────────────────────────── */
  --ds-p-zinc-50:  #fafafa;
  --ds-p-zinc-100: #f4f4f5;
  --ds-p-zinc-700: #3f3f46;
  --ds-p-zinc-800: #27272a;
  --ds-p-zinc-900: #18181b;
  --ds-p-zinc-950: #09090b;
  --ds-p-violet-50:  #f5f3ff;
  --ds-p-violet-100: #ede9fe;
  --ds-p-violet-500: #8b5cf6;
  --ds-p-violet-600: #7c3aed;
  --ds-p-violet-700: #6d28d9;
  --ds-p-red-400:  #f87171;
  --ds-p-red-500:  #ef4444;
  --ds-p-red-600:  #dc2626;
  --ds-p-red-700:  #b91c1c;
  --ds-p-green-400: #4ade80;
  --ds-p-green-500: #22c55e;
  --ds-p-amber-400: #fbbf24;
  --ds-p-neutral-0:   #ffffff;
  --ds-p-neutral-50:  #f9fafb;
  --ds-p-neutral-100: #f3f4f6;
  --ds-p-neutral-200: #e5e7eb;
  --ds-p-neutral-300: #d1d5db;
  --ds-p-neutral-400: #9ca3af;
  --ds-p-neutral-500: #6b7280;
  --ds-p-neutral-600: #4b5563;
  --ds-p-neutral-700: #374151;
  --ds-p-neutral-800: #1f2937;
  --ds-p-neutral-900: #111827;
  --ds-p-neutral-950: #030712;

  /* ── Color: Semantic ─────────────────────────────────── */
  --ds-color-surface-default:   var(--ds-p-neutral-0);
  --ds-color-surface-subtle:    var(--ds-p-neutral-50);
  --ds-color-surface-raised:    var(--ds-p-neutral-0);
  --ds-color-surface-overlay:   var(--ds-p-neutral-0);
  --ds-color-border-default:    var(--ds-p-neutral-200);
  --ds-color-border-strong:     var(--ds-p-neutral-300);
  --ds-color-border-focus:      var(--ds-p-violet-500);
  --ds-color-text-primary:      var(--ds-p-neutral-900);
  --ds-color-text-secondary:    var(--ds-p-neutral-600);
  --ds-color-text-disabled:     var(--ds-p-neutral-400);
  --ds-color-text-inverse:      var(--ds-p-neutral-0);
  --ds-color-text-on-action:    var(--ds-p-neutral-0);
  --ds-color-action-prominent:         var(--ds-p-zinc-950);
  --ds-color-action-prominent-hover:   var(--ds-p-zinc-700);
  --ds-color-action-prominent-subtle:  var(--ds-p-zinc-100);
  --ds-color-action-prominent-fg:      var(--ds-p-neutral-0);
  --ds-color-action-accent:            var(--ds-p-violet-600);
  --ds-color-action-accent-hover:      var(--ds-p-violet-700);
  --ds-color-action-accent-subtle:     var(--ds-p-violet-50);
  --ds-color-action-danger:            var(--ds-p-red-600);
  --ds-color-action-danger-hover:      var(--ds-p-red-700);
  --ds-color-action-danger-subtle:     #fef2f2;
  --ds-color-status-success:           var(--ds-p-green-500);
  --ds-color-status-warning:           var(--ds-p-amber-400);
  --ds-color-status-error:             var(--ds-p-red-500);

  /* ── Typography ──────────────────────────────────────── */
  --ds-font-family-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --ds-font-family-mono: ui-monospace, "Cascadia Code", "Fira Code", monospace;
  --ds-text-xs:   0.75rem;
  --ds-text-sm:   0.875rem;
  --ds-text-md:   1rem;
  --ds-text-lg:   1.125rem;
  --ds-text-xl:   1.25rem;
  --ds-text-2xl:  1.5rem;
  --ds-text-3xl:  1.875rem;
  --ds-text-4xl:  2.25rem;
  --ds-text-5xl:  3rem;
  --ds-font-weight-regular:  400;
  --ds-font-weight-medium:   500;
  --ds-font-weight-semibold: 600;
  --ds-font-weight-bold:     700;
  --ds-line-height-tight:  1.25;
  --ds-line-height-normal: 1.5;
  --ds-line-height-loose:  1.75;

  /* ── Spacing ─────────────────────────────────────────── */
  --ds-space-1:  0.25rem;
  --ds-space-2:  0.5rem;
  --ds-space-3:  0.75rem;
  --ds-space-4:  1rem;
  --ds-space-5:  1.25rem;
  --ds-space-6:  1.5rem;
  --ds-space-8:  2rem;
  --ds-space-10: 2.5rem;
  --ds-space-12: 3rem;
  --ds-space-16: 4rem;

  /* ── Radius ──────────────────────────────────────────── */
  --ds-radius-sm:   0.375rem;
  --ds-radius-md:   0.5rem;
  --ds-radius-lg:   0.75rem;
  --ds-radius-xl:   1rem;
  --ds-radius-2xl:  1.25rem;
  --ds-radius-full: 9999px;

  /* ── Shadow ──────────────────────────────────────────── */
  --ds-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --ds-shadow-md: 0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.04);
  --ds-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  /* ── Motion ──────────────────────────────────────────── */
  --ds-duration-fast:   100ms;
  --ds-duration-normal: 200ms;
  --ds-duration-slow:   300ms;
  --ds-easing-default:  cubic-bezier(0.4, 0, 0.2, 1);

  /* ── Focus ring (WCAG 2.2 §2.4.11) ──────────────────── */
  --ds-focus-ring-width:  2px;
  --ds-focus-ring-offset: 2px;
  --ds-focus-ring-color:  var(--ds-color-border-focus);

  /* ── Glass surfaces (light mode) ─────────────────────── */
  --ds-glass-surface-bg:     rgba(255, 255, 255, 0.52);
  --ds-glass-surface-border: rgba(255, 255, 255, 0.82);
  --ds-glass-surface-spec:   rgba(255, 255, 255, 0.96);
  --ds-glass-ghost-bg:       rgba(255, 255, 255, 0.38);
  --ds-glass-ghost-border:   rgba(255, 255, 255, 0.70);
  --ds-card-glass-bg:        rgba(255, 255, 255, 0.48);
  --ds-card-glass-border:    rgba(255, 255, 255, 0.82);
  --ds-card-glass-spec:      rgba(255, 255, 255, 0.96);
  --ds-input-glass-bg:       rgba(255, 255, 255, 0.58);
  --ds-input-glass-border:   rgba(255, 255, 255, 0.84);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --ds-color-surface-default:   var(--ds-p-neutral-950);
    --ds-color-surface-subtle:    var(--ds-p-neutral-900);
    --ds-color-surface-raised:    var(--ds-p-neutral-800);
    --ds-color-surface-overlay:   var(--ds-p-neutral-900);
    --ds-color-border-default:    var(--ds-p-neutral-800);
    --ds-color-border-strong:     var(--ds-p-neutral-700);
    --ds-color-text-primary:      var(--ds-p-neutral-50);
    --ds-color-text-secondary:    var(--ds-p-neutral-400);
    --ds-color-text-inverse:      var(--ds-p-neutral-950);
    --ds-color-action-prominent:        var(--ds-p-zinc-50);
    --ds-color-action-prominent-hover:  var(--ds-p-zinc-100);
    --ds-color-action-prominent-subtle: var(--ds-p-zinc-800);
    --ds-color-action-prominent-fg:     var(--ds-p-zinc-950);
    --ds-color-action-accent-subtle:    #2e1065;
    --ds-color-action-danger-subtle:    #3b1010;
    --ds-glass-surface-bg:     rgba(255, 255, 255, 0.10);
    --ds-glass-surface-border: rgba(255, 255, 255, 0.22);
    --ds-glass-surface-spec:   rgba(255, 255, 255, 0.55);
    --ds-glass-ghost-bg:       rgba(255, 255, 255, 0.06);
    --ds-glass-ghost-border:   rgba(255, 255, 255, 0.18);
    --ds-card-glass-bg:        rgba(255, 255, 255, 0.07);
    --ds-card-glass-border:    rgba(255, 255, 255, 0.22);
    --ds-card-glass-spec:      rgba(255, 255, 255, 0.55);
    --ds-input-glass-bg:       rgba(255, 255, 255, 0.07);
    --ds-input-glass-border:   rgba(255, 255, 255, 0.16);
  }
}

[data-theme="dark"] {
  --ds-color-surface-default:   var(--ds-p-neutral-950);
  --ds-color-surface-subtle:    var(--ds-p-neutral-900);
  --ds-color-surface-raised:    var(--ds-p-neutral-800);
  --ds-color-surface-overlay:   var(--ds-p-neutral-900);
  --ds-color-border-default:    var(--ds-p-neutral-800);
  --ds-color-border-strong:     var(--ds-p-neutral-700);
  --ds-color-text-primary:      var(--ds-p-neutral-50);
  --ds-color-text-secondary:    var(--ds-p-neutral-400);
  --ds-color-text-inverse:      var(--ds-p-neutral-950);
  --ds-color-action-prominent:        var(--ds-p-zinc-50);
  --ds-color-action-prominent-hover:  var(--ds-p-zinc-100);
  --ds-color-action-prominent-subtle: var(--ds-p-zinc-800);
  --ds-color-action-prominent-fg:     var(--ds-p-zinc-950);
  --ds-color-action-accent-subtle:    #2e1065;
  --ds-color-action-danger-subtle:    #3b1010;
  --ds-glass-surface-bg:     rgba(255, 255, 255, 0.10);
  --ds-glass-surface-border: rgba(255, 255, 255, 0.22);
  --ds-glass-surface-spec:   rgba(255, 255, 255, 0.55);
  --ds-glass-ghost-bg:       rgba(255, 255, 255, 0.06);
  --ds-glass-ghost-border:   rgba(255, 255, 255, 0.18);
  --ds-card-glass-bg:        rgba(255, 255, 255, 0.07);
  --ds-card-glass-border:    rgba(255, 255, 255, 0.22);
  --ds-card-glass-spec:      rgba(255, 255, 255, 0.55);
  --ds-input-glass-bg:       rgba(255, 255, 255, 0.07);
  --ds-input-glass-border:   rgba(255, 255, 255, 0.16);
}
`;

function buildDisplacementMap(res: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = res;
  canvas.height = res;
  let ctx: CanvasRenderingContext2D | null;
  try { ctx = canvas.getContext('2d'); } catch { return ''; }
  if (!ctx) return '';
  const img = ctx.createImageData(res, res);
  const px = img.data;
  for (let y = 0; y < res; y++) {
    for (let x = 0; x < res; x++) {
      const nx = (x / (res - 1)) * 2 - 1;
      const ny = (y / (res - 1)) * 2 - 1;
      const r = Math.sqrt(nx * nx + ny * ny);
      const t = Math.min(r, 1.0);
      const w = Math.pow(t, 1.6);
      const len = r > 0.001 ? r : 0.001;
      const dx = (nx / len) * w;
      const dy = (ny / len) * w;
      const i = (y * res + x) * 4;
      px[i]     = Math.max(0, Math.min(255, Math.round(128 + dx * 127)));
      px[i + 1] = Math.max(0, Math.min(255, Math.round(128 + dy * 127)));
      px[i + 2] = 0;
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

function injectGlassFilter(): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ds-glass')) return;
  const dmapUrl = buildDisplacementMap(256);
  if (!dmapUrl) return;
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  svg.setAttribute('aria-hidden', 'true');
  const defs = document.createElementNS(ns, 'defs');
  const filter = document.createElementNS(ns, 'filter');
  filter.setAttribute('id', 'ds-glass');
  filter.setAttribute('x', '-50%');
  filter.setAttribute('y', '-50%');
  filter.setAttribute('width', '200%');
  filter.setAttribute('height', '200%');
  filter.setAttribute('color-interpolation-filters', 'sRGB');

  const feImage = document.createElementNS(ns, 'feImage');
  feImage.setAttribute('result', 'dmap');
  feImage.setAttribute('preserveAspectRatio', 'none');
  feImage.setAttribute('href', dmapUrl);

  // Chromatic aberration — isolate R, G, B and displace each by a different amount
  // so edges exhibit a prismatic colour-split matching Apple Liquid Glass
  const srcR = document.createElementNS(ns, 'feColorMatrix');
  srcR.setAttribute('type', 'matrix');
  srcR.setAttribute('values', '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0');
  srcR.setAttribute('in', 'SourceGraphic');
  srcR.setAttribute('result', 'src-r');

  const srcG = document.createElementNS(ns, 'feColorMatrix');
  srcG.setAttribute('type', 'matrix');
  srcG.setAttribute('values', '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0');
  srcG.setAttribute('in', 'SourceGraphic');
  srcG.setAttribute('result', 'src-g');

  const srcB = document.createElementNS(ns, 'feColorMatrix');
  srcB.setAttribute('type', 'matrix');
  srcB.setAttribute('values', '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0');
  srcB.setAttribute('in', 'SourceGraphic');
  srcB.setAttribute('result', 'src-b');

  const dispR = document.createElementNS(ns, 'feDisplacementMap');
  dispR.setAttribute('in', 'src-r');
  dispR.setAttribute('in2', 'dmap');
  dispR.setAttribute('scale', '78');
  dispR.setAttribute('xChannelSelector', 'R');
  dispR.setAttribute('yChannelSelector', 'G');
  dispR.setAttribute('result', 'disp-r');

  const dispG = document.createElementNS(ns, 'feDisplacementMap');
  dispG.setAttribute('in', 'src-g');
  dispG.setAttribute('in2', 'dmap');
  dispG.setAttribute('scale', '65');
  dispG.setAttribute('xChannelSelector', 'R');
  dispG.setAttribute('yChannelSelector', 'G');
  dispG.setAttribute('result', 'disp-g');

  const dispB = document.createElementNS(ns, 'feDisplacementMap');
  dispB.setAttribute('in', 'src-b');
  dispB.setAttribute('in2', 'dmap');
  dispB.setAttribute('scale', '52');
  dispB.setAttribute('xChannelSelector', 'R');
  dispB.setAttribute('yChannelSelector', 'G');
  dispB.setAttribute('result', 'disp-b');

  const blendRG = document.createElementNS(ns, 'feBlend');
  blendRG.setAttribute('in', 'disp-r');
  blendRG.setAttribute('in2', 'disp-g');
  blendRG.setAttribute('mode', 'screen');
  blendRG.setAttribute('result', 'rg');

  const blendRGB = document.createElementNS(ns, 'feBlend');
  blendRGB.setAttribute('in', 'rg');
  blendRGB.setAttribute('in2', 'disp-b');
  blendRGB.setAttribute('mode', 'screen');

  filter.append(feImage, srcR, srcG, srcB, dispR, dispG, dispB, blendRG, blendRGB);
  defs.appendChild(filter);
  svg.appendChild(defs);
  (document.body ?? document.head ?? document.documentElement).appendChild(svg);
}

function injectTokens(): void {
  if (typeof document === 'undefined') return;
  try {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(TOKEN_CSS);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  } catch {
    const style = document.createElement('style');
    style.dataset['dsTokens'] = '';
    style.textContent = TOKEN_CSS;
    (document.head ?? document.documentElement).appendChild(style);
  }
}

injectTokens();
injectGlassFilter();
