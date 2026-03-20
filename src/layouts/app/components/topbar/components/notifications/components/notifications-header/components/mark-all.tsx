import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'

export const MarkAll = () => {
  return (
    <Tooltip content='Mark all as read' position='top'>
      <ButtonIcon
        ariaLabel='mark all as read'
        color='gray'
        icon='lucide:check-check'
        variant='ghost'
      />
    </Tooltip>
  )
}
