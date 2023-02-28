import React from "react";
class Demo9 extends React.Component {
    state = {  }
    render() {

        const mydemo = [10,30,50,70];
        return (
            <div>
                {mydemo.map(function(value)
                {
                    return <h2>{value}</h2>
                })}
            </div>
        );
    }
}

export default Demo9;