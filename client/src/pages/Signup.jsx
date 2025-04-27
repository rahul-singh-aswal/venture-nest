import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded">Create Account</button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-indigo-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
