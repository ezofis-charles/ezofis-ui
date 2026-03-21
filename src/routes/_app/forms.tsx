import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/forms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/forms"!</div>
}
