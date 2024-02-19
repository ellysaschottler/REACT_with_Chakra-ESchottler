//import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavHeader';
import Footer from './components/Footer'

import './App.css'

function App() {

//todo: update classNames to Chakra UI styling
  return (
    <div className="">
      <Nav />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
