import React from 'react';
import styles from './TodoItem.module.css';
class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => {
            this.props.handelChangeProp(id);
          }}
        />
        <span style={completed ? this.completedStyle : null}>{title}</span>
        <button
          onClick={() => {
            this.props.deleteTodoProp(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
