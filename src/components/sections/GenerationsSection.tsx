//src/components/sections/GenerationsSection.tsx
'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import * as Avatar from "@radix-ui/react-avatar"

export default function GenerationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "María Elena Rodríguez",
      age: "72 años",
      generation: "Abuela",
      years: "30 años de tradición",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "He traído a mis nietos aquí desde que tenían 5 años. Ahora ellos traen a sus propios hijos. Frisby no es solo comida, es donde nuestra familia se reúne cada domingo.",
      highlight: "3 generaciones, una tradición",
      period: "1990 - Hoy",
      bgColor: "from-frisby-warm-100 to-frisby-warm-200",
      accentColor: "frisby-warm-600"
    },
    {
      id: 2,
      name: "Carlos Andrés Mendoza",
      age: "28 años", 
      generation: "Papá Millennial",
      years: "Desde la universidad",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Estudié cerca de un Frisby y ahora vivo al lado de otro. Mis hijos ya saben que los viernes es 'día Frisby'. Es increíble cómo algunos sabores te acompañan toda la vida.",
      highlight: "De estudiante a padre de familia",
      period: "2010 - Hoy",
      bgColor: "from-frisby-red-100 to-frisby-red-200",
      accentColor: "frisby-red-600"
    },
    {
      id: 3,
      name: "Isabella Martínez",
      age: "19 años",
      generation: "Gen Z",
      years: "Toda la vida",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Mis papás me llevaban cuando era pequeña, ahora vengo con mis amigos. Frisby es parte de quien soy. Cuando esté en otro país, esto es lo que más voy a extrañar de Colombia.",
      highlight: "Creció con Frisby",
      period: "2005 - Hoy",
      bgColor: "from-frisby-nature-100 to-frisby-nature-200",
      accentColor: "frisby-nature-600"
    },
    {
      id: 4,
      name: "Roberto Jiménez",
      age: "45 años",
      generation: "La Crisis",
      years: "Desde los 90s",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      quote: "Vi cuando casi cerraban en los 90s y pensé 'se acabó mi lugar favorito'. Pero regresaron más fuertes. Frisby me enseñó que las crisis se superan manteniendo la esencia.",
      highlight: "Testigo de la transformación",
      period: "1992 - Hoy",
      bgColor: "from-frisby-earth-100 to-frisby-earth-200",
      accentColor: "frisby-earth-600"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-frisby-warm-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <span className="text-frisby-red-500">Tres generaciones,</span>
              <br />
              una misma historia
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Desde abuelos que nos conocieron en los 70s hasta jóvenes que crecieron con nosotros, 
              estas son las voces de quienes hacen que Frisby sea más que un restaurante.
            </motion.p>
          </motion.div>

          {/* Testimonial principal */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div
              className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white/90 rounded-3xl shadow-2xl border border-gray-100 px-8 py-12 md:py-16 md:px-16 overflow-hidden"
              style={{
                backdropFilter: 'blur(6px)',
                boxShadow: '0 8px 40px 0 rgba(220,38,38,0.08)'
              }}
            >
              {/* Avatar grande y datos */}
              <div className="flex flex-col items-center md:items-start min-w-[180px]">
                <Avatar.Root className="w-28 h-28 rounded-full shadow-lg border-4 border-white bg-gray-200 overflow-hidden mb-4">
                  <Avatar.Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback className="w-full h-full flex items-center justify-center text-3xl text-gray-400 bg-gray-100">
                    {currentTestimonial.name[0]}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentTestimonial.name}</h3>
                  <p className="text-gray-500 text-base">{currentTestimonial.age}</p>
                  <span
                    className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        currentTestimonial.accentColor === 'frisby-warm-600' ? '#fef7e0' :
                        currentTestimonial.accentColor === 'frisby-red-600' ? '#fee2e2' :
                        currentTestimonial.accentColor === 'frisby-nature-600' ? '#dcfce7' :
                        currentTestimonial.accentColor === 'frisby-earth-600' ? '#f0ede6' : '#fee2e2',
                      color:
                        currentTestimonial.accentColor === 'frisby-warm-600' ? '#e1a91b' :
                        currentTestimonial.accentColor === 'frisby-red-600' ? '#dc2626' :
                        currentTestimonial.accentColor === 'frisby-nature-600' ? '#16a34a' :
                        currentTestimonial.accentColor === 'frisby-earth-600' ? '#8b6f47' : '#dc2626'
                    }}
                  >
                    {currentTestimonial.generation}
                  </span>
                  <div className="mt-2 text-xs text-gray-400">{currentTestimonial.years}</div>
                </div>
              </div>

              {/* Contenido testimonial */}
              <div className="flex-1 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-frisby-red-500 mb-4 opacity-30" />
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-6 leading-snug">
                  “{currentTestimonial.quote}”
                </blockquote>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex items-center px-4 py-2 rounded-full font-semibold text-white text-sm shadow"
                    style={{
                      background:
                        currentTestimonial.accentColor === 'frisby-warm-600' ? '#e1a91b' :
                        currentTestimonial.accentColor === 'frisby-red-600' ? '#dc2626' :
                        currentTestimonial.accentColor === 'frisby-nature-600' ? '#16a34a' :
                        currentTestimonial.accentColor === 'frisby-earth-600' ? '#8b6f47' : '#dc2626'
                    }}
                  >
                    {currentTestimonial.highlight}
                  </span>
                  <span className="text-gray-500 font-medium text-sm">{currentTestimonial.period}</span>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </motion.button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={`indicator-${index}`}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-frisby-red-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </motion.div>

          {/* Mini testimonials en grid */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.filter((_, index) => index !== activeTestimonial).slice(0, 3).map((testimonial) => (
              <motion.div
                key={`mini-testimonial-${testimonial.id}`}
                className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg cursor-pointer"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setActiveTestimonial(testimonials.indexOf(testimonial))}
              >
                <div className="flex items-center mb-4">
                  <Avatar.Root className="w-10 h-10 rounded-full shadow border-2 border-white bg-gray-200 overflow-hidden mr-3">
                    <Avatar.Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center text-lg text-gray-400 bg-gray-100">
                      {testimonial.name[0]}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.generation}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.quote.substring(0, 100)}..."
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action final */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="p-8 bg-gradient-to-r from-frisby-red-500 to-frisby-warm-500 rounded-3xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Cuál es tu historia con Frisby?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Comparte tu momento favorito y sé parte de esta gran familia
              </p>
              <motion.button
                className="bg-white text-frisby-red-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comparte tu historia
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}