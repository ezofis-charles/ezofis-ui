import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { SCREEN_SIZE, TOOLTIP_DELAY } from '@/constants'
import { useViewportSize } from '@/hooks/use-viewport-size'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

export const SidebarToggle = () => {
  const { width } = useViewportSize()
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <>
      {width > SCREEN_SIZE.MD && (
        <Tooltip
          content={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          openDelay={TOOLTIP_DELAY}
          position='bottom-start'
        >
          <ButtonIcon
            ariaLabel='toggle sidebar'
            color='gray'
            icon='tabler-menu-3'
            variant='ghost'
            onClick={toggleSidebar}
          />
        </Tooltip>
      )}
    </>
  )
}
