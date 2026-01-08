import { ExperienceDetail } from '@/components/sections/ExperienceDetail'

export const metadata = {
  title: 'Experiencias - Hostal Boutique Buritaca',
  description: 'Descubre nuestras experiencias únicas: gastronomía, spa y naturaleza.',
}

export default function ExperienciasPage() {
  return (
    <div className="pt-24">
      <ExperienceDetail />
    </div>
  )
}


