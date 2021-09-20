import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => {
            this.props.handelChangeProp(this.props.todo.id);
          }}
        />
        {this.props.todo.title}
        <button
          onClick={() => {
            this.props.deleteTodoProp(this.props.todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
