import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Sheet } from '@/components/base/sheet'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { UserMenu } from '../user-menu/user-menu'
import { MenuCustomize } from './menu-customize'
import { MenuGroup } from './menu-group'
import { UserMenuTrigger } from './user-menu-trigger'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const Menu = ({ menuGroup }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <ButtonIcon
        color='gray'
        icon='material-symbols:unfold-more-rounded'
        size='xl'
        variant='ghost'
        onClick={() => setOpen(true)}
      />

      <Sheet open={open} onClose={() => setOpen(false)}>
        <MenuGroup menuGroup={menuGroup} />

        <div className='mr-4 mb-4 ml-5 flex items-center border-t border-gray-3 pt-4'>
          <UserMenu
            alignmentAxis={16}
            trigger={<UserMenuTrigger />}
            withinPortal={false}
          />
          <MenuCustomize menuGroup={menuGroup} />
        </div>
      </Sheet>
    </div>
  )
}
