import React, {Component} from 'react';
class Counter2 extends Component{
    constructor(){
        super();
        this.state = {count : 0};
    }
    increment = () =>{
        this.setState({count: this.state.count+1});
    };
    render(){
        return(
            <div>
                <div>Counter2: {this.state.count} </div>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter2;