import type { DragEndEvent } from '@dnd-kit/react'
import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { Icon } from '@/components/base/icon'
import { ScrollArea } from '@/components/base/scroll-area'
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
  const handleDragEnd: DragEndEvent = (event) => {
    if (event.canceled) return

    const ids = items.map((item) => item.label)
    const movedIds = move(ids, event)
    const movedItems = movedIds.map(
      (id) => items.find((item) => item.label === id)!,
    )
    setItems(movedItems)
  }

  const pinned = items.slice(0, 4)
  const others = items.slice(4)

  return (
    <Sheet open={open} onClose={onClose}>
      <ScrollArea className='h-96'>
        <DragDropProvider onDragEnd={handleDragEnd}>
          <div className='px-4 py-2 text-xs font-medium whitespace-nowrap text-gray-10'>
            Pinned
          </div>

          <ul className='space-y-1'>
            {pinned.map((item, index) => (
              <Sortable
                className='flex items-center pr-4 pl-2'
                id={item.label}
                index={index}
                key={item.label}
              >
                <div className='flex size-9 shrink-0 items-center justify-center'>
                  <Icon className='text-gray-11' name={item.icon} />
                </div>

                <div className='flex-1 font-medium whitespace-nowrap text-gray-12'>
                  {item.label}
                </div>

                <Icon
                  className='text-gray-8'
                  name='material-symbols:drag-indicator'
                />
              </Sortable>
            ))}
          </ul>

          <div className='px-4 pt-6 pb-2 text-xs font-medium whitespace-nowrap text-gray-10'>
            Others
          </div>

          <ul className='space-y-1'>
            {others.map((item, index) => (
              <Sortable
                className='flex items-center pr-4 pl-2'
                id={item.label}
                index={index}
                key={item.label}
              >
                <div className='flex size-9 shrink-0 items-center justify-center'>
                  <Icon className='text-gray-11' name={item.icon} />
                </div>

                <div className='flex-1 font-medium whitespace-nowrap text-gray-12'>
                  {item.label}
                </div>

                <Icon
                  className='text-gray-8'
                  name='material-symbols:drag-indicator'
                />
              </Sortable>
            ))}
          </ul>
        </DragDropProvider>
      </ScrollArea>
    </Sheet>
  )
}
