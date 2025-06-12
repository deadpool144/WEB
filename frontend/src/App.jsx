import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,Link,NavLink } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Product from './pages/product.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
          <Routes>

        <Route
        path='/' element={<Home/>}
        />
         <Route
        path='/explore' element={<Explore/>}
        />
        <Route
        path='/aboutus' element={<AboutUs/>}
        />
         <Route
        path='/contact' element={<Contact/>}
        />
        <Route
        path='/login' element={<Login/>}
        />
         <Route
        path='/signup' element={<SignUp/>}
        />
        <Route
        path='/products' element={<Product/>}
        />

      </Routes>
    </>
  )
}

export default App
