import React from 'react';

const events = [
  {
    date: "June 15, 2024",
    title: "Startup Pitch Night",
    description: "Present your startup to investors and get valuable feedback."
  },
  {
    date: "June 20, 2024",
    title: "Growth Marketing Workshop",
    description: "Learn effective strategies to scale your startup."
  },
  {
    date: "June 25, 2024",
    title: "Investor Meetup",
    description: "Network with angel investors and VC firms."
  }
];

const Events = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-6 space-y-4">
              <div className="text-sm text-gray-500">{event.date}</div>
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
