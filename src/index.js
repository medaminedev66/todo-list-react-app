import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/index.css';
import TodoContainer from './classBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
