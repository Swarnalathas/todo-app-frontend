import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import axios from 'axios';

class App extends Component {
  state = {
    tasksList: []
  };
  // Anything in here happens on the first,initial render of the component

  componentDidMount = () => {
    // this from postman url for get Task and also new in E6
    // this the method to handling Async deal with permisess
    axios.get("https://i8apzc5y2a.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(result => {
        this.setState({
          tasksList: result.data.tasks
        });
      })
      .catch(err => {
      });
  }

  addTask = (taskText, date) => {

    const currentListofTask = this.state.tasksList;
    // const taskId = uuidv1();

    const newTask = {
      description: taskText,
      completed: "F",
      due_date: date,
      user_id: 1
    };

    axios.post("https://i8apzc5y2a.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)

      .then(result => {
        const taskId = result.data.task_id;
        newTask.taskId = taskId;
        currentListofTask.push(newTask);
        this.setState({
          tasksList: currentListofTask
        })
      })
      .catch(err => {
      })

  }

  onDeleteClicked = (taskid) => {

    const currentDeleteTask = this.state.tasksList;
    const  deleteAPI = "https://i8apzc5y2a.execute-api.eu-west-2.amazonaws.com/dev/tasks";
      
    axios.delete(deleteAPI + '/' + taskid)
      .then(result => {
        const filteredTask = currentDeleteTask.filter(item => item.task_id !== taskid);
        this.setState({ tasksList: filteredTask});  
      })
      .catch(err => {
      })    
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
        <div className="row">
          <div className="container">
            {
              this.state.tasksList.map((item, index) => {
                return <TaskList
                  task={item}
                  key={index}
                  deleteTask={this.onDeleteClicked}
                  taskSelect={this.onTaskSelected}
                  date={item.date}
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
