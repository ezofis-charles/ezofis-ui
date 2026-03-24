import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/requests')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Requests',
  },
})

function RouteComponent() {
  return <div></div>
}
