import React, { useState } from 'react';

const LoginPage = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with:', username, password);
    closeModal();  // Close the modal after login attempt
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}  // Close when clicking outside the modal
    >
      <div
        className="bg-white rounded-lg p-6 w-96 mx-auto"
        onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside the modal
      >
        <h2 className="text-lg font-bold text-center mb-4">Log in to your account !</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 mt-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button type="submit" className="mt-4 bg-pink-800 text-white px-4 py-2 w-full rounded">
            Login
          </button>
        </form>

        <button
          onClick={closeModal}
          className="mt-4 block text-center text-gray-200 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPage;