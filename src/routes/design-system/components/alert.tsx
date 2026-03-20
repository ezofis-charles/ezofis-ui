import { createFileRoute } from '@tanstack/react-router'
import { Alert } from '@/components/base/alert'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/alert')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Alert' />

      <Section title='Default'>
        <Alert text='Lorem ipsum dolar sit amit.' />
      </Section>

      <Section title='Colors'>
        <div className='space-y-4'>
          <Alert color='secondary' text='Lorem ipsum dolar sit amit.' />
          <Alert color='green' text='Lorem ipsum dolar sit amit.' />
          <Alert color='red' text='Lorem ipsum dolar sit amit.' />
        </div>
      </Section>
    </>
  )
}
