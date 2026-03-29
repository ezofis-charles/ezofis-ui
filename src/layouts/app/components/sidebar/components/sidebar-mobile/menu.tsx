import { useState } from 'react'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import { ButtonIcon } from '@/components/base/button'
import { Sheet } from '@/components/base/sheet'

interface Props {
  menu: MenuItem[]
}

export const Menu = ({ menu }: Props) => {
  console.log('🚀 ~ Menu ~ menu:', menu)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <ButtonIcon
        color='gray'
        icon='tabler:chevrons-up-down'
        size='xl'
        variant='ghost'
        onClick={() => setOpen(true)}
      />

      <Sheet open={open} onClose={() => setOpen(false)}>
        <></>
      </Sheet>
    </div>
  )
}
