import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';


class App extends Component {
  state = {
    tasksList: []
  }

  addTask(taskDescription) {
    let currentListofTask = this.state.tasksList;
    currentListofTask.push(taskDescription);
    this.setState({ tasksList: currentListofTask });
  }

  onDeleteClicked = (rowNum) => {      
    let currentDeleteTask = this.state.tasksList;
    currentDeleteTask.splice(rowNum,1);   
    this.setState({tasksList: currentDeleteTask});
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
          this.state.tasksList.map( (item, index) => {           
            return <TaskList taskName={item} key={index} rowNum={index} deleteTask={this.onDeleteClicked}/>
          })
        }
      </div>
    );
  }
}

export default App;
