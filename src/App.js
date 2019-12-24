import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
     <Person />
     </ErrorBoundary>
    </div>
  );
}

export default App;
