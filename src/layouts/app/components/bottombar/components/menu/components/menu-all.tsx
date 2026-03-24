import { Link, useLocation } from '@tanstack/react-router'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  menu: MenuItem[]
}

export const MenuAll = ({ menu }: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })

  return (
    <ul className='space-y-1 p-4'>
      {menu.map((item) => (
        <li className='flex items-center gap-4' key={item.label}>
          <Link
            to={item.route}
            className={cn(
              'group flex flex-1 items-center rounded outline-0 transition-colors hover:bg-gray-4 focus-visible:bg-gray-4',
              pathname === item.route && 'bg-gray-4',
            )}
          >
            <div className='flex size-11 items-center justify-center'>
              <Icon
                name={pathname === item.route ? item.activeIcon : item.icon}
                className={
                  pathname === item.route
                    ? 'text-primary-11'
                    : 'text-gray-11 group-hover:text-gray-12'
                }
              />
            </div>

            <div className='flex-1 text-base font-medium whitespace-nowrap text-gray-12 group-hover:text-gray-13'>
              {item.label}
            </div>

            <div className='hidden size-11 items-center justify-center'>
              <Icon className='text-gray-9' name='lucide:grip-vertical' />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
