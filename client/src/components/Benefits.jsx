import React from 'react';

const Benefits = () => {
  return (
    <section className="py-16 px-8 bg-gray-100 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg space-y-6">
        <h2 className="text-3xl font-bold">Exclusive Benefits<br />For Our Members</h2>
        <div className="flex space-x-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded">Apply for Membership</button>
          <button className="border border-black text-black px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img src="/path/to/vip-card-image.png" alt="VIP Membership Card" className="w-80 rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default Benefits;
