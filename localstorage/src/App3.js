import React from "react";

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1:''
         };
    }

    setdata()
    {
        var data  = 'Kushless';
        localStorage.setItem('Name2','Kushless')
        this.setState({txt1:data});
        
    }

    getdata()
    {
        var mydata2 = localStorage.getItem('Name2');
         
        if(mydata2)
        {
            this.setState({txt1:'Your data is set'});
        }

        else
        {
            this.setState({txt1:'Your data is not set'});
        }
    }

    removedata()
    {
        localStorage.removeItem('Name2');
        this.setState({txt1:"Your data is removed"});
    }

    render() {
        return (
            <>
                <h1>Local Storage with State Management</h1>
                <h2>Value is {this.state.txt1}</h2>
                <button onClick={this.setdata.bind(this)}>Set</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.getdata.bind(this)}>Get</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.removedata.bind(this)}>Remove</button>
            </>
        );
    }
}

export default App3;