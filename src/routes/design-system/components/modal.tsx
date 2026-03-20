import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/base/button'
import { Modal } from '@/components/base/modal'
import { Overlay } from '@/components/base/overlay'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/modal')({
  component: RouteComponent,
})

function RouteComponent() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Header title='Modal' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpened(true)}
        />

        <Modal opened={opened} onClose={() => setOpened(false)}>
          <Overlay.Header title='Modal' onClose={() => setOpened(false)} />
          <Overlay.Content className='h-60'>
            <></>
          </Overlay.Content>
          <Overlay.Footer
            onCancel={() => setOpened(false)}
            onSave={() => setOpened(false)}
          />
        </Modal>
      </Section>
    </>
  )
}
