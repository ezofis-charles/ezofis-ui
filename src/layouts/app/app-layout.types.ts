export interface MenuGroup {
  items: MenuItem[]
  label: string
}

export interface MenuItem {
  activeIcon: string
  icon: string
  label: string
  route: string
}
