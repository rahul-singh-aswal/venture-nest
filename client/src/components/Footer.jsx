import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">LOGO</h3>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Investor</li>
            <li>Startup</li>
            <li>Join as Mentor</li>
            <li>Acceleration</li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2024 Social Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
