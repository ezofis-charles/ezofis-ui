import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SegmentGroup } from '@/components/base/segment-group'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/segment-group')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const [value, setValue] = useState<null | string>('Left')

  return (
    <>
      <Header title='Segment Group' />

      <Section title='Default'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item label='Left' value='Left' />
          <SegmentGroup.Item label='Center' value='Center' />
          <SegmentGroup.Item label='Right' value='Right' />
        </SegmentGroup>
      </Section>

      <Section title='With Icon'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item
            icon='lucide:text-align-start'
            label='Left'
            value='Left'
          />
          <SegmentGroup.Item
            icon='lucide:text-align-center'
            label='Center'
            value='Center'
          />
          <SegmentGroup.Item
            icon='lucide:text-align-end'
            label='Right'
            value='Right'
          />
        </SegmentGroup>
      </Section>

      <Section title='Icon Only'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item icon='lucide:text-align-start' value='Left' />
          <SegmentGroup.Item icon='lucide:text-align-center' value='Center' />
          <SegmentGroup.Item icon='lucide:text-align-end' value='Right' />
        </SegmentGroup>
      </Section>

      <Section title='Disabled'>
        <SegmentGroup value={value} disabled onChange={setValue}>
          <SegmentGroup.Item label='Left' value='Left' />
          <SegmentGroup.Item label='Center' value='Center' />
          <SegmentGroup.Item label='Right' value='Right' />
        </SegmentGroup>
      </Section>
    </>
  )
}
