import type { ReactNode } from 'react'
import { AiBar } from './components/ai-bar'
import { Menubar } from './components/menubar'
import { Topbar } from './components/topbar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className='flex max-h-dvh min-h-dvh overflow-hidden'>
      <Menubar />
      <div className='flex flex-1 md:gap-1 md:py-1 md:pr-1'>
        <div className='flex-1 bg-surface md:rounded-xl md:border md:border-gray-3'>
          <Topbar />
          {children}
        </div>
        <AiBar />
      </div>
    </div>
  )
}
