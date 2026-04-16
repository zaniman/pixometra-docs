# Color Tokens

SYNTHEX uses a structured color token system with three groups: **Terminal** (retro aesthetic), **Brand** (global identity), and **Background/Text** (layout foundations).

Change one token to update all instances across the entire site instantly.

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.color-card {
  border: 2px solid rgba(222, 233, 250, 0.3);
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(28, 32, 52, 0.9) 0%, rgba(42, 49, 71, 0.9) 100%);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.color-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(64, 255, 67, 0.2);
  border-color: rgba(64, 255, 67, 0.4);
}

.color-swatch {
  width: 100%;
  height: 120px;
  border-bottom: 2px solid rgba(222, 233, 250, 0.2);
}

.color-info {
  padding: 18px;
  background: rgba(21, 22, 36, 0.7);
}

.color-name {
  font-weight: 700;
  color: rgb(225, 230, 247);
  margin-bottom: 8px;
  font-size: 15px;
  letter-spacing: 0.3px;
}

.color-value {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  color: rgb(180, 190, 220);
  margin-bottom: 12px;
  word-break: break-all;
  background: rgba(18, 20, 32, 0.5);
  padding: 6px 8px;
  border-radius: 4px;
  display: inline-block;
}

.color-usage {
  font-size: 13px;
  color: rgb(180, 190, 220);
  line-height: 1.6;
  margin-top: 10px;
}

.color-token-path {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: rgb(64, 255, 67);
  margin-top: 10px;
  opacity: 0.85;
  display: block;
  background: rgba(64, 255, 67, 0.08);
  padding: 6px 8px;
  border-radius: 4px;
  border-left: 2px solid rgb(64, 255, 67);
}
</style>

## Terminal Colors

Used inside Terminal Dashboard, Terminal Image, and all CRT-style UI elements. The most frequently customized tokens.

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(64, 255, 67);"></div>
    <div class="color-info">
      <div class="color-name">TerminalPrimary</div>
      <div class="color-value">rgb(64, 255, 67)</div>
      <div class="color-usage">Neon green accent for terminal elements, input lines, gauges, charts, and status indicators</div>
      <div class="color-token-path">/Terminal/TerminalPrimary</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(217, 186, 154);"></div>
    <div class="color-info">
      <div class="color-name">TerminalSecondary</div>
      <div class="color-value">rgb(217, 186, 154)</div>
      <div class="color-usage">Warm tan accent for terminal output text and secondary labels</div>
      <div class="color-token-path">/Terminal/TerminalSecondary</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgba(222, 233, 250, 0.2); border: 1px dashed rgba(222, 233, 250, 0.4);"></div>
    <div class="color-info">
      <div class="color-name">TerminalLines</div>
      <div class="color-value">rgba(222, 233, 250, 0.2)</div>
      <div class="color-usage">Semi-transparent light blue for panel borders and separator lines</div>
      <div class="color-token-path">/Terminal/TerminalLines</div>
    </div>
  </div>
</div>

## Brand Colors

Global brand identity colors used in buttons, links, badges, and non-terminal UI elements. Independent from Terminal colors.

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(0, 207, 0);"></div>
    <div class="color-info">
      <div class="color-name">BrandPrimary</div>
      <div class="color-value">rgb(0, 207, 0)</div>
      <div class="color-usage">Bright green for navigation states, links, and badges</div>
      <div class="color-token-path">/Brand/BrandPrimary</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(222, 168, 111);"></div>
    <div class="color-info">
      <div class="color-name">BrandSecondary</div>
      <div class="color-value">rgb(222, 168, 111)</div>
      <div class="color-usage">Warm accent for secondary decorative details</div>
      <div class="color-token-path">/Brand/BrandSecondary</div>
    </div>
  </div>
</div>

## Background & Text Colors

Foundation colors for layout and typography.

