import { Trans, useLingui } from '@lingui/react/macro'
import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Menu } from '@/components/base/menu'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useTheme } from '@/hooks/use-theme'

export const ThemeSwitcher = () => {
  const { t } = useLingui()
  const { colorScheme, ColorSchemeOptions, handleColorSchemeChange } =
    useTheme()

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const menuTrigger = (
    <Tooltip
      content={t`Change theme`}
      disabled={isMenuOpened}
      openDelay={TOOLTIP_DELAY}
    >
      <ButtonIcon
        ariaLabel='Change theme'
        color='gray'
        icon='tabler:percentage-50'
        variant='ghost'
      />
    </Tooltip>
  )

  const handleOnChange = (isOpened: boolean) => setIsMenuOpened(isOpened)

  return (
    <Menu
      aria-label='Theme options'
      position='bottom-end'
      target={menuTrigger}
      width={144}
      onChange={handleOnChange}
    >
      <Menu.Label>
        <Trans>Change Theme</Trans>
      </Menu.Label>
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
    </Menu>
  )
}
