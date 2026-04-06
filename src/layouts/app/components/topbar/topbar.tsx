import { AiChatBarToggle } from './components/ai-chat-bar-toggle'
import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='sticky top-0 flex h-16 items-center justify-between border-b border-gray-4 bg-surface-raised px-4 xl:h-12 xl:border-gray-3 xl:bg-surface xl:px-5'>
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
