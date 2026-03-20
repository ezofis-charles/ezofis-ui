import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

export const SidebarToggle = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <Tooltip
      content={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      openDelay={TOOLTIP_DELAY}
      position='bottom-start'
    >
      <ButtonIcon
        ariaLabel='toggle sidebar'
        className='hidden md:flex'
        color='gray'
        icon='tabler-menu-3'
        variant='ghost'
        onClick={toggleSidebar}
      />
    </Tooltip>
  )
}
