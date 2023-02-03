function FChild(props)
{
    return(
        <>
            <h1>Example of Children Props in Functional Component</h1>
            {props.children}

        </>
    );
}

export default FChild;