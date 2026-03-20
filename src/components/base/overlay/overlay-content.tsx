import type { ReactNode } from 'react'
import { ScrollArea } from '@/components/base/scroll-area'
import { cn } from '@/utils/cn'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const OverlayContent = ({ children, className, ...props }: Props) => {
  return (
    <ScrollArea
      className={cn(
        'rounded-xl border-y border-gray-3 bg-surface-raised',
        className,
      )}
      {...props}
    >
      {children}
    </ScrollArea>
  )
}
