import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/forms')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Forms',
  },
})

function RouteComponent() {
  return <div></div>
}
