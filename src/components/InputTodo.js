import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProp(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default InputTodo;
