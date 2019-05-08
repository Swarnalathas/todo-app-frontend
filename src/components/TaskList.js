import React, { Component } from 'react';
import moment from 'moment';


class TaskList extends Component {

    render() {
        const taskDone = this.props.task.completed ? "col-sm-6-done col-md-6" : "col-sm-6 col-md-6";
        const buttonDisable = this.props.task.completed ? "btnDisable" : "btn btn-outline-success";

        return (
            <div className="row">
                <div id="taskList" className={taskDone}>
                    {this.props.task.taskDescription}
                </div>
                <span className="col-sm-2 col-md-2">
                    {moment(this.props.date, "DD-MM-YYYY").format("Do MMM YYYY")}
                </span>

                <span className="col-sm-2 col-md-2">
                    <button type="button" class={buttonDisable}
                        onClick={() => this.props.taskSelect(this.props.task.id)} >Done
                </button>
                </span>

                <span className="col-sm-2 col-md-2">
                    <button type="button" class="btn btn-outline-success"
                        onClick={() => this.props.deleteTask(this.props.task.id)}>Delete
                </button>
                </span>
            </div>
        );
    }
}

export default TaskList;