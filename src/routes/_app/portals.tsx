import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/portals')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Portals',
  },
})

function RouteComponent() {
  return <div></div>
}
