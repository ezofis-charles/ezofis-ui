import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/my-account/{-$slug}')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/my-account/-$slug"!</div>
}
