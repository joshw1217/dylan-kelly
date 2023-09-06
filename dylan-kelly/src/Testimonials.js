import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Picture */}
            <img
              src="dylan-kelly-placeholder.jpeg"
              alt="Testimonial 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Review */}
            <p className="text-gray-700 text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              nunc quis libero congue iaculis."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Picture */}
            <img
              src="dylan-kelly-placeholder.jpeg"
              alt="Testimonial 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Review */}
            <p className="text-gray-700 text-center">
              "Vestibulum vehicula feugiat leo, a rhoncus libero. Nulla facilisi.
              Duis consectetur commodo felis, vel fermentum urna aliquet sit
              amet."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Picture */}
            <img
              src="dylan-kelly-placeholder.jpeg"
              alt="Testimonial 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Review */}
            <p className="text-gray-700 text-center">
              "Pellentesque ac euismod dolor. Nullam nec venenatis turpis.
              Vestibulum sit amet augue nec justo dictum iaculis."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
