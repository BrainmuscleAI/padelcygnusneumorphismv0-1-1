import { Home, Calendar, Trophy, Dumbbell, Settings, LogOut, Globe, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const navigation = [
  { name: 'Inicio', icon: Home, href: '/' },
  { name: 'Reservas', icon: Calendar, href: '/reservas' },
  { name: 'Pádel', icon: Trophy, href: '/padel' },
  { name: 'Wellness', icon: Dumbbell, href: '/wellness' },
  { name: 'Marketing', icon: Globe, href: '/marketing' },
  { name: 'Ajustes', icon: Settings, href: '/ajustes' },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  isMobile: boolean
}

export function Sidebar({ isOpen, onClose, isMobile }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate('/marketing')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${isMobile ? 'fixed left-0 top-0 bottom-0 z-30' : 'fixed left-4 top-24'}
          w-72 min-h-[calc(100vh-7rem)] p-6 neumorph
          transition-transform duration-300
          ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        {isMobile && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 neumorph-button"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <nav className="space-y-4 mt-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={isMobile ? onClose : undefined}
                className={`
                  flex items-center gap-3 p-4
                  ${isActive ? 'neumorph-pressed' : 'neumorph-button'}
                  transition-all duration-300
                `}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'neumorph-icon'}`} />
                <span className={`text-sm font-medium ${
                  isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                }`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 p-4 text-red-500 neumorph-button"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Cerrar Sesión</span>
          </button>
        </nav>
      </aside>
    </>
  )
}