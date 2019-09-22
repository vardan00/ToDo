import React from 'react';
import Task from "./Task.jsx";

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskCounter: 1,
            taskList : [{taskID:1, taskName:"hello is your first task"}]
        };
        this.createTask = this.createTask.bind(this);
    }
    createTask(){
        this.setState({taskCounter:this.state.taskCounter + 1});
        this.state.taskList.push({taskID:this.taskCounter, taskName:"hello r first task"});
        this.setState({taskList:this.state.taskList});
    }
    render(){
        return (
            <div id="todo_homepage">
                <button onClick={this.createTask}> create Task </button>
                <div id="todo_list">
                    {
                        this.state.taskList.map((item) => (
                            <Task key={item.taskID} name={item.taskName}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ToDoApp;
