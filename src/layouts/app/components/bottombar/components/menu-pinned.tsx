import { Link, useLocation } from '@tanstack/react-router'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  menu: MenuItem[]
}

export const MenuPinned = ({ menu }: Props) => {
  const pinned = menu.slice(0, 4)
  const pathname = useLocation({
    select: (location) => location.pathname,
  })

  return (
    <>
      {pinned.map((item) => (
        <Link
          to={item.route}
          className={cn(
            'group flex size-10 items-center justify-center rounded hover:bg-gray-4',
            pathname === item.route && 'bg-gray-4',
          )}
        >
          <Icon
            name={pathname === item.route ? item.activeIcon : item.icon}
            className={
              pathname === item.route
                ? 'text-primary-11'
                : 'text-gray-11 group-hover:text-gray-12'
            }
          />
        </Link>
      ))}
    </>
  )
}
