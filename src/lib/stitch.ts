/**
 * Stitch image resolver.
 *
 * Stitch design exports reference images at URLs like:
 *   https://lh3.googleusercontent.com/aida-public/<LONG_TOKEN>
 *
 * We download these into `public/images/kismet/stitch/<hash>.jpg` and keep
 * a URL→local path manifest at `src/lib/stitch-images.json`.
 *
 * WebP pipeline: originals (.jpg) are pre-converted to .webp with cwebp at
 * quality 80 — 92% size reduction (25.5 MB → 1.9 MB across 68 assets).
 * `stitchSrc()` returns the .webp path by default; `stitchFallback()` gives
 * the legacy .jpg for `<picture>` elements on browsers lacking WebP.
 */
import manifest from './stitch-images.json';

const map = manifest as Record<string, string>;

function toWebp(path: string): string {
  return path.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

export function stitchSrc(stitchUrl: string): string {
  const local = map[stitchUrl];
  if (local) return toWebp(local);
  if (import.meta.env.DEV) {
    console.warn(`[stitch] No local mapping for ${stitchUrl.slice(0, 80)}…`);
  }
  return stitchUrl;
}

export function stitchFallback(stitchUrl: string): string {
  const local = map[stitchUrl];
  return local ?? stitchUrl;
}

export function hasStitchMapping(stitchUrl: string): boolean {
  return stitchUrl in map;
}
