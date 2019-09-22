import React, {Component} from 'react';
import Task from "./Task";

class ToDoApp extends Component{
    constructor(){
        super();
        this.createTask = this.createTask.bind(this);
    }
    createTask(){
        document.getElementById("todo_list").append(<Task name="wow"/>);
    }
    render(){
        return (
            <div id="todo_homepage">
                <div id="todo_list">
                    <Task name="hello"/>
                </div>
                <input type="text" id="taskName"/>
                <button onClick={this.createTask}> create Task </button>
            </div>
        );
    }
}

export default ToDoApp;
