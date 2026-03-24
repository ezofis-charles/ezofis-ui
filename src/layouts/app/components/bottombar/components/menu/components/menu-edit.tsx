import type { MenuItem } from '@/layouts/app/app-layout.types'

interface Props {
  menu: MenuItem[]
  setMenu: (menu: MenuItem[]) => void
}

export const MenuEdit = ({ menu, setMenu }: Props) => {
  console.log(menu)
  console.log(setMenu)

  return <div className='hidden'></div>
}
