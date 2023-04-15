import React from 'react';

function Part2(props) {
    return (
       <React.Fragment>

            <div className="post">
				<h2 className="title"><a href="#">Part 2</a></h2>
				<p className="meta"><span className="date">June 01, 2012</span><span className="posted">Posted by <a href="#">Someone</a></span></p>
				<div style={{clear:"both"}}>&nbsp;</div>
				<div className="entry">
					<p>Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum. In nulla tortor, elementum vel, tempor at, varius non, purus. Mauris vitae nisl nec metus placerat consectetuer. Donec ipsum. Proin imperdiet est. Phasellus <a href="#">dapibus semper urna</a>. Pellentesque ornare, orci in consectetuer hendrerit, urna elit eleifend nunc, ut consectetuer nisl felis ac diam. Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem.  Mauris quam enim, molestie in, rhoncus ut, lobortis a, est. Suspendisse lacus turpis, cursus egestas at sem. Sed lacus. Donec lectus. </p>
					<p className="links"><a href="#">Read More</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Comments</a></p>
				</div>
			</div>

       </React.Fragment>
    );
}

export default Part2;