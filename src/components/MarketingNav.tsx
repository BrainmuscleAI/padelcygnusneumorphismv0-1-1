import { Trophy, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface MarketingNavProps {
  onAuthClick: (mode: 'login' | 'register') => void
}

export function MarketingNav({ onAuthClick }: MarketingNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface-color)]/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 neumorph-avatar flex items-center justify-center">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Padel Cygnus
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-6">
              {['Inicio', 'Instalaciones', 'Clases', 'Torneos', 'Contacto'].map((item) => (
                <button 
                  key={item} 
                  className="text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => onAuthClick('login')}
                className="px-3 lg:px-4 py-2 neumorph-button text-xs lg:text-sm font-medium hover:translate-y-[-2px] transition-all duration-300"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => onAuthClick('register')}
                className="px-3 lg:px-4 py-2 neumorph text-xs lg:text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:translate-y-[-2px] transition-all duration-300"
              >
                Obtener Membresía
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 neumorph-button"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-[var(--surface-color)] border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {['Inicio', 'Instalaciones', 'Clases', 'Torneos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    onAuthClick('login')
                    setIsMenuOpen(false)
                  }}
                  className="w-full px-4 py-2 neumorph-button text-sm font-medium"
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => {
                    onAuthClick('register')
                    setIsMenuOpen(false)
                  }}
                  className="w-full px-4 py-2 neumorph text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                >
                  Obtener Membresía
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}