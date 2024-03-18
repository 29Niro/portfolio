import React, { useEffect, useRef, useState } from 'react';
import HeroImg from '../assets/hero.png';

const texts = [
  'Fullstack Developer',
  'UI/UX Designer',
  'Passionate Coder',
  'Tech Enthusiast',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(
    'opacity-100 ease-in-out duration-500 transform translate-x-0'
  );
  const textRef = useRef();

  function changeText() {
    setAnimationClass(
      'opacity-0 ease-in-out duration-10 transform -translate-x-full'
    );

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      textRef.current.innerText = texts[index];

      setAnimationClass(
        'opacity-100 ease-in-out duration-1000 transform translate-x-0'
      );
    }, 1000);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeText();
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section className="flex flex-col lg:flex-row px-4 lg:px-20 py-10 bg-gradient-to-tl from-purple-950 via-purple-600 to-purple-300">
      <div className="w-full lg:w-1/2 pl-4 lg:pl-10 flex flex-col items-start justify-center">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-anta">
          Hi, I am{' '}
          <span className="text-3xl lg:text-4xl xl:text-5xl text-pink-800">
            Niroshan
          </span>
        </h1>

        <h1
          ref={textRef}
          className={`text-2xl lg:text-3xl xl:text-4xl font-anta font-bold text-white transition duration-500 ${animationClass}`}
        >
          {texts[index]}
        </h1>
        <p className="text-lg lg:text-2xl xl:text-3xl my-6 lg:my-10 leading-none font-inter">
          Crafting visually stunning memorable experiences for web and
          interfaces
        </p>
        <a
          href="/"
          className="w-fit lg:w-fit h-12 bg-purple-800 py-2 px-4 text-sm lg:text-base xl:text-lg mt-6 lg:mt-10 text-white uppercase font-semibold rounded hover:bg-purple-700 transition duration-300 ease-in-out flex items-center animate-bounce"
        >
          Call to Action
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <img
        src={HeroImg}
        alt="hero"
        className="w-full h-auto lg:w-1/2 mt-6 lg:mt-0"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
