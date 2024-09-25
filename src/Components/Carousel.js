import React, { useState } from 'react';
import { useEffect } from 'react';
import "../Tailwind.css"
const items = [
  { id: 1, img: 'https://i.postimg.cc/WpxbWXym/Game-day-cuate.png' },
  { id: 2, img: 'https://i.postimg.cc/j5kBj3fM/Audiobook-amico.png' },
  { id: 3, img: 'https://i.postimg.cc/sg4j2ygK/Listening-happy-music-bro.png' },
  { id: 4, img: 'https://i.postimg.cc/sg4j2ygK/Listening-happy-music-bro.png' },
  { id: 5, img: 'https://i.postimg.cc/8CN2X6Dm/Audiobook-rafiki.png' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((prev) => (prev +1) % items.length)
    },4000)
    return () => clearInterval(interval)
  },[])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-full">
      <div className="relative h-[550px] overflow-hidden rounded-lg">
        <div className="flex transition-transform ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={item.id} className="min-w-full duration-200 ease-in-out">
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="object-contain h-[550px] w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous button */}
      <button
        className="absolute top-1/2 left-4 z-30 w-12 h-12 flex items-center justify-center px-4 cursor-pointer focus:outline-none rounded-full"
        onClick={handlePrev}
      >
        <svg
          className="w-8 h-8 text-gray-200 hover:text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 right-4 z-30 w-12 h-12 flex items-center justify-center px-4 cursor-pointer focus:outline-none rounded-full"
        onClick={handleNext}
      >
        <svg
          className="w-8 h-8 text-gray-200 hover:text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9l4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </section>
  );
};

export default Carousel;