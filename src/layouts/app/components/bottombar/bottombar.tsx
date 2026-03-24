import { useState } from 'react'
import type { MenuGroup, MenuItem } from '@/layouts/app/app-layout.types'
import { Menu } from './components/menu'
import { MenuPinned } from './components/menu-pinned'

interface Props {
  menuGroup: MenuGroup[]
}

export const Bottombar = ({ menuGroup }: Props) => {
  const flattenedMenu = menuGroup.flatMap((group) => group.items)
  const [menu, setMenu] = useState<MenuItem[]>(flattenedMenu)
  console.log(setMenu)

  return (
    <div className='fixed bottom-0 left-0 flex w-full items-center justify-around gap-4 border-t border-gray-4 bg-surface-raised p-4'>
      <MenuPinned menu={menu} />
      <Menu menu={menu} />
    </div>
  )
}
