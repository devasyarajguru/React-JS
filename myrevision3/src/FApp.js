function FApp(props)
{
    return(
        <>
        <h2>{props.children}</h2>
            {props.firstname}<br/>
            {props.lastname}<br/>
            {props.course}
        </>
    );
}

FApp.defaultProps = 
{
    course:'Data Science'
}

export default FApp;