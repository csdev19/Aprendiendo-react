import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    // Siempre que hagamos una funcion que quiere acceder el state o a una metodo de la clase haremos esto
    this.aumentarContador = this.aumentarContador.bind(this);
  }

  // Nosotros nunca vamos a cambiar el STATE directamente
  // Para esto vamos a usar un metodo llamado "setState"
  aumentarContador() {
    console.log('se aumentara en 1')
    // Hay un problema con esto si es que no declaramos la funcion en el constructor
    // De esta forma funcionaria
    // this.setState({ counter: 1})

    // Pero hay una manera mas eficiente de hacer que esto funcione
    // Cuando mandamos una funcion podemos acceder a estado anterior y retornar el cambio
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })

    // Algo importante de usar el set state es que si tenemos un componente hijo que tiene como propiedad 
    // nuestro STATE este se actulaizara junto con nuestro state
  }

  render() {
    return (
      <div>
        <span>{ this.state.counter }</span>
        <button onClick={ this.aumentarContador }>Aumentar!</button>
        <ChildComponent counter={this.state.counter} />
      </div>
    )
  }
}

function handleClick() {
  console.log('hola')
}

// Aqui una lista con los eventos soportados por react
// https://reactjs.org/docs/events.html#supported-events

