import React from 'react';

class App4 extends React.Component{
    render()
    {
        return(
            <>
            <h1>Practice of Default Props</h1>
                {this.props.name}<br></br>
                {this.props.coding}<br></br>
                {this.props.sir}
            </>
        );
    }
}

App4.defaultProps = 
{
    coding:"React JS",
    sir:"Akash Sir"
}

export default App4;