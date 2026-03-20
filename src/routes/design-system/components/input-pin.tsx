import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { InputPin } from '@/components/base/inputs'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/input-pin')({
  component: RouteComponent,
})

function RouteComponent() {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Input Pin' />

      <Section title='Default'>
        <InputPin className='w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Placeholder'>
        <InputPin
          className='w-80'
          placeholder='0'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputPin className='w-80' value={value} disabled onChange={setValue} />
      </Section>

      <Section title='Error'>
        <InputPin className='w-80' value={value} error onChange={setValue} />
      </Section>

      <Section title='Length'>
        <InputPin
          className='w-80'
          length={6}
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
