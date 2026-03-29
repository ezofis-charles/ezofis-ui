import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { SidebarMenuItem as SidebarMenuItemType } from '../../sidebar.types'

type Props = SidebarMenuItemType

export const MenuItem = ({ activeIcon, icon, label, route }: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const isActive = pathname === route

  return (
    <Link
      to={route}
      className={cn(
        'group flex items-center rounded outline-0 transition-colors hover:bg-gray-4 focus-visible:bg-gray-4',
        isActive && 'bg-gray-4',
      )}
    >
      <div className='flex size-10 shrink-0 items-center justify-center'>
        <Icon
          name={isActive ? activeIcon : icon}
          className={cn(
            'transition-colors',
            isActive
              ? 'text-primary-11'
              : 'text-gray-11 group-hover:text-gray-12',
          )}
        />
      </div>

      <div className='pr-2 font-medium whitespace-nowrap text-gray-12'>
        {label}
      </div>
    </Link>
  )
}
