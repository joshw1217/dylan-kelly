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
      <div className="lg:mt-0 mt-8 relative bg-cover bg-top h-screen" style={{ backgroundImage: 'url("cover.jpg")' }}>
        <div className="absolute top-80 left-20 sm:left-0 sm-top:40 sm:w-1/3 text-white text-3xl font-bold p-8 w-2/3">
            I'm Dylan Blake, and I help men become high value.
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          {/* Title */}
          <h2 className="mt-4 text-5xl font-bold mb-4">You deserve to be seen!</h2>

          {/* Paragraph */}
          <p className="text-gray-600 mt-8 text-2xl">
          Most men are invisible to the world, to their peers, and of course beautiful women. They blend into the back ground and settle for a life they hate waking up to.  
          </p>
          <p className="text-gray-600 mt-4 text-2xl">
          I’ve been that man and have made it my life’s mission to help men just like you become irresistible. That when you walk into a room women notice, respect, and admire you as someone of high value. 
          </p>
          <p className="text-gray-600 mt-4 text-2xl">
          It’s time to become the man you always knew you were capable of becoming. 
          </p>
          <button
          className="custom-navbar-button my-8 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          <h2 className="mt-4 text-5xl font-bold mb-4">Elevate your value.</h2>

          {/* Paragraph */}
          <p className="text-gray-800 text-3xl mt-8">Are you wanting to transform your dating life and attract the woman of your dreams? I have you covered. </p>
          <p className="text-gray-600 text-2xl mt-8">
          Through my Masterclass Program you will be empowered with the skills, confidence, and style of a high value man. A man who is sure of himself, who has purpose, and has no problem attracting the right women into his life. Ready to get started?
          </p>
          <button
          className="custom-navbar-button my-8 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
