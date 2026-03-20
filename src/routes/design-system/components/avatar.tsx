import { createFileRoute } from '@tanstack/react-router'
import avatarImg from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/avatar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Avatar' />

      <Section title='Default'>
        <Avatar initials='CH' />
      </Section>

      <Section title='Image'>
        <Avatar image={avatarImg} initials='CH' />
      </Section>
    </>
  )
}
