import React from 'react';

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-start p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">EXPERIENCE</h2>
        <div className="bg-blue-500 h-1 w-20 mb-4"></div>
        <div className="text-6xl font-extrabold text-gray-700 mb-6">
          2021 - 2023
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="text-blue-500 mr-4">➤</div>
          <div>
            <h3 className="text-xl font-semibold">Arrowai Industries</h3>
            <p className="text-gray-400 mb-2">Head Content Creator 2022 - 2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
              nisl ac aliquet pretium.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="text-blue-500 mr-4">➤</div>
          <div>
            <h3 className="text-xl font-semibold">Borcelle</h3>
            <p className="text-gray-400 mb-2">Junior Content Creator 2021 - 2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
              nisl ac aliquet pretium.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="text-blue-500 mr-4">➤</div>
          <div>
            <h3 className="text-xl font-semibold">Borcelle</h3>
            <p className="text-gray-400 mb-2">Junior Content Creator 2020 - 2021</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet massa sed leo molestie ultrices in non mi. Suspendisse mollis
              nisl ac aliquet pretium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;