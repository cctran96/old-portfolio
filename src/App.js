import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import About from './components/About';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Banner from './components/Banner'
import Logo from './icons/Logo'
import Left from './sidebars/Left'
import Right from './sidebars/Right'

function App() {
  const [isLoading, setLoading] = useState(true)

  const fakeRequest = () => new Promise(resolve => setTimeout(() => resolve(), 3500))

  useEffect(() => {
      fakeRequest().then(() => setLoading(!isLoading))
    }, [])

  return isLoading ? <Logo /> : ( 
    <div className="website">
      <Header />
      <Left />
      <div className="content-container">
        <Banner />
        <About />
        <Bio />
        <Projects />
        <Contact />
      </div>
      <Right />
    </div>
  )
}

export default App;