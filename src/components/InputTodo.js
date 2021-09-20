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
    if (this.state.title.trim()) {
      this.props.addTodoProp(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Pleas enter an Item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Add</button>
      </form>
    );
  }
}

export default InputTodo;
