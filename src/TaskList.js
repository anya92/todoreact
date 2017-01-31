import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => <Task
          key={task.id}
          time={task.time}
          period={task.period}
          activity_title={task.activity_title}
          activity_description={task.activity_description}
        />)}
      </div>
    );
  }
}

export default TaskList;
