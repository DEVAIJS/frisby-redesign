//src/components/sections/navigation/ModernNavbar.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, Clock, ShoppingBag, User, Search } from 'lucide-react'
import Image from "next/image"

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  )

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: 'Pide en línea', href: '#order', highlight: true },
    { name: 'Menú', href: '#menu' },
    { name: 'Restaurantes', href: '#locations' },
    { name: 'Nuestra Historia', href: '#story' },
    { name: 'Frisby Kids', href: '#kids' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo y Brand */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
            >
              <Image
                src="/logo-frisby.svg"
                alt="Frisby Logo"
                width={140}
                height={48}
                priority
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  item.highlight
                    ? isScrolled
                      ? 'bg-frisby-primary-500 text-white shadow-lg hover:bg-frisby-primary-600 hover:shadow-xl' // Amarillo cuando hay scroll
                      : 'bg-frisby-red-500 text-white shadow-lg hover:bg-frisby-red-600 hover:shadow-xl' // Rojo cuando fondo es transparente
                    : isScrolled
                    ? 'text-gray-700 hover:text-frisby-primary-500'
                    : 'text-white hover:text-frisby-primary-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: item.highlight ? 1.05 : 1.02,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {!item.highlight && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-frisby-red-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-frisby-red-500 hover:bg-frisby-red-50' 
                  : 'text-white hover:text-frisby-warm-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className={`p-2 rounded-full transition-all duration-300 relative ${
                isScrolled 
                  ? 'text-gray-600 hover:text-frisby-red-500 hover:bg-frisby-red-50' 
                  : 'text-white hover:text-frisby-warm-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag className="w-5 h-5" />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-frisby-red-500 text-white text-xs rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2
              </motion.div>
            </motion.button>

            <motion.button
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-frisby-red-500 hover:bg-frisby-red-50' 
                  : 'text-white hover:text-frisby-warm-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Quick Info */}
            <div className={`hidden xl:flex items-center space-x-4 ml-4 pl-4 border-l transition-colors duration-300 ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 transition-colors duration-300 ${
                  isScrolled ? 'text-frisby-red-500' : 'text-frisby-warm-300'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>
                  018000-FRISBY
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-600 hover:text-frisby-red-500' 
                : 'text-white hover:text-frisby-warm-300'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-xl">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block px-6 py-3 rounded-xl mx-2 font-semibold transition-all duration-300 ${
                  item.highlight
                    ? 'bg-frisby-red-500 text-white'
                    : 'text-gray-700 hover:bg-frisby-red-50 hover:text-frisby-red-500'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            
            <div className="px-6 py-4 border-t border-gray-200 mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-frisby-red-500" />
                  <span>018000-FRISBY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-frisby-red-500" />
                  <span>6AM - 11PM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}