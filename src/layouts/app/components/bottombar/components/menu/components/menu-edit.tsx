import type { MenuItem } from '@/layouts/app/app-layout.types'
import { MenuItem as Item } from './menu-item'

interface Props {
  menu: MenuItem[]
  // setMenu: (menu: MenuItem[]) => void
}

export const MenuEdit = ({ menu }: Props) => {
  console.log(menu)
  // console.log(setMenu)

  return (
    <div className='px-4 py-2'>
      <Item
        icon='material-symbols:edit-square-outline-rounded'
        label='Customize'
      />
    </div>
  )
}
