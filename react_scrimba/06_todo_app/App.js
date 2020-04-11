import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const newState = prevState.todos.map(todo => {
          if (todo.id === id) {
            console.log('todo.completed', todo.completed)
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return {
              ...todo
            }
          }
      });

      return {
        todos: newState
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => {
      return <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
              />
    })

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }

}

export default App;
