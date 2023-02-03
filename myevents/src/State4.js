import React from 'react'; 

class State4 extends React.Component{
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
        var a = (this.state.txt1);
        var b = (this.state.txt2);
        var c = a + b;
        return(
            <>
            <h1>Sum Example using State</h1>
            <h2>Sum of {a} and {b} is {c}</h2>
            </>
        );
    }
}

export default State4;