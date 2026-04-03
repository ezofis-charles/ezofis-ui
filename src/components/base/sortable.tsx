import type { ReactNode } from 'react'
import { useSortable } from '@dnd-kit/react/sortable'
import { useRef, useState } from 'react'

interface Props {
  children: ReactNode
  id: string
  index: number
  className?: string
}

export const Sortable = ({ children, className, id, index }: Props) => {
  const [element, setElement] = useState<Element | null>(null)
  const handleRef = useRef<HTMLButtonElement | null>(null)
  const { isDragging } = useSortable({ element, handle: handleRef, id, index })

  return (
    <li
      className={className}
      data-shadow={isDragging || undefined}
      ref={setElement}
    >
      {children}
      <button className='handle' ref={handleRef} />
    </li>
  )
}
