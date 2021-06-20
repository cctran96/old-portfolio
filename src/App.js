import './App.css'
import React, {useState, useEffect, useRef} from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
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

  const bioRef = useRef()
  const toBio = () => bioRef.current.scrollIntoView({behavior: "smooth"})
  const projectRef = useRef()
  const toProject = () => projectRef.current.scrollIntoView({behavior: "smooth"})
  const contactRef = useRef()
  const toContact = () => contactRef.current.scrollIntoView({behavior: "smooth"})

  return isLoading ? <Logo /> : ( 
    <div className="website">
      <Header toBio={toBio} toProject={toProject} toContact={toContact}/>
      <Left toBio={toBio} toProject={toProject} toContact={toContact}/>
      <div className="content-container">
        <Banner />
        <Bio ref={bioRef}/>
        <Projects ref={projectRef}/>
        <Contact ref={contactRef}/>
      </div>
      <Right />
    </div>
  )
}

export default App;