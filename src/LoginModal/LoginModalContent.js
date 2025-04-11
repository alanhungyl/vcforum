import React, { useEffect, useState } from 'react';
import getVCLoginCode from '../vc/Verify_VC/GenVerifyRequest';
import { QRCodeCanvas } from 'qrcode.react';
import { getVerifiableCredential } from '../vc/Read_VC/getVC';

const LoginModalContent = ({ onLoginSuccess }) => { // Accept onLoginSuccess as a prop
  const [token, setToken] = useState('Loading...');
  const [presentationExchangeId, setPresentationExchangeId] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const { vpTokenQrCode, presentationExchangeId } = await getVCLoginCode();
        setToken(vpTokenQrCode || 'No token available');
        setPresentationExchangeId(presentationExchangeId || 'No ID available');
      } catch (error) {
        setToken('Error fetching token');
        setPresentationExchangeId('Error fetching ID');
      }
    };

    fetchToken();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!presentationExchangeId) {
        alert('Presentation Exchange ID is missing.');
        return;
      }

      console.log('Calling getVerifiableCredential with ID:', presentationExchangeId); // Debug log

      const { college, major, admissionYear } = await getVerifiableCredential(presentationExchangeId);
      alert(`College: ${college}\nMajor: ${major}\nAdmission Year: ${admissionYear}`);

      // Pass the fetched data to the parent component
      onLoginSuccess({ college, major, admissionYear });
    } catch (error) {
      alert('Failed to fetch verifiable credential. Please try again.');
      console.error('Error in handleSubmit:', error.message); // Improved error logging
    }
  };

  return (
    <div
      className="block-background-color p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-center"
      style={{ width: '800px', height: '600px' }}
    >
      {token && token !== 'Loading...' && token !== 'Error fetching token' && token !== 'No token available' ? (
        <>
          <p className="text-white mb-8 font-bold text-2xl">
            Scan the QR Code with your wallet app to present your CUHK Verifiable Credential
          </p>
          <div
            className="flex items-center justify-center mt-8"
            style={{
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '16px', // Rounded corners for the container
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional shadow for a smoother look
            }}
          >
            <QRCodeCanvas value={token} size={256} />
          </div>
          <p className="text-white mt-4 text-sm">Presentation Exchange ID: {presentationExchangeId}</p>
          <button
            className="btn btn-ghost custom-purple-bg text-white text-xl mt-8 py-2"
            onClick={handleSubmit} // Updated onClick handler
          >
            Submit
          </button>
        </>
      ) : (
        <p className="text-white">{token}</p>
      )}
    </div>
  );
};

export default LoginModalContent;