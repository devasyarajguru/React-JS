function All(props)
{
    var a =  parseInt(props.value1);
    var b = parseInt(props.value2);

    return(
        <>
            <h1>{props.children}</h1><br/>
            Value of A is {a};<br/>
            Value of B is {b};<br/>
            So Sum is {a+b};
        </>
    );
}

All.defaultProps = 
{
    value1:0,
    value2:0
}

export default All;