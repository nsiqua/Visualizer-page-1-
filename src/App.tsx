import Header from './components/Header'
import ProductSection from './components/ProductSection'
import InfoCards from './components/InfoCards'
import Highlights from './components/Highlights'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import OccasionSection from './components/OccasionSection'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductSection />
        <InfoCards />
        <Highlights />
        <HowItWorks />
        <Reviews />
        <OccasionSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
