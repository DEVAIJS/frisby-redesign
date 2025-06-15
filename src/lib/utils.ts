//src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { type Variants } from "framer-motion"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilidades para animaciones
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

// Utilidades para el storytelling
export const frisbyTimeline = [
  {
    year: 1972,
    event: "Fundación de Frisby",
    description: "Nace con el sueño de crear el mejor pollo de Colombia"
  },
  {
    year: 1990,
    event: "Época de expansión",
    description: "Crecimiento a múltiples ciudades colombianas"
  },
  {
    year: 1997,
    event: "La gran crisis",
    description: "Casi quiebra, solo quedaban 10 restaurantes"
  },
  {
    year: 1997,
    event: "El renacimiento",
    description: "Descubren que no venden pollo, sino momentos familiares"
  },
  {
    year: 2025,
    event: "Hoy",
    description: "Más de 200 restaurantes y 3 generaciones de familias fieles"
  }
]

// Datos de generaciones
export const generationsData = {
  boomers: {
    title: "Los Fundadores",
    period: "1970s - 1990s",
    description: "Quienes vieron nacer a Frisby y lo convirtieron en tradición familiar",
    color: "frisby-warm"
  },
  genX: {
    title: "Los Testigos",
    period: "1980s - 2000s", 
    description: "Vivieron la crisis y el renacimiento, fieles durante las buenas y las malas",
    color: "frisby-red"
  },
  millennials: {
    title: "Los Herederos",
    period: "1990s - 2010s",
    description: "Crecieron con Frisby y ahora traen a sus propios hijos",
    color: "frisby-nature"
  },
  genZ: {
    title: "Los Nativos",
    period: "2000s - Hoy",
    description: "Para ellos Frisby siempre ha estado ahí, es parte de su identidad",
    color: "frisby-earth"
  }
}

// Utilidad para formatear años de experiencia
export function calculateYearsWithFrisby(startYear: number): string {
  const currentYear = new Date().getFullYear()
  const years = currentYear - startYear
  
  if (years === 1) return "1 año"
  if (years < 1) return "Menos de un año"
  return `${years} años`
}

// Utilidad para generar colores aleatorios de la paleta Frisby
export function getRandomFrisbyColor(): string {
  const colors = [
    'frisby-red-500',
    'frisby-warm-500', 
    'frisby-earth-500',
    'frisby-nature-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Utilidad para detectar dispositivo móvil
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Utilidad para scroll suave
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}