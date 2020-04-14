import React from "react";


// Ciclos de vida en react
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  // Este ciclo de vida vendria a ser el mismo que el ngOnInit de angular
  componentDidMount() {
    // Es muy bueno para empezar a hacer peticiones HTTP
  }

  // Este ciclo de vida nos notificara cuando los props son cambiados
  // Desafortunadamente este deprecado asi que para usarlo tendriamos que usar UNSAFE
  UNSAFE_componentWillMount(nextProps) {

  }

  // Este ciclo nos preguntara si es que queremos volver a renderizar el componente
  // Debemos retornar siempre un valor booleano si queremos o no renderizalo de nuevo
  shouldComponentUpdate(nextProps, nextState) {

  }

  // Este ciclo nos serviria cono el ngOnDestroy de angular y nos serviria para desuscribir los observables
  componentWillUnmount() {

  }

  /**
   * NUEVOS METODOS DE REACT
   */



  static getDerivedStateFromProps(props, state) {
    // Retorna el nuevo estado actualizado basado en las propiedades
    // Y es probable que no lo usemos WTF ?
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // Es una backup del estado actual del componente
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // Este ciclo de vida seria como en ngOnChange
  // Pero nos traera como parametro las propiedades anteriores y el estado anterior
  componentDidUpdate(prevProp, prevState) {
    // podemos establecer logicas como si un estado cambio modificalo
    if (prevState.atributo !== this.state.atributo) {
      // Has el cambio
    }
  }

  render() {
    return (
      <div>
        El codigo empieza aqui
      </div>
    )
  }
}

export default App;

