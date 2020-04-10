import React from 'react'

function Item(props) {

  // Mediantes los props podemos enviarle informacion de nuestros componentes
  return (
    <div>
      <h1>
        { props.metadata.titulo }
      </h1>
      <p>{ props.metadata.parrafo }</p>

    </div>
  )
}

export default App;
