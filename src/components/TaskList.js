import React, { Component } from 'react';
import moment from 'moment';


class TaskList extends Component {

    render() {
       let taskDone;

       let buttonDisable;
         if(this.props.task.completed === "T"){
            taskDone ="col-sm-6-done col-md-6";
            buttonDisable = "btnDisable"
         } else{
            taskDone = "col-sm-6 col-md-6";
            buttonDisable = "btn btn-outline-success";
         }

       //  let buttonDisable;
       // const taskDone = this.props.task.completed ? "col-sm-6-done col-md-6" : "col-sm-6 col-md-6";
      //  const buttonDisable = this.props.task.completed ? "btnDisable" : "btn btn-outline-success";

        return (
            <div className="row">
                <div id="taskList" className={taskDone}>
                    {this.props.task.description}
                </div>
                <span className="col-sm-2 col-md-2">
                    {/* {moment(this.props.date, "DD-MM-YYYY").format("Do MMM YYYY")} */}
                </span>

                <span className="col-sm-2 col-md-2">
                    <button type="button" class={buttonDisable}
                        onClick={() => this.props.taskSelect(this.props.task.task_id)} >Done
                </button>
                </span>

                <span className="col-sm-2 col-md-2">
                    <button type="button" class="btn btn-outline-success"
                        onClick={() => this.props.deleteTask(this.props.task.task_id)}>Delete
                </button>
                </span>
            </div>
        );
    }
}

export default TaskList;