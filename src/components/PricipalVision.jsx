import React from 'react';

const PrincipalVision = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Vision Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Principal's Vision
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              As the Principal of Ahmad School & Academy System, I envision creating an educational environment that nurtures not just academic excellence, but the complete development of our students' character, creativity, and critical thinking abilities.
            </p>
            
            <p className="leading-relaxed">
              Our mission is to prepare students for the challenges of tomorrow by providing them with a strong foundation today. We believe in fostering an inclusive learning environment where every student feels valued, supported, and empowered to reach their full potential.
            </p>
            
            <p className="leading-relaxed">
              Through innovative teaching methods, state-of-the-art facilities, and a commitment to holistic education, we aim to shape responsible global citizens who will make meaningful contributions to society.
            </p>

            <div className="pt-4">
              <p className="font-semibold text-blue-900">Dr. Mazhar Iqbal</p>
              <p className="text-sm text-gray-600">PhD in Electrical Engineering from LUMS</p>
              <p className="text-sm text-gray-600">Principal, Ahmad School & Academy System</p>
            </div>
          </div>
        </div>

        {/* Principal's Image */}
        <div className="flex-1 max-w-md group">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-lg 
                          transition-all duration-300 group-hover:-top-6 group-hover:-right-6"></div>
            
            {/* Image container */}
            <div className="relative border-8 border-white shadow-lg rounded-lg overflow-hidden
                          transition-all duration-300 transform 
                          group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="/Images/principal.png"
                alt="School Principal Dr. Jane Smith"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 opacity-0 
                            transition-opacity duration-300 
                            group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalVision;