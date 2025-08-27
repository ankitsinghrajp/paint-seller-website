import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-96 mt-20 bg-gray-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1755288556498-0aa1eb1f16f3?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            🎨 We'd love to hear from you and help bring your vision to life
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default ContactHero;