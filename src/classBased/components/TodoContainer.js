import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount = () => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  addTodoItem = (newtitle) => {
    const newTodo = {
      id: uuidv4(),
      title: newtitle,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  editTodo = (id, updatedTitle) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProp={this.addTodoItem} />
          <TodosList
            todos={todos}
            handelChangeProp={this.handleChange}
            deleteTodoProp={this.delTodo}
            editTodoProp={this.editTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
