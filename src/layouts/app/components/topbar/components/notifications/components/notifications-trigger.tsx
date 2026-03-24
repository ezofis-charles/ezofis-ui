import { ButtonIcon } from '@/components/base/button'
import { Indicator } from '@/components/base/indicator'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

export const NotificationsTrigger = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  return (
    <Tooltip
      content='Notifications'
      disabled={isSidebarOpen}
      openDelay={TOOLTIP_DELAY}
      position='right'
    >
      <Indicator offset={7} animate>
        <ButtonIcon
          ariaLabel='notifications'
          color='gray'
          icon='tabler:bell'
          variant='ghost'
        />
      </Indicator>
    </Tooltip>
  )
}
