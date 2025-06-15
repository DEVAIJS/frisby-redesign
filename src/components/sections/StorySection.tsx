//src/components/sections/StorySection.tsx
'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Calendar, Users, Building, Award, Play, ArrowRight, Coffee, ShieldCheck, Globe2 } from 'lucide-react'

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeLocation, setActiveLocation] = useState('pereira')

  const historyLocations = {
    pereira: {
      id: 'pereira',
      name: 'Pereira',
      region: 'Risaralda',
      year: 1977,
      position: { top: '45%', left: '25%' },
      story: {
        title: "El origen de todo",
        description: "En el corazón del Eje Cafetero nace Frisby. Una pequeña pizzería que cambiaría para siempre el sabor de Colombia.",
        icon: <Building className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "Primera pizzería de la región",
          "Alfredo Hoyos y Liliana Restrepo",
          "El primer pollo apanado de Colombia",
          "Una receta que haría historia"
        ],
        milestone: "El primer bocado que cambió todo"
      }
    },
    ejecafetero: {
      id: 'ejecafetero',
      name: 'Eje Cafetero',
      region: 'Caldas, Quindío, Risaralda',
      year: 1978,
      position: { top: '42%', left: '23%' },
      story: {
        title: "La expansión regional",
        description: "El sabor único se extiende por el Eje Cafetero. Las familias cafeteras adoptan a Frisby como suyo.",
        icon: <Coffee className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "Primera expansión regional",
          "Acogida por familias cafeteras",
          "Adaptación al sabor local",
          "Crecimiento orgánico"
        ],
        milestone: "Del café al pollo, misma pasión"
      }
    },
    bogota: {
      id: 'bogota',
      name: 'Bogotá',
      region: 'Cundinamarca',
      year: 1987,
      position: { top: '35%', left: '35%' },
      story: {
        title: "La conquista de la capital",
        description: "Frisby llega a Bogotá y se enfrenta al reto más grande: conquistar el paladar capitalino.",
        icon: <MapPin className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "Primer restaurante en Bogotá",
          "Adaptación a mercado metropolitano",
          "Competencia con cadenas internacionales",
          "Posicionamiento como marca nacional"
        ],
        milestone: "De regional a nacional"
      }
    },
    medellin: {
      id: 'medellin',
      name: 'Medellín',
      region: 'Antioquia',
      year: 1990,
      position: { top: '38%', left: '28%' },
      story: {
        title: "La tierra paisa nos abraza",
        description: "Los paisas reciben a Frisby con los brazos abiertos. El sabor se vuelve parte de la cultura antioqueña.",
        icon: <Award className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "Entrada al mercado paisa",
          "Aceptación cultural inmediata",
          "Crecimiento acelerado",
          "Base para expansión nacional"
        ],
        milestone: "El sabor que unió a Colombia"
      }
    },
    crisis: {
      id: 'crisis',
      name: 'La Crisis',
      region: 'Colombia',
      year: 1997,
      position: { top: '40%', left: '45%' },
      story: {
        title: "El momento más difícil",
        description: "Solo 10 restaurantes quedaban. Frisby estaba al borde de la desaparición. Pero descubrimos algo poderoso.",
        icon: <ShieldCheck className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "Reducción a solo 10 restaurantes",
          "Crisis financiera severa",
          "Momento de reflexión profunda",
          "La revelación que nos salvó"
        ],
        milestone: "No vendemos pollo, vendemos familia"
      }
    },
    nacional: {
      id: 'nacional',
      name: 'Colombia Entera',
      region: '270+ Ciudades',
      year: 2025,
      position: { top: '40%', left: '50%' },
      story: {
        title: "Somos Colombia",
        description: "Hoy estamos en más de 270 restaurantes, 60 ciudades. Somos el sabor que une a las familias colombianas.",
        icon: <Globe2 className="w-10 h-10 text-frisby-primary-500" />,
        details: [
          "270+ restaurantes activos",
          "Presencia en 60 ciudades",
          "4,500+ colaboradores",
          "Líder en pollo en Colombia"
        ],
        milestone: "El sabor que nos une como país"
      }
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const currentStory = historyLocations[activeLocation as keyof typeof historyLocations]

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-frisby-primary-50 via-white to-frisby-primary-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-frisby-primary-200 rounded-full opacity-20"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-frisby-red-200 rounded-full opacity-20"
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-6xl md:text-7xl font-black text-gray-900 mb-8"
              variants={itemVariants}
            >
              Una historia que
              <br />
              <span className="bg-gradient-to-r from-frisby-primary-500 via-frisby-primary-400 to-frisby-red-500 bg-clip-text text-transparent">
                recorrió Colombia
              </span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Desde una pequeña pizzería en Pereira hasta convertirnos en el sabor 
              que une a las familias de todo el país. Esta es nuestra historia.
            </motion.p>
          </motion.div>

          {/* Interactive Map & Story */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            
            {/* Colombia Map */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-gradient-to-br from-frisby-primary-100 to-frisby-primary-200 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                  El Recorrido de Frisby por Colombia
                </h3>
                {/* SVG Map of Colombia */}
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="relative w-full h-full">
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <svg 
                        viewBox="0 0 800 800" 
                        className="w-full h-full drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 10px 30px rgba(247, 191, 28, 0.3))' }}
                      >
                        {/* Definición de gradientes */}
                        <defs>
                          <linearGradient id="colombiaMapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f7bf1c" stopOpacity="0.9" />
                            <stop offset="30%" stopColor="#f9cc35" stopOpacity="0.8" />
                            <stop offset="70%" stopColor="#fbdc6e" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#fef7e0" stopOpacity="0.6" />
                          </linearGradient>
                          <linearGradient id="colombiaBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e1a91b" />
                            <stop offset="100%" stopColor="#f7bf1c" />
                          </linearGradient>
                          <filter id="countryShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#f7bf1c" floodOpacity="0.3"/>
                          </filter>
                        </defs>
                        {/* Mapa base */}
                        <motion.g
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        >
                          <image 
                            href="/map.png" 
                            x="50" 
                            y="50" 
                            width="700" 
                            height="700"
                            style={{
                              filter: 'hue-rotate(20deg) saturate(1.2) brightness(1.1)',
                              opacity: 0.9
                            }}
                          />
                        </motion.g>
                        {/* Overlay con gradiente */}
                        <motion.rect
                          x="50"
                          y="50"
                          width="700"
                          height="700"
                          fill="url(#colombiaMapGradient)"
                          style={{ mixBlendMode: 'multiply' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.7 }}
                          transition={{ delay: 1, duration: 1 }}
                        />
                        {/* Location Pins con año justo DEBAJO del pin */}
                        {Object.values(historyLocations).map((location, index) => {
                          const positions = {
                            pereira: { x: 280, y: 380 },
                            ejecafetero: { x: 270, y: 360 },
                            bogota: { x: 350, y: 320 },
                            medellin: { x: 290, y: 300 },
                            crisis: { x: 400, y: 400 },
                            nacional: { x: 380, y: 350 }
                          }
                          const pos = positions[location.id as keyof typeof positions] || { x: 400, y: 400 }
                          return (
                            <motion.g
                              key={location.id}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ 
                                delay: 1.5 + index * 0.3, 
                                type: 'spring',
                                stiffness: 200,
                                damping: 10
                              }}
                            >
                              {/* Círculo de fondo para el pin */}
                              <motion.circle
                                cx={pos.x}
                                cy={pos.y}
                                r={activeLocation === location.id ? "20" : "15"}
                                fill="rgba(255, 255, 255, 0.9)"
                                stroke={activeLocation === location.id ? "#ef4444" : "#f7bf1c"}
                                strokeWidth="3"
                                className="cursor-pointer"
                                style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))' }}
                                onClick={() => setActiveLocation(location.id)}
                                whileHover={{ scale: 1.3 }}
                                animate={{ 
                                  scale: activeLocation === location.id ? [1, 1.1, 1] : 1,
                                  r: activeLocation === location.id ? 20 : 15
                                }}
                                transition={{ duration: 0.3 }}
                              />
                              {/* Pin principal */}
                              <motion.circle
                                cx={pos.x}
                                cy={pos.y}
                                r={activeLocation === location.id ? "12" : "8"}
                                fill={activeLocation === location.id ? "#ef4444" : "#f7bf1c"}
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-pointer"
                                onClick={() => setActiveLocation(location.id)}
                                whileHover={{ scale: 1.2 }}
                                animate={{ 
                                  scale: activeLocation === location.id ? [1, 1.2, 1] : 1,
                                  fill: activeLocation === location.id ? "#ef4444" : "#f7bf1c"
                                }}
                                transition={{ duration: 0.3, repeat: activeLocation === location.id ? Infinity : 0, repeatDelay: 1 }}
                              />
                              {/* Año DEBAJO del pin, mismo eje X, Y + 28 */}
                              <motion.text
                                x={pos.x}
                                y={pos.y + 22} // Ajusta aquí la distancia, 22 suele quedar justo debajo del pin
                                textAnchor="middle"
                                className="fill-gray-800 font-bold text-sm pointer-events-none select-none"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.8))', fontWeight: 700 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 + index * 0.1 }}
                              >
                                {location.year}
                              </motion.text>
                              {/* Pulse effect para ubicación activa */}
                              {activeLocation === location.id && (
                                <motion.circle
                                  cx={pos.x}
                                  cy={pos.y}
                                  r="25"
                                  fill="none"
                                  stroke="#ef4444"
                                  strokeWidth="2"
                                  opacity="0.6"
                                  animate={{ 
                                    r: [25, 35, 25],
                                    opacity: [0.6, 0, 0.6]
                                  }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              )}
                              {/* Ondas concéntricas para el pin activo */}
                              {activeLocation === location.id && (
                                <motion.circle
                                  cx={pos.x}
                                  cy={pos.y}
                                  r="30"
                                  fill="none"
                                  stroke="#f7bf1c"
                                  strokeWidth="2"
                                  opacity="0.4"
                                  animate={{ 
                                    r: [30, 50, 30],
                                    opacity: [0.4, 0, 0.4]
                                  }}
                                  transition={{ 
                                    duration: 2.5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              )}
                            </motion.g>
                          )
                        })}
                        {/* Se elimina el efecto de luz que pasa por encima */}
                      </svg>
                    </motion.div>
                  </div>
                </div>
                {/* Location Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                  {Object.values(historyLocations).map((location) => (
                    <motion.button
                      key={location.id}
                      onClick={() => setActiveLocation(location.id)}
                      className={`p-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        activeLocation === location.id
                          ? 'bg-frisby-red-500 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:bg-frisby-primary-100'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {location.name}
                      </div>
                      <div className="text-xs opacity-75">{location.year}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Story Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-frisby-primary-200"
              >
                {/* Story Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      className="text-6xl mr-4"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentStory.story.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-black text-gray-900 mb-2">
                        {currentStory.story.title}
                      </h3>
                      <div className="flex items-center text-frisby-primary-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-bold">{currentStory.year}</span>
                        <span className="mx-2">•</span>
                        <span>{currentStory.region}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {currentStory.story.description}
                </p>

                {/* Story Details */}
                <div className="space-y-3 mb-6">
                  {currentStory.story.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-3 bg-frisby-primary-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="w-2 h-2 bg-frisby-primary-500 rounded-full mr-3" />
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Milestone */}
                <motion.div
                  className="bg-gradient-to-r from-frisby-primary-500 to-frisby-red-500 text-white p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-bold text-lg italic">"{currentStory.story.milestone}"</p>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <motion.button
                    className="flex items-center px-6 py-3 bg-frisby-primary-100 text-frisby-primary-700 rounded-xl hover:bg-frisby-primary-200 transition-colors"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver video de esta época
                  </motion.button>
                  
                  <motion.button
                    className="flex items-center px-6 py-3 bg-frisby-red-500 text-white rounded-xl hover:bg-frisby-red-600 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const keys = Object.keys(historyLocations)
                      const idx = keys.indexOf(activeLocation)
                      setActiveLocation(keys[(idx + 1) % keys.length])
                    }}
                  >
                    Siguiente capítulo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Timeline Progress */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Progreso de nuestra historia
                </h4>
                
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-frisby-primary-200 rounded-full" />
                  
                  {/* Progress Fill */}
                  <motion.div
                    className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-frisby-primary-500 to-frisby-red-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(Object.keys(historyLocations).indexOf(activeLocation) + 1) / Object.keys(historyLocations).length * 100}%`
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ transform: 'translateY(-50%)' }}
                  />
                  
                  {/* Year Markers */}
                  <div className="flex justify-between items-center relative">
                    {Object.values(historyLocations).map((location, index) => (
                      <motion.div
                        key={location.id}
                        className={`flex flex-col items-center cursor-pointer ${
                          Object.keys(historyLocations).indexOf(activeLocation) >= index
                            ? 'text-frisby-primary-600' 
                            : 'text-gray-400'
                        }`}
                        onClick={() => setActiveLocation(location.id)}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className={`w-4 h-4 rounded-full border-2 mb-2 ${
                            activeLocation === location.id
                              ? 'bg-frisby-red-500 border-frisby-red-500 scale-125'
                              : Object.keys(historyLocations).indexOf(activeLocation) >= index
                              ? 'bg-frisby-primary-500 border-frisby-primary-500'
                              : 'bg-white border-gray-300'
                          }`}
                          animate={{
                            scale: activeLocation === location.id ? 1.25 : 1
                          }}
                        />
                        <span className="text-xs font-bold">{location.year}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-gradient-to-br from-frisby-primary-500 to-frisby-primary-600 text-white p-6 rounded-2xl text-center">
                  <motion.div
                    className="text-4xl font-black mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    270+
                  </motion.div>
                  <div className="text-sm opacity-90">Restaurantes hoy</div>
                </div>
                
                <div className="bg-gradient-to-br from-frisby-red-500 to-frisby-red-600 text-white p-6 rounded-2xl text-center">
                  <motion.div
                    className="text-4xl font-black mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    48
                  </motion.div>
                  <div className="text-sm opacity-90">Años de historia</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <motion.div
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-frisby-primary-500 via-frisby-primary-400 to-frisby-red-500 text-white font-bold text-xl rounded-3xl shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(247, 191, 28, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-7 h-7 mr-3" />
              Sé parte de nuestra historia
              <motion.div
                className="ml-3 text-2xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🇨🇴
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}