function Sum()
{
    var a = 10;
    var b = 20;
    var c = a + b;
    var msg = '';
    
    if(c>50)
    {
        msg = 'Sum is > 50';
    }
    else{
        msg = 'Sum is < 50';
    }
    return(
        <>
            <h1>Sum value</h1>
            <h2>Value of {a}</h2>
            <h2>Value of {b}</h2>
            <h2>Sum of {a}+{b} = {c}</h2>
            <h2>{msg}</h2>
    
        </>
    );
}

export default Sum;