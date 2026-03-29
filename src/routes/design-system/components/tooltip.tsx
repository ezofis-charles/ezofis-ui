import { createFileRoute } from '@tanstack/react-router'
import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/tooltip')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Tooltip' />

      <Section title='Default'>
        <Tooltip content='Default' position='right'>
          <ButtonIcon color='gray' icon='tabler:download' variant='outline' />
        </Tooltip>
      </Section>

      <Section title='Colors'>
        <div className='flex flex-col items-start gap-4'>
          <Tooltip color='primary' content='Primary' position='right'>
            <ButtonIcon icon='tabler:download' variant='subtle' />
          </Tooltip>

          <Tooltip color='secondary' content='Secondary' position='right'>
            <ButtonIcon
              color='secondary'
              icon='tabler:download'
              variant='subtle'
            />
          </Tooltip>

          <Tooltip color='red' content='Red' position='right'>
            <ButtonIcon color='red' icon='tabler:download' variant='subtle' />
          </Tooltip>

          <Tooltip content='Gray' position='right'>
            <ButtonIcon color='gray' icon='tabler:download' variant='subtle' />
          </Tooltip>
        </div>
      </Section>
    </>
  )
}
