import './App.css'
import Divbar from './components/Divbar'
import Navbar from './components/Navbar'
import Stylebar from './components/Stylebar'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <div className="main">
     <Divbar/>
     <Navbar/>
     <Stylebar/>
     <Card/>
     <Footer/>
    </div>
  )
}

export default App
