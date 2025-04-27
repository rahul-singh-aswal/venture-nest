import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Investor / Startup Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">My Applications</h2>
          <p className="text-gray-600">View your startup applications, funding rounds, and updates.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Messages</h2>
          <p className="text-gray-600">Communicate with investors, mentors, and the team.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
