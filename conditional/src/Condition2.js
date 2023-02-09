function Condition2()
{
    var isLoggedin = true;

    if(isLoggedin)
    {
        return(<><h1>User is Logged In</h1></>);
    }

    return(<><h1>User is Logged Out</h1></>);
}

export default Condition2;