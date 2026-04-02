import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Icon } from '@/components/base/icon'
import { ScrollArea } from '@/components/base/scroll-area'
import { Sheet } from '@/components/base/sheet'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { usePinnedStore } from './use-pinned-store'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const MenuCustomize = ({ menuGroup }: Props) => {
  const [open, setOpen] = useState(false)
  const setPinned = usePinnedStore((state) => state.setPinned)
  console.log('🚀 ~ MenuCustomize ~ flattened:', setPinned)

  const flattened = menuGroup.flatMap((group) => group.items)
  console.log('🚀 ~ MenuCustomize ~ flattened:', flattened)

  return (
    <div>
      <ButtonIcon
        color='gray'
        icon='material-symbols:page-info-outline-rounded'
        size='xl'
        variant='ghost'
        onClick={() => setOpen(true)}
      />

      <Sheet open={open} onClose={() => setOpen(false)}>
        <ScrollArea className='h-96'>
          <ul className='space-y-1'>
            {flattened.map((item) => (
              <li className='flex items-center px-2' key={item.label}>
                <div className='flex size-9 shrink-0 items-center justify-center'>
                  <Icon className='text-gray-11' name={item.icon} />
                </div>

                <div className='pr-2 font-medium whitespace-nowrap text-gray-12'>
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </Sheet>
    </div>
  )
}
