import { useEffect, useState } from 'react'
import './App.css'
import ScrollToTopFab from './components/scroll-to-top/ScrollToTop'
import Router from './router/Router'
import Footer from './views/footer/Footer'
import Header from './views/header/Header'
import PhoneHeader from './views/header/PhoneHeader'

const getCurrentDimension = () => {
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}

export default function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isPhone, setIsPhone] = useState(screenSize.width < 768);

  useEffect(() => {
    const updateDimension = () => {
      const { width } = getCurrentDimension();
      setScreenSize(getCurrentDimension())
      setIsPhone(width < 768)
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className='app'>
      <ScrollToTopFab />
      {isPhone && <PhoneHeader />}
      {!isPhone && <Header />}
      <Router />
      <Footer />
    </div>
  )
}