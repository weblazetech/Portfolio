import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection'
import { BusinessSystemsSection } from '../components/sections/BusinessSystemsSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { CtaSection } from '../components/sections/CtaSection'

export const WorkPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <BusinessSystemsSection />
        <ProcessSection />
        <ApproachSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
