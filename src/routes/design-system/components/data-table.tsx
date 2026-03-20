import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/design-system/components/data-table')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/design-system/components/data-table"!</div>
}
