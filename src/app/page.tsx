//src/app/page.tsx
import ModernNavbar from '@/components/navigation/ModernNavbar'
import Hero from '@/components/sections/Hero'
import ModernMenu from '@/components/sections/ModernMenu'
import ExperienceSection from '@/components/sections/ExperienceSection'
import StorySection from '@/components/sections/StorySection'
import GenerationsSection from '@/components/sections/GenerationsSection'
import ModernFooter from '@/components/navigation/ModernFooter'

export default function Home() {
  return (
    <>
      <ModernNavbar />
      <main className="min-h-screen">
        <Hero />
        <ModernMenu />
        <ExperienceSection />
        <StorySection />
        <GenerationsSection />
      </main>
      <ModernFooter />
    </>
  )
}