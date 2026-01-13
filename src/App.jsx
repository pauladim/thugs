import './App.css'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import DrugFree20 from './component/DrugFree20.jsx'
import Project from './component/Project.jsx'
import Footer from './component/Footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/DrugFree20' element={<DrugFree20 />} />
          <Route path='/Project' element={<Project />} />
        </Routes>
        <Footer />
      </div>
   
    </>
  )
}

export default App