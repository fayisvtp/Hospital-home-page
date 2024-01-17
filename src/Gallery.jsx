import React from 'react';
import image from '../src/Assets/image-1.jpg';
import image2 from '../src/Assets/image-2.jpg';
import image3 from '../src/Assets/image-3.jpg';
import image4 from '../src/Assets/image-4.jpg';

function Gallery() {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
 
  };

  const imageStyle = {
    width: '100vh',
    height: '190px',
    borderRadius: '10%',
    transform: 'rotate(-6.683deg)',
    margin: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const images = [image, image2, image3, image4];

  return (
    <div  style={cardStyle}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} style={imageStyle} />
      ))}
    </div>
  );
}

export default Gallery;
