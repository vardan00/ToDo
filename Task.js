import React, {Component} from 'react';
class Task extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default Task;
