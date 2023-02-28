import React from "react";

class Demo7 extends React.Component
{
   
    render()
    {
        const Program = ['C',"C++","Java","React"]

        return(
            <>
                <h2>{Program[0]}</h2>
                <h2>{Program[1]}</h2>
                <h2>{Program[2]}</h2>
                <h2>{Program[3]}</h2>
            </>
        );
    }
}

export default Demo7;