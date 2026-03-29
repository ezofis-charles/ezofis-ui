import type { ReactNode } from 'react'
import { AiBar } from './components/ai-bar'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className='flex max-h-dvh min-h-dvh overflow-hidden'>
      <Sidebar />

      <div className='flex flex-1 xl:py-1 xl:pr-1'>
        <div className='flex-1 bg-surface xl:rounded-xl xl:border xl:border-gray-3'>
          <Topbar />
          {children}
        </div>
        <AiBar />
      </div>
    </div>
  )
}
