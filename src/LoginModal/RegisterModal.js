import React, { useState } from 'react';
import axios from 'axios';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    major: '',
    college: '',
    yearOfAdmission: '',
  });

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      major: '',
      college: '',
      yearOfAdmission: '',
    });
  };

  const handleConfirm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        username: formData.username,
        password: formData.password,
        major: formData.major,
        college: formData.college,
        yearOfAdmission: formData.yearOfAdmission,
      });
      console.log('Registration successful:', response.data);
      onClose(); // Close the modal after successful registration
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.response?.data || 'Registration failed');
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="p-8 rounded-xl block-background-color" onClick={(e) => e.stopPropagation()}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
        />
        <input
          type="text"
          name="college"
          placeholder="College"
          value={formData.college}
          onChange={handleChange}
        />
        <input
          type="text"
          name="yearOfAdmission"
          placeholder="Year of Admission"
          value={formData.yearOfAdmission}
          onChange={handleChange}
        />
        <button className = "btn btn-sucess" onClick={handleReset}>Reset</button>
        <button className = "btn btn-error" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default RegisterModal;
