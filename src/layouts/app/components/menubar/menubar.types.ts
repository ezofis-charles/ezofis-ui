export interface MenuGroup {
  items: MenuItem[]
  label: string
}

export interface MenuItem {
  icon: string
  label: string
  route: string
}
