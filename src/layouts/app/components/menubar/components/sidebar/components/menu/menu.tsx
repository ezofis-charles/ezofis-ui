import { AnimatePresence, motion } from 'motion/react'
import type { MenuGroup } from '@/layouts/app/components/menubar/menubar.types'
import { Divider } from '@/components/base/divider'
import { ScrollArea } from '@/components/base/scroll-area'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'
import { MenuItem } from './menu-item'

interface Props {
  menuGroup: MenuGroup[]
}

const animationConfig = {
  animate: { height: 'auto', opacity: 1 },
  className: 'overflow-hidden',
  exit: { height: 0, opacity: 0 },
  initial: { height: 0, opacity: 0 },
  transition: { duration: 0.15 },
}

export const Menu = ({ menuGroup }: Props) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  return (
    <ScrollArea style={{ height: 'calc(100dvh - 116px)' }}>
      <nav className='mt-2.5'>
        {menuGroup.map((group, index) => (
          <div key={group.label}>
            <AnimatePresence initial={false}>
              {!isSidebarOpen && index !== 0 && (
                <motion.div {...animationConfig}>
                  <Divider className='mx-3 my-2' />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isSidebarOpen && (
                <motion.div {...animationConfig}>
                  <div
                    className={cn(
                      'px-4 text-xs/7 font-medium whitespace-nowrap text-gray-10',
                      index !== 0 && 'pt-4',
                    )}
                  >
                    {group.label}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className='space-y-0.5'>
              {group.items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </ScrollArea>
  )
}
