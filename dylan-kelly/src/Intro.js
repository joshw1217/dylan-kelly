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
        <div className="other-font absolute top-80 left-20 sm:left-0 sm-top:40 sm:w-1/3 text-white text-3xl font-bold p-8 w-2/3">
            I'm Dylan Blake, and I help men become high value.
        </div>
      </div>
      <div className="container flex flex-col md:flex-row md:mx-auto items-center">
        <div className="md:w-1/2 w-full">
          {/* Title */}
          <h2 className="other-font md:mt-4 mt-12 md:text-5xl text-2xl font-bold mb-4">YOU DESERVE TO BE SEEN!</h2>

          {/* Paragraph */}
          <p className=" header-font text-gray-600 mt-8 md:text-2xl mx-8 text-md">
          Most men are invisible to the world, their peers, and of course, beautiful women. They blend into the background and settle for a life they hate waking up to. 
          </p>
          <p className="header-font text-gray-600 mt-4 md:text-2xl mx-8 text-md">
          I’ve been that man, and have made it my life’s mission to help men just like you become irresistible - so when you walk into a room women will notice, respect, and admire you as someone of high value. 
          </p>
          <p className="header-font text-gray-600 mt-4 md:text-2xl mx-8 text-md">
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

        <div className="md:w-1/2 md:mt-0">
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
          <h2 className="other-font mt-4 md:text-5xl text-2xl font-bold mb-4">ELEVATE YOUR VALUE.</h2>

          {/* Paragraph */}
          <p className="header-font text-gray-600 md:text-2xl text-md mt-8 mx-8 ">Are you wanting to transform your dating life and attract the woman of your dreams? I have you covered. </p>
          <p className="header-font text-gray-600 md:text-2xl text-md mt-8 mx-8">
          Through my Masterclass Program you will be empowered with the skills, confidence, and style of a high-value man. A man who is sure of himself, who has purpose, and has no problem attracting the right women into his life. Ready to get started?
          </p>
          <button
          className="custom-navbar-button my-8 md:mb-0 mb-16 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
