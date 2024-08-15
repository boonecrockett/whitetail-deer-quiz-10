import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizApp from './QuizApp';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <QuizApp />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
