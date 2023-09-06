import React from 'react';

const Intro= () => {
  return (
    <section className="bg-white">
      <div className="relative bg-cover bg-top h-screen" style={{ backgroundImage: 'url("cover.jpg")' }}>
        <div className="absolute top-40 left-0 text-white text-3xl font-bold p-8 w-1/3">
            I'm Dylan Blake, and I help men become high value.
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>

          {/* Paragraph */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nunc
            quis libero congue iaculis. Phasellus scelerisque nunc eu aliquam.
          </p>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Image */}
          <img
            className="w-full rounded-md shadow-md img-scale"
            src="/IMG_4960.JPG"
            alt="Introduction Image"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Image */}
          <img
            className="w-full rounded-md shadow-md img-scale"
            src="/IMG_4982.JPG"
            alt="Introduction Image"
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
        </div>
      </div>
    </section>
  );
};

export default Intro;
