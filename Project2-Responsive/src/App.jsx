import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
     <div className='lg:mx-20 md:mx-10 mx-5'>
     <HeroSection/>
     <FeatureSection/>
     <Workflow/>
     <Pricing/>
     <Testimonials/>
     <Footer/>
     </div>
    </div>
  )
}

export default App
