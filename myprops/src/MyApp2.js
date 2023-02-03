function MyApp2(props)
{
    return(
        <>
            <h1>This is Props Example in Function Component</h1>
            {props.firstname}<br></br>
            {props.lastname}
        </>
    );
}

export default MyApp2;