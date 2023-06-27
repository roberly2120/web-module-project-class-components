import React from 'react';
import Todo from './Todo';
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';
// store all data here in App
// create handler functions in App


export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (taskName) => {
    //1. setState
    //2. change todos
    //3. make a copy of todos
    //4. add new todo to the end of new todo list

    const newTodo = {
      name: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    })
  }
  handleClear = () => {
    //1. set state
    //2. loop through all todos
    //3. remove all todos that do have completed === true
    //4. save filtered todos to state
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }
  handleToggle = (id) => {
    //1. setState
    //2. change todos
    //3. find the todo we clicked on using id
    //4. change value of completed for that todo
    //5. keep all other todos the same
    const clickedId = 1528817084358

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
