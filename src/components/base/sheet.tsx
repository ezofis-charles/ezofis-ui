import type { ReactNode } from 'react'
import { Drawer as Base } from 'vaul'

interface Props {
  children: ReactNode
  opened: boolean
  onClose: () => void
}

export const Sheet = ({ children, opened, onClose }: Props) => {
  return (
    <Base.Root open={opened} onClose={onClose}>
      <Base.Portal>
        <Base.Overlay className='fixed inset-0 bg-black/40' />
        <Base.Content className='fixed right-0 bottom-0 left-0 z-300 h-fit rounded-t-2xl border-t border-gray-4 bg-surface-raised outline-none'>
          <Base.Handle className='my-2 w-12! rounded-full bg-gray-6! opacity-100!' />
          {children}
        </Base.Content>
      </Base.Portal>
    </Base.Root>
  )
}
