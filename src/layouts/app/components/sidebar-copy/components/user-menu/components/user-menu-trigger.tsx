import avatar from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store-copy'
import { cn } from '@/utils/cn'
import { AnimatePresence } from '../../animate-presence'

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
          size={32}
        />
      </div>

      <AnimatePresence className='ml-2.5 flex-1'>
        <div className='flex items-center select-none'>
          <div className='min-w-0 flex-1'>
            <div className='truncate text-micro/5 font-medium text-gray-12'>
              Charles Vinoth
            </div>
            <div className='truncate text-xs/5'>charles@ezofis.com</div>
          </div>
          <Icon name='material-symbols:more-vert' />
        </div>
      </AnimatePresence>
    </div>
  )
}
