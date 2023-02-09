import React from "react";

class Condition5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn:false };
    }

    handleLogout()
    {
        this.setState({isLoggedIn:false})
    }

    handleLogin()
    {
        this.setState({isLoggedIn:true})
    }

    render() {
        var mybtn = null;

        if(this.state.isLoggedIn)
        {
            mybtn = <button onClick={this.handleLogout.bind(this)} style={{height:'100px',width:'110px',margin:'50px',fontSize:'30px',backgroundColor:'aqua'}}>Logout</button>
        }

        else
        {
            mybtn = <button onClick={this.handleLogin.bind(this)} style={{height:'100px',width:'110px',margin:'50px',fontSize:'30px',backgroundColor:'yellow    '}}>Login</button>
        }
        return (
            <>
                {mybtn}
            </>
        );
    }
}

export default Condition5;