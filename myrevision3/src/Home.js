function Home(props)
{
    var a = parseInt(props.marks1);
    var b = parseInt(props.marks2);
    return(
        <>
           <h2>{props.children}</h2>
           Value of a is {a}<br></br>
           Value of b is {b}<br></br>
           Sum is {a+b}
        </>
    );
} 
export default Home;