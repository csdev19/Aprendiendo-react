import React from 'react'

import CheckBox from './components/CheckBox'

// Basados en funciones
// function App() {
//     return (\
//         <div className="app">
//             <CheckBox />
//             <CheckBox />
//             <CheckBox />
//         </div>
//     )
// }

// Basado en clases
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    )
  }
}


export default App;
