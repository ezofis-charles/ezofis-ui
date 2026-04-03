import type { ReactNode } from 'react'
import { useSortable } from '@dnd-kit/react/sortable'

interface Props {
  children: ReactNode
  id: string
  index: number
  className?: string
}

export const Sortable = ({ children, className, id, index }: Props) => {
  const { ref } = useSortable({ id, index })

  return (
    <li className={className} ref={ref}>
      {children}
    </li>
  )
}
