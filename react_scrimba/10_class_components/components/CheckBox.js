import React from 'react'

// Antiguo componente basado en una funcion
// function CheckBox() {
//     return (
//         <div className="todo-item">
//             <input type="checkbox" id="checkbox1" />
//             <label> I have a bike</label>
//         </div>
//     )
// }


// Ahora vamos a generar un componente con una clase
class CheckBox extends React.Component {
    render() {
            return (
                <div className="todo-item">
                <input type="checkbox" id="checkbox1" />
                <label> I have a bike</label>
            </div>
        )
    }
}


export default CheckBox;
