import React from 'react'


// Ahora vamos a hablar del state
// El state es la informacion del componente que puede cambiar
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
