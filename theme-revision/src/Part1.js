import React from 'react';

function Part1(props) {
    return (
        <React.Fragment>

           <div classNameName="post">
				<h2 className="title"><a href="#">Welcome to StampALike </a></h2>
				<p className="meta"><span className="date">June 04, 2012</span><span className="posted">Posted by <a href="#">Someone</a></span></p>
				<div style={{clear: "both"}}>&nbsp;</div>
				<div className="entry">
					<p>This is <strong>StampALike </strong>, a free, fully standards-compliant CSS template designed by <a href="http://www.freecsstemplates.org">FCT</a>.  The photo used in this template is from <a href="http://fotogrph.com/">Fotogrph</a>.  This free template is released under a <a href="http://creativecommons.org/licenses/by/3/">Creative Commons Attributions 3.0</a> license, so you’re pretty much free to do whatever you want with it (even use it commercially) provided you keep the links in the footer intact. Aside from that, have fun with it :)</p>
					<p>Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum. In nulla tortor, elementum ipsum. Proin imperdiet est. Phasellus dapibus semper urna. Pellentesque ornare, orci in felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem.</p>
					<p className="links"><a href="#">Read More</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Comments</a></p>
				</div>
			</div>

        </React.Fragment>
    );
}

export default Part1;