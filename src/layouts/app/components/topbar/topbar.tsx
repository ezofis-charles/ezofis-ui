import { AiChatBarToggle } from './components/ai-chat-bar-toggle'
import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-13 items-center justify-between px-4'>
      <div className='flex items-center gap-2'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-1.5'>
        <GlobalSearch />
        <Notifications />
        <AiChatBarToggle />
      </div>
    </header>
  )
}
