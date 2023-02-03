function Event2()
{
    function myevent(event)
    {
        console.warn(event); // Print Event Object
        console.log("Type", event.type); // Event TYpe
        console.log("Name" ,event.target.name); // Event Name
        event.preventDefault();
    }
    return(
            <>
                <h1>Button Click Example</h1>
                <button onClick={myevent} name= 'btn11' value='myvalue'>Click Me</button>
            </>
    );
}

export default Event2;