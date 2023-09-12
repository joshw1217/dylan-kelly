import React, { useState } from 'react';

const Testimonials = () => {

  const [expanded, setExpanded] = useState(false);

  // Testimonials data
  const testimonials = [
    { id: 1, text: '“Dating has never been an issue for me. Dating women I really like has. What I realized from Dylan’s masterclass program is that I was marketing myself to low value women. Together we crafted a unique look I’ve been pumped on. We also worked through some things that were holding me back from dating better women. Now I know what I want and it’s made the world of difference to me!”', img: 'codyM.jpeg', alias: 'Cody M.', job: 'President of Sales, Elite Energy'},
    { id: 2, text: '“After a traumatic breakup I felt I was unloveable. I grew my hair out and wore baggy clothing because I was hiding who I was. Now I feel free to express who I am and woman have really taken notice. I’ve gone from my dating life being almost no existent to going out a few times a week with women Im really interested in. I can’t thank Dylan enough!”', img: 'frankT.jpeg', alias: 'Frank T.', job: 'Owns Medicare business'},
    { id: 3, text: '“ Dylan is a wizard! After my divorce I hadn’t a clue of how to date in todays world. From dating apps to creating attraction, he broke it all down in such an easy way. I value him as a friend and am so excited to continue to use everything he’s taught me.”', img: 'zachO.jpeg', alias: 'Zachary O.', job: 'Programmer, Adobe'},
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
        <h2 className="text-5xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayedTestimonials.map((testimonial) => (
        <div className="bg-white rounded-lg shadow-md p-6" key={testimonial.id}>
            <img
              src={testimonial.img}
              alt="Testimonial 3"
              className="img-brighten w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Review */}
            <p className="text-gray-700 text-center">
              {testimonial.text}
            </p>
            <div className="px-6 py-4 flex justify-between items-end">
              <p className="custom-text-color text-sm">~ {testimonial.alias}</p>
              <p className="custom-text-color text-sm">{testimonial.job}</p>
              </div>
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
