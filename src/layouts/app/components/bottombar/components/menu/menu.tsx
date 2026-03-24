import { useState } from 'react'
import type { MenuItem } from '@/layouts/app/app-layout.types'
import { ButtonIcon } from '@/components/base/button'
import { Divider } from '@/components/base/divider'
import { Sheet } from '@/components/base/sheet'
import { MenuAll } from './components/menu-all'
import { User } from './components/user'

interface Props {
  menu: MenuItem[]
}

export const Menu = ({ menu }: Props) => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <ButtonIcon
        color='gray'
        icon='lucide:chevrons-up-down'
        size='xl'
        variant='ghost'
        onClick={() => setOpened(true)}
      />

      <Sheet opened={opened} onClose={() => setOpened(false)}>
        <User />
        <Divider className='mx-4' />
        <MenuAll menu={menu} />
      </Sheet>
    </div>
  )
}
