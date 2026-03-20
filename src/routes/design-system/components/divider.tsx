import { createFileRoute } from '@tanstack/react-router'
import { Divider } from '@/components/base/divider'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/divider')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Divider' />

      <Section title='Default'>
        <Divider />
      </Section>

      <Section title='With Label'>
        <div className='space-y-6'>
          <Divider label='Label' />
          <Divider label='Label' labelPosition='left' />
          <Divider label='Label' labelPosition='right' />
        </div>
      </Section>

      <Section title='Vertical'>
        <Divider className='h-10' orientation='vertical' />
      </Section>
    </>
  )
}
