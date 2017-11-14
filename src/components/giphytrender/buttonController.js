import React from 'react';

const Button = ({ className, name, onClick}) => {
	return(
		<div>
			<button
				type='button'
				className={className}
				onClick={onClick}
			>
				{name}
			</button>
		</div>
	);
}
const ButtonController = (props) => {
	const {
		getGiphies,
		selectOne,
		randomizeOrder,
		reverseOrder,
		clearContainer
	} = props;
	return(
		<div>
			<Button name='Get Giphies' onClick={getGiphies} className='' />
			<Button name='Select one' onClick={selectOne} className='' />
			<Button name='Randomize Order' onClick={randomizeOrder} className='' />
			<Button name='Reverse Order' onClick={reverseOrder} className='' />
			<Button name='clear All' onClick={clearContainer} className='' />
		</div>
	)
}
export default ButtonController;