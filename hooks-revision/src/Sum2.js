import React from 'react';

function Sum2(props) {

    const[Data,setData] = React.useState();
    const[ans,setAns] = React.useState();
    const[Displayans,setSum] = React.useState(false);

    function handleinput(e)
    {
        setData(()=>(
            {
                ...Data,
                [e.target.name]:[e.target.value]
            }
        ))
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        const c = parseInt(Data.no1) + parseInt(Data.no2);
        setAns(c);
        setSum(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>No1: <input type='number' name='no1' onChange={handleinput}></input></h1>
                <h1>No2: <input type='number' name='no2' onChange={handleinput}></input></h1>
                <input type='submit'></input>
            </form>
            {Displayans && (
                <h2>
                    Sum is: {ans}
                </h2>
            )}
        </>            
    );
}

export default Sum2;