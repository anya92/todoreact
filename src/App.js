import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import Date from './Date';
import Avatar from './Avatar';

class App extends Component {
  render() {
    return (
      <div>
        <Avatar />
        <br />
        <Date />
        <br />
        <TaskList />
      </div>
    );
  }
}

export default App;
