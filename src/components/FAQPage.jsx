import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FAQList from './FAQList';
import FAQForm from './FAQForm';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);  // Initialize FAQs as an empty array
  const [showForm, setShowForm] = useState(false);  // Toggle between form and list
  const [editingFaq, setEditingFaq] = useState(null);  // Holds the FAQ to be edited

  // Fetch all FAQs
  useEffect(() => {
    axios.get('https://fruit-ai-backend-ccvx.onrender.com/faqs')
      .then(response => {
        setFaqs(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  // Handle delete
  const deleteFaq = (id) => {
    axios.delete(`https://fruit-ai-backend-ccvx.onrender.com/faqs/${id}`)
      .then(() => {
        setFaqs(faqs.filter(faq => faq.id !== id));
      })
      .catch(error => console.error('Error deleting FAQ:', error));
  };

  // Handle form submission for creating or updating FAQ
  const handleFormSubmit = (faq) => {
    if (editingFaq) {
      // If editing, send PUT request to update the FAQ
      axios.put(`https://fruit-ai-backend-ccvx.onrender.com/faqs/${editingFaq.id}`, faq)
        .then((response) => {
          setFaqs(faqs.map(f => (f.id === editingFaq.id ? response.data : f)));  // Update the FAQ in the list
          setShowForm(false);
          setEditingFaq(null);
        })
        .catch(error => console.error('Error updating FAQ:', error));
    } else {
      // If creating, send POST request to create new FAQ
      axios.post('https://fruit-ai-backend-ccvx.onrender.com/faqs', faq)
        .then((response) => {
          setFaqs([...faqs, response.data]);  // Add the newly created FAQ to the list
          setShowForm(false);
        })
        .catch(error => console.error('Error creating FAQ:', error));
    }
  };

  // Handle edit button click
  const handleEditClick = (faq) => {
    setEditingFaq(faq);  // Set the FAQ to be edited
    setShowForm(true);  // Show the form for editing
  };

  return (
    <div className="container mx-auto pt-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-dosis font-bold">Frequently Asked Questions</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingFaq(null);  // Clear editing state when switching to create mode
          }}
          className="bg-cool-gradientr rounded-lg button-borde border-2 text-white py-2 px-4 hover:bg-blue-700"
        >
          {showForm ? 'View FAQs' : editingFaq ? 'Edit FAQ' : 'Create FAQ'}
        </button>
      </div>

      {showForm ? (
        <FAQForm onSubmit={handleFormSubmit} initialData={editingFaq} />
      ) : (
        <FAQList faqs={faqs} deleteFaq={deleteFaq} onEdit={handleEditClick} />
      )}
    </div>
  );
};

export default FAQPage;
