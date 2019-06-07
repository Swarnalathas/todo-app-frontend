import React, { Component } from 'react';
import moment from 'moment';

class AddTask extends Component {

    state = {
        textEntered: "",
        date: ""
    }

    onAddClicked = () => {
        const newText = this.state.textEntered;
       // const newDate = moment(this.state.date, "YYYY-MM-DD");
       const newDate = this.state.date;

        if (newText === "") {
            alert("Please enter the Task");
        } else if (this.state.date === "") {
            alert("Please enter the date");
        } else {
            this.props.addTaskFunction(newText, newDate);
            this.setState({ textEntered: "" });
            this.setState({ date: "" });
        }
    }

    onTextChanged = (event) => {

        this.setState({ textEntered: event.target.value });
    }

    onDateChange = (event) => {

        this.setState({ date: event.target.value });
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
                    <span class="input-group-text" id="basic-addon1">Due by Date</span>
                </div>
                <div>
                    <input id="dateInput" class="form-control" type="date" onChange={this.onDateChange} value={this.state.date} />
                </div>
                <div>
                    <button type="button" class="btn btn-outline-success" onClick={this.onAddClicked}>Add Task</button>
                </div>
            </div>
        );
    }
}


export default AddTask;