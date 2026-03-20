import { createFileRoute } from '@tanstack/react-router'
import { Avatar } from '@/components/base/avatar'
import { Indicator } from '@/components/base/indicator'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/indicator')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Indicator' />

      <Section title='Default'>
        <Indicator offset={5}>
          <Avatar initials='CH' />
        </Indicator>
      </Section>

      <Section title='Animate'>
        <Indicator offset={5} animate>
          <Avatar initials='CH' />
        </Indicator>
      </Section>

      <Section title='Color'>
        <div className='flex items-center gap-4'>
          <Indicator offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
          <Indicator color='secondary' offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
          <Indicator color='red' offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
        </div>
      </Section>
    </>
  )
}
