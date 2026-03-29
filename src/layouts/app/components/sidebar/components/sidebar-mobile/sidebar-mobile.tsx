import { useState } from 'react'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { MenuPinned } from './menu-pinned'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  const flattened = menuGroup.flatMap((group) => group.items)
  const [menu, setMenu] = useState<MenuItem[]>(flattened)
  console.log(setMenu)

  return (
    <div className='fixed bottom-0 left-0 w-full border-t border-gray-4 bg-surface-raised p-4'>
      <div className='mx-auto flex max-w-96 items-center justify-around gap-4'>
        <MenuPinned menu={menu} />
      </div>
    </div>
  )
}
