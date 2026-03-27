import { Link, useLocation } from '@tanstack/react-router'
import type { MenuItem as MenuItemType } from '@/layouts/app/app-layout.types'
import { Icon } from '@/components/base/icon'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store-copy'
import { cn } from '@/utils/cn'
import { AnimatePresence } from '../animate-presence'

interface Props extends MenuItemType {
  iconClassName?: string
}

export const MenuItem = ({
  activeIcon,
  icon,
  iconClassName,
  label,
  route,
}: Props) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const isActive = pathname === route

  return (
    <li className='px-2' key={label}>
      <Tooltip
        content={label}
        disabled={isSidebarOpen}
        openDelay={TOOLTIP_DELAY}
        position='right'
      >
        <Link
          to={route}
          className={cn(
            'group flex items-center rounded outline-0 transition-colors hover:bg-gray-4 focus-visible:bg-gray-4',
            isActive && 'bg-gray-4',
          )}
        >
          <div className='flex size-8 shrink-0 items-center justify-center'>
            <Icon
              name={isActive ? activeIcon : icon}
              className={cn(
                'transition-colors',
                isActive
                  ? 'text-primary-11'
                  : 'text-gray-11 group-hover:text-gray-12',
                iconClassName,
              )}
            />
          </div>

          <AnimatePresence>
            <div className='pr-2 font-medium whitespace-nowrap text-gray-12'>
              {label}
            </div>
          </AnimatePresence>
        </Link>
      </Tooltip>
    </li>
  )
}
