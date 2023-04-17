import React from 'react';

function Sum(props) {

    const[Data,myFunc] = React.useState(0);
    const[ans,ansfunc] = React.useState(0);
    const[displaySum,setSum] = React.useState(false);

    function onChange(e)
    {
         myFunc(()=>
        (
            {
                ...Data,
                [e.target.name]:[e.target.value]
            }
        )
        );
    }    

    function handleSubmit(e)
    {
        e.preventDefault();
        var c = parseInt(Data.one) + parseInt(Data.two);
        ansfunc(c);
        setSum(true);
    }

    return (
        <>
        <form onSubmit={handleSubmit}> 
          <h2>No1: <input type='number' name='one' onChange={onChange}></input><br/></h2>
          <h2>No2: <input type='number' name='two' onChange={onChange}></input></h2>
          <input type='submit'></input>
        </form>
        {displaySum && (
            <h2>
                Sum is: {ans}
            </h2>
        )}
        </>            
    );
}

export default Sum;