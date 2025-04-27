import React from 'react';

const communityRoles = [
  { title: "Join as Startup", description: "Launch and scale your startup with our comprehensive support system.", icon: "🚀" },
  { title: "Join as Mentor", description: "Guide and support emerging startups with your expertise and experience.", icon: "👨‍🏫" },
  { title: "Join as Sponsor", description: "Support innovation and gain visibility through our programs.", icon: "💼" },
  { title: "Join as Investor", description: "Invest in promising startups and be part of their growth journey.", icon: "💰" },
  { title: "Join as VC", description: "Partner with us as a Venture Capital firm for deal flow and co-investment.", icon: "🏦" },
  { title: "Channel Partner", description: "Become our channel partner and help expand our ecosystem reach.", icon: "🌐" }
];

const Community = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Thriving Community</h2>
      <p className="text-gray-600 mb-12">Be part of our thriving community by joining in one of the following roles</p>
      <div className="grid md:grid-cols-3 gap-8">
        {communityRoles.map((role, index) => (
          <div key={index} className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="text-4xl mb-4">{role.icon}</div>
            <h3 className="text-xl font-bold mb-2">{role.title}</h3>
            <p className="text-gray-600 mb-4">{role.description}</p>
            <a href="#" className="text-indigo-600 font-semibold">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
