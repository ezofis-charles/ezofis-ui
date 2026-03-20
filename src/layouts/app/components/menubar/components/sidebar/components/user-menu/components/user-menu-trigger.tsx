import { AnimatePresence, motion } from 'motion/react'
import avatar from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

const animationConfig = {
  animate: { opacity: 1, width: 'auto' },
  className: 'overflow-hidden',
  exit: { opacity: 0, width: 0 },
  initial: { opacity: 0, width: 0 },
  transition: { duration: 0.15 },
}

export const UserMenuTrigger = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  return (
    <div className='flex h-13 cursor-pointer items-center px-2'>
      <div className='flex h-10 w-9 shrink-0 items-center justify-center'>
        <Avatar
          image={avatar}
          imageLabel='user picture'
          initials='CV'
          size={30}
        />
      </div>
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div {...animationConfig} className='ml-2 flex-1'>
            <div className='flex items-center select-none'>
              <div className='min-w-0 flex-1'>
                <div className='truncate font-medium text-gray-12'>
                  Charles Vinoth
                </div>
                <div className='truncate text-xs'>charles@ezofis.com</div>
              </div>
              <Icon name='lucide:more-vertical' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
