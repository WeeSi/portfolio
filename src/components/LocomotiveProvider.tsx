'use client'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useRouterState } from '@tanstack/react-router'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LocomotiveContext } from '../hooks/LocomotiveContext'
import {
  consumeHomeReturn,
  peekHomeReturn,
  restoreHomeScroll,
} from '../lib/homeRestore'

gsap.registerPlugin(ScrollTrigger)

const NAV_OFFSET = -96

type LocomotiveProviderProps = {
  children: ReactNode
}

export default function LocomotiveProvider({ children }: LocomotiveProviderProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isHome = pathname === '/'
  const instanceRef = useRef<LocomotiveScroll | null>(null)
  const [instance, setInstance] = useState<LocomotiveScroll | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!isHome) {
      instanceRef.current?.destroy()
      instanceRef.current = null
      setInstance(null)
      setReady(false)
      return
    }

    gsap.ticker.lagSmoothing(0)

    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        smoothWheel: true,
      },
      initCustomTicker: (render) => {
        gsap.ticker.add(render)
      },
      destroyCustomTicker: (render) => {
        gsap.ticker.remove(render)
      },
      scrollCallback: () => {
        ScrollTrigger.update()
      },
    })

    instanceRef.current = locomotive
    setInstance(locomotive)

    const onRefresh = () => locomotive.resize()
    ScrollTrigger.addEventListener('refresh', onRefresh)

    const lenis = locomotive.lenisInstance
    if (lenis) {
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (value !== undefined) {
            locomotive.scrollTo(value, { immediate: true })
          }
          return lenis.scroll
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
      })

      ScrollTrigger.defaults({ scroller: document.documentElement })
    }

    const frame = requestAnimationFrame(() => {
      locomotive.resize()
      ScrollTrigger.refresh()
      setReady(true)

      if (peekHomeReturn()) {
        consumeHomeReturn()
        restoreHomeScroll((y) => locomotive.scrollTo(y, { immediate: true }))
      }
    })

    return () => {
      cancelAnimationFrame(frame)
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.defaults({ scroller: undefined })
      locomotive.destroy()
      instanceRef.current = null
      setInstance(null)
      setReady(false)
    }
  }, [isHome])

  const scrollTo = useCallback(
    (target: number | HTMLElement | string, options = {}) => {
      instanceRef.current?.scrollTo(target, {
        offset: NAV_OFFSET,
        duration: 1.1,
        ...options,
      })
    },
    [],
  )

  const getScroll = useCallback(() => {
    return instanceRef.current?.lenisInstance?.scroll ?? window.scrollY
  }, [])

  return (
    <LocomotiveContext.Provider value={{ instance, ready, scrollTo, getScroll }}>
      {children}
    </LocomotiveContext.Provider>
  )
}
