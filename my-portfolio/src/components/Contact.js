import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white">
      <div className="mb-4 md:mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">GET IN TOUCH</h2>
        <p className="text-blue-500 text-xs md:text-base">Let's Work Together</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        <div>
          <div className="text-blue-500 text-xl md:text-3xl mb-2 md:mb-4">📞</div>
          <h3 className="text-base md:text-xl font-semibold">Phone & Mobile</h3>
          <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-base">+885 972455842</p>
          <p className="text-gray-400 text-xs md:text-base">+123-456-7890</p>
        </div>
        <div>
          <div className="text-blue-500 text-xl md:text-3xl mb-2 md:mb-4">📧</div>
          <h3 className="text-base md:text-xl font-semibold">Email & Website</h3>
          <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-base">rineyblack.com</p>
          <p className="text-gray-400 text-xs md:text-base">reallygreatsite.com</p>
        </div>
        <div>
          <div className="text-blue-500 text-xl md:text-3xl mb-2 md:mb-4">📍</div>
          <h3 className="text-base md:text-xl font-semibold">Address</h3>
          <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-base">Borey Sorlar, Street 371, Ou Bek K'am</p>
          <p className="text-gray-400 text-xs md:text-base">Saensokh, Phnom Phenh</p>
        </div>
        <div>
          <div className="text-blue-500 text-xl md:text-3xl mb-2 md:mb-4">📷</div>
          <h3 className="text-base md:text-xl font-semibold">Instagram</h3>
          <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-base">rineyblack.com</p>
        </div>
      </div>
      <div className="mt-8 md:mt-12 text-center">
        <h3 className="text-xl md:text-3xl font-extrabold text-gray-700">YOUERN RIN</h3>
        <p className="text-gray-500 text-xs md:text-base">PORTFOLIO ONLINE</p>
      </div>
    </section>
  );
};

export default Contact;
