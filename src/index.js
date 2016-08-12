//import react
import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './config';
import SearchBar from './components/search_bar';

//Create a component that produces some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take the components generated HTML and attach it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));