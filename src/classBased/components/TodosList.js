import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoItem.module.css';

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handelChangeProp={props.handelChangeProp}
          deleteTodoProp={props.deleteTodoProp}
          editTodoProp={props.editTodoProp}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  handelChangeProp: PropTypes.func.isRequired,
  deleteTodoProp: PropTypes.func.isRequired,
  editTodoProp: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
};

export default TodosList;
