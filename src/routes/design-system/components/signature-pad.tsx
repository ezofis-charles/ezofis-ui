import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/design-system/components/signature-pad')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/design-system/components/signature-pad"!</div>
}
