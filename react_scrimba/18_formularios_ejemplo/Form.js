import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit() {
        console.log('submit')
    }
    
    handleChange(event) {
        const { name, value, type, checked } = event.target
        console.log('name, value, type, checked', name, value, type, checked) 
        if (type == "checkbox") {
            this.setState({
                [name]: checked
            })              
        } else {
            this.setState({
                [name]: value
            })        
        }
        console.log('this', this.state)
    }
    
    render() {
        return (
            <main>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={ this.handleChange } 
                    /><br />
                    <input 
                        value={this.state.lastName}
                        name="lastName"
                        onChange={ this.handleChange }
                        placeholder="Last Name" /><br />
                    <input
                        value={this.state.age}
                        name="age"
                        onChange={ this.handleChange }
                        placeholder="Age" 
                    /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    {/* Create select box for location here */}
                    <br />
                    

                    <label>
                        <input
                            type="checkbox"
                            name="location"
                            checked={this.state.location}
                            onChange={this.handleChange}
                        /> Location?
                    </label>
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />

                    
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: { this.state.firstName }</p>
                <p>Your age: { this.state.lastName }</p>
                <p>Your gender: { this.state.gender }</p>
                <p>Your destination: { this.state.location ? 'yes' : 'no' }</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
