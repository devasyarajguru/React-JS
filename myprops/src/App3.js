function App3(props)
{
    return(
        <>
        <h1>Example of Default Props</h1>
            {props.firstname}<br></br>
            {props.middlename}<br></br>
            {props.lastname}
        </>
    );
}

App3.defaultProps = 
{
    firstname:"Kush",
    middlename:"Janak"
}

export default App3;