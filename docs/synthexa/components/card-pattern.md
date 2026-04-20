# CardPattern

A versatile card component that showcases workflow patterns with interactive hover states, customizable icons, and integrated terminal aesthetics.

## Overview

CardPattern displays automation opportunities and workflow examples in an engaging card format. It features three interactive variants that reveal additional terminal-themed details on hover.

![CardPattern](/images/guide/synthexa-74@2x.png)

**Key Features:**
- Three interactive variants (Front, TerminalOff, TerminalOn)
- Customizable icon with accent color
- Terminal-themed visual styling
- Pattern name, description, and metrics
- Hover-triggered animations
- Terminal captions and detailed descriptions

![Three interactive variants](/images/guide/synthexa-76@2x.png)

## Variants

| Variant | Behavior | Use Case |
|---------|----------|----------|
| **Front** | Initial state — shows pattern icon, title, description, and metrics | Default card display |
| **TerminalOff** | Hover state — reveals terminal output without highlighting | Transition state during animation |
| **TerminalOn** | Hover state — displays terminal output with TerminalPrimary highlighting | Final hover state with full terminal aesthetic |

Interaction is automated: hovering on the card transitions from Front → TerminalOff → TerminalOn.

## Property Controls

![Property Controls](/images/guide/synthexa-75@2x.png)

### Appearance

| Property | Type | Description |
|----------|------|-------------|
| **Variant** | Dropdown | Select which variant to display (Front / TerminalOff / TerminalOn) |
| **Trigger** | Interaction | Hover interaction that toggles between variants |

### Icon & Color

| Property | Default | Description |
|----------|---------|-------------|
| **Icon** | - | Icon component displayed in the top-left corner (can be any Framer icon or custom component) |
| **Accent Color** | `BrandPrimary` | Color applied to the icon background shape |
| **Icon Color** | `BrandSecondary` | Color of the icon itself |

### Content

| Property | Type | Description |
|----------|------|-------------|
| **Title** | String | Pattern name (e.g., "Ptrn_01", "Reporting") |
| **Description** | String | Brief explanation of the workflow pattern |
| **Left Bottom Text** | String | Category or workflow type (e.g., "Reporting", "Onboarding", "Sales") |
| **Right Bottom Text** | String | Metric value (e.g., "~4 hrs/week", "~6 hrs/week") |

### Terminal Elements

Terminal-themed display elements that appear in hover states:

| Property | Default | Description |
|----------|---------|-------------|
| **Terminal Primary** | `TerminalPrimary` | Primary color for terminal text and accents (bright green) |
| **Terminal Secondary** | `TerminalSecondary` | Secondary color for terminal borders and outlines (tan/beige) |
| **Terminal Caption** | String | Command-line style text (e.g., "synthexa@os:~$ scan reporting") |
| **Terminal Caption 2** | String | Secondary terminal line showing result (e.g., "~4 weeks saved") |
| **Terminal Description** | String | Multi-line terminal output describing the pattern and automation opportunity |

### Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Padding** | Number | 24 | Internal spacing within the card |

## Usage Examples

### Homepage Patterns Section

CardPattern components are typically used in grid layouts to showcase workflow automation examples:

```
Workflow patterns we detect across most teams
[Ptrn_01: Reporting]  [Ptrn_02: Onboarding]  [Ptrn_03: Reporting]
[Ptrn_04: Sales]      [Ptrn_05: Support]     [Ptrn_06: Operations]
```

Each card displays:
- Pattern icon with branded color
- Pattern title and description
- Hours saved per week
- Department/category on hover

### Customization Tips

**Change the icon:**
1. Click the card to select it
2. In Properties, find the **Icon** field
3. Choose from available Framer icons or insert a custom component
4. Adjust **Icon Color** and **Accent Color** as needed

**Update the metrics:**
1. Edit **Right Bottom Text** to show different time savings
2. Or update **Left Bottom Text** for category changes
3. Changes appear on both Front and Terminal variants

**Modify terminal text:**
1. **Terminal Caption** — Update the command-line prompt text
2. **Terminal Caption 2** — Change the result/output line
3. **Terminal Description** — Add detailed automation information
4. Uses Terminal color tokens for consistency

## Best Practices

- **Icons** — Use consistent icon styles across all pattern cards
- **Metrics** — Keep time savings in the same format (e.g., "~4 hrs/week")
- **Descriptions** — Keep descriptions concise (1-2 sentences max)
- **Terminal Text** — Use realistic automation command formats for authenticity
- **Consistency** — Use color tokens (BrandPrimary, TerminalPrimary) instead of hardcoded colors

## Next Steps

→ [Other Components](/synthexa/components/other)
