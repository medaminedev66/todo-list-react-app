import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

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
    const editMode = {};
    const viewMode = {};
    const { edit } = this.state;
    const {
      todo,
      handelChangeProp,
      deleteTodoProp,
      editTodoProp,
    } = this.props;
    if (edit === true) {
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
    const { id, title, completed } = todo;
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
              handelChangeProp(id);
            }}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
          <button
            type="button"
            onClick={() => {
              deleteTodoProp(id);
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
            editTodoProp(id, e.target.value);
          }}
          onKeyDown={this.endEdit}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handelChangeProp: PropTypes.func.isRequired,
  deleteTodoProp: PropTypes.func.isRequired,
  editTodoProp: PropTypes.func.isRequired,
};

export default TodoItem;
