import React from 'react';

const TokenModal = ({ isOpen, onClose, token }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Your Token</h2>
        <p className="text-gray-700 break-words">{token}</p>
        <button
          className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TokenModal;