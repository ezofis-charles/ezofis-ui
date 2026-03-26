import { Link, useLocation } from '@tanstack/react-router'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import { MenuItem as Item } from './menu-item'

interface Props {
  menu: MenuItem[]
}

export const MenuAll = ({ menu }: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })

  return (
    <ul className='space-y-1 px-4 py-2'>
      {menu.map((item) => (
        <li className='flex items-center gap-4' key={item.label}>
          <Link
            to={item.route}
            className={cn(
              'group flex-1 rounded outline-0 transition-colors hover:bg-gray-4 focus-visible:bg-gray-4',
              pathname === item.route && 'bg-gray-4',
            )}
          >
            <Item
              activeIcon={item.activeIcon}
              icon={item.icon}
              isActive={pathname === item.route}
              label={item.label}
            />

            <div className='hidden size-11 items-center justify-center'>
              <Icon className='text-gray-9' name='lucide:grip-vertical' />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