### Background Colors

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(42, 49, 71);"></div>
    <div class="color-info">
      <div class="color-name">BackgroundBase</div>
      <div class="color-value">rgb(42, 49, 71)</div>
      <div class="color-usage">Main page background</div>
      <div class="color-token-path">/Background/BackgroundBase</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(21, 22, 36);"></div>
    <div class="color-info">
      <div class="color-name">BackgroundElevated</div>
      <div class="color-value">rgb(21, 22, 36)</div>
      <div class="color-usage">Elevated surfaces like cards and panels</div>
      <div class="color-token-path">/Background/BackgroundElevated</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(28, 29, 44);"></div>
    <div class="color-info">
      <div class="color-name">BackgroundTop</div>
      <div class="color-value">rgb(28, 29, 44)</div>
      <div class="color-usage">Header and top bar background</div>
      <div class="color-token-path">/Background/BackgroundTop</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(18, 20, 32);"></div>
    <div class="color-info">
      <div class="color-name">BackgroundCanvas</div>
      <div class="color-value">rgb(18, 20, 32)</div>
      <div class="color-usage">Canvas and viewport background</div>
      <div class="color-token-path">/Background/BackgroundCanvas</div>
    </div>
  </div>
</div>

### Text Colors

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(225, 230, 247);"></div>
    <div class="color-info">
      <div class="color-name">TextPrimary</div>
      <div class="color-value">rgb(225, 230, 247)</div>
      <div class="color-usage">Main body text and headings</div>
      <div class="color-token-path">/Text/TextPrimary</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(129, 137, 163);"></div>
    <div class="color-info">
      <div class="color-name">TextSecondary</div>
      <div class="color-value">rgb(129, 137, 163)</div>
      <div class="color-usage">Secondary and muted text</div>
      <div class="color-token-path">/Text/TextSecondary</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(90, 94, 120);"></div>
    <div class="color-info">
      <div class="color-name">TextMuted</div>
      <div class="color-value">rgb(90, 94, 120)</div>
      <div class="color-usage">De-emphasized text and labels</div>
      <div class="color-token-path">/Text/TextMuted</div>
    </div>
  </div>

  <div class="color-card">
    <div class="color-swatch" style="background-color: rgb(255, 105, 51);"></div>
    <div class="color-info">
      <div class="color-name">TextError</div>
      <div class="color-value">rgb(255, 105, 51)</div>
      <div class="color-usage">Error states and warning indicators</div>
      <div class="color-token-path">/Text/TextError</div>
    </div>
  </div>
</div>

## Terminal vs Brand — What's the Difference?

**Terminal tokens** drive the retro CRT aesthetic. They're used in:
- Code components (Terminal Dashboard, ROI Calculator, 404 Game)
- Buttons and interactive elements
- Decorative effects

**Brand tokens** drive broader site accents like:
- Navigation states
- Badges
- Links

You can set them to **the same color** for a unified look, or keep them **different for contrast**.

## How to Change Colors

### Step 1: Open Color Styles

In Framer:
1. Click **Assets** (left sidebar)
2. Select **Color Styles**

### Step 2: Find the Token

Look for the token you want to change:
- To change the main neon accent: `/Terminal/TerminalPrimary`
- To change navigation states: `/Brand/BrandPrimary`
- To change body text: `/Text/TextPrimary`

### Step 3: Click the Color

Click the color swatch to open the color picker.

### Step 4: Choose Your Color

- Use the color picker to select your color
- Or paste a hex code (e.g., `#00FF00`)
- For RGB: `rgb(0, 255, 0)`

### Step 5: Apply & Publish

All elements using that token update **instantly** across the entire site.

Click **Publish** to make it live.

## Advanced: Light & Dark Mode

Each color token can have separate values for light and dark themes:

- Click a color token
- Look for **Light** and **Dark** variants
- Set different colors for each mode
- Framer auto-switches based on system preference

## Color Accessibility

When choosing colors, consider:

- **Contrast ratio** — Ensure text is readable (WCAG AA minimum: 4.5:1 contrast)
- **Colorblind safe** — Test with colorblind simulators
- **Dark mode** — Make sure colors work in both light and dark modes

:::tip
Test your color changes on both light and dark modes before publishing.
:::

## All Color Tokens Reference

### Terminal Group
- `/Terminal/TerminalPrimary`
- `/Terminal/TerminalSecondary`
- `/Terminal/TerminalLines`

### Brand Group
- `/Brand/BrandPrimary`
- `/Brand/BrandSecondary`

### Background Group
- `/Background/BackgroundBase`
- `/Background/BackgroundElevated`
- `/Background/BackgroundTop`
- `/Background/BackgroundCanvas`

### Text Group
- `/Text/TextPrimary`
- `/Text/TextSecondary`
- `/Text/TextMuted`
- `/Text/TextError`

## Next Steps

→ [Typography](/synthex/typography)
