import { X } from 'lucide-react'

interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  icon: React.ElementType
}

export function FeatureModal({ isOpen, onClose, title, description, icon: Icon }: FeatureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 backdrop-blur-[60px] bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg p-8 bg-white/30 rounded-xl border-4 border-white relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 neumorph-button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 neumorph-avatar flex items-center justify-center">
            <Icon className="w-8 h-8 neumorph-icon" />
          </div>
          <h2 className="text-2xl font-semibold gradient-text">{title}</h2>
        </div>

        <p className="text-lg text-[var(--text-primary)]">{description}</p>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 neumorph-button"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}