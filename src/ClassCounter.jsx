import React, { Component } from 'react';
class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {count:0}
    }

    Increment = () =>{
        this.setState ({count: this.state.count +1})
    }

    Decrement = () =>{
        this.setState ({count: this.state.count -1})
    }

    render() { 
        return (  
            <>
            <h1>Count {this.state.count}</h1>
            <button onClick={this.Increment}>Increase count</button>
            <button onClick={this.Decrement}>Decrease count</button>
            </>
        );
    }
}
 
export default ClassCounter;

