import React from 'react';

const LoginModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="p-8 rounded-xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default LoginModal;