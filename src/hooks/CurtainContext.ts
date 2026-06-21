import { createContext, useContext, type RefObject } from 'react'

export const CurtainContext = createContext<RefObject<HTMLDivElement | null>>({ current: null })

export function useCurtainRef() {
  return useContext(CurtainContext)
}
