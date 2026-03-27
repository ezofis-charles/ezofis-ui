import { Avatar } from '@/components/base/avatar'
import { useSessionStore } from '@/stores/use-session-store'

export const UserInfo = () => {
  const user = useSessionStore((state) => state.user)

  return (
    <div className='flex items-center gap-3 p-2'>
      <Avatar
        className='border border-gray-3'
        image={user.avatar}
        imageLabel='user picture'
        initials='CV'
        size={36}
      />
      <div className='min-w-0 flex-1'>
        <div className='truncate text-micro/5 font-medium text-gray-13'>
          {user.name}
        </div>
        <div className='truncate text-xs/5'>{user.email}</div>
      </div>
    </div>
  )
}
