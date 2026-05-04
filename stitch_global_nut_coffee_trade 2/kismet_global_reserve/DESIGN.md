# Design System: The Global Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Global Curator."** Kismet Foods is not a mere middleman; they are the bridge between the earth’s finest raw materials and the global market. 

To convey this, we move away from standard corporate "box-and-grid" layouts. Instead, we embrace a **High-End Editorial** aesthetic. This approach mimics a luxury travel or culinary journal—utilizing intentional asymmetry, large-scale typography, and layered compositions. By overlapping high-fidelity product imagery (raw beans, pods) with structured typographic blocks, we create a sense of tactile depth that feels premium, trustworthy, and human.

## 2. Color & Tonal Depth
Our palette transitions from vibrant brand accents to a sophisticated "Earth-to-Table" hierarchy. We use a Material-inspired logic but apply it with editorial restraint.

*   **Primary (#00696b / #00acaf):** Representing the precision and clarity of global logistics. Used for high-level navigation and primary actions.
*   **Secondary (#9b451c / #f68b5c):** Representing the warmth of sun-dried cocoa and roasted coffee. Used to highlight quality markers and "hand-picked" calls to action.
*   **The "No-Line" Rule:** To maintain a premium feel, **1px solid borders are strictly prohibited** for sectioning. Structural boundaries must be created through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to define its start and end.
*   **Surface Hierarchy & Nesting:** Use tiers to create a "physical" feel. 
    *   *Base:* `surface` (#faf9f8)
    *   *Content Blocks:* `surface-container-low` (#f4f3f2)
    *   *Interactive Elements:* `surface-container-lowest` (#ffffff)
*   **The Glass & Gradient Rule:** For floating navigation or product "cards" placed over photography, use **Glassmorphism**. Apply `surface` at 80% opacity with a 20px backdrop-blur. For primary CTAs, use a subtle linear gradient from `primary` (#00696b) to `primary_container` (#00acaf) at a 135-degree angle to add "soul" and dimension.

## 3. Typography: The Editorial Voice
We use a high-contrast scale to emphasize authority and accessibility.

*   **Display & Headlines (Noto Serif):** This is our "Brand Voice." The serif reflects the legacy of the spice and coffee trade. Large `display-lg` sizes should be used with tight letter-spacing (-0.02em) to feel like a premium masthead.
*   **Body & Labels (Manrope):** This is our "Functional Voice." Manrope is a modern, geometric sans-serif that ensures the technical details of import/export are legible and transparent.
*   **Hierarchy Note:** Always pair a `headline-lg` (Serif) with a `label-md` (Sans-serif, All-caps, 0.1em tracking) as a prefix to sections (e.g., "ORIGIN: ETHIOPIA") to create a curated, documented look.

## 4. Elevation & Depth
In this design system, depth is organic, not artificial.

*   **The Layering Principle:** Avoid shadows where background shifts can do the work. A `surface-container-lowest` card on a `surface-container` background provides all the "lift" required.
*   **Ambient Shadows:** When an element must float (e.g., a sample request modal), use a shadow of `0px 24px 48px -12px`. The shadow color must be a 6% opacity tint of `on-surface` (#1a1c1c), never pure black.
*   **The "Ghost Border" Fallback:** If a container is placed on an image and needs definition, use a 1px border of `outline-variant` at 15% opacity. It should be felt, not seen.
*   **Intentional Asymmetry:** Break the grid. Have an image of coffee beans bleed off the right edge of the screen while the text remains centered. This "imperfect" balance suggests a premium, custom-coded experience rather than a template.

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. `md` (0.375rem) roundedness. Typography: `label-md` (Bold).
*   **Secondary:** Ghost style. No background, `outline` at 20% opacity, with `on-surface` text.
*   **Tertiary:** Text-only with a 2px underline in `secondary` that expands on hover.

### Cards & Content Blocks
*   **Product Cards:** No borders. Use `surface-container-low`. High-quality imagery should take up the top 60% of the card, bleeding to the edges.
*   **Forbid Dividers:** Do not use horizontal rules (`<hr>`). Use 64px–96px of vertical white space to separate thematic blocks.

### Global Supply Map (Custom Component)
*   A stylized vector map using `outline-variant` for landmasses. Use `primary_container` pulses for origin points and `secondary` for the current shipment's destination.

### Quality Badges (Chips)
*   **Selection Chips:** Use `secondary_fixed`. Typography: `label-sm`. These should look like "stamps" on a shipping crate.

## 6. Do’s and Don’ts

### Do:
*   **Do** use overlapping elements (e.g., a coffee bean image overlapping a Serif headline).
*   **Do** use "white space" as a functional tool. If a section feels crowded, double the padding.
*   **Do** ensure all photography has a consistent warm temperature to match the `secondary` orange and `surface` beige.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Use `on-surface` (#1a1c1c) for a softer, premium contrast.
*   **Don’t** use standard "drop shadows." If it looks like a default Material Design shadow, it is too heavy.
*   **Don’t** use 100% opaque borders. They create "visual noise" that breaks the editorial flow.
*   **Don’t** center-align long blocks of body text. Keep body text left-aligned for readability and a modern "Swiss" layout feel.