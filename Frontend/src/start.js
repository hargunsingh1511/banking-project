import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Start() {
  // State to track which buttons have been clicked
  const [clickedButtons, setClickedButtons] = useState({
    fscs: false,
    tnc: false,
    keyFeatures: false,
    privacyPolicy: false
  });

  // Function to handle button click
  const handleButtonClick = (key, pdfLink) => {
    window.open(pdfLink, '_blank');
    setClickedButtons(prevState => ({ ...prevState, [key]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
        <div className="flex items-center">
          <img src="image.png" className="h-9 mr-4 App-logo" alt="Banking Logo" />
          <a href="/" className="text-blue-800 font-bold text-xl mr-6">BANKING.CO</a>
          <div className="flex space-x-6 text-gray-700">
            <a href="/" className="hover:text-blue-700">HOME</a>
            <a href="/" className="hover:text-blue-700">LOANS</a>
            <a href="/" className="hover:text-blue-700">ABOUT US</a>
            <a href="/" className="hover:text-blue-700">CONTACT US</a>
          </div>
        </div>
      </nav>

      {/* New Account Summary Section */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h6 className="text-center text-xl font-semibold mb-6">Important Documents to Review</h6>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-center font-semibold mb-4">Please read all the given documents carefully and then continue the registration process.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Document Card 1 */}
              <button className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleButtonClick('fscs', 'path/to/your/file.pdf')}>
                <div className="text-center">
                  <div>
                    <div class="mt-0 mr-10 text-green-500">
                    {clickedButtons.fscs && (
                 <div className="flex items-left text-green-500 ">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                 <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="22 4 12 14.01 9 11.01" />
                 </svg>
                 </div>
                 )}</div>
                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                      {/* Replace with your icon */}
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    
                    <div className="ml-4">
                      <div className="flex items-right text-gray-800 font-semibold">FSCS Information</div>
                      <div className="flex items-right text-gray-500">Read and review
            
                
                      {/* Replace with your right arrow icon */}
                      <svg className="flex items-left w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                    </div>
                  </div>
               
                </div>
              </button>

              {/* Document Card 2 */}
              <button className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleButtonClick('tnc', 'path/to/tnc.pdf')}>
                <div className="text-center">
                  <div>
                  <div class="mt-0 mr-10 text-green-500">
                    {clickedButtons.tnc && (
                 <div className="flex items-left text-green-500 ">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                 <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="22 4 12 14.01 9 11.01" />
                 </svg>
                 </div>
                 )}</div>
                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                      {/* Replace with your icon */}
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-right text-gray-800 font-semibold">Terms & Conditions</div>
                      <div className="flex items-right text-gray-500">Read and review
                 
                    <div className="ml-auto">
                      {/* Replace with your right arrow icon */}
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Document Card 3 */}
              <button className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleButtonClick('keyFeatures', 'path/to/key_features.pdf')}>
                <div className="text-center">
                  <div>
                  <div class="mt-0 mr-10 text-green-500">
                    {clickedButtons.keyFeatures && (
                 <div className="flex items-left text-green-500 ">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                 <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="22 4 12 14.01 9 11.01" />
                 </svg>
                 </div>
                 )}</div>
                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                      {/* Replace with your icon */}
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-right text-gray-800 font-semibold">Key Features & Summary Box</div>
                      <div className="flex items-right text-gray-500">Read and review
                    
                    <div className="ml-2">
                      {/* Replace with your right arrow icon */}
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>
              </button>

              {/* Document Card 4 */}
              <button className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleButtonClick('privacyPolicy', 'path/to/privacy_policy.pdf')}>
                <div className="text-center">
                  <div>
                  <div class="mt-0 mr-10 text-green-500">
                    {clickedButtons.privacyPolicy && (
                 <div className="flex items-left text-green-500 ">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                 <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="22 4 12 14.01 9 11.01" />
                 </svg>
                 </div>
                 )}</div>
                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                      {/* Replace with your icon */}
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-right text-gray-800 font-semibold">Privacy Policy</div>
                      <div className="flex items-right text-gray-500">Read and review
                   
                    <div className="ml-auto">
                      {/* Replace with your right arrow icon */}
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </button>

            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <Link to="/nextStep">
                <button
                  className={`bg-blue-600 text-white py-2 px-6 rounded-lg ${
                    Object.values(clickedButtons).every(Boolean) ? '' : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!Object.values(clickedButtons).every(Boolean)}
                >
                  Continue Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Start;
