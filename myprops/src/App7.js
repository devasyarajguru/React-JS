function App7(props)
{
    const {firstname, lastname,mobile} = props;

    return(
        <>
        <h1>Destructing of Props</h1>
            FirstName = {firstname}<br></br>
            LirstName = {lastname}<br></br>
            Mobile = {mobile}
        </>
    );
}

export default App7;