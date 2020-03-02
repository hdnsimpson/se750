import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ToDoList items={["Finish lecture", "Do  homework", "Sleep"]}/>
    </div>
  );
}

export default App;
