/**
 * world-paths — Build-time GeoJSON → SVG path conversion.
 * Uses equirectangular projection so markers placed with the same
 * projection function will land exactly on the right country.
 */
import worldGeoJson from '@/data/world-110m.json';

type Ring = [number, number][];
type Polygon = Ring[];
type MultiPolygon = Polygon[];

interface Feature {
  type: 'Feature';
  properties: { name?: string };
  geometry:
    | { type: 'Polygon'; coordinates: Polygon }
    | { type: 'MultiPolygon'; coordinates: MultiPolygon };
}

interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}

const W = 1000;
const H = 500;

export const WORLD_VIEWBOX = { width: W, height: H };

export function projectEqui(lat: number, lng: number) {
  const x = ((lng + 180) / 360) * W;
  const y = ((90 - lat) / 180) * H;
  return { x: +x.toFixed(2), y: +y.toFixed(2) };
}

function ringToPath(ring: Ring): string {
  let d = '';
  for (let i = 0; i < ring.length; i++) {
    const [lng, lat] = ring[i];
    const x = (((lng + 180) / 360) * W).toFixed(1);
    const y = (((90 - lat) / 180) * H).toFixed(1);
    d += (i === 0 ? 'M' : 'L') + x + ',' + y;
  }
  return d + 'Z';
}

function polygonToPath(poly: Polygon): string {
  return poly.map(ringToPath).join('');
}

export function getWorldPaths(): string[] {
  const fc = worldGeoJson as unknown as FeatureCollection;
  const out: string[] = [];
  for (const feature of fc.features) {
    const g = feature.geometry;
    if (g.type === 'Polygon') {
      out.push(polygonToPath(g.coordinates));
    } else if (g.type === 'MultiPolygon') {
      for (const poly of g.coordinates) {
        out.push(polygonToPath(poly));
      }
    }
  }
  return out;
}
