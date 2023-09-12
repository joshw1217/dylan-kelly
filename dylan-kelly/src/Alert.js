import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="mr-8 alert container mx-auto">
        <div className="flex justify-center align-center h-[200px] rounded-lg p-1">
            
            <div className="w-2/3 flex flex-col justify-center align-center">
                <p className="text-white md:text-4xl text-3xl">{message}</p>
                <button className="text-white md:text-3xl text-2xl hover:text-amber-300 mt-8" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
};

export default Alert;