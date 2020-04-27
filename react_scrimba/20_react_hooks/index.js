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
  const [state, changeMsj] = React.useState({msj:'hola mundo'});
  
  // Otra alternatica que podemos usar si no queremos juntar lo atributos es instanciar una segunda version 
  // O incluso las versiones que querramos para cada elemento que querramos cambiar
  const [count, setCount] = React.useState(0);

  changeCount() {
    setCount(currentCount => currentCount + 1)
  }

  changeMsj() {
    // A diferencia de un class based component con los hooks cuando tenemos un state que es un objeto
    // Ya no podremos cambiar un unico valor y que react actualice especificamente el valor que queremos
    setState(currentState => {
      return {
        ...currentState,
        count: currentState.count + 1
      }
    });
  }

  return (
    <div>
      El msj es el siguiente : { state.msj }
      Count: { count }
      <button onClick={ changeCount }>Cambio de msj</button>
    </div>
  )
}

// Aqui pueden ver la diferencia