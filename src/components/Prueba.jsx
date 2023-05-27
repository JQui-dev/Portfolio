import React, { useEffect, useRef, useState } from 'react';
import './style/Prueba.scss'; // Import the CSS file with the animation styles

const Prueba = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`slide-in ${isVisible ? 'slide-in-visible' : ''}`}
    >
      <div className="bg">
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Prueba;