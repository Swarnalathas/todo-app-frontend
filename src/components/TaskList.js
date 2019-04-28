import React, { Component } from 'react';


class TaskList extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-8" >
                    {this.props.taskName}
                </div>

                <span className="col-sm-6 col-md-2">
                    <button type="button"  class="btn btn-outline-success" >Done
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