import React, { Component } from 'react';
import { db } from './Firebase';

class GetDataFromDb extends Component {
  showDb() {
    db.ref('todoList').on('value', snapshot => {
      const todoList = snapshot.val();
      const keys = Object.keys(todoList);
      for (let i  = 0; i < keys.length; i++) {
        var key = keys[i];
        var todo = todoList[key].todo
        console.log(todo)
      }
    });
  }
  render() {
    
    return (
      <div>
  
      </div>
    )
  }
  
}

export default GetDataFromDb;