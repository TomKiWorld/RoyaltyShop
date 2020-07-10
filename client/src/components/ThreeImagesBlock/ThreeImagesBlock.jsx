import React from 'react';

const ThreeImagesBlock = ({ images }) => {
  return (
    <div className='three-images-block'>    
      {images.map(image => {
        const pathArray = image.split('/');
        const imageNameArray = pathArray[pathArray.length - 1].split('.');
        const imageName = imageNameArray[0];
        return (
          <div className='image-container' key={imageName}>
            <div className='image-block'  style={{ backgroundImage: `url(${image})` }} />
          </div>
        )
      })}
    </div>
  );
}

export default ThreeImagesBlock;
