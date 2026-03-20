import { AnimatePresence, motion } from 'motion/react'
import logoMark from '@/assets/logo/mark.png'
import logoText from '@/assets/logo/text.png'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

const animationConfig = {
  animate: { opacity: 1, width: 'auto' },
  className: 'overflow-hidden',
  exit: { opacity: 0, width: 0 },
  initial: { opacity: 0, width: 0 },
  transition: { duration: 0.15 },
}

export const Logo = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  return (
    <div className='mx-2 flex h-13 items-center gap-0.5 overflow-hidden'>
      <div className='flex size-9 shrink-0 items-center justify-center'>
        <img alt='logo mark' className='size-8' src={logoMark} />
      </div>
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div {...animationConfig}>
            <img
              alt='logo text'
              className='h-6 w-auto max-w-none'
              src={logoText}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
