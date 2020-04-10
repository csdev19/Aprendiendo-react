import React from 'react'

import itemsData from './itemData';

function App() {

  // Podemos hacer una iteracion sobre un componente de esta manera
  const itemsComponents = itemsData.map( item => {
    return (
      <Item
        metadata={ item }
      />
    )
  });

  // Y pasar la constante que creamos dentro del render y este lo reconoceria como la lista de componentes
  return (
    { itemsComponents }
  )
}

export default App;
