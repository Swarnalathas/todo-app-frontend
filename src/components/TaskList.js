import React, { Component } from 'react';


class TaskList extends Component {

    render() {
        return (
            <div className="row">
                <div id="taskList" className="col-sm-12 col-md-8"
                    dangerouslySetInnerHTML={{ __html: this.props.taskName }}>
                </div>

                <span className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-outline-success" onClick={this.props.taskSelect.bind(this, this.props.rowNum)}>Done
                </button></span>

                <span className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-outline-success" onClick={this.props.deleteTask.bind(this, this.props.rowNum)}>Delete
                </button>
                </span>
            </div>
        );
    }
}

export default TaskList;