import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header Section/Header'
import Hero from './components/Hero Section/Hero'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contacts from './components/Contacts/contacts'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
      </div>
  )
}

export default App
