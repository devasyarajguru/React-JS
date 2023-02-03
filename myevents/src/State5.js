import React from 'react';

class State5 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            txt1:10,
            txt2:20
        };
    }
    render()
    {
        const {txt1,txt2} = this.state;
        return(
            <>
                <h1>Destructing Example</h1>
                <h2>Value of {txt1}</h2>
                <h2>Value of  {txt2}</h2>
                <h2>Sum is  {txt1 + txt2}</h2>
            </>
        );
    }

}

export default State5;