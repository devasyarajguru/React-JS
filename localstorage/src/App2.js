import React from "react";

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:'',
            txt2:''
         };
    }

    setdata()
    {
        var data = 'red';
        localStorage.setItem('mycolor','red');
        localStorage.setItem('friend','jainil');
        this.setState({txt1:data});
    }

    getdata()
    {
        var mydata = localStorage.getItem('friend');

        if (mydata)
        {
            this.setState({txt2:mydata});
            alert("Your value is set: " + mydata);
        }

        else
        {
            this.setState({txt2:"Your value isn't set"})
        }
    }

    removedata()
    {
        localStorage.removeItem('friend');
        alert("Your data is being removed");
    }

    render() {
        return (
            <>
                <h1>Local Storage with StateManagement</h1>
                <h2>Value is: {this.state.txt1}</h2>
                <button onClick={this.setdata.bind(this)}>Set</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.getdata.bind(this)}>Get</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.removedata.bind(this)}>Remove</button>
            </>
        );
    }
}

export default App2;