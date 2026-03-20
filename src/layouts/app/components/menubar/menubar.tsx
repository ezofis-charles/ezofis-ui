import { useLingui } from '@lingui/react/macro'
import { SCREEN_SIZE } from '@/constants'
import { useViewportSize } from '@/hooks/use-viewport-size'
import type { MenuGroup } from './menubar.types'
import { Bottombar } from './components/bottombar/bottombar'
import { Sidebar } from './components/sidebar/sidebar'

export const Menubar = () => {
  const { width } = useViewportSize()
  const { t } = useLingui()

  const menuGroup: MenuGroup[] = [
    {
      items: [
        {
          icon: 'lucide:layout-dashboard',
          label: t`Dashboard`,
          route: '/',
        },
        {
          icon: 'lucide:inbox',
          label: t`Requests`,
          route: '/requests',
        },
      ],
      label: t`Overview`,
    },
    {
      items: [
        {
          icon: 'lucide:workflow',
          label: 'Workflows',
          route: '/workflows',
        },
        {
          icon: 'lucide:clipboard-list',
          label: 'Forms',
          route: '/forms',
        },
        // {
        //   icon: 'lucide:folder',
        //   label: 'Folders',
        //   route: '/folders',
        // },
        // {
        //   icon: 'lucide:blocks',
        //   label: 'Tasks',
        //   route: '/tasks',
        // },
        // {
        //   icon: 'lucide:panels-top-left',
        //   label: 'Portals',
        //   route: '/portals',
        // },
      ],
      label: 'Builders',
    },
  ]

  return (
    <>
      {width > SCREEN_SIZE.MD ? (
        <Sidebar menuGroup={menuGroup} />
      ) : (
        <Bottombar />
      )}
    </>
  )
}
