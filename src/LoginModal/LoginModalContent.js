import React, { useEffect, useState } from 'react';
import getVCLoginCode from '../vc/Verify_VC/GenVerifyRequest';
import { QRCodeCanvas } from 'qrcode.react';
import { getVerifiableCredential } from '../vc/Read_VC/getVC';

const LoginModalContent = ({ onLoginSuccess }) => {
  const [token, setToken] = useState('Loading...');
  const [presentationExchangeId, setPresentationExchangeId] = useState(null);
  const [isPolling, setIsPolling] = useState(false); // To track polling state

  useEffect(() => {
    const fetchTokenAndStartPolling = async () => {
      try {
        const { vpTokenQrCode, presentationExchangeId } = await getVCLoginCode();
        setToken(vpTokenQrCode || 'No token available');
        setPresentationExchangeId(presentationExchangeId || 'No ID available');

        if (presentationExchangeId) {
          startPolling(presentationExchangeId); // Start polling after fetching the token
        }
      } catch (error) {
        setToken('Error fetching token');
        setPresentationExchangeId('Error fetching ID');
      }
    };

    fetchTokenAndStartPolling();
  }, []);

  const startPolling = (presentationExchangeId) => {
    setIsPolling(true); // Start polling
    const intervalId = setInterval(async () => {
      try {
        console.log('Polling getVerifiableCredential with ID:', presentationExchangeId); // Debug log

        const { college, major, admissionYear } = await getVerifiableCredential(presentationExchangeId);

        if (college && major && admissionYear) {

          // Pass the fetched data to the parent component
          onLoginSuccess({ college, major, admissionYear });

          clearInterval(intervalId); // Stop polling
          setIsPolling(false);
        }
      } catch (error) {
        console.error('Error in pollForCredential:', error.message); // Log errors but continue polling
      }
    }, 5000); // Poll every 5 seconds
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
              borderRadius: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <QRCodeCanvas value={token} size={256} />
          </div>
          <p className="text-white mt-4 text-sm">Presentation Exchange ID: {presentationExchangeId}</p>
        </>
      ) : (
        <p className="text-white">{token}</p>
      )}
    </div>
  );
};

export default LoginModalContent;