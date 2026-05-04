import katex from 'katex'
import 'katex/dist/katex.min.css'

interface MathProps {
  /** LaTeX expression */
  children: string
  /** Display mode (block) vs inline */
  display?: boolean
}

export default function Math({ children, display = false }: MathProps) {
  const html = katex.renderToString(children, {
    displayMode: display,
    throwOnError: false,
  })

  if (display) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
