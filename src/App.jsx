import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Collisions from './components/Collisions'
import CollisionEpisode from './components/CollisionEpisode'
import WeAreValorant from './components/WeAreValorant'
import YourAgents from './components/YourAgents'
import YourMaps from './components/YourMaps'
import Footer from './components/footer'

function App() {
    return (
      <>
        <Navbar />
        <HomePage />
        <Collisions />
        <CollisionEpisode/>
         <WeAreValorant />
        <YourAgents />
        <YourMaps/>
        <Footer/>

      </>
    );
  }
  
export default App
