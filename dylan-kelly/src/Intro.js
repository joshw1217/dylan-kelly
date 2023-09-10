import React from 'react';
import Testimonials from './Testimonials';

const Intro= () => {

  const handleScrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      window.scrollTo({
        top: formSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="Home" className="bg-white">
      <div className="relative bg-cover bg-top h-screen" style={{ backgroundImage: 'url("cover.jpg")' }}>
        <div className="absolute top-80 left-20 sm:left-0 sm-top:40 sm:w-1/3 text-white text-3xl font-bold p-8 w-2/3">
            I'm Dylan Blake, and I help men become high value.
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          {/* Title */}
          <h2 className="mt-4 text-3xl font-bold mb-4">Welcome to Our Website</h2>

          {/* Paragraph */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc
            quis libero congue iaculis. Phasellus scelerisque nunc eu aliquam.
          </p>
          <button
          className="bg-gray-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleScrollToForm}
        >
          Get in touch
        </button>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Image */}
          <img
            className="w-full rounded-md shadow-md img-scale"
            src="/IMG_4960.JPG"
            alt="Introduction"
          />
        </div>
      </div>
      <Testimonials />
      <div id="About" className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Image */}
          <img
            className="w-full rounded-md shadow-md img-scale"
            src="/IMG_4982.JPG"
            alt="Introduction"
          />
        </div>
        <div className="md:w-1/2">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>

          {/* Paragraph */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc
            quis libero congue iaculis. Phasellus scelerisque nunc eu aliquam.
          </p>
          <button
          className="bg-gray-500 my-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleScrollToForm}
        >
          Get in touch
        </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
