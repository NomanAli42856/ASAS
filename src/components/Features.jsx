import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: "Academic Excellence",
      description: "Rigorous curriculum with a focus on critical thinking and problem-solving"
    },
    {
      title: "Individual Attention",
      description: "Special support for students with learning difficulties"
    },
    {
      title: "Safety and Security",
      description: "Trained security personnel and emergency protocols"
    },
    {
      title: "Parental Involvement",
      description: "Weekly parent-teacher meetings"
    },
    {
      title: "Fun Activities",
      description: "Sports, arts, and music classes to keep students active and creative"
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and smooth user experience"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;