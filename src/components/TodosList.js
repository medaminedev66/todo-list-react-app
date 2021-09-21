import React from 'react';
import TodoItem from './TodoItem';
import './TodoItem.module.css';
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handelChangeProp={this.props.handelChangeProp}
            deleteTodoProp={this.props.deleteTodoProp}
            editTodoProp={this.props.editTodoProp}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
