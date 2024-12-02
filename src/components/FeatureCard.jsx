import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;