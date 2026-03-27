import avatar from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { ButtonIcon } from '@/components/base/button'

export const User = () => {
  return (
    <div className='flex items-center gap-3 p-4'>
      <Avatar
        image={avatar}
        imageLabel='user picture'
        initials='CV'
        size={40}
      />

      <div className='min-w-0 flex-1'>
        <div className='truncate text-mini/6 font-medium text-gray-13'>
          Charles Vinoth
        </div>
        <div className='truncate text-micro/5'>charles@ezofis.com</div>
      </div>

      <ButtonIcon
        color='gray'
        icon='material-symbols:settings-outline-rounded'
        variant='ghost'
      />
    </div>
  )
}
