import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '@/components/base/icon'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/icon')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Icon' />

      <Section title='Default'>
        <Icon name='lucide:trash-2' />
      </Section>

      <Section title='Color'>
        <div className='flex items-center gap-2'>
          <Icon className='text-gray-11' name='lucide:trash-2' />
          <Icon className='text-primary-11' name='lucide:trash-2' />
          <Icon className='text-secondary-11' name='lucide:trash-2' />
          <Icon className='text-red-11' name='lucide:trash-2' />
          <Icon className='text-green-11' name='lucide:trash-2' />
        </div>
      </Section>

      <Section title='Size'>
        <Icon className='size-8' name='lucide:trash-2' />
      </Section>
    </>
  )
}
