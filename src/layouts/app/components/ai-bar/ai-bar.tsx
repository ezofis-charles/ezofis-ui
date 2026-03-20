import { AnimatePresence, motion } from 'motion/react'
import { AI_BAR_WIDTH } from '@/constants'
import { useAiBarStore } from '@/layouts/app/stores/use-aibar-store'

const TRANSITION = {
  damping: 30,
  mass: 0.8,
  stiffness: 300,
  type: 'spring' as const,
}

const OPACITY_TRANSITION = {
  duration: 0.2,
}

const aiBarSpacerMotion = {
  initial: false,
  transition: TRANSITION,
  animate: (isAiBarOpen: boolean) => ({
    width: isAiBarOpen ? AI_BAR_WIDTH : 0,
  }),
}

const aiBarContentMotion = {
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: AI_BAR_WIDTH },
  initial: { opacity: 0, x: AI_BAR_WIDTH },
  transition: {
    opacity: OPACITY_TRANSITION,
    x: TRANSITION,
  },
}

export const AiBar = () => {
  const isAiBarOpen = useAiBarStore((state) => state.isAiBarOpen)

  return (
    <>
      <motion.div
        animate={aiBarSpacerMotion.animate(isAiBarOpen)}
        initial={aiBarSpacerMotion.initial}
        transition={aiBarSpacerMotion.transition}
      />
      <AnimatePresence>
        {isAiBarOpen && (
          <motion.div
            {...aiBarContentMotion}
            className='fixed top-1 right-1 bottom-1 w-96 rounded-xl border border-gray-3 bg-surface p-4'
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
