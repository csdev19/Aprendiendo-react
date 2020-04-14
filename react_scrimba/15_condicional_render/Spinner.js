import React from 'react';


// Podemos retornar JSX podemos usar operadores ternarios o estructuras condicionales
function Spinner(props) {
  if (props.showText) {
    return (
      <div>
        Hola por ahora solo mostrare el texto
      </div>
    )
  }
  return (
    <div>
      <h1>Header</h1>
      <div>
        { props.showSpinner ? <h1>Estoy mostrando el spinner</h1> : <h1>Ya no muestro el spinner</h1> }
      </div>
      <h1>Footer</h1>
    </div>
  )
}
