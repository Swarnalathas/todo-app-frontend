import React, { Component } from 'react';


class TaskList extends Component {

    render() {
        let taskDone = this.props.task.completed ? "col-sm-12-done col-md-8" : "col-sm-12 col-md-8";
        let buttonDisable = this.props.task.completed ? "btnDisable" : "btn btn-outline-success";

        return (
            <div className="row">
                <div id="taskList" className={taskDone}>
                    {this.props.task.taskDescription}
                </div>

                <span className="col-sm-6 col-md-2">
                    <button type="button" class={buttonDisable}
                        onClick={() => this.props.taskSelect(this.props.task.id)} >Done
                </button></span>

                <span className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-outline-success"
                        onClick={() => this.props.deleteTask(this.props.task.id)}>Delete
                </button>
                </span>
            </div>
        );
    }
}

export default TaskList;