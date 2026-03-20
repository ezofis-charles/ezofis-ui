import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'

export const ClearAll = () => {
  return (
    <Tooltip content='Clear all' position='top'>
      <ButtonIcon
        ariaLabel='clear all'
        color='gray'
        icon='lucide:brush-cleaning'
        variant='ghost'
      />
    </Tooltip>
  )
}
