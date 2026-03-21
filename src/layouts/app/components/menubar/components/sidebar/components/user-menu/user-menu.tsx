import { useNavigate } from '@tanstack/react-router'
import { Menu } from '@/components/base/menu'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { LanguageToggle } from './components/language-toggle'
import { ThemeToggle } from './components/theme-toggle'
import { User } from './components/user'
import { UserMenuTrigger } from './components/user-menu-trigger'

export const UserMenu = () => {
  const navigate = useNavigate()
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)

  const goto = (slug: string) => {
    navigate({ params: { slug }, to: '/my-account/{-$slug}' })
  }

  const logout = () => {
    navigate({ replace: true, to: '/sign-in' })
  }

  return (
    <Menu
      offset={{ alignmentAxis: 8, mainAxis: isSidebarOpen ? 8 : 0 }}
      position='top-start'
      target={<UserMenuTrigger />}
      width={224}
    >
      <User />
      <Menu.Divider />
      <Menu.Item
        icon='lucide:user'
        label='Profile'
        onClick={() => goto('profile')}
      />
      <Menu.Item
        icon='lucide:shield'
        label='Security'
        onClick={() => goto('security')}
      />
      <Menu.Item
        icon='lucide:settings-2'
        label='Preferences'
        onClick={() => goto('preferences')}
      />
      <Menu.Divider />
      <ThemeToggle />
      <LanguageToggle />
      <Menu.Divider />
      <Menu.Item
        icon='lucide:log-out'
        iconClassName='text-red-11'
        label='Log out'
        onClick={logout}
      />
    </Menu>
  )
}
