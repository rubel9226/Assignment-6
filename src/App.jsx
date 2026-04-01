import { useState } from 'react'
import './App.css'
import CardContainer from './Components/Body/Card/CardContainer'
import Hero from './Components/Body/Hero/Hero'
import Status from './Components/Body/Hero/Status'
import Navbar from './Components/Navbar/Navbar'

import { ToastContainer } from 'react-toastify';
import Started from './Components/Body/Started/Started'
import PremiumCard from './Components/Body/premiumCard/PremiumCard'
import WorkFlow from './Components/Body/Started/workFlow'



const fetchCardData = fetch('card.json').then(res => res.json())


function App() {
  const [selectCard, setSelectedCard] = useState([])

  return (
    <>
      <Navbar selectCard={selectCard}/>
      <Hero /> 
      <Status /> 
      <CardContainer fetchCardData={fetchCardData} setSelectedCard={setSelectedCard} selectCard={selectCard} /> 
      <Started></Started>
      <PremiumCard  />
      <WorkFlow></WorkFlow>


      <ToastContainer />
    </>    
  )
}

export default App
