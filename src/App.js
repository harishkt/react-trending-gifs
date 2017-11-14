import React, { Component } from 'react';
import './App.css';
import GiphyTrender from './components/giphytrender';

// <img src={logo} className="App-logo" alt="logo" />
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<GiphyTrender/>
			</div>
		);
	}
}