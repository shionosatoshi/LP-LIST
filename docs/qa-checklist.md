# Maison Neko LP QA Checklist

Use this checklist to verify the React + Tailwind landing page against the generated Maison Neko image set, visual constraints, and interaction requirements.

## Browser Use Screen Checks

- [ ] Start the local dev server and open the LP with Browser Use at desktop width, then capture or inspect the first viewport.
- [ ] Repeat with Browser Use at mobile width, including the hero, menu/service sections, reservation CTA, and footer.
- [ ] Confirm no overlapping text, clipped buttons, horizontal scroll, or layout jumps at desktop and mobile breakpoints.
- [ ] Verify the first viewport immediately signals Maison Neko through the brand name and generated cat cafe imagery.
- [ ] Ensure the next section is hinted below the hero on both desktop and mobile, rather than a full-screen dead end.

## Generated Image Rendering

- [ ] Confirm all generated Maison Neko images load without broken URLs, distortion, dark overlays that hide subject matter, or excessive cropping.
- [ ] Check that primary images reveal the cafe, cats, lounge, menu, or reservation environment clearly enough to inspect.
- [ ] Validate image aspect ratios remain stable while loading and do not cause cumulative layout shift.
- [ ] Compare page usage against the intended image roles: hero image for first impression, service/menu images for supporting content, reservation image for conversion context.

## Pixel Faithfulness

- [ ] Compare the implemented LP to the approved generated-image direction for mood: refined cat cafe, warm but restrained, premium, calm, and inviting.
- [ ] Confirm colors are not dominated by a single flat palette and do not drift into generic beige-only, purple-gradient, or stock cafe styling.
- [ ] Check that rounded corners, shadows, borders, and section spacing feel restrained and consistent with a boutique Maison Neko brand.
- [ ] Verify visual emphasis follows the generated imagery: cats and cafe atmosphere lead, decorative UI effects support rather than compete.

## Typography And Spacing

- [ ] Confirm headings, body text, nav labels, CTAs, and form labels are readable on desktop and mobile.
- [ ] Ensure hero-scale typography is used only in the hero and compact UI areas use appropriately smaller type.
- [ ] Check that line length, section padding, and card/grid spacing remain balanced across common widths.
- [ ] Verify text does not scale directly with viewport width and letter spacing is not negative.

## Animation Sanity

- [ ] Confirm animations are rich but restrained: smooth entrances, hover states, and subtle motion without distracting loops.
- [ ] Verify animations do not delay key content, cause layout shifts, obscure images, or make form fields harder to use.
- [ ] Test reduced motion behavior if implemented; the page should remain polished and usable with motion minimized.
- [ ] Check interactive states for nav, CTA buttons, cards, and form controls on hover, focus, and tap.

## Accessibility

- [ ] Check heading order, landmark structure, and meaningful link/button labels.
- [ ] Confirm generated images have useful alt text or are marked decorative only when appropriate.
- [ ] Verify keyboard navigation reaches nav links, CTAs, and every form field in a logical order.
- [ ] Confirm visible focus states are clear against the page background and image areas.
- [ ] Check color contrast for text over images, muted body copy, buttons, labels, and validation states.

## Form Interaction

- [ ] Complete the reservation/contact flow on desktop and mobile using keyboard and pointer input.
- [ ] Verify required fields, validation messages, focus handling, and submit feedback are clear.
- [ ] Confirm form layout does not collapse awkwardly with long names, email addresses, dates, times, or notes.
- [ ] Ensure tappable controls are large enough on mobile and do not sit too close together.

## Final Acceptance

- [ ] Browser Use desktop and mobile passes show no blank image regions, broken assets, or incoherent overlap.
- [ ] The LP feels like a finished Maison Neko experience, not a generic landing page with cat cafe copy added later.
- [ ] Any deviations from generated-image direction or implementation constraints are documented before handoff.
