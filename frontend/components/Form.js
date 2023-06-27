import React from 'react'
// will hold input field
// add todo button
// clear completed button
// onsubmit for input field will change state
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ("")
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.newTask);
    this.setState ({
      ...this.state,
      newTask: ("")
    })
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value
    })
    console.log(e.target)
  }
  render() {
    return (
      <div>

        <form>
          <input onChange={this.handleChange} value={this.state.newTask}/>
          <button onClick={this.handleSubmit}>Add Task</button>
        </form>
      </div>
    )
  }
}
