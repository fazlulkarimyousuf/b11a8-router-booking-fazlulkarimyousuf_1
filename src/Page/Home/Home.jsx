import React from 'react';

const Home = () => {
    return (
         <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 relative inline-block">
          <span className="relative z-10">Dependable Care, Backed by Trusted Professionals.</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="w-full md:w-[300px] px-4 py-3 rounded-full border border-gray-300  text-blue-600 shadow-sm"
          />
          <button className="btn btn-primary">Search Now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center max-w-4xl mx-auto">
        <img src="https://i.ibb.co/MxZ8MzLK/banner-img-1.png" alt="" />
        <img src="https://i.ibb.co/MxZ8MzLK/banner-img-1.png" alt="" />
        </div>
      </div>
    </section>
    );
};

export default Home;