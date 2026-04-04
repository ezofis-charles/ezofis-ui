import { motion } from 'motion/react'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { SIDEBAR_SIZE } from '../../sidebar.constants'
import { UserMenu } from '../user-menu/user-menu'
import { Logo } from './logo'
import { MenuGroup } from './menu-group'
import { UserMenuTrigger } from './user-menu-trigger'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarDesktop = ({ menuGroup }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const width =
    sidebarState === 'collapsed'
      ? SIDEBAR_SIZE.COLLAPSED
      : SIDEBAR_SIZE.EXPANDED

  return (
    <motion.div
      animate={{ width }}
      className='py-1'
      initial={{ width }}
      transition={{ duration: 0.15 }}
    >
      <Logo />
      <MenuGroup menuGroup={menuGroup} />
      <UserMenu
        mainAxis={sidebarState === 'expanded' ? 8 : 0}
        trigger={<UserMenuTrigger />}
      />
    </motion.div>
  )
}
