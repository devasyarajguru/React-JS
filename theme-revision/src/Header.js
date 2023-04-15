import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


function Header(props) {
    return (
        <React.Fragment>

<div id="menu-wrapper">
	<div id="menu">
		<ul>
			<li className="current_page_item"><Link to='/Main'><h1>Main</h1></Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<li className="current_page_item"><Link to='/About'><h1>About</h1></Link></li>
			
		</ul>
	</div>
</div>
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">StampALike</a></h1>
			<p>Template design by <a href="http://www.freecsstemplates.org">FCT</a></p>
            <div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
		</div>
	</div>
</div>

        </React.Fragment>
    );
}

export default Header;