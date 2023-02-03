import React from 'react';

class SetSum extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount()
    {
        this.setState({txt1:100,txt2:200});
    }

    render()
    {
        const{txt1,txt2} = this.state;
        return(
            <>
                <h1>Sum using Compount Did Mount</h1>
                    <h2>Value of {txt1}</h2>
                    <h2>Value of {txt2}</h2>
                    <h2>Sum of {txt1} + {txt2} = {txt1+txt2}</h2>
            </>
        );
    }
}

export default SetSum;