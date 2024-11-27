import { Bell, Settings, User, Menu } from 'lucide-react'
import { useTenantStore } from '../store/tenantStore'
import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'
import { NotificationsModal } from './NotificationsModal'
import { SettingsModal } from './SettingsModal'
import { UserProfileModal } from './UserProfileModal'

interface HeaderProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

export function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const currentTenant = useTenantStore((state) => state.currentTenant)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="w-full h-16 sm:h-20 neumorph flex items-center justify-between px-4 sm:px-8 mb-6 sm:mb-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 neumorph-button md:hidden"
        >
          <Menu className="w-5 h-5 neumorph-icon" />
        </button>
        <h1 className="text-xl sm:text-2xl font-semibold gradient-text">
          Padel Cygnus
        </h1>
      </div>
      <div className="flex items-center gap-3 sm:gap-6">
        <ThemeToggle />
        <button 
          onClick={() => setShowNotifications(true)} 
          className="p-2 sm:p-3 neumorph-button relative"
        >
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 neumorph-icon" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <button 
          onClick={() => setShowSettings(true)}
          className="p-2 sm:p-3 neumorph-button"
        >
          <Settings className="w-4 h-4 sm:w-5 sm:h-5 neumorph-icon" />
        </button>
        <button
          onClick={() => setShowProfile(true)}
          className="w-8 h-8 sm:w-10 sm:h-10 neumorph-avatar flex items-center justify-center hover:scale-105 transition-transform"
        >
          <User className="w-4 h-4 sm:w-5 sm:h-5 neumorph-icon" />
        </button>
      </div>

      <NotificationsModal 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
      <SettingsModal 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
      <UserProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </header>
  )
}