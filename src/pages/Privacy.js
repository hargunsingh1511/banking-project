import React, { useState } from 'react';

function PrivacyAndSecurity() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      return;
    }

    const allValidationsPassed = Object.values(passwordValidations).every(Boolean);
    if (!allValidationsPassed) {
      setMessage('Password does not meet all requirements');
      return;
    }

    try {
      const response = await fetch('/api/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Password changed successfully');
      } else {
        setMessage(data.message || 'Error changing password');
      }
    } catch (error) {
      setMessage('Error changing password');
    }
  };

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };
    setPasswordValidations(validations);
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">Go back</button>
      <h1 className="text-2xl font-bold mb-4">Privacy & Security</h1>
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">Change password</h2>
        <p className="mb-4">Update your password to keep your account safe and protect your data.</p>
        <div className="mb-4">
          <label className="block font-bold mb-1">Current Password</label>
          <input
            type="password"
            className="border rounded w-full p-2"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">New Password</label>
          <input
            type="password"
            className="border rounded w-full p-2"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          <div className="mt-2">
            <p className={passwordValidations.length ? 'text-green-500' : 'text-red-500'}>✔️ Minimum 8 characters</p>
            <p className={passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}>✔️ At least one uppercase letter</p>
            <p className={passwordValidations.number ? 'text-green-500' : 'text-red-500'}>✔️ At least one number</p>
            <p className={passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}>✔️ At least one special character (!@#$%^&*)</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Confirm New Password</label>
          <input
            type="password"
            className="border rounded w-full p-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {message && <div className="mb-4 text-red-500">{message}</div>}
        <button
          onClick={handlePasswordChange}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default PrivacyAndSecurity;
