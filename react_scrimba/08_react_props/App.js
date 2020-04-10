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

// Es importante recalcar que los PROPS son inmutables osea no pueden cambiar

// Los PROPS son la unica forma de pasar informacion de un componente a otro
export default App;

