import React from 'react';
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isloggedin:false
         };
    }

    handlelogout()
    {
        this.setState({isloggedin:false})
        alert("I am Logout Currently");
    }

    handlelogin()
    {
        this.setState({isloggedin:true})
        alert("I am Login Currently");

    }

    render() {
        let mybtn = null;

        if (this.state.isloggedin) {
           mybtn =  <button onClick={this.handlelogout.bind(this)}>Logout</button>
        } 
        else
        {
           mybtn = <button onClick={this.handlelogin.bind(this)}>Login</button>
        }
       
       

        return (
            <>
                {mybtn}
            </>
        );
    }
}

export default App2;