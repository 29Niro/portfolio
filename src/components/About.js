import React from 'react';
import AboutImg from '../assets/about.png';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const typedTexts = [
    'Welcome to my personal website! I am a passionate web developer with a focus on creating interactive and user-friendly applications.',
  ];

  return (
    <section className="flex flex-col lg:flex-row px-4 lg:px-20 py-10">
      <img
        src={AboutImg}
        alt="about"
        className="w-full h-auto lg:w-1/2 mt-6 lg:mt-0"
        loading="lazy"
      />

      <div className="w-full h-56 lg:h-full lg:w-1/2 px-2 lg:pl-10 lg:flex lg:flex-col justify-center">
        <h1 className="text-2xl lg:text-3xl font-anta font-semibold mb-4">
          About
        </h1>
        <TypeAnimation
          sequence={[typedTexts.toString(), 4000, '', 100]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </section>
  );
}
