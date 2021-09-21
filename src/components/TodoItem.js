import React from 'react';
import styles from './TodoItem.module.css';
class TodoItem extends React.Component {
  state = {
    edit: false,
  };
  handelEditing = () => {
    this.setState({
      edit: true,
    });
  };

  endEdit = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        edit: false,
      });
    }
  };

  render() {
    let editMode = {};
    let viewMode = {};
    if (this.state.edit === true) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { id, title, completed } = this.props.todo;
    return (
      <li className={styles.item}>
        <div
          style={viewMode}
          onDoubleClick={() => {
            this.handelEditing();
          }}
        >
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => {
              this.props.handelChangeProp(id);
            }}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
          <button
            onClick={() => {
              this.props.deleteTodoProp(id);
            }}
          >
            Delete
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.editTodoProp(id, e.target.value);
          }}
          onKeyDown={this.endEdit}
        />
      </li>
    );
  }
}

export default TodoItem;
