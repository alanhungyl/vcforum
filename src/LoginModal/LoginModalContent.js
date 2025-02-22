import React, { useState } from 'react';
import axios from 'axios';

const LoginModalContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [major, setMajor] = useState('');
  const [college, setCollege] = useState('');
  const [yearOfAdmission, setYearOfAdmission] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      alert(response.data);
    } catch (error) {
      alert('Incorrect Password or Username');
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleReset = () => {
    setRegisterUsername('');
    setRegisterPassword('');
    setConfirmPassword('');
    setMajor('');
    setCollege('');
    setYearOfAdmission('');
  };

  const handleConfirm = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className="block-background-color p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto block-background-color p-6 rounded-lg ">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <button
            className="block-background-color w-1/2 mx-auto hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          <button
            className="block-background-color w-1/2 hover:bg-gray-400 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </form>
      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal-box block-background-color p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-center mb-4">Register</h3>
            <div className="py-4">
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full mb-2"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-2"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full mb-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Major"
                className="input input-bordered w-full mb-2"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
              <input
                type="text"
                placeholder="College"
                className="input input-bordered w-full mb-2"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
              <input
                type="text"
                placeholder="Year of Admission"
                className="input input-bordered w-full mb-2"
                value={yearOfAdmission}
                onChange={(e) => setYearOfAdmission(e.target.value)}
              />
            </div>
            <div className="modal-action flex items-center justify-between space-x-4">
              <button
                className="block-background-color w-1/2 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="block-background-color w-1/2 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default LoginModalContent;