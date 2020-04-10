import React from "react";

// Para manejar eventos debemos usar las mismas palabras reservadas de html pero en su version JS
// Por ejemplo el evento se llamaba onmouseover pero en JSX es onMouseOver respetando el tipo de sintaxis
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
        <button onMouseOver="myFunction()">Click me</button>

      </div>
    )
  }
}