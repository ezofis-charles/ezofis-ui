import { createFileRoute } from '@tanstack/react-router'
import { ProgressSemiCircle } from '@/components/base/progress-semi-circle'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute(
  '/design-system/components/progress-semi-circle',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Progress Semi Circle' />

      <Section title='Default'>
        <ProgressSemiCircle size={100} value={50} />
      </Section>

      <Section title='Label'>
        <ProgressSemiCircle
          size={100}
          value={50}
          label={
            <div className='text-center font-semibold text-gray-12'>50%</div>
          }
        />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <ProgressSemiCircle size={100} value={50} />
          <ProgressSemiCircle color='secondary' size={100} value={50} />
          <ProgressSemiCircle color='red' size={100} value={50} />
          <ProgressSemiCircle color='green' size={100} value={50} />
        </div>
      </Section>

      <Section title='Size'>
        <ProgressSemiCircle size={60} value={50} />
      </Section>
    </>
  )
}
