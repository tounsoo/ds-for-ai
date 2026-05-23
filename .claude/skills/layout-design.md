# Layout & Design Skill — @tounsoo/ds4ai

Use this skill when building HTML pages or UIs with the `@tounsoo/ds4ai` design system.
Load the library with a single script tag — no bundler or build step required:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@tounsoo/ds4ai/dist/index.js"></script>
```

---

## Component selection guide

```
Triggering an action?          → ds-button
Displaying a heading?          → ds-heading
Displaying body/label text?    → ds-text
Displaying a status tag?       → ds-badge
Single-line user input?        → ds-input

Grouping with visual surface?  → ds-card       (structure, accepts children)
Flexbox spacing container?     → ds-stack      (structure, accepts children)
Full-page layout with zones?   → ds-layout     (structure, accepts children)
```

---

## ds-button

```html
<ds-button label="Save changes"></ds-button>
<ds-button label="Cancel" variant="secondary"></ds-button>
<ds-button label="Delete" variant="danger"></ds-button>
<ds-button label="More" variant="ghost"></ds-button>
<ds-button label="Saving..." loading></ds-button>
<ds-button label="Unavailable" disabled></ds-button>
<ds-button label="Submit form" type="submit"></ds-button><!-- sizes -->
<ds-button label="Small" size="small"></ds-button>
<ds-button label="Large" size="large"></ds-button>
```

Rules:
- Always set `label` (required, used as accessible name)
- Use `type="submit"` inside `<form>` elements
- `variant="danger"` → destructive actions only (delete, remove, revoke)
- `variant="ghost"` → nav links, tertiary actions, icon-adjacent labels

---

## ds-heading

```html
<ds-heading level="1" text="Page title"></ds-heading>
<ds-heading level="2" text="Section heading"></ds-heading>
<ds-heading level="3" text="Card heading" size="lg"></ds-heading>
<!-- Visual size independent of semantic level -->
<ds-heading level="2" text="Small visual" size="sm" weight="medium"></ds-heading>
```

Rules:
- Always set `level` (1–6); never skip levels (1 → 3 is wrong)
- Use `size` to adjust visual weight without breaking heading semantics
- One `level="1"` per page

---

## ds-text

```html
<ds-text content="Body paragraph text."></ds-text>
<ds-text content="Secondary info" size="sm" color="secondary"></ds-text>
<ds-text content="Small caption" size="xs" color="disabled"></ds-text>
<ds-text content="Long text that truncates…" truncate></ds-text>
```

---

## ds-input

```html
<ds-input label="Email address" type="email" required></ds-input>
<ds-input label="Password" type="password" autocomplete="current-password"></ds-input>
<ds-input label="Username" hint="3–20 characters"></ds-input>
<ds-input label="Email" error="Enter a valid email address"></ds-input>
<ds-input label="Name" disabled value="Read-only value"></ds-input>
```

Rules:
- Always set `label` (renders visible `<label>`, never just `aria-label`)
- Set `error` on the input itself — don't put error text in a separate `ds-text`
- Use `hint` for help text, `error` for validation messages

---

## ds-badge

```html
<ds-badge label="Active" variant="success"></ds-badge>
<ds-badge label="Pending" variant="warning"></ds-badge>
<ds-badge label="Failed" variant="error"></ds-badge>
<ds-badge label="New" variant="primary"></ds-badge>
<ds-badge label="Draft" variant="neutral"></ds-badge>
<ds-badge label="●" variant="decorative"></ds-badge><!-- hidden from screen readers -->
```

---

## ds-stack (layout container)

```html
<!-- Vertical form stack (default) -->
<ds-stack gap="4">
  <ds-input label="Name"></ds-input>
  <ds-input label="Email" type="email"></ds-input>
  <ds-button label="Submit" type="submit"></ds-button>
</ds-stack>

<!-- Horizontal row with space-between -->
<ds-stack direction="row" justify="between" align="center">
  <ds-heading level="3" text="Results"></ds-heading>
  <ds-button label="Export" variant="secondary"></ds-button>
</ds-stack>

