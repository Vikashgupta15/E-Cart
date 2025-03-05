import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Banner from './components/Banner'
import ProductModel from './components/ProductModel'
import ProductA from './components/ProductA'
import Laptop from './pages/Laptop'
import Home from './home/Home'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Signup from './components/Signup'
import About from './pages/About'
import Components from './pages/Components'
import { Toaster } from 'react-hot-toast'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)
  const [Mvalue,setMvalue]= useState("false");
  const User = localStorage.getItem("Users");
  console.log(User);

  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white'>
      {useLocation().pathname !== '/signup' && <Navbar value={Mvalue} setvalue={setMvalue} />}
      <Routes>
        <Route path='/' element={<Home value={Mvalue}/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/components' element={<Components value={Mvalue}/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/signin' element={<Login/>}/> */}
        <Route path='/signup' element={User=="false"?<Signup/>:<Navigate to="/"/>}/>
      </Routes>
      <Toaster/>
      {useLocation().pathname !== '/signup' && <Footer />}
      </div>

    </>
  )
}

export default App
