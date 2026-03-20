import { createFileRoute } from '@tanstack/react-router'
import { EmptyState } from '@/components/base/empty-state'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/empty-state')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Empty State' />

      <Section title='Default'>
        <EmptyState
          description='Try changing the search query or filter options.'
          icon='lucide:folder-search'
          primaryActionLabel='Reset Filters'
          secondaryActionLabel='Try Again'
          title='No results found'
        />
      </Section>
    </>
  )
}
