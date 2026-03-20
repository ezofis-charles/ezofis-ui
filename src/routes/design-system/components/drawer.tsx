import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/base/button'
import { Drawer } from '@/components/base/drawer'
import { Overlay } from '@/components/base/overlay'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/drawer')({
  component: RouteComponent,
})

function RouteComponent() {
  const [opened, setOpened] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
  const [openRight, setOpenRight] = useState(false)
  const [openedWithoutOverlay, setOpenedWithoutOverlay] = useState(false)

  return (
    <>
      <Header title='Drawer' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpened(true)}
        />

        <Drawer opened={opened} withOverlay onClose={() => setOpened(false)}>
          <Overlay.Header title='Drawer' onClose={() => setOpened(false)} />
          <Overlay.Content style={{ height: 'calc(100dvh - 126px' }}>
            <></>
          </Overlay.Content>
          <Overlay.Footer
            onCancel={() => setOpened(false)}
            onSave={() => setOpened(false)}
          />
        </Drawer>
      </Section>

      <Section title='Position'>
        <div className='flex items-center gap-2'>
          <Button
            color='gray'
            icon='lucide:arrow-left'
            label='Left'
            variant='outline'
            onClick={() => setOpenLeft(true)}
          />
          <Button
            color='gray'
            label='Right'
            suffixIcon='lucide:arrow-right'
            variant='outline'
            onClick={() => setOpenRight(true)}
          />
        </div>

        <Drawer
          opened={openLeft}
          position='left'
          withOverlay
          onClose={() => setOpenLeft(false)}
        >
          <></>
        </Drawer>

        <Drawer
          opened={openRight}
          withOverlay
          onClose={() => setOpenRight(false)}
        >
          <></>
        </Drawer>
      </Section>

      <Section title='Without Overlay'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpenedWithoutOverlay(true)}
        />

        <Drawer
          opened={openedWithoutOverlay}
          onClose={() => setOpenedWithoutOverlay(false)}
        >
          <></>
        </Drawer>
      </Section>
    </>
  )
}
