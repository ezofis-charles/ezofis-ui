import type { ReactNode } from 'react'
import { useLingui } from '@lingui/react/macro'
import { SCREEN_SIZE } from '@/constants'
import { useViewportSize } from '@/hooks/use-viewport-size'
import type { MenuGroup } from './app-layout.types'
import { AiBar } from './components/ai-bar'
import { Bottombar } from './components/bottombar'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  const { t } = useLingui()
  const menuGroup: MenuGroup[] = [
    {
      items: [
        {
          activeIcon: 'material-symbols:dashboard-rounded',
          icon: 'material-symbols:dashboard-outline-rounded',
          label: t`Dashboard`,
          route: '/',
        },
        {
          activeIcon: 'material-symbols:inbox-rounded',
          icon: 'material-symbols:inbox-outline-rounded',
          label: t`Requests`,
          route: '/requests',
        },
      ],
      label: t`Overview`,
    },
    {
      items: [
        {
          activeIcon: 'material-symbols:account-tree-rounded',
          icon: 'material-symbols:account-tree-outline-rounded',
          label: 'Workflows',
          route: '/workflows',
        },
        {
          activeIcon: 'material-symbols:assignment-rounded',
          icon: 'material-symbols:assignment-outline-rounded',
          label: 'Forms',
          route: '/forms',
        },
        {
          activeIcon: 'material-symbols:folder-rounded',
          icon: 'material-symbols:folder-outline-rounded',
          label: 'Folders',
          route: '/folders',
        },
        {
          activeIcon: 'material-symbols:deployed-code',
          icon: 'material-symbols:deployed-code-outline',
          label: 'Tasks',
          route: '/tasks',
        },
        {
          activeIcon: 'material-symbols:toolbar',
          icon: 'material-symbols:toolbar-outline',
          label: 'Portals',
          route: '/portals',
        },
      ],
      label: 'Modules',
    },
  ]

  const { width } = useViewportSize()
  const isLargeScreen = width > SCREEN_SIZE.SM

  return (
    <div className='flex max-h-dvh min-h-dvh overflow-hidden'>
      {isLargeScreen ? <Sidebar /> : <Bottombar menuGroup={menuGroup} />}

      <div className='flex flex-1 xl:py-1 xl:pr-1'>
        <div className='flex-1 bg-surface xl:rounded-xl xl:border xl:border-gray-3'>
          <Topbar />
          {children}
        </div>
        <AiBar />
      </div>
    </div>
  )
}
