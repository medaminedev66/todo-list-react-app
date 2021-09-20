import React from 'react';
import TodoItem from './TodoItem';

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
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
