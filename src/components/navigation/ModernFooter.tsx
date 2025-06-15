//src/components/navigation/ModernFooter.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, Heart, Star } from 'lucide-react'
import Image from "next/image"

export default function ModernFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Frisby",
      links: [
        { name: "Nuestra historia", href: "#story" },
        { name: "Menú", href: "#menu" },
        { name: "Restaurantes", href: "#locations" },
        { name: "Frisby Kids", href: "#kids" },
        { name: "Trabaja con nosotros", href: "#careers" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { name: "Pide en línea", href: "#order" },
        { name: "Domicilio", href: "#delivery" },
        { name: "Para llevar", href: "#takeaway" },
        { name: "Eventos", href: "#events" },
        { name: "Catering", href: "#catering" }
      ]
    },
    {
      title: "Ayuda",
      links: [
        { name: "Preguntas frecuentes", href: "#faq" },
        { name: "Contacto", href: "#contact" },
        { name: "Políticas", href: "#policies" },
        { name: "Términos y condiciones", href: "#terms" },
        { name: "Califica tu experiencia", href: "#feedback" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" }
  ]

  const contactInfo = [
    { icon: Phone, text: "018000-FRISBY (374729)", href: "tel:018000374729" },
    { icon: Mail, text: "contacto@frisby.com.co", href: "mailto:contacto@frisby.com.co" },
    { icon: MapPin, text: "Pereira, Risaralda, Colombia", href: "#" },
    { icon: Clock, text: "Lun - Dom: 6:00 AM - 11:00 PM", href: "#" }
  ]

  return (
    <footer className="bg-gradient-to-br from-[#2d2300] via-gray-800 to-frisby-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px'] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Image
                  src="/logo-frisby.svg"
                  alt="Frisby Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Desde 1977, somos más que pollo. Somos familia, tradición y el sabor 
                que une a Colombia. 270+ restaurantes, 3 generaciones, un solo corazón.
              </p>

              {/* Awards */}
              <div className="flex items-center space-x-4">
                <motion.div
                  className="flex items-center px-3 py-2 bg-frisby-warm-500/20 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className="w-4 h-4 text-frisby-warm-300 mr-2" />
                  <span className="text-sm text-frisby-warm-300 font-medium">
                    #1 en Colombia
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6 relative">
                  {section.title}
                  <motion.div
                    className="absolute -bottom-2 left-0 w-8 h-1 bg-frisby-red-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-frisby-warm-300 transition-colors duration-300 flex items-center group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * linkIndex, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="w-1 h-1 bg-frisby-red-500 rounded-full mr-3 group-hover:w-2 transition-all duration-300"
                        />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info & Social */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Contáctanos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        className="flex items-center text-gray-300 hover:text-frisby-warm-300 transition-colors duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-2 bg-frisby-red-500/20 rounded-lg mr-3 group-hover:bg-frisby-red-500/30 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{contact.text}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center lg:text-right">
                <h4 className="text-lg font-bold text-white mb-6">Síguenos</h4>
                <div className="flex justify-center lg:justify-end space-x-4 mb-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`p-3 bg-gray-700 rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3, type: 'spring' }}
                        viewport={{ once: true }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
                <p className="text-gray-400 text-sm">
                  Únete a nuestra comunidad de más de 1M de seguidores
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 bg-gray-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span>© {currentYear} Frisby S.A. BIC. Todos los derechos reservados.</span>
                <Heart className="w-4 h-4 text-frisby-red-500 mx-2" />
                <span>Hecho con amor en Colombia</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-6 text-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-400 hover:text-frisby-warm-300 transition-colors">
                  Política de privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-frisby-warm-300 transition-colors">
                  Términos de uso
                </a>
                <a href="#" className="text-gray-400 hover:text-frisby-warm-300 transition-colors">
                  Cookies
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}