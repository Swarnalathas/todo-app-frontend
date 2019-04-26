import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        textEntered: ""
    }

    onAddClicked = () => {
        if (this.state.textEntered === "") {
            alert("Please enter the Task");
        } else {
            this.props.addTaskFunction(this.state.textEntered);
            this.setState({ textEntered: "" });
        }
    }

    onTextChanged = (event) => {
        this.setState({ textEntered: event.target.value });
    }

    render() {
        return (
            <div class="input-group mb-3 addTask">
                <div >
                    <span class="input-group-text" id="basic-addon1">Enter the Task List</span>
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Type here..."
                        onChange={this.onTextChanged} value={this.state.textEntered} />
                </div>
                <div>
                    <button type="button" class="btn btn-outline-success" onClick={this.onAddClicked}>Add Task</button>
                </div>
            </div>
        );
    }
}


export default AddTask;