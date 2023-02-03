import React from 'react'

class App2 extends React.Component{
    demo()
    {
        alert("Function is being Called");
    }
    render()
    {
        return(
            <>
                <h1>OnClick Event</h1>
                <button onClick={this.demo.bind(this)}>Click Me</button>
            </>
        );
    }
}

export default App2;