import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/design-system/components/file-upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/design-system/components/file-upload"!</div>
}
