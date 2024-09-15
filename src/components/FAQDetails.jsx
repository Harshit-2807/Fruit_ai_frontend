import React from 'react';

const FAQDetails = ({ faq, deleteFaq, onEdit }) => {
  return (
    <div className="border rounded-lg shadow-lg p-5 bg-white">
      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
      <p className="text-gray-700 mb-4">{faq.answer}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onEdit(faq)}  // Pass the FAQ to the edit handler
          className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteFaq(faq.id)}
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FAQDetails;
