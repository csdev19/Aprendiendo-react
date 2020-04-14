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

  render() {
    return (
      <div>
        El codigo empieza aqui
      </div>
    )
  }
}

export default App;

