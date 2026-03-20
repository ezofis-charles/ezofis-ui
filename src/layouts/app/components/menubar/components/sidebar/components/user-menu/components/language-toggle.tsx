import { Menu } from '@/components/base/menu'
import { useLanguage } from '@/hooks/use-language'

export const LanguageToggle = () => {
  const { language, languages, setLanguage } = useLanguage()

  return (
    <Menu.Sub icon='lucide:languages' label='Language'>
      {languages.map(({ code, name }) => (
        <Menu.Item
          key={code}
          label={name}
          suffixIcon={language === code ? 'lucide:check' : ''}
          suffixIconClassName='text-primary-11'
          onClick={() => setLanguage(code)}
        />
      ))}
    </Menu.Sub>
  )
}
