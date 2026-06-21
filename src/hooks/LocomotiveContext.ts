import { createContext, useContext } from 'react'
import type LocomotiveScroll from 'locomotive-scroll'
import type { ILenisScrollToOptions } from 'locomotive-scroll'

export type LocomotiveContextValue = {
  instance: LocomotiveScroll | null
  ready: boolean
  scrollTo: (
    target: number | HTMLElement | string,
    options?: ILenisScrollToOptions,
  ) => void
  getScroll: () => number
}

const defaultValue: LocomotiveContextValue = {
  instance: null,
  ready: false,
  scrollTo: () => {},
  getScroll: () => (typeof window !== 'undefined' ? window.scrollY : 0),
}

export const LocomotiveContext = createContext<LocomotiveContextValue>(defaultValue)

export function useLocomotive() {
  return useContext(LocomotiveContext)
}
