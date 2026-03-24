import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/tasks')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Tasks',
  },
})

function RouteComponent() {
  return <div></div>
}