<!-- Wrapping tag cloud -->
<ds-stack direction="row" gap="2" wrap>
  <ds-badge label="React"></ds-badge>
  <ds-badge label="TypeScript"></ds-badge>
</ds-stack>
```

Gap values: `1`(4px) `2`(8px) `3`(12px) `4`(16px) `5`(20px) `6`(24px) `8`(32px) `10`(40px) `12`(48px)

---

## ds-card (surface container)

```html
<ds-card heading="Summary" variant="outlined">
  <ds-text content="Body content goes here."></ds-text>
  <ds-button slot="footer" label="View details" variant="secondary"></ds-button>
</ds-card>
```

Slots: `default` (body), `footer` (actions).
Variants: `elevated` (default, shadow), `outlined` (border), `flat` (subtle bg).

---

## ds-layout (page layout)

```html
<!-- Two-column with sidebar -->
<ds-layout>
  <ds-stack slot="header" direction="row" justify="between">
    <ds-heading level="1" text="App" size="xl"></ds-heading>
    <ds-button label="Sign out" variant="ghost"></ds-button>
  </ds-stack>
  <ds-stack slot="sidebar" gap="1">
    <ds-button label="Dashboard" variant="ghost"></ds-button>
    <ds-button label="Settings" variant="ghost"></ds-button>
  </ds-stack>
  <!-- default slot = main content -->
  <ds-stack gap="6">
    <ds-heading level="2" text="Dashboard"></ds-heading>
  </ds-stack>
  <ds-text slot="footer" content="© 2026" size="sm" color="secondary"></ds-text>
</ds-layout>

<!-- Single-column (no sidebar) -->
<ds-layout max-width="md" no-header>
  <ds-stack gap="8">
    <!-- content -->
  </ds-stack>
</ds-layout>
```

Slots: `header`, `sidebar` (optional), default (main), `footer`.
Sidebar is hidden when empty. Use `max-width` to constrain: `sm md lg xl full`.

---

## Common recipes

### Sign-in form
```html
<ds-layout max-width="sm" no-header no-footer>
  <ds-card variant="elevated" padding="lg">
    <ds-stack gap="6">
      <ds-heading level="1" text="Sign in" size="2xl"></ds-heading>
      <ds-stack gap="4">
        <ds-input label="Email" type="email" required autocomplete="email"></ds-input>
        <ds-input label="Password" type="password" required autocomplete="current-password"></ds-input>
      </ds-stack>
      <ds-button label="Sign in" type="submit"></ds-button>
    </ds-stack>
  </ds-card>
</ds-layout>
```

### Dashboard with stat cards
```html
<ds-layout>
  <ds-stack slot="header" direction="row" justify="between" align="center">
    <ds-heading level="1" text="Dashboard" size="xl"></ds-heading>
    <ds-button label="New project" size="small"></ds-button>
  </ds-stack>
  <ds-stack gap="6">
    <ds-stack direction="row" gap="4" wrap>
      <ds-card variant="outlined">
        <ds-text content="Total users" size="sm" color="secondary"></ds-text>
        <ds-heading level="3" text="1,284" size="3xl"></ds-heading>
      </ds-card>
      <ds-card variant="outlined">
        <ds-text content="Active today" size="sm" color="secondary"></ds-text>
        <ds-heading level="3" text="96" size="3xl"></ds-heading>
      </ds-card>
    </ds-stack>
  </ds-stack>
</ds-layout>
```

### Settings page
```html
<ds-layout max-width="md" no-header>
  <ds-stack gap="8">
    <ds-heading level="1" text="Account settings"></ds-heading>
    <ds-card heading="Profile" variant="outlined">
      <ds-stack gap="4">
        <ds-input label="Display name"></ds-input>
        <ds-input label="Email" type="email"></ds-input>
      </ds-stack>
      <ds-button slot="footer" label="Save changes"></ds-button>
    </ds-card>
    <ds-card heading="Danger zone" variant="outlined">
      <ds-text content="Permanently delete your account." color="secondary"></ds-text>
      <ds-button slot="footer" label="Delete account" variant="danger"></ds-button>
    </ds-card>
  </ds-stack>
</ds-layout>
```
