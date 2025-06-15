'use client'

import { motion, useInView, type Variants, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, Heart, Clock, Users, Play, MapPin, Star, Zap } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentYear] = useState(new Date().getFullYear())
  const yearsInBusiness = currentYear - 1977 // Frisby fue fundado en 1977
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, 100])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  }

  const floatingVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo de familia feliz (Unsplash, libre uso) */}      
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero.jpg"
          alt="Familia feliz"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      {/* Overlay degradado con opacidad para ver la imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-frisby-primary-400 via-frisby-primary-500 to-frisby-red-500 opacity-80 pointer-events-none -z-10" />

      {/* Background Pattern & Graphics */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-frisby-primary-600/30 to-transparent" />
        
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '100px 100px'] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          />
        </div>

        {/* Floating Chicken Elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-4xl">
            🍗
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-10 w-16 h-16 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-frisby-warm-300 rounded-full flex items-center justify-center text-2xl">
            🥤
          </div>
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/2 right-10 w-20 h-20 opacity-15"
          animate={{
            x: [0, 15, 0],
            y: [0, -25, 0],
            rotate: [0, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-frisby-warm-400 rounded-2xl flex items-center justify-center text-3xl">
            🍟
          </div>
        </motion.div>

        {/* Más elementos flotantes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-14 h-14 opacity-20"
          animate={{
            y: [0, -18, 0],
            x: [0, 10, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
            🍗
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-1/3 w-12 h-12 opacity-20"
          animate={{
            y: [0, 14, 0],
            x: [0, -8, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-frisby-warm-200 rounded-full flex items-center justify-center text-2xl">
            🍟
          </div>
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-10 h-10 opacity-20"
          animate={{
            y: [0, -10, 0],
            x: [0, 8, 0],
            rotate: [0, 6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
            🍗
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
          style={{ y: textY }}
        >
          {/* Badge de años */}
          <motion.div
            variants={floatingVariants}
            className="flex justify-center mb-8"
          >
                          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
              <Star className="w-5 h-5 text-frisby-primary-200 mr-2" />
              <span className="text-white font-semibold">
                {yearsInBusiness} años de tradición colombiana
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none"
              variants={itemVariants}
            >
              El sabor que
              <br />
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-frisby-primary-200 to-frisby-primary-300 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  une familias
                </motion.span>
                <motion.div
                  className="absolute -bottom-4 left-0 w-full h-2 bg-frisby-primary-300 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
              variants={itemVariants}
            >
              Durante <strong className="text-frisby-primary-200">{yearsInBusiness} años</strong>, hemos sido más que una marca de pollo. 
              Somos el lugar donde <strong>las memorias se crean</strong>, donde las familias se reúnen, 
              y donde cada bocado cuenta una historia de amor y tradición colombiana.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-white text-frisby-primary-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[200px]"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Pide ahora
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>

            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 min-w-[200px]"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                borderColor: 'rgba(255, 255, 255, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Ver nuestra historia
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          >
            <motion.div
              className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Heart className="w-16 h-16 text-frisby-primary-200 mx-auto mb-4" />
              <motion.div 
                className="text-5xl font-black text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                270+
              </motion.div>
              <div className="text-white/80 font-medium text-lg">Restaurantes en Colombia</div>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Users className="w-16 h-16 text-frisby-primary-200 mx-auto mb-4" />
              <motion.div 
                className="text-5xl font-black text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                3
              </motion.div>
              <div className="text-white/80 font-medium text-lg">Generaciones nos prefieren</div>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Clock className="w-16 h-16 text-frisby-primary-200 mx-auto mb-4" />
              <motion.div 
                className="text-5xl font-black text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                {yearsInBusiness}
              </motion.div>
              <div className="text-white/80 font-medium text-lg">Años de tradición</div>
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: MapPin, text: "Encontrar restaurante", color: "frisby-warm" },
              { icon: Clock, text: "Horarios", color: "frisby-nature" },
              { icon: Star, text: "Ofertas especiales", color: "frisby-earth" }
            ].map((item, index) => (
              <motion.button
                key={item.text}
                className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{item.text}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm font-medium mb-2">Descubre más</span>
          <motion.div
            className="p-2 rounded-full border-2 border-white/30"
            whileHover={{ scale: 1.1, borderColor: 'rgba(255, 255, 255, 0.6)' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}