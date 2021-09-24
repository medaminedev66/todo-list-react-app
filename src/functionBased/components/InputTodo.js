import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  let alert = '';

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProp(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert = 'Please write item';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <h4>{alert}</h4>
      <button type="button" className="input-submit">
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProp: PropTypes.func.isRequired,
};

export default InputTodo;
