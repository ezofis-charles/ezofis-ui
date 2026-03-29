import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { QrCode } from '@/components/base/qr-code'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/qr-code')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='QR Code' />

      <Section title='Default'>
        <QrCode className='size-40' value='https://ezofis.com/' />
      </Section>

      <Section title='With Download Trigger'>
        <QrCode
          className='size-40 space-y-4'
          value='https://ezofis.com/'
          downloadTrigger={
            <Button
              className='w-full justify-center'
              color='gray'
              icon='tabler:download'
              label='Download'
              variant='outline'
            />
          }
        />
      </Section>
    </>
  )
}
