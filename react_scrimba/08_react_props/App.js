import React from 'react'

function App() {

  // Mediantes los props podemos enviarle informacion de nuestros componentes
  // Ojo solo podemos enviar strings dentro de comillas si queremos enviar tipos de datos sin comillas
  // Usaremos estos simbolos {} para que sepa que es JSX
  return (
    <Item
      titulo="Hola buenos dias"
      parrafo="Este es un mensaje de buenos dias  por cristian"
      metadata={ { id: 2, title: "cristian" } }
    />
  )
}

export default App;
