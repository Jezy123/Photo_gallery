import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Buscador from './components/Buscador.jsx'
import Imagen  from './components/Imagen.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [image ,setImage]= useState()

  const handleAddClick = async () =>{
    const response = await fetch(`https://picsum.photos/200/300?random=${content}`)
    setImage(response.url)
  }

  return (
    <>
       
    <div className="escribirTarjeta">
        <h3>Escribir tarjeta</h3>
        <input type="text" id="title" onChange={(e) => setContent(e.target.value)} value={content}></input>
        <button onClick={handleAddClick}>Buscar</button>
    </div>

    <div className="imagenContanainer">
      {image && <img src={image} alt="Search result" />}
    </div>

      
    </>
  )
}

export default App
