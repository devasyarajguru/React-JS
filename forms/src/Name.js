import React from "react";

class Name extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            txt1:'',
            txt2:'',
            txt3:'',
            no1:'',
            no2:'',
            ans:''
        };
    }

    myevent(event)
    {
        this.setState({[event.target.name]:[event.target.value]});
        // this.setState({txt1:event.target.value});
        event.preventDefault();
    }

    mysum(event)
    {
        var a =parseInt(this.state.no1);
        var b =parseInt(this.state.no2);
        var c = a + b;
        this.setState({ans:c})
        event.preventDefault();
    }
   
    render()
    {
        return(
            <>
            <form onClick={this.mysum.bind(this)}>
                <h3>FirstName: <input type='text' autoComplete="off" name='txt1'onChange={this.myevent
                .bind(this)}></input></h3>
                <h3>MiddleName: <input type='text' autoComplete="off" name='txt2'onChange={this.myevent
                .bind(this)}></input></h3>
                <h3>LastName: <input type='text' autoComplete="off" name='txt3'onChange={this.myevent
                .bind(this)}></input></h3><br/>
                {/* <button onClick={this.myevent.bind(this)}>Submit</button><br></br> */}
                <h3>FirstName:{this.state.txt1}</h3> 
                <h3> MiddleName:{this.state.txt2}</h3>
                <h3>LastName:{this.state.txt3}</h3><br/>

                <h3>No1: <input type='number' autoComplete="off" name='no1'onChange={this.myevent
                .bind(this)}></input></h3><br/>
                <h3>No2: <input type='number' autoComplete="off" name='no2'onChange={this.myevent
                .bind(this)}></input></h3><br/>
                <input type='submit'></input>
                <h3>Ans is: {this.state.ans}</h3>
            </form>
            </>
        );
    }
}

export default Name;