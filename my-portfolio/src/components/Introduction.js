import React from 'react';
import profileImage from './image.png';
import { FaFootballBall, FaBook, FaCode, FaSearch, FaVolleyballBall } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white" id="about">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 float-left md:float-none">
        <img src={profileImage} alt="Profile" className="rounded-lg w-full" />
      </div>
      <div className="w-full md:w-2/3 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">MY BIOGRAPHY</h2>
        <div className="bg-blue-500 h-1 w-20 mb-4"></div>
        <p className="mb-4">
          I am YOUERN RIN, a Professional Web Developer with a passion for technology. My journey started at Tmro Meal Secondary School, where I discovered my love for tech and teamwork. I then went on to complete my BacII Certificate at Banteay Chhmar High School, which gave me a strong academic foundation.

          Currently, I am studying for an Association Degree at Passerelles numériques Cambodia. Here, I am learning and improving my skills in various technical areas like SQL Server, HTML, CSS, JavaScript, PHP, Node.js, MySQL, Laravel, and Vue.js. Alongside these hard skills, I have developed important soft skills such as communication, punctuality, honesty, responsibility, time management, task management, teamwork, problem-solving, critical thinking, and self-learning.

          In my free time, I enjoy playing football and volleyball, learning new skills, reading books, researching, and coding. These activities help me stay balanced and motivated.

          As a web developer, I aim to create websites and applications that are easy to use, look great, and work well. I love taking on new challenges and am always eager to learn and adapt to new technologies. My goal is to make a positive impact in the digital world by delivering high-quality solutions that meet the needs of users and businesses.
        </p>
        <p className="mb-6">
          I am passionate about continuous learning and enjoy engaging in activities that challenge me both mentally and physically.
        </p>

      </div>
    </section>
  );
};

export default AboutMe;
