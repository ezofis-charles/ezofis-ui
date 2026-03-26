import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { z } from 'zod'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import TanStackQueryDevtools from '@/lib/tanstack-query/Devtools'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  validateSearch: z.object({
    stack: z.string().optional(),
  }),
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools />
      <TanStackQueryDevtools /> */}
    </>
  ),
})
