import React from 'react';

const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <span className="text-xl text-gray-500">
          {isActive ? '−' : '+'}
        </span>
      </button>
      {isActive && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;