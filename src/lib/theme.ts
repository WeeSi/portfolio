export type Theme = 'dark' | 'light' | 'auto'

/** Instant DOM theme update — no React state */
export function applyThemeToDom(t: Theme) {
  const root = document.documentElement
  localStorage.setItem('theme', t)

  if (t === 'auto') {
    root.removeAttribute('data-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.classList.remove('light', 'dark')
    root.classList.add(prefersDark ? 'dark' : 'light')
  } else {
    root.setAttribute('data-theme', t)
    root.classList.remove('light', 'dark')
    root.classList.add(t)
  }
}

export function readSavedTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'auto'
}

export function freezeCurtainAccent(strips: NodeListOf<Element> | Element[] | null | undefined) {
  if (!strips?.length) return
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
  for (const strip of strips) {
    ;(strip as HTMLElement).style.background = accent
  }
}

export function unfreezeCurtainStrips(strips: NodeListOf<Element> | Element[] | null | undefined) {
  if (!strips?.length) return
  for (const strip of strips) {
    ;(strip as HTMLElement).style.background = ''
  }
}
