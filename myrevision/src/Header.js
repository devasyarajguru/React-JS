import React from 'react';

class Header extends React.Component{
    render()
    {
        var mycolors = {
            backgroundColor:'white',
            color:'blue'
        };
        return(
            <h1 style={mycolors}>Internal Css</h1>
        );
    }
}

export default Header;