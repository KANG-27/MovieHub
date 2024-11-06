// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Carrousel from './components/Carrousel'
import CategorySelector from './components/CategorySelector'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Carrousel/>
    <CategorySelector/>
    </>
  )
}

export default App
