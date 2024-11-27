import { MapPin, Phone, Mail } from 'lucide-react'

export function Address() {
  return (
    <section className="py-16 sm:py-24 relative px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="neumorph p-6 sm:p-8 lg:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Visítanos
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 neumorph-avatar flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">Dirección</h3>
                    <p className="text-[var(--text-secondary)]">
                      C. Nueva Italia 12C, zona 1, Prados de Cuernavaca, 62239 Cuernavaca, Mor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 neumorph-avatar flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">Teléfono</h3>
                    <p className="text-[var(--text-secondary)]">+52 777 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 neumorph-avatar flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">Email</h3>
                    <p className="text-[var(--text-secondary)]">info@padelcygnus.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] sm:h-[400px] neumorph p-1 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.2!2d-99.2!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzM2LjAiTiA5OcKwMTInMzYuMCJX!5e0!3m2!1ses!2smx!4v1234567890!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}