import avatar from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'

export const User = () => {
  return (
    <div className='flex items-center gap-3 p-2'>
      <Avatar
        image={avatar}
        imageLabel='user picture'
        initials='CV'
        size={36}
      />
      <div className='min-w-0 flex-1'>
        <div className='truncate text-micro/5 font-medium text-gray-13'>
          Charles Vinoth
        </div>
        <div className='truncate text-xs/5'>charles@ezofis.com</div>
      </div>
    </div>
  )
}
