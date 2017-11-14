import React from 'react';

const ImageController = ({ images }) => {
	const imageList = images.map(image => {
		return(
			<img key={image.toString()} src={image} alt='giphy'/>
		)
	});
	return(
		<div>
			{imageList}
		</div>
	)
}
export default ImageController;