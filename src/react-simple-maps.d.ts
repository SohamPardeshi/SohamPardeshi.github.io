declare module 'react-simple-maps' {
  import { ReactNode, CSSProperties } from 'react'

  interface ComposableMapProps {
    projection?: string | (() => unknown)
    projectionConfig?: Record<string, unknown>
    width?: number
    height?: number
    style?: CSSProperties
    children?: ReactNode
  }

  interface GeographiesProps {
    geography: string
    children: (args: { geographies: Geography[] }) => ReactNode
  }

  interface Geography {
    rsmKey: string
    id: string | number
    properties: { name: string; [key: string]: unknown }
    [key: string]: unknown
  }

  interface GeographyProps {
    key?: string
    geography: Geography
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: { default?: CSSProperties; hover?: CSSProperties; pressed?: CSSProperties }
    onMouseEnter?: (e: React.MouseEvent) => void
    onMouseMove?: (e: React.MouseEvent) => void
    onMouseLeave?: (e: React.MouseEvent) => void
  }

  interface SphereProps { id?: string; fill?: string; stroke?: string; strokeWidth?: number }
  interface GraticuleProps { stroke?: string; strokeWidth?: number }
  interface LineProps { coordinates: [number, number][]; stroke?: string; strokeWidth?: number; strokeDasharray?: number[] }

  export function ComposableMap(props: ComposableMapProps): JSX.Element
  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element
  export function Sphere(props: SphereProps): JSX.Element
  export function Graticule(props: GraticuleProps): JSX.Element
  export function Line(props: LineProps): JSX.Element
}
