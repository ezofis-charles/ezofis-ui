import { createFileRoute } from '@tanstack/react-router'
import { IconAI } from '@/components/base/icon'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/ai-icon')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='AI Icon' />

      <Section title='Default'>
        <IconAI className='size-9' />
      </Section>

      <Section title='Animate'>
        <IconAI className='size-9' animate />
      </Section>

      <Section title='Colors'>
        <div className='flex items-center gap-2'>
          <IconAI className='size-9' color='primary' />
          <IconAI className='size-9' color='secondary' />
        </div>
      </Section>
    </>
  )
}
