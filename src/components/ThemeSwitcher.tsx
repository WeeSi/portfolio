'use client'
import { useEffect, useState } from 'react'
import { useCurtainRef } from '../hooks/CurtainContext'
import { useCurtain } from '../hooks/useCurtain'
import { useLocomotive } from '../hooks/LocomotiveContext'
import {
  applyThemeToDom,
  freezeCurtainAccent,
  readSavedTheme,
  unfreezeCurtainStrips,
  type Theme,
} from '../lib/theme'

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width={13} height={13} stroke="currentColor" fill="none" strokeWidth={1.8}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
const AutoIcon = () => (
 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="9.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 11 1.5 A 9.5 9.5 0 0 1 11 20.5 Z" fill="currentColor"/>
</svg>
)
const SunIcon = () => (
  <svg viewBox="0 0 24 24" width={13} height={13} stroke="currentColor" fill="none" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const THEME_CURTAIN = {
  riseDuration: 0.5,
  fallDuration: 0.72,
  riseEase: 'power3.inOut',
  fallEase: 'power3.inOut',
  staggerEach: 0.045,
  settleBeforeFall: true,
} as const

export default function ThemeSwitcher() {
  const [theme, setThemeState] = useState<Theme>('auto')
  const curtainRef = useCurtainRef()
  const { transition } = useCurtain(curtainRef)
  const { instance: locomotive } = useLocomotive()

  useEffect(() => {
    setThemeState(readSavedTheme())
  }, [])

  function selectTheme(t: Theme) {
    if (t === theme) return

    const root = document.documentElement
    const strips = curtainRef.current?.querySelectorAll('.curtain-strip')

    root.classList.add('theme-swapping')
    freezeCurtainAccent(strips)

    transition(
      () => applyThemeToDom(t),
      () => {
        unfreezeCurtainStrips(strips)
        root.classList.remove('theme-swapping')
        setThemeState(t)
        locomotive?.resize()
      },
      THEME_CURTAIN,
    )
  }

  const opts: { t: Theme; icon: React.ReactNode; label: string }[] = [
    { t: 'dark',  icon: <MoonIcon />, label: 'Sombre' },
    { t: 'auto',  icon: <AutoIcon />, label: 'Auto'   },
    { t: 'light', icon: <SunIcon />,  label: 'Clair'  },
  ]

  return (
    <div className="theme-switcher">
      {opts.map(({ t, icon, label }) => (
        <button
          key={t}
          className={`ts-btn${theme === t ? ' active' : ''}`}
          onClick={() => selectTheme(t)}
          title={label}
        >
          {icon}
          <span className="ts-tooltip">{label}</span>
        </button>
      ))}
    </div>
  )
}
