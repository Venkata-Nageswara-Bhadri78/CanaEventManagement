import Navbar          from './components/Navbar'
import HeroSection     from './components/Herosection'
import AboutSection    from './components/AboutSection'
import StatsSection    from './components/StatsSection'
import WorkflowSection from './components/WorkflowSection'
import ClientsSection  from './components/ClientsSection'
import ContactSection  from './components/ContactSection'
import Footer          from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WorkflowSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App