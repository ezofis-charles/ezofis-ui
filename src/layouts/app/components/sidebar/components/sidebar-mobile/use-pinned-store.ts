import { create } from 'zustand'
import type { SidebarMenuItem } from '../../sidebar.types'

type Store = {
  pinned: SidebarMenuItem[]
  setPinned: (pinned: SidebarMenuItem[]) => void
}

export const usePinnedStore = create<Store>()((set) => ({
  pinned: [],
  setPinned: (pinned: SidebarMenuItem[]) => set({ pinned }),
}))
