import React, { Component } from 'react';
import GiphyHeader from './giphyHeader';
import GiphyController from './giphyController';
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'
export class Giphy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}

	}
	setGiphyCollection({ data }) {
		const images = data.map(({ images: { fixed_height: { url } } }) => url);
		this.setState({
			data: images
		});
	}

	getGiphyCollection() {
		fetch(GIPHY_URL)
			.then(response => response.json())
			.then(response => this.setGiphyCollection(response))
			.catch(e => e);

	}
	componentDidMount() {
		this.getGiphyCollection();
	}
	render() {
		const { data } = this.state;
		return(
			<div>
				<GiphyHeader />
				<GiphyController data={data}/>
			</div>
		)
	}

}
