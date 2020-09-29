import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listTodo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value : event.target.value
    })
  }

  handleSubmit(event) {
    this.setState(state => {
      const listTodo = state.listTodo.concat(state.value);
      return {
        value: '',
        listTodo
      }
    })
  }

  handleDelete(index) {
    this.setState(state => {
      const listTodo = state.listTodo.filter((item, key) => key !== index );
      return {
        value: '',
        listTodo
      }
    })
  }

  render () {
    return (
      <div>
        <form>
          <input type="text" name="todoInput" 
            onChange={this.handleChange} value={this.state.value} />
          <button type="button" name="submitBtn" 
            onClick={this.handleSubmit}>Submit</button>
        </form>
        <ul>
          {this.state.listTodo.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;