const TOKEN_CSS = `
:root {
  /* ── Primitives ──────────────────────────────────────── */
  --ds-p-indigo-50:  #eef2ff;
  --ds-p-indigo-100: #e0e7ff;
  --ds-p-indigo-500: #6366f1;
  --ds-p-indigo-600: #4f46e5;
  --ds-p-indigo-700: #4338ca;
  --ds-p-violet-50:  #f5f3ff;
  --ds-p-violet-100: #ede9fe;
  --ds-p-violet-500: #8b5cf6;
  --ds-p-violet-600: #7c3aed;
  --ds-p-violet-700: #6d28d9;
  --ds-p-red-400:  #f87171;
  --ds-p-red-500:  #ef4444;
  --ds-p-red-600:  #dc2626;
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
  --ds-color-border-focus:      var(--ds-p-indigo-500);
  --ds-color-text-primary:      var(--ds-p-neutral-900);
  --ds-color-text-secondary:    var(--ds-p-neutral-600);
  --ds-color-text-disabled:     var(--ds-p-neutral-400);
  --ds-color-text-inverse:      var(--ds-p-neutral-0);
  --ds-color-text-on-action:    var(--ds-p-neutral-0);
  --ds-color-action-prominent:        var(--ds-p-indigo-600);
  --ds-color-action-prominent-hover:  var(--ds-p-indigo-700);
  --ds-color-action-prominent-subtle: var(--ds-p-indigo-50);
  --ds-color-action-accent:           var(--ds-p-violet-600);
  --ds-color-action-accent-hover:     var(--ds-p-violet-700);
  --ds-color-action-accent-subtle:    var(--ds-p-violet-50);
  --ds-color-action-danger:           var(--ds-p-red-600);
  --ds-color-action-danger-hover:     var(--ds-p-red-500);
  --ds-color-action-danger-subtle:    #fef2f2;
  --ds-color-status-success:          var(--ds-p-green-500);
  --ds-color-status-warning:          var(--ds-p-amber-400);
  --ds-color-status-error:            var(--ds-p-red-500);

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
  --ds-shadow-md: 0 4px 12px -2px rgb(79 70 229 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.06);
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
}

@media (prefers-color-scheme: dark) {
  :root {
    --ds-color-surface-default:   var(--ds-p-neutral-950);
    --ds-color-surface-subtle:    var(--ds-p-neutral-900);
    --ds-color-surface-raised:    var(--ds-p-neutral-800);
    --ds-color-surface-overlay:   var(--ds-p-neutral-900);
    --ds-color-border-default:    var(--ds-p-neutral-800);
    --ds-color-border-strong:     var(--ds-p-neutral-700);
    --ds-color-border-focus:      var(--ds-p-indigo-500);
    --ds-color-text-primary:      var(--ds-p-neutral-50);
    --ds-color-text-secondary:    var(--ds-p-neutral-400);
    --ds-color-text-inverse:      var(--ds-p-neutral-950);
    --ds-color-action-prominent:        var(--ds-p-indigo-500);
    --ds-color-action-prominent-hover:  var(--ds-p-indigo-600);
    --ds-color-action-prominent-subtle: #1e1b4b;
    --ds-color-action-accent:           var(--ds-p-violet-500);
    --ds-color-action-accent-hover:     var(--ds-p-violet-600);
    --ds-color-action-accent-subtle:    #2e1065;
    --ds-color-action-danger-subtle:    #3b1010;
  }
}
`;

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
