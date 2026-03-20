import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/design-system/components/image-upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/design-system/components/image-upload"!</div>
}
