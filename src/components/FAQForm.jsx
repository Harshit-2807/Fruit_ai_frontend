import React, { useState, useEffect } from 'react';

const FAQForm = ({ onSubmit, initialData }) => {
  // Initialize state with either empty fields (for creating) or pre-filled data (for editing)
  const [faq, setFaq] = useState({ question: '', answer: '' });

  // Populate the form with initial data when editing
  useEffect(() => {
    if (initialData) {
      setFaq({ question: initialData.question, answer: initialData.answer });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (faq.question && faq.answer) {
      onSubmit(faq);  // Pass the new/updated FAQ data to the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-5 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Question</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter question"
          value={faq.question}
          onChange={(e) => setFaq({ ...faq, question: e.target.value })}
        />
      </div>

      {/* Answer textarea */}
      <div className="mb-4">
        <label className="block text-gray-700">Answer</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded mt-1"
          placeholder="Enter answer"
          value={faq.answer}
          rows="5"
          onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
        />
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {initialData ? 'Update FAQ' : 'Create FAQ'}
      </button>
    </form>
  );
};

export default FAQForm;
