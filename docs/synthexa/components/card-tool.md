# CardTool

An integration showcase component that displays supported tools and platforms with interactive hover states. Reveals detailed automation descriptions when users hover over tool cards.

## Overview

CardTool displays a list of integrated tools and platforms in a grid layout. Each card features the tool icon and name by default, with an interactive hover state that reveals terminal-themed details about what the tool integration does.

**Key Features:**
- Three interactive variants (DesktopDefault, DesktopTerminalOff, DesktopTerminalOn)
- Tool icon and title display
- Terminal-themed hover descriptions
- Customizable tool names and automation details
- Terminal color theming for consistency
- Grid-friendly layout

## How to Edit

To customize CardTool properties:

1. **Select the component** — Click CardTool directly on the canvas, OR find it in the **Layers** panel and click its name
2. **Open Properties** — The Properties panel (right sidebar) displays all editable fields
3. **Make changes** — Edit any property and see changes update in real-time

## Property Controls

### Appearance

| Property | Type | Description |
|----------|------|-------------|
| **Variant** | Dropdown | Select which variant to display (DesktopDefault / DesktopTerminalOff / DesktopTerminalOn) |
| **Trigger** | Interaction | Hover interaction that toggles between variants |

### Content

| Property | Type | Description |
|----------|------|-------------|
| **Title** | String | Tool or platform name (e.g., "Slack", "Salesforce", "Gmail") |
| **Icon** | Icon Selector | Icon representing the tool (Framer icon or custom component) |

### Terminal Elements

Terminal-themed text that appears in hover states:

| Property | Type | Description |
|----------|------|-------------|
| **Terminal Title** | String | Brief title of the automation (e.g., "Team communication automation.") |
| **Terminal Description** | String | Detailed explanation of what the integration does (e.g., "Alerts and updates are routed instantly.") |
| **Terminal Primary** | Color | Primary color for terminal text and accents (default: `TerminalPrimary` - bright green) |
| **Terminal Secondary** | Color | Secondary color for terminal borders and outlines (default: `TerminalSecondary` - tan/beige) |

## Variants Explained

CardTool includes three interactive variants that auto-switch on hover:

| Variant | Behavior | Display |
|---------|----------|---------|
| **DesktopDefault** | Initial state (default display) | Shows tool icon and title only |
| **DesktopTerminalOff** | Hover state (transition) | Terminal-style box appears, text in gray |
| **DesktopTerminalOn** | Hover state (final) | Terminal-style box with TerminalPrimary highlighting on key text |

The hover transition automatically progresses through all three variants: Default → TerminalOff → TerminalOn.

## Usage

### Tech Stack Section

CardTool components are typically used in grid layouts to showcase all supported integrations:

```
Works with the tools your team already uses
[Salesforce]  [HubSpot]    [Slack]      [Gmail]
[Notion]      [Jira]       [Asana]      [Airtable]
[Stripe]      [Zapier]     [...]        [...]
```

Each tool card displays:
- Tool icon with platform label
- On hover: automation benefit and integration details

### Customization Tips

**Change the tool icon and name:**
1. Click the CardTool to select it
2. In Properties, find the **Icon** field and select a different tool icon
3. Update the **Title** field to match the tool name
4. Changes appear on all variants

**Update the automation description:**
1. Edit **Terminal Title** — Brief description (1-2 words + period)
2. Edit **Terminal Description** — Detailed explanation (1 sentence)
3. Changes appear on hover states
4. Examples:
   - Title: "Team communication automation."
   - Description: "Alerts and updates are routed instantly."

**Customize terminal colors:**
1. Click **Terminal Primary** and choose a color or token
2. Click **Terminal Secondary** for border/outline colors
3. Use existing color tokens (TerminalPrimary, TerminalSecondary) for consistency

## Best Practices

- **Icon Consistency** — Use consistent icon styles across all tool cards
- **Tool Names** — Keep names short and exact (matching official tool branding)
- **Descriptions** — Keep terminal descriptions concise (1-2 sentences max)
- **Terminal Title Format** — Use format "Type of automation." (e.g., "CRM automation.")
- **Color Tokens** — Always use color tokens instead of hardcoded colors for global consistency
- **Grid Layout** — Arrange cards in equal-width columns for visual balance

## Grid Layout Tips

For best results in grid sections:

- **Desktop** — 4-6 tools per row depending on section width
- **Tablet** — 2-3 tools per row
- **Mobile** — 1-2 tools per row (stack to single column if needed)
- **Spacing** — Use consistent gaps between cards (typically 24-32px)

## Next Steps

→ [CardPattern](/synthexa/components/card-pattern)

→ [CardServices](/synthexa/components/card-services)

→ [Other Components](/synthexa/components/other)
