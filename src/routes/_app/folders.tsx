import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/folders')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Folders',
  },
})

function RouteComponent() {
  return <div></div>
}
