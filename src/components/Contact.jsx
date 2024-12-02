import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;