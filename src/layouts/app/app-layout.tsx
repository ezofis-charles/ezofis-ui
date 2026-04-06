import type { ReactNode } from 'react'
import { AiChat } from './components/ai-chat'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />

      <Main>
        {children}
        <AiChat />
      </Main>
    </>
  )
}
