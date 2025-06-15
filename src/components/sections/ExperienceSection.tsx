//src/components/sections/ExperienceSection.tsx
'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Clock, Car, Smartphone, Users, Utensils, Coffee, Gift } from 'lucide-react'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('delivery')

  const experiences = {
    delivery: {
      title: "Domicilio rápido",
      subtitle: "Tu sabor favorito hasta tu puerta",
      icon: Car,
      color: "frisby-red",
      features: [
        { icon: Clock, text: "Entrega en 25-35 minutos", highlight: true },
        { icon: MapPin, text: "Cobertura en toda la ciudad" },
        { icon: Smartphone, text: "Pedidos por app y web" },
        { icon: Gift, text: "Ofertas exclusivas online" }
      ],
      image: "🛵",
      description: "Más de 270 restaurantes listos para llevarte el auténtico sabor Frisby donde estés."
    },
    restaurant: {
      title: "En restaurante",
      subtitle: "La experiencia completa Frisby",
      icon: Utensils,
      color: "frisby-warm",
      features: [
        { icon: Users, text: "Ambiente familiar acogedor", highlight: true },
        { icon: Coffee, text: "Servicio personalizado" },
        { icon: MapPin, text: "270+ ubicaciones" },
        { icon: Gift, text: "Área kids en seleccionados" }
      ],
      image: "🏪",
      description: "Espacios diseñados para crear momentos inolvidables en familia, con la calidad y calidez que nos caracteriza."
    },
    takeaway: {
      title: "Para llevar",
      subtitle: "Rápido y sin complicaciones",
      icon: Smartphone,
      color: "frisby-nature",
      features: [
        { icon: Clock, text: "Listo en 15 minutos", highlight: true },
        { icon: Smartphone, text: "Ordena y recoge" },
        { icon: MapPin, text: "Punto de recogida cómodo" },
        { icon: Users, text: "Ideal para oficina y trabajo" }
      ],
      image: "📦",
      description: "Perfecto para el ritmo de vida actual. Ordena online y recoge cuando te convenga."
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const currentExperience = experiences[activeTab as keyof typeof experiences]
  const IconComponent = currentExperience.icon

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-frisby-warm-100 rounded-full opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-frisby-red-100 rounded-full opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
              variants={itemVariants}
            >
              Como tú 
              <span className="bg-gradient-to-r from-frisby-red-500 to-frisby-warm-500 bg-clip-text text-transparent">
                prefieras
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Tu experiencia Frisby se adapta a tu estilo de vida. Disfruta nuestro sabor único 
              de la manera que más te convenga.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {Object.entries(experiences).map(([key, experience], index) => {
              const TabIcon = experience.icon
              const isActive = activeTab === key
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 min-w-[200px] ${
                    isActive
                      ? 'bg-frisby-red-500 text-white shadow-2xl scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-frisby-red-50 hover:text-frisby-red-500 shadow-lg'
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <TabIcon className={`w-6 h-6 mr-3 ${
                    isActive ? 'text-white' : 'text-frisby-red-500'
                  }`} />
                  {experience.title}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div>
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-3 bg-frisby-red-100 rounded-xl mr-4">
                    <IconComponent className="w-8 h-8 text-frisby-red-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">
                      {currentExperience.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {currentExperience.subtitle}
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg text-gray-700 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentExperience.description}
                </motion.p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {currentExperience.features.map((feature, index) => {
                  const FeatureIcon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                        feature.highlight 
                          ? 'bg-frisby-red-50 border-2 border-frisby-red-200' 
                          : 'bg-gray-50 hover:bg-frisby-red-50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-lg mr-4 ${
                        feature.highlight 
                          ? 'bg-frisby-red-500 text-white' 
                          : 'bg-white text-frisby-red-500'
                      }`}>
                        <FeatureIcon className="w-5 h-5" />
                      </div>
                      <span className={`font-semibold ${
                        feature.highlight ? 'text-frisby-red-700' : 'text-gray-700'
                      }`}>
                        {feature.text}
                      </span>
                      {feature.highlight && (
                        <motion.div
                          className="ml-auto px-3 py-1 bg-frisby-red-500 text-white text-sm font-bold rounded-full"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ⭐
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-frisby-red-500 to-frisby-warm-500 text-white font-bold text-lg rounded-2xl shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === 'delivery' && '🛵 Pedir domicilio'}
                  {activeTab === 'restaurant' && '📍 Encontrar restaurante'}
                  {activeTab === 'takeaway' && '📱 Ordenar para llevar'}
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-frisby-red-100 to-frisby-warm-100 rounded-3xl p-12 shadow-2xl">
                <motion.div
                  className="text-9xl text-center mb-8 filter drop-shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {currentExperience.image}
                </motion.div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                    <span className="text-sm font-bold text-gray-700">Disponible 24/7</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-black text-frisby-red-500">270+</div>
                    <div className="text-xs text-gray-600">Ubicaciones</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}