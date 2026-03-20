import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { FloatingPanel } from '@/components/base/floating-panel'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute(
  '/design-system/components/floating-panel',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Floating Panel' />

      <Section title='Default'>
        <FloatingPanel
          title='Floating Panel'
          trigger={<Button color='gray' label='Open' variant='outline' />}
        >
          <div className='p-4'></div>
        </FloatingPanel>
      </Section>

      <Section title='Initial Size'>
        <FloatingPanel
          initialSize={{ height: 400, width: 400 }}
          title='Floating Panel'
          trigger={<Button color='gray' label='Open' variant='outline' />}
        >
          <div className='p-4'></div>
        </FloatingPanel>
      </Section>
    </>
  )
}
