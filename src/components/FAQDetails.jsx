import React from 'react';

const FAQDetails = ({ faq, deleteFaq, onEdit }) => {
  return (
    <div className="border rounded-lg shadow-lg p-5 bg-white hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
      <p className="text-gray-700 mb-4">{faq.answer}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onEdit(faq)}  // Pass the FAQ to the edit handler
          className="bg-cool-gradientr text-white py-1 px-4 rounded hover:text-blue-200 hover:shadow-lg"
        >
          Edit
        </button>
        <button
          onClick={() => deleteFaq(faq.id)}
          className="bg-red-gradient text-white py-1 px-4 rounded hover:text-red-600 hover:shadow-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FAQDetails;
