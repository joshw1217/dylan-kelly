import React, { useState } from 'react';

const Testimonials = () => {

  const [expanded, setExpanded] = useState(false);

  // Testimonials data
  const testimonials = [
    { id: 1, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 2, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 3, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 4, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 5, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 6, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 7, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 8, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},
    { id: 9, text: 'Vestibulum vehicula feugiat leo, a rhoncus libero.' + 
    'Nulla facilisi. Duis consectetur commodo felis, vel fermentum urna aliquet sitamet.', img: 'IMG_4960.JPG'},

  ];


  // Display the first three testimonials or all testimonials based on the "expanded" state
  const displayedTestimonials = expanded ? testimonials : testimonials.slice(0, 3);


  return (
    <section id="Testimonials" className="bg-gray-300 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayedTestimonials.map((testimonial) => (
        <div className="bg-white rounded-lg shadow-md p-6" key={testimonial.id}>
            <img
              src={testimonial.img}
              alt="Testimonial 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Review */}
            <p className="text-gray-700 text-center">
              {testimonial.text}
            </p>
            </div>
      ))}
      </div>
      
      <button className="bg-gray-500 hover:bg-black text-white font-bold mt-8 py-2 px-4 rounded" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      </div>
    </section>
  );
};

export default Testimonials;
