import React from "react";
class Condition4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn:false };
    }

    handleLogout()
    {
        this.setState({isLoggedIn:false});
    }

    handleLogIn()
    {
        this.setState({isLoggedIn:true});
    }

    render() {
        let mybtn = null;

        if(this.state.isLoggedIn)
        {
            mybtn = <button onClick={this.handleLogout.bind(this)} style={{height:'100px',width:'110px',margin:'50px',fontSize:'30px'}}>Logout</button>
        }

        else
        {
            mybtn = <button onClick={this.handleLogIn.bind(this)} style={{height:'100px',width:'110px',margin:'50px',fontSize:'30px'}}>Login</button>
        }
        return (
                <>
                    {mybtn}
                </>
        );
    }
}

export default Condition4;