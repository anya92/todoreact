import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    return (
      <div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    );
  }
}

export default TaskList;