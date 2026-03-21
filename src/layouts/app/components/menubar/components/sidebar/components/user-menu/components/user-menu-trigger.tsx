import { AnimatePresence, motion } from 'motion/react'
import avatar from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'

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
    <div
      className={cn(
        'mx-1 flex cursor-pointer items-center p-1',
        isSidebarOpen && 'rounded hover:bg-gray-4',
      )}
    >
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          image={avatar}
          imageLabel='user picture'
          initials='CV'
          size={28}
        />
      </div>
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div {...animationConfig} className='ml-2 flex-1'>
            <div className='flex items-center select-none'>
              <div className='min-w-0 flex-1'>
                <div className='truncate text-sm/5 font-medium text-gray-12'>
                  Charles Vinoth
                </div>
                <div className='truncate text-xs/5'>charles@ezofis.com</div>
              </div>
              <Icon name='lucide:chevrons-up-down' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
