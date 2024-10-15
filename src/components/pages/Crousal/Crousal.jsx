import React, { useState, useEffect } from 'react';
// import Web from './Web.json';
// import Free from './Free.json';
// import HomeAnimation from './HomeAnimation.json';
import Lottie from 'lottie-react';
import { Carousel } from 'react-bootstrap';
import '../../CSS/Style.css'; // Import your custom CSS file

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming 3 slides (0, 1, 2)
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const renderAnimation = (animationData) => {
    return (
      <Lottie
        className="croimgg"
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    );
  };

  return (
    <div className="container-fluid  p-0 bgcolor">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null} // Disable automatic sliding on hover
        pause="hover" 
        // Pause on carousel hover
        indicators={false} // Hide the slide indicators
        nextIcon={<span className="carousel-control-next"><i className="fas fa-chevron-right text-white"></i></span>}
        prevIcon={<span className="carousel-control-prev"><i className="fas fa-chevron-left text-white"></i></span>}
      >
        <Carousel.Item>
          <div className="container-fluid">
            <div className='row px-3 imge11'>
              
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className='row px-3 imge22'>
              
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className='row px-3 imge33'>
              
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default MyCarousel;
