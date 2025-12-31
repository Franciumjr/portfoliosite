
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Navbar from './components/Navbar.jsx';

import Feature from './components/Feature.jsx';
import Experience from "./components/Experience.jsx"
import Techstack from './components/Techstack.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Showcase></Showcase>
      <Feature></Feature>
      <Experience></Experience>
      <Techstack></Techstack>
      <Contact></Contact>
      <Footer></Footer>
    </> 
  )
}

export default App;
