import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/workflows')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Workflows',
  },
})

function RouteComponent() {
  return <div></div>
}
