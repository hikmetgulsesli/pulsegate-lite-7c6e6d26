---
name: PulseGate Lite Visual Language
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#edffc5'
  on-tertiary: '#253600'
  tertiary-container: '#b0ef00'
  on-tertiary-container: '#4c6900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#b6f700'
  tertiary-fixed-dim: '#9fd800'
  on-tertiary-fixed: '#141f00'
  on-tertiary-fixed-variant: '#374e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  hud-metric:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '900'
    lineHeight: '1'
    letterSpacing: 0.05em
  body-rtf:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  hud-margin: 2rem
  gutter: 1rem
  panel-padding: 1.5rem
  safe-area: 5vw
---

## Brand & Style

The design system is engineered for high-velocity, arcade-style engagement. It embodies a **Neon Cyberpunk** aesthetic that prioritizes immediate visual feedback and immersive gameplay depth. The brand personality is aggressive, digital, and high-energy, evoking the feeling of a futuristic terminal interface or an advanced cockpit HUD.

The visual style utilizes a mix of **Glassmorphism** for utility panels and **High-Contrast / Bold** elements for active gameplay feedback. Heavy use of emissive light (glows) against a void-like background ensures that interactive elements feel "charged" with energy. This creates a focused, high-stakes environment where the user’s attention is directed toward the central gameplay field.

## Colors

This design system utilizes a "Deep Space" foundation with high-luminance neon accents to simulate a light-emissive display.

- **Primary (Cyan - #00F2FF):** Represents energy, progress, and active player-controlled elements. Used for primary actions and "charged" states.
- **Secondary (Magenta - #FF00E5):** Reserved for warnings, critical overload, and high-tension zones. It acts as a visual disruptor.
- **Tertiary (Lime - #BCFF00):** Signals success, gate clearance, and health. It is the color of movement and positive resolution.
- **Neutral (#050505):** The "void" background. It provides the maximum possible contrast for the neon accents to pop.

All accent colors should be applied with an accompanying outer glow (drop-shadow or box-shadow) to simulate the bloom effect of neon lighting.

## Typography

Typography in this design system is treated as a technical instrument. **Sora** provides a geometric, wide-stanced architecture for headlines that feels futuristic and sturdy. **Geist** is used for data-heavy HUD elements and body text, offering a monospaced-adjacent precision that aids in rapid readability.

- **HUD Metrics:** Use `hud-metric` for real-time scores, timers, and energy levels. These should always be high-weight to ensure they are readable through motion blur or fast movement.
- **Labels:** Small labels use `label-caps` to evoke a "serial number" or technical specification feel.
- **Hierarchy:** Avoid using thin weights. The design system relies on Bold and Extra-Bold weights to maintain visual "weight" against the glow effects.

## Layout & Spacing

The layout philosophy follows a **HUD-centric Fluid Grid**. Unlike traditional websites, the gameplay field is the primary layer, with UI elements anchored to the corners and edges to maximize visibility of the central action.

- **The HUD Layer:** Elements are anchored with a `safe-area` margin to prevent clipping on various screen aspect ratios.
- **The Panel System:** Non-gameplay screens (menus, settings) use a 12-column fluid grid.
- **Spacing Rhythm:** Based on a 4px hard grid. Use tight spacing for technical data and generous margins (`hud-margin`) between the gameplay viewport and UI overlays.
- **Adaptive Reflow:** On mobile, side-anchored HUD elements collapse into top/bottom bars to preserve the horizontal "corridor" of the gameplay.

## Elevation & Depth

Depth is conveyed through **light and translucency** rather than traditional shadows. 

- **Background Layer:** Pure `#050505`.
- **Glass Overlays:** UI panels use a `backdrop-filter: blur(12px)` with a semi-transparent black fill. This creates a "frosted tech" look that separates the UI from the gameplay moving behind it.
- **Neon Emission:** Interactive elements "sit" on a higher plane by emitting light. A primary-colored button should have a glow that bleeds onto the surface beneath it.
- **Z-Index Strategy:** Gameplay elements occupy the lowest Z-space, followed by the Glass Overlays, with active HUD Text/Icons at the highest elevation.

## Shapes

The design system utilizes **Sharp (0)** roundedness to maintain an aggressive, technical edge. All buttons, panels, and input fields should feature 90-degree corners. 

To add visual interest without using curves, employ **chamfered corners** (cut corners at 45 degrees) on large containers or primary buttons. This reinforces the "Cyberpunk" hardware aesthetic.

## Components

- **Neon Buttons:** High-contrast borders (2px) using primary or tertiary colors. Backgrounds should be transparent or semi-black. On hover, the background fills with the accent color and the text flips to the neutral background color.
- **Glass Panels:** Used for menus and HUD backgrounds. Must include a thin (1px) border with 20% opacity of the primary color to define edges.
- **Energy Bars (Chips):** Linear segments rather than a continuous bar. Use the primary color (Cyan) for the fill, with a subtle glow on the leading edge.
- **Input Fields:** Bottom-border only or a full 1px ghost-border. When focused, the border should "ignite" with a primary color glow.
- **HUD Labels:** Always uppercase. Include small technical details (e.g., "SYS_VER 1.0.2") in the corners of panels to enhance the "Lite" terminal aesthetic.
- **Success/Failure Gates:** Success states use the Lime (#BCFF00) border; Failure/Warnings use the Magenta (#FF00E5) border with a pulsing animation effect.