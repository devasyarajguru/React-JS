import React from "react";
class Demo10 extends React.Component {
 state = {  }
    render() {
        const myarr = [
            {firstname:'Devasya',lastname:"Rajguru"},
            {firstname:'Kush',lastname:"Patel"},
            {firstname:'Gunj',lastname:"Trivedi"},
        ]
        return (
            <>
                {myarr.map(function(myvalue,index)
                {   
                    return <div>
                            <h2>{index} - {myvalue.firstname} {myvalue.lastname}</h2>
                    </div>
                })}
            </>
        );
    }
}

export default Demo10;