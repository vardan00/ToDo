import React, {Component} from 'react';
class Task extends Component{
    render(){
        console.log(this.props.name);
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default Task;
