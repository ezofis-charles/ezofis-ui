import { create } from 'zustand'

type Store = {
  isAiBarOpen: boolean
  closeAiBar: () => void
  openAiBar: () => void
  toggleAiBar: () => void
}

export const useAiBarStore = create<Store>()((set) => ({
  isAiBarOpen: false,
  closeAiBar: () => set({ isAiBarOpen: false }),
  openAiBar: () => set({ isAiBarOpen: true }),
  toggleAiBar: () => set((state) => ({ isAiBarOpen: !state.isAiBarOpen })),
}))
