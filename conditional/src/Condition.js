function Condition()
{
    var isLoggedin = false;

    if(isLoggedin)
    {
        return (<><h1>User is Logged In</h1></>);
    }

    return(<><h1>User is Logged Out</h1></>);
}

export default Condition;