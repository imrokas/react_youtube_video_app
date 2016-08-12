//import react
import React from 'react';
import ReactDOM from 'react-dom';

//Create a component that produces some HTML
const App = function() => {
	return <div>Hi!</div>;
}

//Take the components generated HTML and attach it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));