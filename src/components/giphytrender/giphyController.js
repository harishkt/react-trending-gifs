import React, { Component } from 'react';
import ButtonContainer from './buttonController';
import ImageContainer from './imageController';
import _ from 'lodash';

export default class GiphyController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}

		this.getGiphies = this.getGiphies.bind(this);
		this.selectOne = this.selectOne.bind(this);
		this.randomizeOrder = this.randomizeOrder.bind(this);
		this.reverseOrder = this.reverseOrder.bind(this);
		this.clearContainer = this.clearContainer.bind(this);
	}

	getGiphies(event) {
		const { data } = this.props;
		this.setState({
			data
		});
		event.preventDefault();
	}

	selectOne(event) {
		const { data } = this.state;
		const singleItem = Array(1).fill(_.sample(data));
		this.setState({
			data: singleItem
		});
		event.preventDefault();
	}

	reverseOrder(event) {
		const { data } = this.state;
		this.setState({
			data: _.reverse(data)
		});
		event.preventDefault();
	}

	randomizeOrder(event) {
		const { data } = this.state;
		this.setState({
			data: _.shuffle(data)
		});
		event.preventDefault();
	}

	clearContainer(event) {
		this.setState({
			data: []
		});
		event.preventDefault();
	}

	render() {
		const { data } = this.state;
		return(
			<div>
				<ButtonContainer
					className='btnStyle'
					getGiphies={this.getGiphies}
					selectOne={this.selectOne}
					randomizeOrder={this.randomizeOrder}
					reverseOrder={this.reverseOrder}
					clearContainer={this.clearContainer}
				/>
				<ImageContainer
					images={data}
				/>
			</div>
		)
	}
}