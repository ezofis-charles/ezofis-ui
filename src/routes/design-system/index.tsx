import { createFileRoute } from '@tanstack/react-router'
import { Header } from './-components/header'
import { List } from './-components/list'

const routes = [
  {
    label: 'Colors',
    route: '/design-system/colors',
  },
  {
    label: 'Typography',
    route: '/design-system/typography',
  },
  {
    label: 'Components',
    route: '/design-system/components',
  },
]

export const Route = createFileRoute('/design-system/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header title='Design System' />
      <List items={routes} />
    </>
  )
}
