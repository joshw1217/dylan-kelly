import React, { useState } from 'react';
import Alert from './Alert';

const Form = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here

    // Show the alert after form submission
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };


  return (
    <div className="mx-auto flex flex-col md:flex-row items-left bg-cover bg-top h-1/2" style={{ backgroundImage: 'url("IMG_4966.JPG")' }}>
    <form className="md:w-1/2 max-w-md mx-auto p-4 mt-20" id="form-section" >
        <h2 className="text-white text-5xl font-bold mb-4">The new you is just a click away</h2>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2 mt-10" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Your phone number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Where do you live?"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="text"
          placeholder="How old are you?"
        />
      </div>
      <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
        Occupation
      </label>
      <select
        className="block w-full p-2 mb-4 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="occupation"
        name="occupation"
      >
        <option value="">What do you do for work?</option>
        <option value="Tech">Tech</option>
        <option value="Health">Health</option>
        <option value="Business">Business</option>
        <option value="Industrial">Industrial</option>
        <option value="Law">Law</option>
        <option value="Education">Education</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Arts">Arts</option>
        <option value="Retail">Retail</option>
        <option value="Other">Other</option>
  
      </select>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="challenges">
          Challenges?
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="challenges"
          type="text"
          placeholder="What are your current challenges right now?"
        />
      </div>
      
      <div className="mb-6 mt-10">
        <button
          className="custom-navbar-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleFormSubmit}
        >
          Get in touch
        </button>
      </div>
    </form>
     <div className="flex justify-center items-end max-height mb-20 md:w-1/2 md:ml-0 ml-4">
     {isAlertVisible && (
          <Alert 
          message="Form submitted successfully!" 
          onClose={handleAlertClose} />
        )}
     </div>
    </div>
  );
};

export default Form;
