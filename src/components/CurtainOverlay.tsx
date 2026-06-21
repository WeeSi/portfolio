import { forwardRef } from 'react'

/** 5-strip curtain overlay — rendered once at root, controlled by useCurtain */
const CurtainOverlay = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    aria-hidden="true" data-curtain="true"
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      pointerEvents: 'none',
    }}
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="curtain-strip"
        style={{
          flex: 1,
          height: '100%',
          background: 'var(--accent)',
          transform: 'scaleY(0)',
          transformOrigin: 'bottom center',
        }}
      />
    ))}
  </div>
))

CurtainOverlay.displayName = 'CurtainOverlay'
export default CurtainOverlay
