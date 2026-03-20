import { createFileRoute } from '@tanstack/react-router'
import { ButtonIcon } from '@/components/base/button'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/icon-button')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Icon Button' />

      <Section title='Default'>
        <ButtonIcon icon='lucide:download' />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='lucide:download' />
          <ButtonIcon color='secondary' icon='lucide:download' />
          <ButtonIcon color='red' icon='lucide:download' />
          <ButtonIcon color='green' icon='lucide:download' />
          <ButtonIcon color='gray' icon='lucide:download' />
        </div>
      </Section>

      <Section title='Loading'>
        <ButtonIcon icon='lucide:download' loading />
      </Section>

      <Section title='Disabled'>
        <ButtonIcon icon='lucide:download' disabled />
      </Section>

      <Section title='Variants'>
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon icon='lucide:download' />
            <ButtonIcon icon='lucide:download' variant='outline' />
            <ButtonIcon icon='lucide:download' variant='subtle' />
            <ButtonIcon icon='lucide:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='secondary' icon='lucide:download' />
            <ButtonIcon
              color='secondary'
              icon='lucide:download'
              variant='outline'
            />
            <ButtonIcon
              color='secondary'
              icon='lucide:download'
              variant='subtle'
            />
            <ButtonIcon
              color='secondary'
              icon='lucide:download'
              variant='ghost'
            />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='red' icon='lucide:download' />
            <ButtonIcon color='red' icon='lucide:download' variant='outline' />
            <ButtonIcon color='red' icon='lucide:download' variant='subtle' />
            <ButtonIcon color='red' icon='lucide:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='green' icon='lucide:download' />
            <ButtonIcon
              color='green'
              icon='lucide:download'
              variant='outline'
            />
            <ButtonIcon color='green' icon='lucide:download' variant='subtle' />
            <ButtonIcon color='green' icon='lucide:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='gray' icon='lucide:download' />
            <ButtonIcon color='gray' icon='lucide:download' variant='outline' />
            <ButtonIcon color='gray' icon='lucide:download' variant='subtle' />
            <ButtonIcon color='gray' icon='lucide:download' variant='ghost' />
          </div>
        </div>
      </Section>

      <Section title='Sizes'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='lucide:download' size='xs' />
          <ButtonIcon icon='lucide:download' size='sm' />
          <ButtonIcon icon='lucide:download' />
          <ButtonIcon icon='lucide:download' size='lg' />
        </div>
      </Section>
    </>
  )
}
