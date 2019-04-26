import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <div className="row" >
                <div className="col-sm-12 col-md-8" >
                    {this.props.taskName}
                </div>

                <div className="col-sm-6 col-md-2">
                <button type="button" >Done
                </button>
                </div>

                <div className="col-sm-6 col-md-2">
                <button type="button" >Delete
                </button>
                </div>
            </div>
        );
    }
}

export default TaskList;