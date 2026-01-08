import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'

// Lazy load componentes pesados
const Experiences = dynamic(() => import('@/components/sections/Experiences').then(mod => ({ default: mod.Experiences })), {
  loading: () => <div className="h-96 bg-arena-light animate-pulse" />,
})

const FeaturedRooms = dynamic(() => import('@/components/sections/FeaturedRooms').then(mod => ({ default: mod.FeaturedRooms })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-verde-selva animate-pulse" />,
})

const Location = dynamic(() => import('@/components/sections/Location').then(mod => ({ default: mod.Location })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})

const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="h-64 bg-verde-selva animate-pulse" />,
})

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Experiences />
      <FeaturedRooms />
      <Testimonials />
      <Location />
      <CTA />
    </>
  )
}
