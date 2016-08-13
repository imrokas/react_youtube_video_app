import React from 'react';


const videoList = function(props) {
	return (
		<ul className="col-md-4 list-group">
			{props.videos.length}
		</ul>
	);
}

export default videoList;