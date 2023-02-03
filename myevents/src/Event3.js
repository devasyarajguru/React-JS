import React from 'react';

class Event3 extends React.Component{

    mydemo(event)
    {
        console.warn(event);
        console.log(event.target.name);
        console.log(event.target.type);
        console.log(event.type);
        console.log(event.target.value);
    }
    render()
    {
        return(
                <>
                    <h1>Onchange Event in Text Type</h1>
                    <input type='text' onChange={this.mydemo.bind(this)} name='txt1' placeholder='enter text'></input>
                </>
        );
    }
}

export default Event3;