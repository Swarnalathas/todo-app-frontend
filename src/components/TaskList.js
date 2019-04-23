import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <div className="row" >
                <div class="col-sm-4" >
                    Visit Library
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
                <div class="col-sm-4 ">
                    Go To Shop
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
                <div class="col-sm-4 ">
                    Swim Lessons
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
                <div class="col-sm-6 ">
                    Meet Friends
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
                <div class="col-sm-6 ">
                    Summit Assignment
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
                <div class="col-sm-12 ">
                    Excercises
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>
            </div>
        );
    }
}

export default TaskList;