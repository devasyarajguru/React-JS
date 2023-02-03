import React from 'react';

class CEvent extends React.Component{

        demo()
        {
            alert("Funtion is called using Class Component");   
        }

    render()
    {
        return(
            <>
            <h1>Button Example using Class Component</h1>
            <button onClick={this.demo.bind(this)}>Click Me</button>
            </>
        );
    }
}

export default CEvent;
