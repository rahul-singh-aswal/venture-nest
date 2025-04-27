import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-purple-100 py-20 flex flex-col md:flex-row items-center justify-between px-8">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold">Empowering Startups. Igniting Innovation.</h1>
        <p className="text-gray-700">
          Join our startup accelerator program and transform your innovative ideas into successful ventures. Get access to mentorship, funding, and a global network.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">Apply Now</button>
      </div>
      <img src="/path/to/your/hero-image.png" alt="Hero" className="w-full md:w-1/2 mt-8 md:mt-0" />
    </section>
  );
};

export default HeroSection;
