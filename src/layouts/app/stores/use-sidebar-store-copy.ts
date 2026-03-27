import { create } from 'zustand'

type Store = {
  isSidebarOpen: boolean
  closeSidebar: () => void
  openSidebar: () => void
  toggleSidebar: () => void
}

export const useSidebarStore = create<Store>()((set) => ({
  isSidebarOpen: false,
  closeSidebar: () => set({ isSidebarOpen: false }),
  openSidebar: () => set({ isSidebarOpen: true }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}))
