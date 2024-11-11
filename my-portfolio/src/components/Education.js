import React from 'react';

const Education = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-start p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">EDUCATION</h2>
        <div className="bg-blue-500 h-1 w-20 mb-4"></div>
        <p className="mb-4">
          My educational journey began at Tmro Meal Secondary School, where I studied from 2016 to 2019, developing a keen interest in technology and teamwork. I then completed my BacII Certificate at Banteay Chhmar High School from 2019 to 2022, which provided me with a strong foundation in academic and extracurricular activities. Currently, I am pursuing an Association Degree at Passerelles numériques Cambodia since 2023, where I have been honing my skills in various technical and professional domains.
        </p>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Association Degree</h3>
            <p className="text-gray-400">Passerelles numériques Cambodia | 2023 – Present</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">BacII Certificat</h3>
            <p className="text-gray-400">Banteay Chhmar High School | 2019 – 2022</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Secondary School</h3>
            <p className="text-gray-400">Tmro Meal Secondary School | 2016 – 2019</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
