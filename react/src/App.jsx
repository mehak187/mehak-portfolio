import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Services from './components/Services'
import Work from './components/Work'
import Why from './components/Why'
import Process from './components/Process'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BgFx from './components/BgFx'
import { initEffects } from './effects'

export default function App() {
  // Cards are rendered before the listeners are attached, so this runs after mount.
  useEffect(() => initEffects(), [])

  return (
    <>
      <div className="progress" />
      <BgFx />
      <Nav />
      <Hero />
      <TechStrip />
      <Services />
      <Work />
      <Why />
      <Process />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
