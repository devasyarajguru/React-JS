import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mytext:'',
            myarray:[]
         };
    }

    addtolist(input)
    {
        this.setState({mytext:input});
    }

    finalinput(input)
    {
        let ListArray = this.state.myarray;
        ListArray.push(input);
        this.setState({myarray:ListArray,mytext:''});
    }

    render() {
        return (
            <>
                <h1>Todo App </h1>

                <h1>Enter data: <input type='text' value={this.state.mytext}  name='textname' style={{padding:'8px',width:'450px'}} onChange={(e)=>this.addtolist(e.target.value)}></input></h1>
                <button onClick={() => this.finalinput(this.state.mytext)}>Click Me</button>
            
           <h3> {this.state.myarray.map((value)=>
            (
                <li>{value}</li>
            ))}</h3>

            </>
        );
    }
}

export default Todo;