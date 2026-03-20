import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Pagination } from '@/components/base/pagination'
import { Header } from '../-components/header'
import { Section } from '../-components/section'

export const Route = createFileRoute('/design-system/components/pagination')({
  component: RouteComponent,
})

function RouteComponent() {
  const [page, setPage] = useState(5)
  const [pageSize, setPageSize] = useState(10)

  return (
    <>
      <Header title='Pagination' />

      <Section title='Default'>
        <Pagination
          itemLabel='Users'
          page={page}
          pageSize={pageSize}
          totalItems={144}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </Section>

      <Section title='Mini'>
        <Pagination
          itemLabel='Users'
          page={page}
          pageSize={pageSize}
          showPageNumbers={false}
          totalItems={144}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </Section>
    </>
  )
}
