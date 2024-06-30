import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
        <div className="flex items-center">
          {/* <img src="image.png" className="h-9 mr-4 App-logo" alt="Banking Logo" /> */}
          <a href="#" className="text-blue-800 font-bold text-xl mr-6">BANKING.CO</a>
          <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-700">HOME</a>
            <a href="#" className="hover:text-blue-700">LOANS</a>
            <a href="#" className="hover:text-blue-700">ABOUT US</a>
            <a href="#" className="hover:text-blue-700">CONTACT US</a>
          </div>
        </div>
        <div className="flex items-center">
          <Link to='#' className="bg-red-600 text-white px-6 py-2 rounded-full ml-4 hover:bg-red-800">Login</Link>
        </div>
      </nav>

      {/* Background Image Section */}
      <section aria-label="Welcome Section" className="bgsection">
        <div className="overlay">
          <p className="text-4xl md:text-5xl lg:text-3xl font-bold">Welcome to Our Site</p>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">Discover our features and products. Enjoy seamless banking with our easy access accounts and more.</p>
          <Link to="/start" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800">APPLY NOW</Link>
        </div>
      </section>

      {/* New Account Summary Section */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h6 className="text-center text-xl font-semibold mb-6">Account summary</h6>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-center font-semibold mb-4">Key features and benefits:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <span className="block text-l font-bold">1</span>
                <p>You can deposit any amount between £1 and £200</p>
              </div>
              <div className="text-center">
                <span className="block text-l font-bold">2</span>
                <p>You can add to your savings at any time (up to the £200 maximum)</p>
              </div>
              <div className="text-center">
                <span className="block text-l font-bold">3</span>
                <p>You can withdraw your money without giving us notice</p>
              </div>
              <div className="text-center">
                <span className="block text-l font-bold">4</span>
                <p>If your balance falls below £50 your interest rate will reduce to 0.10% AER / 0.10% monthly GROSS (fixed) until your balance increases to £50 or more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

