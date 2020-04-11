import React from "react"

class TodoItem extends React.Component {

  constructor() {
    super()
    this.state = {}
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChangeCheck() {
    console.log('props', this.props)
    this.props.handleChange(this.props.item.id)
    console.log('ejecuto')
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={ this.props.item.completed }
          onChange={ this.handleChangeCheck }
        />
        <p>{this.props.item.text}</p>
      </div>
    )
  }
}

export default TodoItem
