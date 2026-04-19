# ROICalculator

An interactive code component that estimates automation savings. Users adjust sliders in real-time to see cost-benefit calculations.

## Overview

The ROICalculator demonstrates the value of automation by letting visitors input their team details and see potential savings.

![ROICalculator](/images/guide/calculator.png)

**Key Features:**
- Interactive sliders for input parameters
- Real-time calculation of savings
- Customizable inputs and formulas
- Fully branded styling
- Mobile responsive

## Default Inputs

| Key | Label | Default | Range | Step | Unit |
|-----|-------|---------|-------|------|------|
| `teamSize` | Team size | 12 | 1–100 | 1 | people |
| `hoursPerWeek` | Manual work per person (hrs/week) | 8 | 1–60 | 1 | hrs |
| `hourlyRate` | Avg fully loaded cost ($/hr) | 55 | 10–300 | 5 | $/hr |
| `errorRate` | Rework & errors (%) | 12 | 0–50 | 1 | % |

## Default Variables

Fixed constants used in all formulas — not exposed to the user as sliders.

| Key | Value | Meaning |
|-----|-------|---------|
| `weeksPerMonth` | 4 | Weeks per month multiplier |
| `inefficiencyFactor` | 1.15 | Overhead multiplier for workflow inefficiencies |
| `savingsRate` | 0.8 | Share of losses that automation can recover (80%) |

## Default Outputs

| Label | Formula | Format |
|-------|---------|--------|
| **You're losing / month** | `teamSize * hoursPerWeek * weeksPerMonth * hourlyRate * (1 + errorRate / 100) * inefficiencyFactor` | Currency |
| **You could save / month** | `... * savingsRate` (same as above × 0.8) | Currency |
| **Monthly hours lost** | `teamSize * hoursPerWeek * weeksPerMonth * (1 + errorRate / 100) * inefficiencyFactor` | Number |

**With default values (12 people, 8 hrs, $55/hr, 12% errors):**
- Losing / month ≈ **$27,203**
- Could save / month ≈ **$21,762**
- Hours lost / month ≈ **495 hrs**

## Customization

### Step 1: Select the Component

Click the ROICalculator component on your page or in the layer panel.

![ROICalculator Layer](/images/guide/synthexa-64@2x.png)

### Step 2: Open Properties Panel

Open the Properties panel (right sidebar) to see customization options.

![ROICalculator Layer](/images/guide/synthexa-65@2x.png)

### Step 3: Configure Variables

Variables are **fixed constants** used in formulas — they don't change via sliders and are not visible to the user. Use them for rates, coefficients, or any value you want to control centrally without exposing to users.

**Option A: Use Defaults**
- Leave **Variables** set to "Default"
- No additional constants are available

**Option B: Custom Variables**
- Set **Variables** to "Custom"
- Add items with a **Key** (variable name) and **Value** (numeric constant)
- Each variable is available in all output formulas by its key name

**Example:**
- Key: `savingsRate`, Value: `0.8` — then use `teamSize * hoursPerWeek * savingsRate` in formulas

### Step 4: Configure Inputs

**Option A: Use Defaults**
- Leave **Inputs** set to "Default"
- Calculator uses the values above

**Option B: Custom Inputs**
- Set **Inputs** to "Custom"
- Define your own input fields and ranges
- Examples: "Projects handled", "Cost per project", "Automation budget"

### Step 5: Configure Outputs

**Option A: Use Defaults**
- Leave **Outputs** set to "Default"
- Shows the three predefined outputs

**Option B: Custom Outputs**
- Set **Outputs** to "Custom"
- Define what calculations to display
- Formula fields accept JavaScript expressions

### Step 6: Formulas

When using **Custom** inputs/outputs, you can write formulas using JavaScript:

**Example Formula:**
```javascript
teamSize * hoursPerWeek * hourlyRate * 4
```

This calculates: `12 * 8 * 55 * 4 = $21,120/month`

**Available in formulas:**
- Input names from your custom inputs
- Variable keys from your custom variables
- Standard JavaScript functions (Math.round, etc.)
- Comparison operators (>, <, ==)

### Step 7: Styling

Under **Appearance:**
- **Theme** — Light or dark variant
- **Colors** — Primary, secondary, background
- **Slider UI** — Default or custom (drop Framer components in slots)

## Example: Custom Calculator

**Goal:** Create a calculator for project pricing estimates.

### Inputs:
- `projectSize` — Small (0), Medium (1), Large (2)
- `teamCount` — 1–20 people
- `timelineWeeks` — 2–26 weeks

### Formulas:
```javascript
// Base cost by project size
baseCost = projectSize === 0 ? 5000 : projectSize === 1 ? 15000 : 40000

// Adjust for team size
teamMultiplier = 1 + (teamCount * 0.1)

// Adjust for timeline
timelineDiscount = Math.max(0.8, 1 - (timelineWeeks / 26))

// Final estimate
estimate = baseCost * teamMultiplier * timelineDiscount
```

## Advanced: Custom Slider UI

For full brand customization, you can:

1. Set **Slider UI** to "Custom"
2. Drop Framer components into:
   - **Track** — Background bar
   - **Fill** — Filled portion of bar
   - **Thumb** — Draggable handle
3. Style to match your design system

## Mobile Behavior

On mobile, the calculator:
- Stacks inputs vertically
- Shows one input per row
- Responsive slider sizing
- Touch-friendly interactions

## Responsive Sizing

The calculator scales responsively:
- Desktop: Full width with side-by-side layout
- Tablet: Reduced padding, centered
- Mobile: Full-width, stacked inputs

## Accessibility

- Keyboard navigation — Tab through inputs
- Screen reader friendly — Labels associated with inputs
- Focus states — Clear visual indication
- Sufficient contrast — Text readable on all themes

## Troubleshooting

**Sliders not working?**
- Check input range is valid (min < max)
- Verify formulas don't reference undefined variables
- Test in preview mode

**Formula errors?**
- Check for typos in variable names
- Use parentheses for complex expressions: `(a + b) * c`
- Avoid division by zero: `amount / Math.max(divisor, 1)`

**Custom components not showing?**
- Make sure you've inserted components in Track/Fill/Thumb slots
- Check component sizes fit the slider dimensions

## Common Formulas

### Monthly Savings
```javascript
(teamSize * hoursPerWeek * hourlyRate * 4) - automationCost
```

### Break-even Timeline
```javascript
automationCost / ((teamSize * hoursPerWeek * hourlyRate * 4) / 12)
```

### Annual ROI
```javascript
((teamSize * hoursPerWeek * hourlyRate * 52) - (automationCost * 12)) / (automationCost * 12) * 100
```

## Next Steps

→ [NotFoundGame](/synthexa/components/404-game)

→ [TerminalImage](/synthexa/components/terminal-image)
