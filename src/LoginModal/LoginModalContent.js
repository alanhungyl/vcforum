import React, { useEffect, useState } from 'react';
import getVCLoginCode from '../vc/Verify_VC/GenVerifyRequest';
import { QRCodeCanvas } from 'qrcode.react';

const LoginModalContent = () => {
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
        </>
      ) : (
        <p className="text-white">{token}</p>
      )}
    </div>
  );
};

export default LoginModalContent;