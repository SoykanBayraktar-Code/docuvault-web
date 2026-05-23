/**
 * DocuVault — Brand single source (JS side).
 *
 * This is the canonical palette for everything that lives in JavaScript:
 * Three.js materials/lights, GSAP color tweens, canvas backgrounds, etc.
 *
 * Tailwind v4 reads design tokens from CSS `@theme` (see `app/globals.css`),
 * not from TS — so the same hex values are mirrored there. When you change a
 * colour, change it in BOTH places. `rgb` tuples are normalised 0–1 for
 * direct use with `new THREE.Color(...rgb)`.
 *
 * Palette = "Vault Meridiem" warm/archival foundation (olive, parchment,
 * straw) bridged into a darker premium tier (forest, gold) for the cinematic
 * 3D moments. `#2E3D27` is the bridge — it exists in both worlds.
 */

export const BRAND = {
  colors: {
    // — Premium / cinematic tier (dark 3D scenes) —
    forest:     { hex: "#2E3D27", rgb: [0.18, 0.239, 0.153] as const },
    forestDark: { hex: "#1A2418", rgb: [0.102, 0.141, 0.094] as const },
    gold:       { hex: "#C9A961", rgb: [0.788, 0.663, 0.38] as const },
    goldBright: { hex: "#E0C282", rgb: [0.878, 0.761, 0.51] as const },
    ink:        { hex: "#0F1410", rgb: [0.059, 0.078, 0.063] as const },

    // — Warm / archival foundation (light marketing sections) —
    olive:      { hex: "#4A5C3F", rgb: [0.29, 0.361, 0.247] as const },
    sage:       { hex: "#A8B5A0", rgb: [0.659, 0.71, 0.627] as const },
    straw:      { hex: "#EFE4CB", rgb: [0.937, 0.894, 0.796] as const }, // aged-paper base
    parchment:  { hex: "#F9F6F1", rgb: [0.976, 0.965, 0.945] as const },
    creamWarm:  { hex: "#FFF8E7", rgb: [1.0, 0.973, 0.906] as const },

    // — Legacy accent, retained for paper textures / V1.1 badges only —
    copper:     { hex: "#9C6B3C", rgb: [0.612, 0.42, 0.235] as const },
  },

  typography: {
    display: "var(--font-inter)",          // hero, headings
    body: "var(--font-inter)",             // paragraphs
    mono: "var(--font-jetbrains-mono)",    // technical emphasis (AES-256, etc.)
  },

  motion: {
    ease: {
      apple: "cubic-bezier(0.32, 0.72, 0, 1)",
      expoOut: "cubic-bezier(0.16, 1, 0.3, 1)",
      smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
    },
    // GSAP string eases (parallel to the CSS cubic-beziers above)
    gsap: {
      apple: "power3.inOut",
      expoOut: "expo.out",
      smooth: "power2.inOut",
    },
    duration: {
      micro: 0.4,
      base: 0.8,
      slow: 1.4,
      epic: 2.4,
    },
  },
} as const;

export type BrandColor = keyof typeof BRAND.colors;

/** Convenience: get a normalised RGB tuple for THREE.Color. */
export function rgb(color: BrandColor): readonly [number, number, number] {
  return BRAND.colors[color].rgb;
}

/** Convenience: get a hex string. */
export function hex(color: BrandColor): string {
  return BRAND.colors[color].hex;
}
