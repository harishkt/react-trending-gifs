import React from 'react';

const Button = ({ className, name, onClick}) => {
	return(
		<button
			type='button'
			className={className}
			onClick={onClick}
		>
			{name}
		</button>
	);
}
const ButtonController = (props) => {
	const {
		getGiphies,
		selectOne,
		randomizeOrder,
		reverseOrder,
		clearContainer,
		className
	} = props;
	return(
		<div>
			<Button name='Get Giphies' onClick={getGiphies} className={className} />
			<Button name='Select one' onClick={selectOne} className={className} />
			<Button name='Randomize Order' onClick={randomizeOrder} className={className} />
			<Button name='Reverse Order' onClick={reverseOrder} className={className} />
			<Button name='clear All' onClick={clearContainer} className={className} />
		</div>
	)
}
export default ButtonController;