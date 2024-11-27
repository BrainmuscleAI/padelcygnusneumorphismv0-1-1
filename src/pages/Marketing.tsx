import { useNavigate } from 'react-router-dom'
import { Trophy, Users, Dumbbell, Calendar, Mail, Waves, Shield, Heart, Star } from 'lucide-react'
import { Footer } from '../components/Footer'
import { AuthModal } from '../components/AuthModal'
import { MarketingNav } from '../components/MarketingNav'
import { Address } from '../components/Address'
import { useState } from 'react'

export function Marketing() {
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-[var(--surface-color)]">
      <MarketingNav onAuthClick={handleAuthClick} />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden flex items-center pt-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626126525134-fbbc79246481?q=80&w=2070')] bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <div className="neumorph p-2 rounded-2xl">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent px-4 py-2 text-sm sm:text-base">
                    El Complejo de Pádel más Completo de Cuernavaca
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  CLUB INDOOR
                </span>
                <br />
                <span className="text-[var(--text-primary)]">
                  PADEL TRAINING
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl">
                En PadelCygnus tenemos todos los servicios que puedas necesitar, desde nuestra academia 
                de pádel y la mejor oferta de ocio y bienestar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button
                  onClick={() => handleAuthClick('register')}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 neumorph text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:translate-y-[-2px] transition-all duration-300"
                >
                  Obtener Membresía
                </button>
                
                <button
                  onClick={() => handleAuthClick('login')}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 neumorph-button text-base sm:text-lg font-semibold text-[var(--text-secondary)] hover:translate-y-[-2px] transition-all duration-300"
                >
                  Iniciar Sesión
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: 'Canchas', value: '7' },
                  { label: 'Servicios', value: '10+' },
                  { label: 'Socios', value: '500+' },
                ].map((stat) => (
                  <div key={stat.label} className="neumorph p-3 sm:p-4 text-center">
                    <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="neumorph p-1 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1626126525134-fbbc79246481?q=80&w=2070"
                  alt="Padel Court"
                  className="rounded-3xl w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 neumorph p-4 sm:p-6 rounded-2xl backdrop-blur-md bg-white/80">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 neumorph-avatar flex items-center justify-center">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                      Primer club indoor
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                      multiservicio en Cuernavaca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Descubre todo lo que Padel Cygnus tiene para ofrecerte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Trophy,
                title: 'Academia',
                description: 'Formada por entrenadores altamente cualificados y cursos que se adaptan a todas las edades y niveles.',
              },
              {
                icon: Dumbbell,
                title: 'Fitness',
                description: 'Sala equipada con la mejor maquinaria y profesionales para entrenamientos personalizados.',
              },
              {
                icon: Waves,
                title: 'Lounge Bar',
                description: 'El mejor lugar para disfrutar de tus deportes favoritos en una terraza exterior con vista a todas las canchas.',
              },
              {
                icon: Heart,
                title: 'Bienestar',
                description: 'Descubre nuestros servicios de spa, estética y barbería complementarios ofrecidos por profesionales de cada sector.',
              },
              {
                icon: Users,
                title: 'Socios',
                description: 'Inscríbete y empieza a disfrutar de todas las ventajas del club con tu modalidad y cuota elegida.',
              },
              {
                icon: Star,
                title: 'Torneos',
                description: 'Organizamos y ofrecemos a nuestros clientes los mejores torneos y campeonatos para todos los niveles.',
              },
            ].map((feature) => (
              <div key={feature.title} className="group cursor-pointer">
                <div className="neumorph p-6 sm:p-8 hover:translate-y-[-8px] transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 neumorph-avatar flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Precios
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Acceso por Día',
                price: '95',
                features: [
                  'Acceso a todas las instalaciones',
                  'Reserva de canchas',
                  'Vestuarios premium',
                  'Área de descanso',
                ],
              },
              {
                title: 'Acceso por Mes',
                price: '134',
                features: [
                  'Todo lo incluido en Acceso por Día',
                  'Clases grupales incluidas',
                  'Descuentos en la tienda',
                  'Acceso prioritario a torneos',
                  'Invitados con descuento',
                ],
                highlighted: true,
              },
              {
                title: 'Gimnasio',
                price: '73',
                features: [
                  'Acceso al área fitness',
                  'Programa personalizado',
                  'Evaluación mensual',
                  'Clases grupales',
                ],
              },
            ].map((plan) => (
              <div key={plan.title} className="relative">
                <div className={`
                  neumorph p-6 sm:p-8 h-full
                  ${plan.highlighted ? 'border-2 border-blue-500/20' : ''}
                `}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{plan.title}</h3>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      <span className="text-[var(--text-secondary)]">/mes</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleAuthClick('register')}
                    className={`
                      w-full py-3 neumorph text-sm font-semibold
                      ${plan.highlighted ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' : ''}
                      hover:translate-y-[-2px] transition-all duration-300
                    `}
                  >
                    Comenzar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <Address />

      <Footer />
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </div>
  )
}