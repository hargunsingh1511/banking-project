import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const usernameRegex = /^[a-zA-Z0-9]{8,20}$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if (!usernameRegex.test(username)) {
            newErrors.username = 'Username must be 8-20 characters long and contain only letters and numbers.';
        }

        if (!passwordRegex.test(password)) {
            newErrors.password = 'Password must be at least 8 characters long, contain at least one number and one uppercase letter.';
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match. Please try again.';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            alert('Form submitted successfully!');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex flex-col  h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center shadow-md z-50" aria-label="Main Navigation">
                <div className="flex items-center">
                    {/* <img src="image.png" className="h-9 mr-4 App-logo" alt="Banking Logo" /> */}
                    <a href="#" className="text-blue-800 font-bold text-xl mr-6">BANKING.CO</a>
                    <div className="flex space-x-6 text-gray-700">
                        <a href="/Dashboard" className="hover:text-blue-700">HOME</a>
                        <a href="#" className="hover:text-blue-700">LOANS</a>
                        <a href="#" className="hover:text-blue-700">ABOUT US</a>
                        <a href="#" className="hover:text-blue-700">CONTACT US</a>
                    </div>
                </div>
                {/* <div className="flex items-center">
                    <Link to='/LoginDetails' className="bg-red-600 text-white px-6 py-2 rounded-full ml-4 hover:bg-red-800">Login</Link>
                </div> */}
            </nav>

            <div className="mt-24 bg-white p-10 rounded-lg shadow-lg max-w-xxl w-full">
                <h2 className="text-xl font-semibold mb-2 text-red-500">Create your login details</h2>
                <p className="text-gray-600 mb-6">Keep your details safe - you'll need them later</p>
                <hr className="border-t-2 border-gray-200 my-6" />
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username*</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 block max-w-xs w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {errors.username && <div className="text-red-600 text-sm mt-1">{errors.username}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 block max-w-xs w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password*</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 p-2 block max-w-xs w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {errors.confirmPassword && <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>}
                    </div>
                </form>

                {/* Button is now outside of the form */}
                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
