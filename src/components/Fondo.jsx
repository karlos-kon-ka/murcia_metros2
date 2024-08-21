import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

function Fondo() {
  const images = [
    '/img/fondo1.jpg',
    '/img/fondo2.jpg',
    '/img/fondo3.png',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="slider">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="slider img"
        className="slider-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />

      <div className="slider-text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('¿Cuanto Vale tu Casa?')
              .pauseFor(2000)
              .deleteAll()
              .typeString('¿Conoces MURCIA?')
              .pauseFor(2000)
              .start();
          }}
          options={{
            loop: true,
            cursor: '|',
          }}
        />
      </div>
    </section>
      );
    }
    

    export default Fondo