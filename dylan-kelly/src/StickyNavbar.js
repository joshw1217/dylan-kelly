import React from 'react';

const StickyNavbar = () => {

    const handleScrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
          window.scrollTo({
            top: formSection.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      };

      // document.addEventListener("DOMContentLoaded", function () {
      //   const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
      //   anchorLinks.forEach((link) => {
      //     link.addEventListener("click", function (e) {
      //       e.preventDefault();
      //       const targetId = this.getAttribute("href").substring(1);
      //       const targetElement = document.getElementById(targetId);
            
      //       if (targetElement) {
      //         const offset = 40; // Adjust this value to set your desired offset
      //         const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      //        // targetElement.scrollIntoView({ top: targetOffset, behavior: "smooth" });
      //       }
      //     });
      //   });
      // });

  return (
    <nav className="bg-white text-grey-900 py-4 fixed top-0 w-full z-10">
      <div className="md:container mx-4 md:mx-auto navbar-font">
        {/* Your navbar content */}
        <div className="flex justify-between items-center">
        <div className="pl-8 md:flex space-x-4 md:space-x-8 hidden">
            <a href="#Home">
              <p className="hover:text-blue-500">Home</p>
            </a>
            <a href="#About">
              <p className="hover:text-blue-500">About</p>
            </a>
            <a href="#Testimonials">
              <p className="hover:text-blue-500">Reviews</p>
            </a>
          </div>
          <div className="text-l md:text-xl font-bold">High Value Mentors</div>
          <button
            className="custom-navbar-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleScrollToForm}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;