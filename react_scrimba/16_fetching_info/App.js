import React from "react";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedata: {}
    }
  }

  // Para llamar a informacion de un servidor podemos usar fetch
  componentDidMount() {
    url = "https://pokeapi.co/api/v2/pokemon/ditto/"
    fetch(`${url}`)
      .then(res => res.json()) // Esta linea nos parsea la informacion para tener el json que queremos
      .then(data => {
        // Aqui ya tendria a la informacion
        this.setState({
          pokedata: data
        })
      })
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

