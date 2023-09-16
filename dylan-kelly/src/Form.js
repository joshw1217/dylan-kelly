import React, { useState } from 'react';
import Alert from './Alert';

const Form = () => {

  const [isAlertVisible, setAlertVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    age: '',
    occupation: '',
    challenges: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* Occupation dropdown variables and logic */
  const [occupationChosen, setOccupationChosen] = useState(false);
  const handleOccupationChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setOccupationChosen(true);
  };


  /* Location dropdown variables and logic */
  /* Commented out because state field was removed
  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  ];
  const [stateChosen, setStateChosen] = useState(false);

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setStateChosen(true);
  };*/

  const handleFormSubmit = (e) => {
    e.preventDefault();


    fetch('https://sheetdb.io/api/v1/73q62wp1b3flj', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then((response) => response.json())
  .then((data) => console.log(data));

    // Show the alert after form submission
    setAlertVisible(true);
  //  console.log(formData);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };


  return (
    <div className={isAlertVisible ? "mx-auto flex flex-col md:flex-row items-left bg-cover bg-top md:h-[92vh] h-auto" : "mx-auto flex flex-col md:flex-row items-left bg-cover bg-top h-[92vh]" }style={{ backgroundImage: 'url("IMG_4966.JPG")' }}>
    <form className="md:w-1/2 max-w-md mx-auto p-4 mt-20" id="form-section" >
        <h2 className="other-font text-white text-5xl font-bold mb-4">The new you is just a click away</h2>
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2 mt-10" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
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
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      {/*<div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <select
          className={stateChosen ? "block w-full p-2 mb-4 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" : "block w-full p-2 mb-4 text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}          id="location"
          name="location"
          value={formData.location}
          onChange={handleStateChange}
          required
          >
          <option value="" hidden disabled>Select a state</option>
          {usStates.map((state) => (
          <option key={state} value={state}>
          {state}
          </option>
        ))}
        </select>
          </div> */}
      <div className="mb-4">
        <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="text"
          placeholder="How old are you?"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <label className="block text-white md:text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
        Occupation
      </label>
      <select
        className={occupationChosen ? "block w-full p-2 mb-4 text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" : "block w-full p-2 mb-4 text-gray-400 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}
        id="occupation"
        name="occupation"
        value={formData.occupation}
        onChange={handleOccupationChange}
      >
        <option value="" disabled hidden>What do you do for work?</option>
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
      
      
      <div className="mb-6 mt-10">
        <button
          className="custom-navbar-button hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          message="Thanks for submitting. We will contact you shortly." 
          onClose={handleAlertClose} />
        )}
     </div>
    </div>
  );
};

export default Form;
