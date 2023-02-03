function Event()
{
    function demo()
    {
        alert("Alert is Called");
    }
    return(
            <>
                <h1>Function Button Example</h1>
                <button onClick={demo}>Click Me</button>
            </>
    );
}

export default Event;