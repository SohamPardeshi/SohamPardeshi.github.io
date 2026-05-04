import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Ghost.module.css'

interface GhostProps {
  /** The inline text that gets the dashed underline */
  children: React.ReactNode
  /** The aside/comment shown in the margin box */
  note: React.ReactNode
}

export default function Ghost({ children, note }: GhostProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [top, setTop] = useState<number>(0)
  const [hovered, setHovered] = useState(false)
  const [flipTooltip, setFlipTooltip] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const cont = el.closest('[data-ghost-container]') as HTMLElement | null
    setContainer(cont)

    const updatePosition = () => {
      if (!cont) return
      const containerRect = cont.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setTop(elRect.top - containerRect.top + elRect.height / 2)
    }
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [])

  useEffect(() => {
    if (!hovered || !wrapperRef.current) return
    const elRect = wrapperRef.current.getBoundingClientRect()
    // If there's less than 60px above the element, flip tooltip below
    setFlipTooltip(elRect.top < 60)
  }, [hovered])

  const noteCard = container
    ? createPortal(
        <span
          className={`${styles.note} ${hovered ? styles.noteHovered : ''}`}
          style={{ top: `${top}px` }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {note}
        </span>,
        container
      )
    : null

  return (
    <>
      <span
        className={`${styles.wrapper} ${hovered ? styles.wrapperHovered : ''}`}
        ref={wrapperRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className={styles.text}>{children}</span>
        <span ref={tooltipRef} className={`${styles.tooltip} ${flipTooltip ? styles.tooltipBelow : ''}`}>{note}</span>
      </span>
      {noteCard}
    </>
  )
}
