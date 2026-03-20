import { createFileRoute } from '@tanstack/react-router'
import { Highlight } from '@/components/base/highlight'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/highlight')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Highlight' />

      <Section title='Default'>
        <div className='w-96'>
          <Highlight words={['elit', 'omnis']}>
            Lorem ipsum dolor sit omnis, consectetur adipisicing elit. Culpa vel
            et autem asperiores ipsa impedit quod ut omnis at sed. Nemo totam in
            repellat iusto doloribus elit unde maiores nam.
          </Highlight>
        </div>
      </Section>
    </>
  )
}
