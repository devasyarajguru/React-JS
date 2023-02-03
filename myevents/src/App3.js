function App3()
{
    function demo()
    {
        alert("Function is called");
    }
    return(
        <>
            <h1>Onclick Event</h1>
            <button onClick={demo}>Click me</button>
        </>
    );
}

export default App3;