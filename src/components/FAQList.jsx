import React from 'react';
import FAQDetails from './FAQDetails';

const FAQList = ({ faqs, deleteFaq, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {faqs.map(faq => (
        <FAQDetails key={faq.id} faq={faq} deleteFaq={deleteFaq} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default FAQList;
