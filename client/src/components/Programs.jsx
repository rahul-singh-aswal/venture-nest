import React from 'react';

const programs = [
  {
    title: "Pre Incubation",
    description: "Transform raw ideas into actionable plans with expert guidance and foundational resources.",
    icon: "🚀"
  },
  {
    title: "Incubation",
    description: "Build, test, and refine your startup with hands-on mentorship, resources, and workspace support.",
    icon: "🏗️"
  },
  {
    title: "Acceleration",
    description: "Scale faster with access to funding, investor networks, and advanced growth mentorship.",
    icon: "⚡"
  }
];

const Programs = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Programs & Services</h2>
      <p className="text-gray-600 mb-12">
        Discover our comprehensive range of programs designed to support startups at every stage of their journey.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <a href="#" className="text-indigo-600 font-semibold">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
