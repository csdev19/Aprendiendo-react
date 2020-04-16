import React, {Component} from "react"
import FormComponent from "./FormComponent"

// Usaremos esto como el componente "Smart"
// Aqui un poco de documentacion al respoecto de porque se delegan estas labores
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// 
class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        // Usa el FormComponent como vista pura sin logica para simplificar la logica del componente
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form
