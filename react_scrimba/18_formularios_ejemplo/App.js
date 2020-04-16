import React from "react";


// Documentacion de React
// https://reactjs.org/docs/forms.html


// Paquete para formularios en React
// https://jaredpalmer.com/formik/

/**
 * Los formularios en React son especiales porque acostumbran a tener una continua actualizacion de su informacion
 * Esta informacion se guarda en el state de la siguiente manera segun su documentacion
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: ''
    }
    // Creamos un metodo que este ligado a los cambios del input
    this.handleNombre = this.handleNombre.bind(this)
  }


  // Este metodo recibira la informacion del input
  handleNombre(event) {
    const nombre = event.target.value;
    // Esta informacion sera guardada en el state
    this.setState({ nombre })
  }

  // render() {
  //   return (
  //     <div>
  //       <form>
  //         <input type="text" placeholder="First Name" onChange={ this.handleNombre } />
  //       </form>
  //       <div>
  //         { this.state.nombre }
  //       </div>
  //     </div>
  //   )
  // }

  
  /**
   * Esta implementacion funcionaria para un solo input o dos pero que pasaria si tuviera un formulario con
   * mas de 10 inputs o queremos ordenarlos pues usaremos lo siguiente
   */

  // Se manejaria con el siguiente handler
  handleInputEvents(event) {
    this.setState({
      [event.target.name]: event.target.value // Esto se puede por https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="nombre" placeholder="Nombre " onChange={ this.handleNombre } />
          {/* Tambien podemos agregar un listener de eventos de la sgte manera */}
          <input type="text" name="apellido" placeholder="Apellido" value={ this.state.apellido } />
          <input type="text" name="edad" placeholder="Edad" onChange={ this.handleNombre } />
        </form>
        <div>
          { this.state.nombre }
        </div>
      </div>
    )
  }
}

export default App;

