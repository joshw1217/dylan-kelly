import React, { useState } from 'react';

const Testimonials = () => {

  const [expanded, setExpanded] = useState(false);

  // Testimonials data
  const testimonials = [
    { id: 1, text: '“Dating has never been an issue for me. Dating women I really like has. What I realized from Dylan’s masterclass program is that I was marketing myself to low-value women. Together we crafted a unique look I’ve been pumped on. We also worked through some things that were holding me back from dating better women. Now I know what I want and it’s made the world of difference to me!”', img: 'codyM.jpeg', first: 'Cody', job: 'President of Sales, Elite Energy'},
    { id: 2, text: '“After a traumatic breakup I felt I was unloveable. I only wore black so people wouldn’t take notice of my appearance. Now I feel free to express who I am and women have really taken notice. I’ve gone from my dating life being almost non-existent to going out a few times a week with women Im really interested in. I can’t thank Dylan enough!”', img: 'mateo.jpeg',  first: 'Mateo', job: 'Marketing, Moxie Pest Control '},
    { id: 3, text: '"I always prioritized my work over dating. I thought if I started dating someone it would take away from my work. I couldn’t have been more wrong. I’m now dating the woman of my dreams and can’t tell you enough how she has  enhanced my life and my work. Dylan is the best in the world at what he does!!"', img: 'mikey.jpeg', first: 'Mikey', job: 'Private Equity'},
    { id: 4, text: '"I knew had no sense of style and transitioning from college into the work force I felt a bit out of place in the way I dressed. Dylan picked apart my wardrobe and helped me find foundational pieces Ive been able to mix and match easily. I get way more compliments than I use to and my confidence has been through the roof!"', img: 'drake.jpeg', first: 'Drake', job: 'Architect, Perkins and Will'},
    { id: 5, text: '“Ive always been a nice guy. What I love about Dylan is I didn’t have to change myself or be somebody I wasn’t to get better with women. Everything felt so personalized to me. Even when he styled me I felt like it was me.” ', img: 'matt.jpeg', first: 'Matthew', job: 'Manager, AT&T'},
    { id: 6, text: '"I wasn’t the best with dating. Id get anxious and often talk myself out of opportunities to approach women. Dylan gave me the confidence and tools to put myself out there more. Since then Ive gotten into a relationship and we’ve been happily dating the last four months. If you are considering this program its worth it. I definitely got more out of it then what I was expecting."', img: 'david.jpeg', first: 'David', job: 'Sales, Alder'},
    { id: 7, text: '"I found out quickly that I had a lot of limiting beliefs. Things that were preventing me from having more in my life. With Dylan’s help I was able get really honest with myself about what I wanted for my life. He kept me accountable and never eased off. From that I was able to make significantly more money than I had before in my sales job and overall I feel like a different person!!"', img: 'nick.jpeg', first: 'Nick', job: 'Regional Manager, Amivo'},
    { id: 8, text: '"Before Dylan’s masterclass I realized I was pretty rough around the edges. Seldomly would I open up. This caused me to not connect romantically with women. Through the program I was able to break free from what was keeping me so guarded. Cant recommend it enough!"', img: 'phil.jpeg', first: 'Phil', job: 'Software Engineer, Podium'},
    { id: 9, text: '“Dylan is a wizard! After my divorce I hadn’t a clue of how to date in todays world. From dating apps to creating attraction, he broke it all down in such an easy way. I value him as a friend and am so excited to continue to use everything he’s taught me.”', img: 'zachO.jpeg', first: 'Zachary', job: 'Programmer, Adobe'},
    

  ];


  // Display the first three testimonials or all testimonials based on the "expanded" state
  const displayedTestimonials = expanded ? testimonials : testimonials.slice(0, 3);


  return (
    <section id="Testimonials" className="testimonial-background rounded-xl shadow-md py-20">
      <div className="container mx-auto">
        <h2 className="other-font md:text-5xl text-4xl font-bold mb-8 text-black">TESTIMONIALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayedTestimonials.map((testimonial) => (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 md:mx-0 mx-4" key={testimonial.id}>
            <img
              src={testimonial.img}
              alt="Testimonial"
              className="img-brighten w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="flex-grow flex flex-col justify-between">
              <div>
            <p className="other-font custom-text-color font-bold text-center text-xl my-2">Meet {testimonial.first}</p>
            <p className="header-font text-gray-700 text-center">
              {testimonial.text}
            </p>
            </div>
            <p className="py-4 other-font custom-text-color font-bold text-md">{testimonial.job}</p>
            </div>
            </div>
      ))}
      </div>
      
      

      <button className="custom-navbar-button hover:bg-amber-300 text-white font-bold mt-8 py-2 px-4 rounded" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'See less' : 'See more'}
      </button>
      </div>
    </section>
  );
};

export default Testimonials;
