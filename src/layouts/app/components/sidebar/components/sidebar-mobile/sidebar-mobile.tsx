import type { SidebarMenuGroup } from '../sidebar.types'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  console.log(menuGroup)

  return <div></div>
}
