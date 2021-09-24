import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.alert = '';
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProp } = this.props;
    if (title.trim()) {
      addTodoProp(title);
      this.setState({
        title: '',
      });
    } else {
      this.alert = 'Please write item';
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handelSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
        />
        <h4>{this.alert}</h4>
        <button type="button" className="input-submit">
          Add
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProp: PropTypes.func.isRequired,
};

export default InputTodo;
