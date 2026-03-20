import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { InputTime } from '@/components/base/inputs'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/input-time')({
  component: RouteComponent,
})

function RouteComponent() {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Input Time' />

      <Section title='Default'>
        <InputTime className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputTime
          className='max-w-80'
          description='Lorem ipsum dolar sit amit'
          label='Label'
          tooltip='Lorem ipsum dolar sit amit'
          value={value}
          optional
          required
          onChange={setValue}
        />
      </Section>

      <Section title='Error'>
        <InputTime
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Clearable'>
        <InputTime
          className='max-w-80'
          value={value}
          clearable
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputTime
          className='max-w-80'
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputTime
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Min Time'>
        <InputTime
          className='max-w-80'
          maxTime='24:00'
          minTime='10:00'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Max Time'>
        <InputTime
          className='max-w-80'
          maxTime='18:00'
          minTime='00:00'
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
