import About from "./About"
import Contactus from "./Contactus"
import Experience from "./Experience"
import Footer from "./Footer"
import Herosection from "./Herosection"
import Navbar from "./Navbar"
import Portfolio from "./Portfolio"


const Home = () => {
  return (
    <div >
    <Navbar/>
      <Herosection/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contactus/>
       <Footer/> 
    </div>
  )
}

export default Home
