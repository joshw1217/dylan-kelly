import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="mr-8 alert container mx-auto">
        <div className="flex justify-center align-center alert-border h-[200px] rounded-lg shadow-md p-1">
            <div className='w-1/3 bg-white'>
                <img 
                className="self-center h-full" 
                src='checkmark.png'
                alt='Checkmark' />
            </div>
            <div className="w-2/3  bg-white flex flex-col justify-center align-center">
                <p className="text-black text-2xl">{message}</p>
                <button className="hover:text-blue-500 mt-8" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
};

export default Alert;