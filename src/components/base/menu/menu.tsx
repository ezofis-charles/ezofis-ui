import type { MenuProps as BaseProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  target: ReactNode
  className?: string
  closeOnClickOutside?: boolean
  closeOnItemClick?: boolean
  defaultOpened?: boolean
  offset?: BaseProps['offset']
  opened?: boolean
  position?: BaseProps['position']
  width?: BaseProps['width']
  withinPortal?: BaseProps['withinPortal']
  onChange?: BaseProps['onChange']
}

export const Menu = ({
  children,
  className,
  closeOnClickOutside = true,
  closeOnItemClick = true,
  target,
  ...rest
}: Props) => {
  return (
    <Base
      {...rest}
      closeOnClickOutside={closeOnClickOutside}
      closeOnItemClick={closeOnItemClick}
      transitionProps={{ transition: 'pop' }}
      returnFocus
      classNames={{
        dropdown: cn(
          'space-y-0.5 rounded-lg border border-gray-4 bg-surface-raised p-1 shadow-xl',
          className,
        ),
        item: 'group flex h-8 items-center gap-2 rounded px-2 text-gray-12 transition-colors hover:bg-gray-4 hover:text-gray-13 focus-visible:bg-gray-4 focus-visible:outline-0',
        itemLabel: 'text-sm font-medium transition-colors',
        itemSection:
          'm-0 text-gray-10 transition-colors group-hover:text-gray-11',
      }}
    >
      <Base.Target>
        <div>{target}</div>
      </Base.Target>
      <Base.Dropdown>{children}</Base.Dropdown>
    </Base>
  )
}
