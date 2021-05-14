import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';
import Card from './Card';

class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/srp236/project2DB/posts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  onAddTask = (taskName) => {
    let tasks = this.state.tasks;
    tasks.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: 'task',
      column: 'todo'
    });

    this.setState({ tasks });
  }

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList });
  }

  render() {
    return (
      <div className="container">
        <AddTask onSubmit={this.onAddTask} />
        <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
        <Card 
        title='To Do'
        body= {Card}
        />
        <Card 
        title='In Progress'
        body={Card}
        />
        <Card 
        title='Review'
        body={Card}
        />
        <Card 
        title='Done'
        body={Card}
        />
      </div>
    );
  }
}

export default App;