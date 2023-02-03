import React from 'react';

class Child extends React.Component{
    render()
    {
        return(
            <><h1>Example of Children Props in Class Component</h1>

               {this.props.children}     
            </>
        );

    }
}

export default Child;