import React from 'react';

class SetState extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            myvalue:""
        };
    }

    componentDidMount()
    {
        console.log("State Updated");
        this.setState({myvalue:"Data Loaded"});
    }

    render()
    {
        return(
            <>
               <h1> {this.state.myvalue} </h1>
            </>
        );
    }
}

export default SetState;