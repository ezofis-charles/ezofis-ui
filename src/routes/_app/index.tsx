import { createFileRoute } from '@tanstack/react-router'
import { DashboardPage } from '@/pages/app/dashboard'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
  staticData: {
    pageTitle: 'Dashboard',
  },
})

function RouteComponent() {
  return <DashboardPage />
}
