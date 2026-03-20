import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Popover } from '@/components/base/popover'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/popover')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Popover' />

      <Section title='Default'>
        <Popover
          position='bottom-start'
          target={<Button color='gray' label='Open' variant='outline' />}
          width={360}
        >
          <div className='p-4'>
            <h1 className='mb-2 text-base font-semibold text-gray-13'>
              Get Started
            </h1>
            <p className='text-gray border-b border-gray-4 pb-4 text-sm/6 text-balance'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur possimus cupiditate molestias dolore, quasi ipsam
              rerum.
            </p>
            <div className='flex items-center gap-2 pt-3'>
              <div className='flex-1 text-xs text-gray-10'>6 of 8</div>
              <Button color='gray' label='Skip' variant='outline' />
              <Button label='Next' />
            </div>
          </div>
        </Popover>
      </Section>
    </>
  )
}
