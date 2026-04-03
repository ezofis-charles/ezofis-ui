import type { SidebarMenuGroup } from '../../sidebar.types'
import { Menu } from './menu'
import { MenuPinned } from './menu-pinned'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  return (
    <div className='fixed bottom-0 left-0 w-full border-t border-gray-4 bg-surface-raised px-4 py-3'>
      <div className='mx-auto flex max-w-96 items-center justify-around gap-4'>
        <MenuPinned menuGroup={menuGroup} />
        <Menu menuGroup={menuGroup} />
      </div>
    </div>
  )
}
