//src/components/sections/ModernMenu.tsx
'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Star, Clock, Flame, Heart, ShoppingCart } from 'lucide-react'
import Image from "next/image"

export default function ModernMenu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('favoritos')
  const [cart, setCart] = useState<number[]>([])

  const categories = [
    { id: 'favoritos', name: 'Favoritos', icon: Heart, color: 'frisby-red' },
    { id: 'combos', name: 'Combos', icon: Star, color: 'frisby-warm' },
    { id: 'pollo', name: 'Pollo', icon: Flame, color: 'frisby-earth' },
    { id: 'bebidas', name: 'Bebidas', icon: Clock, color: 'frisby-nature' },
  ]

  const menuItems = {
    favoritos: [
      {
        id: 1,
        name: "Combo Familiar Frisby Arepas",
        description: "12 presas apanadas + 12 arepas",
        price: 80700,
        image: "/menu/familiar.webp",
        popular: true,
        time: "15 min",
        rating: 4.8
      },
      {
        id: 2,
        name: "Frisburrito",
        description: "Frisburrito ranch o bbq",
        price: 15200,
        image: "/menu/frisburrito.webp",
        popular: true,
        time: "10 min",
        rating: 4.7
      },
      {
        id: 3,
        name: "Fristodonte",
        description: "Filete de pechuga apanada + ensalada",
        price: 22100,
        image: "/menu/fristodonte.webp",
        popular: false,
        time: "12 min",
        rating: 4.6
      }
    ],
    combos: [
      {
        id: 4,
        name: "Combo Frisby Clásico",
        description: "2 presas apanadas + ensalada de repollo personal + bebida",
        price: 22900,
        image: "/menu/comboclasico.webp",
        popular: true,
        time: "15 min",
        rating: 4.5
      },
      {
        id: 5,
        name: "Comparti2",
        description: "2 presas apanadas + 4 picanugys + 3 tornados de pollo + 2 bebidas",
        price: 48500,
        image: "/menu/comparti2.webp",
        popular: false,
        time: "12 min",
        rating: 4.4
      }
    ],
    pollo: [
      {
        id: 6,
        name: "Cuarto Frisby Arepas",
        description: "2 arepas + 3 arepas",
        price: 18500,
        image: "/menu/cuarto.webp",
        popular: true,
        time: "20 min",
        rating: 4.9
      }
    ],
    bebidas: [
      {
        id: 7,
        name: "Limonada Natural",
        description: "Refrescante limonada hecha al momento",
        price: 8900,
        image: "/menu/limonada.webp",
        popular: false,
        time: "5 min",
        rating: 4.3
      }
    ]
  }

  const addToCart = (itemId: number) => {
    setCart([...cart, itemId])
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-frisby-warm-50">
      <div className="container mx-auto px-6">
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
              Nuestro 
              <span className="bg-gradient-to-r from-frisby-red-500 to-frisby-warm-500 bg-clip-text text-transparent"> menú</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Cada platillo cuenta una historia de sabor, tradición y amor por la cocina colombiana. 
              Descubre por qué somos el sabor preferido de las familias.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon
              const isActive = activeCategory === category.id
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-frisby-red-500 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-frisby-red-50 hover:text-frisby-red-500 shadow-lg'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <IconComponent className={`w-6 h-6 mr-3 ${
                    isActive ? 'text-white' : 'text-frisby-red-500'
                  }`} />
                  {category.name}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Menu Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                custom={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Popular Badge */}
                {item.popular && (
                  <motion.div
                    className="absolute top-4 left-4 z-10 bg-frisby-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  >
                    ⭐ Popular
                  </motion.div>
                )}

                {/* Food Image */}
                <div className="relative h-48 bg-gradient-to-br from-frisby-warm-100 to-frisby-red-100 flex items-center justify-center overflow-hidden">
                  {typeof item.image === "string" && item.image.startsWith("/menu/") ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 3}
                    />
                  ) : (
                    <motion.div
                      className="text-8xl filter drop-shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.image}
                    </motion.div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-frisby-red-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Time */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-frisby-warm-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {item.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 ml-1">
                        {item.time}
                      </span>
                    </div>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-frisby-red-600">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <motion.button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center px-6 py-3 bg-frisby-red-500 text-white font-bold rounded-xl hover:bg-frisby-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Agregar
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-frisby-red-500 to-frisby-warm-500 text-white font-bold text-lg rounded-2xl shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6 mr-3" />
              Ver menú completo
              {cart.length > 0 && (
                <motion.span
                  className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {cart.length} items
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}