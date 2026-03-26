import { Icon } from '@/components/base/icon'

interface Props {
  icon: string
  label: string
  activeIcon?: string
  isActive?: boolean
}

export const MenuItem = ({ activeIcon, icon, isActive, label }: Props) => {
  return (
    <div className={'flex items-center'}>
      <div className='flex size-11 items-center justify-center'>
        <Icon
          name={isActive && activeIcon ? activeIcon : icon}
          className={
            isActive
              ? 'text-primary-11'
              : 'text-gray-11 group-hover:text-gray-12'
          }
        />
      </div>

      <div className='flex-1 text-base font-medium whitespace-nowrap text-gray-12 group-hover:text-gray-13'>
        {label}
      </div>
    </div>
  )
}
