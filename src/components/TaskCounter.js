import React, { Component } from 'react';

class TaskCounter extends Component {
    render() {
        return (
            <div>
                <p> You have {this.props.taskCount} tasks remaining</p>
            </div>
        );
    }
}

export default TaskCounter;