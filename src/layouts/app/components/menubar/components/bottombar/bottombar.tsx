import { ButtonIcon } from '@/components/base/button'

export const Bottombar = () => {
  return (
    <div className='fixed bottom-0 left-0 flex w-full items-center justify-around gap-4 border-t border-gray-4 bg-surface-raised p-4'>
      <ButtonIcon
        color='gray'
        icon='lucide:layout-dashboard'
        iconClassName='text-primary-11'
        size='xl'
        variant='subtle'
      />
      <ButtonIcon color='gray' icon='lucide:inbox' variant='ghost' />
      <ButtonIcon color='gray' icon='lucide:workflow' variant='ghost' />
      <ButtonIcon color='gray' icon='lucide:clipboard-list' variant='ghost' />
      <ButtonIcon color='gray' icon='lucide:chevrons-up-down' variant='ghost' />
    </div>
  )
}
