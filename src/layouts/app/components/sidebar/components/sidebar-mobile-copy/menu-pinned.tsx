import { Link, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { usePinnedStore } from './use-pinned-store'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const MenuPinned = ({ menuGroup }: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const pinned = usePinnedStore((state) => state.pinned)
  const setPinned = usePinnedStore((state) => state.setPinned)

  useEffect(() => {
    const flattened = menuGroup.flatMap((group) => group.items)
    setPinned(flattened.slice(0, 4))
  }, [menuGroup, setPinned])

  return (
    <>
      {pinned.map((item) => (
        <Link
          key={item.route}
          to={item.route}
          className={cn(
            'group flex size-8 items-center justify-center rounded outline-primary-8 hover:bg-gray-4',
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
