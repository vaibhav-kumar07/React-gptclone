
import './App.css'
import AboutSectionpre from './components/About/AboutSectionpre'
import Companylist from './components/Companylist'

import Header from './components/Header'
import Navbar from './components/Navbar'
import AllSection from './components/Sections/Allsection'
import FooterSection from './components/Fotter/FooterSection'

function App() {
 

  return (
    <>
    <Navbar/>
    <Header/>
    <Companylist/>
    <AboutSectionpre/>
    <AllSection/>
    <FooterSection/>
    </>
    
  )
}

export default App
