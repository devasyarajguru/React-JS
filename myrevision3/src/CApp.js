import React from 'react';

class CApp extends React.Component{
    render()
    {
        
        // var a = (this.props.firstname);
        return(
            <>
                {/* {a} */}
                <h2>{this.props.children}</h2>
                {this.props.firstname}<br/>
                {this.props.lastname}<br/>
                {this.props.course}
              
            </>
        );
    }
}

CApp.defaultProps = {
    course:'ReactJS'
}

export default CApp; 