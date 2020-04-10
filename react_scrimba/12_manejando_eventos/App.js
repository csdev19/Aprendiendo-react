import React from "react";

// Para manejar eventos debemos usar las mismas palabras reservadas de html pero en su version JS
// Por ejemplo el evento se llamaba onmouseover pero en JSX es onMouseOver respetando el tipo de sintaxis
// Otro ejemplo seria el onclick que pasa a ser onClick
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        {/* <button onClick={ () => console.log('salto al clickear') }>Click me</button> */}
        <button onClick={ handleClick }>Click me</button>
        {/* algo importante a tomar en cuenta es que las funciones solo son pasadas como variables no se ejecutaran */}
      </div>
    )
  }
}

function handleClick() {
  console.log('hola')
}

// Aqui una lista con los eventos soportados por react
// https://reactjs.org/docs/events.html#supported-events

