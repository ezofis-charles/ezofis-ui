import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useAiBarStore } from '@/layouts/app/stores/use-aibar-store'

export const AiChatBarToggle = () => {
  const isAiBarOpen = useAiBarStore((state) => state.isAiBarOpen)
  const toggleAiBar = useAiBarStore((state) => state.toggleAiBar)

  return (
    <Tooltip
      content={isAiBarOpen ? 'Collapse AI Chat' : 'Expand AI Chat'}
      openDelay={TOOLTIP_DELAY * 2}
      position='bottom-end'
    >
      <ButtonIcon
        ariaLabel='toggle ai chat bar'
        color='gray'
        icon='lucide:sparkle'
        variant='ghost'
        onClick={toggleAiBar}
      />
    </Tooltip>
  )
}
