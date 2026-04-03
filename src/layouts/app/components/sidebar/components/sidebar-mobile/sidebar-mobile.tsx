import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import type { SidebarMenuGroup, SidebarMenuItem } from '../../sidebar.types'
import { Menu } from './menu'
import { MenuCustomize } from './menu-customize'
import { MenuPinned } from './menu-pinned'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  const [items, setItems] = useState<SidebarMenuItem[]>(
    menuGroup.flatMap((group) => group.items),
  )
  const [open, setOpen] = useState(false)
  const [openCustomize, setOpenCustomize] = useState(false)

  const handleCustomize = () => {
    setOpen(false)
    setOpenCustomize(true)
  }

  return (
    <div className='fixed bottom-0 left-0 w-full border-t border-gray-4 bg-surface-raised px-4 py-3'>
      <div className='flex items-center justify-around gap-4'>
        <MenuPinned items={items} />
        <ButtonIcon
          color='gray'
          icon='material-symbols:unfold-more-rounded'
          size='xl'
          variant='ghost'
          onClick={() => setOpen(true)}
        />
      </div>

      <Menu
        menuGroup={menuGroup}
        open={open}
        onClose={() => setOpen(false)}
        onCustomize={handleCustomize}
      />

      <MenuCustomize
        items={items}
        open={openCustomize}
        setItems={setItems}
        onClose={() => setOpenCustomize(false)}
      />
    </div>
  )
}
