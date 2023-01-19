function F_if()
{
    var x = 10;
    var y = 40;
    var msg = "";

    if(x+y>60)
    {
        msg = "Sum is greater than 60";
    }
    else
    {
        msg = "Sum is lesser than 60";
    }
    return(
        <div>
        <h1>Value of x is {x}</h1>
        <h1>Value of y is {y}</h1>
        <h1>Sum of x and y is {x+y}</h1>
        <h2>{msg}</h2>
        </div>
    );
}

export default F_if;