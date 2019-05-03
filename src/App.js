import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import uuidv1 from 'uuid/v1';


class App extends Component {
  state = {
    tasksList: []
  }

  addTask = (taskText) => {

    const currentListofTask = this.state.tasksList;
    const taskId = uuidv1();

    const newTask = {

      taskDescription: taskText,
      id: taskId,
      completed: false

    };
    currentListofTask.push(newTask);
    this.setState({ tasksList: currentListofTask });
  }

  onDeleteClicked = (taskid) => {

    const currentDeleteTask = this.state.tasksList;
    const filteredTask = currentDeleteTask.filter(item => {
      return item.id !== taskid;
    });
    this.setState({ tasksList: filteredTask });
  }

  onTaskSelected = (taskid) => {
    let currentSelectTask = this.state.tasksList;

    currentSelectTask.forEach(element => {
      if (element.id === taskid) {
        element.completed = true;
      }
    });

    this.setState({ tasksList: currentSelectTask });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div class="col-sm-12" id="title" >
            <Header />
          </div>
        </div>

        <div className="row">
          <AddTask addTaskFunction={this.addTask.bind(this)} />
        </div>

        <div className="row">
          <TaskCounter taskCount={this.state.tasksList.length} />
        </div>
        {
          this.state.tasksList.map((item, index) => {
            return <TaskList task={item} key={index} deleteTask={this.onDeleteClicked}
              taskSelect={this.onTaskSelected} />
          })
        }
      </div>
    );
  }
}

export default App;
