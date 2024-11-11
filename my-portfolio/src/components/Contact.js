import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2">GET IN TOUCH</h2>
        <p className="text-blue-500">Let's Work Together</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-blue-500 text-3xl mb-4">📞</div>
          <h3 className="text-xl font-semibold">Phone & Mobile</h3>
          <p className="text-gray-400 mt-2">+885 972455842</p>
          <p className="text-gray-400">+123-456-7890</p>
        </div>
        <div>
          <div className="text-blue-500 text-3xl mb-4">📧</div>
          <h3 className="text-xl font-semibold">Email & Website</h3>
          <p className="text-gray-400 mt-2">rineyblack.com</p>
          <p className="text-gray-400">reallygreatsite.com</p>
        </div>
        <div>
          <div className="text-blue-500 text-3xl mb-4">📍</div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-400 mt-2">Borey Sorlar, Street 371, Ou Bek K'am </p>
          <p className="text-gray-400">Saensokh, Phnom Phenh</p>
        </div>
        <div>
          <div className="text-blue-500 text-3xl mb-4">📷</div>
          <h3 className="text-xl font-semibold">Instagram</h3>
          <p className="text-gray-400 mt-2">rineyblack.com</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-extrabold text-gray-700">YOUERN RIN</h3>
        <p className="text-gray-500">PORTOFOLIO ONLINE</p>
      </div>
    </section>
  );
};

export default Contact;