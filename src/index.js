//import react
import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './config';

//Create a component that produces some HTML
const App = () => {
	return <div>{API_KEY}</div>;
}

//Take the components generated HTML and attach it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));