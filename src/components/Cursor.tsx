'use client'
import { useEffect, useRef } from 'react'

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label[for]'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const setHoverState = (hovering: boolean) => {
      if (isHoveringRef.current === hovering) return
      isHoveringRef.current = hovering
      const ring = ringRef.current
      const dot = dotRef.current
      if (!ring || !dot) return
      ring.style.width = hovering ? '56px' : '40px'
      ring.style.height = hovering ? '56px' : '40px'
      ring.style.borderColor = hovering
        ? 'rgba(240,237,230,0.85)'
        : 'rgba(240,237,230,0.4)'
      dot.style.opacity = hovering ? '0' : '1'
    }

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
      const target = document.elementFromPoint(e.clientX, e.clientY)
      setHoverState(!!target?.closest(HOVER_SELECTOR))
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed', zIndex: 9999,
        pointerEvents: 'none', mixBlendMode: 'difference',
      }}
    >
      <div
        ref={ringRef}
        style={{
          width: 40, height: 40,
          border: '1px solid rgba(240,237,230,0.4)',
          borderRadius: '50%', position: 'absolute',
          transform: 'translate(-50%,-50%)',
          transition: 'width .4s, height .4s, border-color .3s',
        }}
      />
      <div
        ref={dotRef}
        style={{
          width: 8, height: 8,
          background: 'var(--white)',
          borderRadius: '50%', position: 'absolute',
          transform: 'translate(-50%,-50%)',
          transition: 'opacity 0.25s',
        }}
      />
    </div>
  )
}
