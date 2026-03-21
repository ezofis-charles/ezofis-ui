import { motion } from 'motion/react'
import { SIDEBAR_SIZE } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import type { MenuGroup } from '../../menubar.types'
import { Logo } from './components/logo'
import { Menu } from './components/menu'
import { UserMenu } from './components/user-menu'

interface Props {
  menuGroup: MenuGroup[]
}

export const Sidebar = ({ menuGroup }: Props) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const width = isSidebarOpen ? SIDEBAR_SIZE.EXPANDED : SIDEBAR_SIZE.COLLAPSED

  return (
    <motion.div
      animate={{ width }}
      className='pt-1 pb-2'
      initial={{ width }}
      transition={{ duration: 0.15 }}
    >
      <Logo />
      <Menu menuGroup={menuGroup} />
      <UserMenu />
    </motion.div>
  )
}
