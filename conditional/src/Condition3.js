function LoggedIn(props)
{
    return(<><h1>User is Logged In</h1></>);
}

function Loggedout(props)
{
    return(<><h1>User is Logged Out</h1></>);
}

function Home(props)
{
    var isLoggedin = props.isLoggedin;

    if(isLoggedin)
    {
        return <LoggedIn/>;
    }

    return <Loggedout/>
}

function Condition3()
{
    return(
        <>
            <Home isLoggedin = {true}></Home>
        </>
    );
}

export default Condition3;