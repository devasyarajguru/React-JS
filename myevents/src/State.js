import React from 'react';

class State extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            myvalue:"Devasya"
        };
    }

    render()
    {
        return(
            <>
               <h1> {this.state.myvalue}</h1>
            </>
        );
    }
}
export default State;