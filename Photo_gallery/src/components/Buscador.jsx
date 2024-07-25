import React, { useState } from 'react';

function Buscador() {
    const [content, setContent] = useState('');

    const handleAddClick = () => {
        
    }

  return (
    <div className="escribirTarjeta">
        <h3>Escribir tarjeta</h3>
        <input type="text" id="title" onChange={(e) => setContent(e.target.value)} value={content}></input>
        <button onClick={handleAddClick}>Buscar</button>
    </div>

  );
}

export default Buscador;