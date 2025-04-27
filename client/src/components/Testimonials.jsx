import React from 'react';

const testimonials = [
  {
    name: "Sarah B.",
    title: "Marketing Director, TechVision AI",
    quote: "This product has transformed the way we work. Our efficiency and collaboration have skyrocketed!"
  },
  {
    name: "Sarah B.",
    title: "Marketing Director, TechVision AI",
    quote: "This product has transformed the way we work. Our efficiency and collaboration have skyrocketed!"
  },
  {
    name: "Sarah B.",
    title: "Marketing Director, TechVision AI",
    quote: "This product has transformed the way we work. Our efficiency and collaboration have skyrocketed!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-6 text-center space-y-4 shadow hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-200">
              {/* You can replace this circle with profile image */}
              <img src="/path/to/user-image.png" alt="User" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-600">"{testimonial.quote}"</p>
            <div className="text-md font-bold">{testimonial.name}</div>
            <div className="text-gray-400 text-sm">{testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
