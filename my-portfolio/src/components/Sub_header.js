import React from 'react';
import profileImage from './image.png'; // Make sure to replace this with the actual path to your image

const Introduction = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-900 p-8 text-white">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <div className="text-blue-400 text-xl mb-2">Hello !!!</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I'm YOUERN RIN
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-6">
          PROFESSIONAL WEB DEVELOPER
        </h2>
        <p className="max-w-lg mx-auto md:mx-0">
          A Professional Web Developer is a skilled individual who specializes in creating and maintaining websites and web applications. Their role involves a blend of creativity and technical expertise to ensure that websites are not only visually appealing but also functional, user-friendly, and optimized for performance.
        </p>
      </div>
      <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
        <img src={profileImage} alt="Profile" className="rounded-full w-48 h-48 md:w-96 md:h-96 object-cover" />
      </div>
    </section>
  );
};

export default Introduction;
