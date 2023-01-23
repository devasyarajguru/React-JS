import React from "react";

class About extends React.Component{
    render()
    {
        var mycolor = {
            backgroundColor:"orange",
            color:"black"
        };
    

    return(
        <>
            <h1 style={mycolor}>This is About Us Page</h1>
        </>
    );
    }
}
export default About;