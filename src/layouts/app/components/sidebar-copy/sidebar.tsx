import { motion } from 'motion/react'
import type { MenuGroup } from '@/layouts/app/app-layout.types'
import { SIDEBAR_SIZE } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store-copy'
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
      className='py-1'
      initial={{ width }}
      transition={{ duration: 0.15 }}
    >
      <Logo />
      <Menu menuGroup={menuGroup} />
      <UserMenu />
    </motion.div>
  )
}
