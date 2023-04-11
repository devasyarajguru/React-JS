import React from 'react';
class App1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name:'',
            age:'',
            name2:'',
            age2:''
        }
    }

    onchange(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
    }

    onSubmit(event)
    {
        event.preventDefault();
        // this.setState({name:this.state.name2,age:this.state.age2});
        console.log(this.state.name , this.state.age);
    }

    render()
    {
        return(
            <>
                <h1>Displaying Name and Age</h1>
                <form onSubmit={this.onSubmit.bind(this)}> 
                  <h2> Name: <input type='text' name='name' onChange={this.onchange.bind(this)}></input> </h2>
                  <h2> Age: <input type='number' name='age' onChange={this.onchange.bind(this)}></input> </h2>
                  <input type='submit'></input>
                  {this.state.name2}
                  {this.state.age2}

                </form>
            </>
        );
    }
}

export default App1;