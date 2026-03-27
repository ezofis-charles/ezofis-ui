import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSessionStore } from '@/stores/use-session-store'

export const UserMenuTrigger = () => {
  const user = useSessionStore((state) => state.user)

  return (
    <div className='mx-1 flex cursor-pointer items-center gap-2 p-1'>
      <div className='flex h-12 w-8 shrink-0 items-center justify-center'>
        <Avatar
          className='border border-gray-3'
          image={user.avatar}
          imageLabel='user picture'
          initials='CV'
          size={32}
        />
      </div>

      <div className='flex flex-1 items-center select-none'>
        <div className='min-w-0 flex-1'>
          <div className='truncate text-micro/5 font-medium text-gray-12'>
            {user.name}
          </div>
          <div className='truncate text-xs/5'>{user.email}</div>
        </div>
        <Icon name='material-symbols:more-vert' />
      </div>
    </div>
  )
}
