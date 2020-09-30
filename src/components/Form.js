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
    this.handleDb = this.handleDb.bind(this);
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

  handleDb() {
    db.ref('todo2').update({
      name: 'tung2',
      todo: 'shopping2'
    })
  }

  showDb() {
    db.ref('todo2').on('value', snapshot => {
      console.log(snapshot.child('name').val())
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
        <button onClick={this.handleDb}>checkdb</button>
        <button onClick={this.showDb}>showdb</button>
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