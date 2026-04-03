import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { Icon } from '@/components/base/icon'
import { Sheet } from '@/components/base/sheet'
import { Sortable } from '@/components/base/sortable'
import type { SidebarMenuItem } from '../../sidebar.types'

interface Props {
  items: SidebarMenuItem[]
  open: boolean
  setItems: (items: SidebarMenuItem[]) => void
  onClose: () => void
}

export const MenuCustomize = ({ items, open, setItems, onClose }: Props) => {
  return (
    <Sheet open={open} onClose={onClose}>
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return

          const ids = items.map((item) => item.label)
          const movedIds = move(ids, event)
          const movedItems = movedIds.map(
            (id) => items.find((item) => item.label === id)!,
          )
          setItems(movedItems)
        }}
      >
        <ul className='space-y-1'>
          {items.map((item, index) => (
            <Sortable
              className='flex items-center px-2'
              id={item.label}
              index={index}
              key={item.label}
            >
              <div className='flex size-9 shrink-0 items-center justify-center'>
                <Icon className='text-gray-11' name={item.icon} />
              </div>

              <div className='pr-2 font-medium whitespace-nowrap text-gray-12'>
                {item.label}
              </div>
            </Sortable>
          ))}
        </ul>
      </DragDropProvider>
    </Sheet>
  )
}
