import React from 'react';

function LoggedIn(props)
{
    return (<>User is Logged In</>)
}

function LoggedOut(props)
{
    return (<>User is Logged Out</>)
}

function Home(props)
{
    var isLoggedin = props.isLoggedin;

    if(isLoggedin)
    {
        return <LoggedIn/>;
    }

    else
    {
        return <LoggedOut/>;
    }
}

function App1(props) {
    return (
        <>
            <Home isLoggedin={true}/>
        </>
    );
}

export default App1;