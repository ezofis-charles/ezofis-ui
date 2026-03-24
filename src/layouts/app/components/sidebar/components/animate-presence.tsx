import type { ReactNode } from 'react'
import { AnimatePresence as Base, motion } from 'motion/react'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
}

export const AnimatePresence = ({ children, className }: Props) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  return (
    <Base initial={false}>
      {isSidebarOpen && (
        <motion.div
          animate={{ opacity: 1, width: 'auto' }}
          className={cn('overflow-hidden', className)}
          exit={{ opacity: 0, width: 0 }}
          initial={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.div>
      )}
    </Base>
  )
}
