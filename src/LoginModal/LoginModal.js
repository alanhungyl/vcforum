import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

const LoginModal = ({ isOpen, onClose, children }) => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleBackdropClick}
      >
        <div className="p-8 rounded-xl" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
};

export default LoginModal;