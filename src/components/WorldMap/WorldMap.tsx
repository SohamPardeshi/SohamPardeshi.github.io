import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Line, Sphere } from 'react-simple-maps'
import { useDarkMode } from '@/hooks/useDarkMode'
import styles from './WorldMap.module.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const ALPHA2_TO_NUMERIC: Record<string, number> = {
  AF: 4,   AL: 8,   DZ: 12,  AD: 20,  AO: 24,  AG: 28,  AR: 32,  AM: 51,
  AU: 36,  AT: 40,  AZ: 31,  BS: 44,  BH: 48,  BD: 50,  BB: 52,  BY: 112,
  BE: 56,  BZ: 84,  BJ: 204, BT: 64,  BO: 68,  BA: 70,  BW: 72,  BR: 76,
  BN: 96,  BG: 100, BF: 854, BI: 108, CV: 132, KH: 116, CM: 120, CA: 124,
  CF: 140, TD: 148, CL: 152, CN: 156, CO: 170, KM: 174, CD: 180, CG: 178,
  CR: 188, HR: 191, CU: 192, CY: 196, CZ: 203, DK: 208, DJ: 262, DM: 212,
  DO: 214, EC: 218, EG: 818, SV: 222, GQ: 226, ER: 232, EE: 233, SZ: 748,
  ET: 231, FJ: 242, FI: 246, FR: 250, GA: 266, GM: 270, GE: 268, DE: 276,
  GH: 288, GR: 300, GD: 308, GT: 320, GN: 324, GW: 624, GY: 328, HT: 332,
  HN: 340, HU: 348, IS: 352, IN: 356, ID: 360, IR: 364, IQ: 368, IE: 372,
  IL: 376, IT: 380, JM: 388, JP: 392, JO: 400, KZ: 398, KE: 404, KI: 296,
  KP: 408, KR: 410, KW: 414, KG: 417, LA: 418, LV: 428, LB: 422, LS: 426,
  LR: 430, LY: 434, LI: 438, LT: 440, LU: 442, MG: 450, MW: 454, MY: 458,
  MV: 462, ML: 466, MT: 470, MH: 584, MR: 478, MU: 480, MX: 484, FM: 583,
  MD: 498, MC: 492, MN: 496, ME: 499, MA: 504, MZ: 508, MM: 104, NA: 516,
  NR: 520, NP: 524, NL: 528, NZ: 554, NI: 558, NE: 562, NG: 566, MK: 807,
  NO: 578, OM: 512, PK: 586, PW: 585, PA: 591, PG: 598, PY: 600, PE: 604,
  PH: 608, PL: 616, PT: 620, QA: 634, RO: 642, RU: 643, RW: 646, KN: 659,
  LC: 662, VC: 670, WS: 882, SM: 674, ST: 678, SA: 682, SN: 686, RS: 688,
  SC: 690, SL: 694, SG: 702, SK: 703, SI: 705, SB: 90,  SO: 706, ZA: 710,
  SS: 728, ES: 724, LK: 144, SD: 729, SR: 740, SE: 752, CH: 756, SY: 760,
  TW: 158, TJ: 762, TZ: 834, TH: 764, TL: 626, TG: 768, TO: 776, TT: 780,
  TN: 788, TR: 792, TM: 795, TV: 798, UG: 800, UA: 804, AE: 784, GB: 826,
  US: 840, UY: 858, UZ: 860, VU: 548, VE: 862, VN: 704, YE: 887, ZM: 894,
  ZW: 716,
}

interface Props {
  visited: string[]
}

export default function WorldMap({ visited }: Props) {
  const dark = useDarkMode()
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null)
  const visitedSet = new Set(visited.map(c => ALPHA2_TO_NUMERIC[c]).filter(Boolean))

  const ocean        = dark ? '#264661' : '#dde8f0'
  const colorLand    = dark ? '#706862' : '#F6F0E9'
  const patternStroke = dark ? '#b3ad7a' : '#f6e58d'
  const patternBg    = dark ? '#af7f4f' : '#ffbe76'
  const borderColor  = dark ? '#635b54' : '#fff'
  const graticule    = dark ? '#2d3236' : '#c8d8e0'
  const sphereStroke = dark ? '#536a81' : '#b0c8d8'
  const equator      = dark ? '#c0604030' : '#F5330040'
  const tropics      = dark ? '#6a6058' : '#998880'

  const EQUATOR: [number, number][] = [[-180,0],[0,0],[180,0]]
  const TROPIC_N: [number, number][] = Array.from({length: 361}, (_,i) => [-180+i, 23.5])
  const TROPIC_S: [number, number][] = Array.from({length: 361}, (_,i) => [-180+i, -23.5])

  const patternId = dark ? 'hatch-dark' : 'hatch-light'

  return (
    <div className={styles.frame} onMouseLeave={() => setTooltip(null)}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 130, center: [0, 0] }}
        width={900}
        height={400}
        style={{ width: '100%', height: 'auto', display: 'block', margin: '1.5em auto' }}
      >
        <defs>
          <pattern id={patternId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill={patternBg} />
            <line x1="0" y1="0" x2="0" y2="6" stroke={patternStroke} strokeWidth="1.5" />
          </pattern>
        </defs>
        <Sphere id="sphere" fill={ocean} stroke={sphereStroke} strokeWidth={1.5} />
        <Graticule stroke={graticule} strokeWidth={0.3} />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const isVisited = visitedSet.has(Number(geo.id))
              return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isVisited ? `url(#${patternId})` : colorLand}
                stroke={borderColor}
                strokeWidth={0.4}
                style={{ default: { outline: 'none' }, hover: { outline: 'none', opacity: isVisited ? 0.75 : 1 }, pressed: { outline: 'none' } }}
                onMouseEnter={(e: React.MouseEvent) => {
                  if (!isVisited) return
                  const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect()
                  setTooltip({ name: geo.properties.name, x: e.clientX - rect.left, y: e.clientY - rect.top })
                }}
                onMouseMove={(e: React.MouseEvent) => {
                  if (!isVisited) return
                  const rect = (e.currentTarget.closest('div') as HTMLElement).getBoundingClientRect()
                  setTooltip(t => t ? { ...t, x: e.clientX - rect.left, y: e.clientY - rect.top } : null)
                }}
                onMouseLeave={() => setTooltip(null)}
              />
            )})
          }
        </Geographies>
        <Line coordinates={TROPIC_N} stroke={tropics} strokeWidth={0.6} strokeDasharray={[4,4]} />
        <Line coordinates={TROPIC_S} stroke={tropics} strokeWidth={0.6} strokeDasharray={[4,4]} />
        <Sphere id="sphere-border" fill="none" stroke={sphereStroke} strokeWidth={1.5} />
      </ComposableMap>
      {tooltip && (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x + 12, top: tooltip.y - 8 }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  )
}
