import { Menu } from '@/components/base/menu'
import { useTheme } from '@/hooks/use-theme'

export const ThemeToggle = () => {
  const { colorScheme, ColorSchemeOptions, handleColorSchemeChange } =
    useTheme()

  return (
    <Menu.Sub icon='lucide:sun-moon' label='Theme'>
      {ColorSchemeOptions.map((option) => (
        <Menu.Item
          icon={option.icon}
          key={option.value}
          label={option.label}
          iconClassName={
            option.value === colorScheme ? 'text-primary-11' : 'text-gray-9'
          }
          onClick={handleColorSchemeChange(option.value)}
        />
      ))}
    </Menu.Sub>
  )
}
