import React from 'react'

// Usamos los hooks para no usar los templates basados en clases y tener una lectura del codigo mas simple

// Usualmente haciendo un hola mundo con clases podriamos hacer lo siguiente
class App {
  constructor() {
    this.state = {
      msj : 'hola mundo'
    }
  }

  render() {
    return (
      <div>
        El msj es el siguiente : { this.state.msj }
      </div>
    )
  }
}

// Y con hooks seria asi

function App() {
  // Me devuelve un array de dos valores 
  // 1. Lo que mandamos como parametro que seria el state
  // 2. Una funcion que nos retorna un pseudo setState como si fuera un class based
  const [msj, setState] = React.useState('hola mundo');

  changeHola() {
    setState(currentState => currentState + ' una letra')
  }

  return (
    <div>
      El msj es el siguiente : { msj }
      <button onClick={ changeHola }>Cambio de msj</button>
    </div>
  )
}

// Aqui pueden ver la diferencia