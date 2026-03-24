import { AiChatBarToggle } from './components/ai-chat-bar-toggle'
import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-12 items-center justify-between pr-3 pl-4 lg:px-5'>
      <div className='flex items-center gap-2'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-2 lg:gap-1'>
        <GlobalSearch />
        <Notifications />
        <AiChatBarToggle />
      </div>
    </header>
  )
}
