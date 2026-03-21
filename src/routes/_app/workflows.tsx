import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/workflows')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/workflows"!</div>
}
