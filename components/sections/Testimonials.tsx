'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Bogotá, Colombia',
    rating: 5,
    text: 'Increíble experiencia. El hostal está en un lugar mágico, rodeado de naturaleza. La atención fue excepcional y la comida deliciosa. Definitivamente volveremos.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    date: 'Enero 2024',
  },
  {
    id: 2,
    name: 'John Smith',
    location: 'New York, USA',
    rating: 5,
    text: 'Perfect place to disconnect. The rooms are beautiful, the spa experience was amazing, and the staff made us feel at home. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'Diciembre 2023',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    location: 'Medellín, Colombia',
    rating: 5,
    text: 'Un paraíso escondido. La combinación de naturaleza, confort y gastronomía es perfecta. El masaje en el spa fue increíble. Volveremos pronto.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    date: 'Noviembre 2023',
  },
]

export function Testimonials() {
  const t = useTranslations('testimonials')
  
  return (
    <section className="section-padding bg-gradient-to-br from-verde-selva to-azul-caribe text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-display mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
          lazy={true}
          watchSlidesProgress={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                  <Quote className="text-white/30 mb-4" size={32} />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-dorado"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/90 mb-6 flex-1 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="48px"
                        quality={75}
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/70">
                        {testimonial.location} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

