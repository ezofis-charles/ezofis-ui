import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Menu } from '@/components/base/menu'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Menu' />

      <Section title='Default'>
        <Menu
          position='bottom-start'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='lucide:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Item icon='lucide:edit' label='Rename' />
          <Menu.Item icon='lucide:copy' label='Duplicate' />
          <Menu.Item icon='lucide:archive' label='Archive' />
          <Menu.Item icon='lucide:share-2' label='Share' />
        </Menu>
      </Section>

      <Section title='Menu Group'>
        <Menu
          position='bottom-start'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='lucide:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Label>Security</Menu.Label>
          <Menu.Item icon='lucide:shield' label='Authentication' />
          <Menu.Item icon='lucide:lock' label='Sessions' />
          <Menu.Divider />
          <Menu.Label>Developers</Menu.Label>
          <Menu.Item icon='lucide:key-round' label='API Keys' />
          <Menu.Item icon='lucide:webhook' label='Webhooks' />
          <Menu.Item icon='lucide:circle-help' label='Documentation' />
          <Menu.Divider />
          <Menu.Item
            icon='lucide:log-out'
            iconClassName='text-red-11'
            label='Log out'
          />
        </Menu>
      </Section>

      <Section title='Submenu'>
        <Menu
          position='bottom-start'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='lucide:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Item icon='lucide:edit' label='Rename' />
          <Menu.Item icon='lucide:copy' label='Duplicate' />
          <Menu.Sub icon='lucide:shapes' label='More'>
            <Menu.Item icon='lucide:archive' label='Archive' />
            <Menu.Item icon='lucide:share-2' label='Share' />
            <Menu.Item icon='lucide:heart' label='Favourites' />
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item
            icon='lucide:trash-2'
            iconClassName='text-red-11'
            label='Delete'
          />
        </Menu>
      </Section>
    </>
  )
}
