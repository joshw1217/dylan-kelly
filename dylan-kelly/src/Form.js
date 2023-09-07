import React from 'react';

const Form = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-left bg-cover bg-top h-1/2" style={{ backgroundImage: 'url("IMG_4966.JPG")' }}>
    <form className="md:w-1/2 max-w-md mx-auto p-4 mt-20" id="form-section" >
        <h2 className="navbar-font text-5xl font-bold mb-4">The new you is just a click away</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-10" htmlFor="name">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your phone number"
        />
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Salary Range
      </label>
      <select
        className="block w-full p-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="country"
        name="country"
      >
        <option value="">Select an annual salary range</option>
        <option value="<100">$0 - $100,000</option>
        <option value="100-200">$100,000 - $200,000</option>
        <option value="200-300">$200,000 - $300,000</option>
        <option value="300-400">$300,000 - $400,000</option>
        <option value="400-500">$400,000 - $500,000</option>
        <option value=">500">$500,000+</option>
  {/* Add more options as needed */}
      </select>
      {/* Add more input fields similarly */}
      <div className="mb-6 mt-10">
        <button
          className="custom-navbar-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Get in touch
        </button>
      </div>
    </form>
    <div className="w-1/2"></div>
    </div>
  );
};

export default Form;
