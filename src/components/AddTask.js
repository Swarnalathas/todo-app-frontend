import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="row addTaskRow">
                <div>
                <span class="input-group-text" id="basic-addon1">Enter the Task List</span>
                </div>
                <div>
                <input type="text" class="form-control" placeholder="Type here..." aria-label="Username"
                    aria-describedby="basic-addon1" />
                </div>
                <div col-sm-4>
                <button type="button" class="btn btn-outline-success">Add</button>
                </div>
            </div>
        );
    }
}

export default AddTask;