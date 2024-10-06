import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const AutoCarousel = ({imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine, imgTen, imgEleven, imgTwelve}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine, imgTen, imgEleven, imgTwelve];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <>
    <div className='p-12'>
          <h1 className='text-yellow-500 text-center text-5xl font-bold'>Nossos clientes</h1>
          <p className='mb-12 text-yellow-500 text-center text-xl '>Tratamos nossos clientes de maneira ímpar.</p>
    <div className="space-y-20 p-2 md:p-12 relative w-full h-[200px] flex justify-center items-center text-white rounded-lg">
      <Image className='w-64' src={items[currentIndex]} alt='cliente' />

      <div className="absolute bottom-0 md:bottom-4 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default AutoCarousel;
