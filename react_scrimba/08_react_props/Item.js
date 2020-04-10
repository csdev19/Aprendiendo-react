import React from 'react'

// En este caso los props son enviados como primer parametro de nuestra funcion
// Asi que primero debemos declararlos para poder usarlos
function Item(props) {

  // Mediantes los props podemos enviarle informacion de nuestros componentes
  return (
    <div>
      <h1>
        { props.titulo }
      </h1>
      <p>{ props.parrafo }</p>
      <div>
        { props.metadata.id }
      </div>

    </div>
  )
}

export default App;
