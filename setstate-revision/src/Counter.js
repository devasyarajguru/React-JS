import React from 'react';
import './external.css';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mydefault:0
         };
    }

    increment(event)
    {
      
        this.setState({mydefault:this.state.mydefault+1})
    }

    decrement(event)
    {
      
        this.setState({mydefault:this.state.mydefault-1})
    }


    render() {
        return (
            <>
                <h1>Counter Example</h1>
                <div className='container'>
               <h1> {this.state.mydefault} </h1>
               </div>
               <div className='main'>
               <button name='increment' className='button1' onClick={this.increment.bind(this)}>Increment</button>
               <button name='decrement' className='button2' onClick={this.decrement.bind(this)}>Decrement</button>
               </div>
               
            </>
        );
    }
}

export default Counter;