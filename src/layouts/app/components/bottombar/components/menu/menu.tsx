import type { MenuItem } from '@/layouts/app/app-layout.types'
import { ButtonIcon } from '@/components/base/button'
import { Divider } from '@/components/base/divider'
import { Sheet } from '@/components/base/sheet'
import { useOverlayStack } from '@/hooks/use-overlay-stack'
import { MenuAll } from './components/menu-all'
import { MenuEdit } from './components/menu-edit'
import { User } from './components/user'

interface Props {
  menu: MenuItem[]
}

export const Menu = ({ menu }: Props) => {
  const { has, pop, push } = useOverlayStack()

  return (
    <div>
      <ButtonIcon
        color='gray'
        icon='lucide:chevrons-up-down'
        size='xl'
        variant='ghost'
        onClick={() => push('menu')}
      />

      <Sheet opened={has('menu')} onClose={pop}>
        <User />
        <Divider className='mx-4' />
        <MenuAll menu={menu} />
        <Divider className='mx-4' />
        <MenuEdit menu={menu} />
      </Sheet>
    </div>
  )
}
