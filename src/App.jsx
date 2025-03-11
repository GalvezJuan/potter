import { useState } from 'react'
import './App.css'
import { Search } from './Cmponents/Search'
import { Peticion } from './Cmponents/Peticion'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <>
    <h1>Mundo Mágico</h1>
  <Search setNombre={setNombre}/>
  <Peticion nombre={nombre}/>
    </>
  )
}

export default App
