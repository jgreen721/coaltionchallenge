import { useState } from 'react'
import { Header,Navbar,MainSectionHeader,ContactUs,ReachUs,SectionTitle,AnimatedOverlay } from './components'
import './App.css'

function App() {

  return (
    <div className="app">
      <AnimatedOverlay/>
      <Navbar/>
      <Header/>
      <div className="main-content">
          <MainSectionHeader/>
          <section className="main-content-section">
            <section className="content-column">
              <SectionTitle title="Contact Us"/>
              <ContactUs/>
            </section>
            <section className="content-column">
              <SectionTitle title="Reach Us"/>
              <ReachUs/>
            </section>
          </section>
      </div>
      <footer>
        <a className="footer-link" href="https://jgreen721dev.com">JGDev721</a>
      </footer>
    </div>
  )
}

export default App
