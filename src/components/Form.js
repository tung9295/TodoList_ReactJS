import React, {Component} from 'react';
import { db } from './Firebase';

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

  componentDidMount() {
      db.ref('todoList').on('value', snapshot => {
        var todoList = snapshot.val();
        if (todoList !== null) {
          var keys = Object.keys(todoList);
          var listTodo = []
          for ( let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var todo = todoList[key].todo;
            listTodo.push({
              key: key,
              value: todo
            });
          }
          this.setState({
            listTodo: listTodo
          })
        } else {
          this.setState({
            listTodo: []
          })
        }

      })
      console.log(this.state.listTodo)
  }

  componentWillUnmount() {
    this.setState({value: ''})
  }

  handleChange(event) {
    this.setState({
      value : event.target.value
    })
  }

  handleSubmit(event) {
    db.ref('todoList').push({
      todo: this.state.value
    })
    this.setState({value: ''})
  }

  handleDelete(index) {
    db.ref('todoList/' + index).remove();
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
          {this.state.listTodo.map(item => (
            <li key={item.key}>
              {item.value}
              <button onClick={() => this.handleDelete(item.key)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;