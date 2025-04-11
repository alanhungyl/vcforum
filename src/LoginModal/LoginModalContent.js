import React, { useEffect, useState } from 'react';
import getVCLoginCode from '../vc/Verify_VC/GenVerifyRequest';
import { QRCodeCanvas } from 'qrcode.react'; // Use QRCodeCanvas instead of QRCode

const LoginModalContent = () => {
  const [token, setToken] = useState('Loading...');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const vpTokenQrCode = await getVCLoginCode();
        setToken(vpTokenQrCode || 'No token available');
      } catch (error) {
        setToken('Error fetching token');
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
          <div className="flex items-center justify-center mt-8">
            <QRCodeCanvas value={token} size={256} />
          </div>
        </>
      ) : (
        <p className="text-white">{token}</p>
      )}
    </div>
  );
};

export default LoginModalContent;