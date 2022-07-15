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
            <div className='classcounter'>
            <h1> CLASS COUNTER {this.state.count}</h1>
            <button onClick={this.Increment}>Increase count</button>
            <button onClick={this.Decrement}>Decrease count</button>
            </div>
        );
    }
}
 
export default ClassCounter;

