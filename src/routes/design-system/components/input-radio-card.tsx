import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { InputRadioCard } from '@/components/base/inputs'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute(
  '/design-system/components/input-radio-card',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [value, setValue] = useState<null | number>(null)

  return (
    <>
      <Header title='Input Radio Card' />

      <Section title='Default'>
        <div className='max-w-80'>
          <InputRadioCard
            checked={value === 1}
            label='Label'
            onClick={() => setValue(1)}
          />
        </div>
      </Section>

      <Section title='With Description'>
        <div className='max-w-80'>
          <InputRadioCard
            checked={value === 1}
            description='Lorem ipsum dolor sit consectetur'
            label='Label'
            onClick={() => setValue(1)}
          />
        </div>
      </Section>

      <Section title='With Icon'>
        <div className='max-w-80'>
          <InputRadioCard
            checked={value === 1}
            description='Lorem ipsum dolor sit'
            icon='lucide:smartphone'
            label='Label'
            onClick={() => setValue(1)}
          />
        </div>
      </Section>

      <Section title='Disabled'>
        <div className='max-w-80'>
          <InputRadioCard
            checked={value === 1}
            label='Label'
            disabled
            onClick={() => setValue(1)}
          />
        </div>
      </Section>

      <Section title='Group'>
        <div className='max-w-80 space-y-4'>
          {[1, 2, 3].map((item) => (
            <InputRadioCard
              checked={value === item}
              description='Lorem ipsum dolor sit consectetur'
              key={item}
              label={'Label ' + item}
              onClick={() => setValue(item)}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
