import axios from 'axios';

const getVCLoginCode = async () => {
  let data = JSON.stringify({
    "presentationDefinitionId": "0ff029c7-9212-4558-a04f-2d048071f9ed",
    "requestByReference": true
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://demo-api.igrant.io/v2/config/digital-wallet/openid/sdjwt/verification/send',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': 'ApiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTY29wZXMiOlsiY29uZmlnIiwiYXVkaXQiLCJzZXJ2aWNlIiwib25ib2FyZCJdLCJPcmdhbmlzYXRpb25JZCI6IjY2NTViOTg2MmUyYzMxMWI3YzM1MDY1NiIsIk9yZ2FuaXNhdGlvbkFkbWluSWQiOiI2NjU1Yjk4NTJlMmMzMTFiN2MzNTA2NTEiLCJEYXRhVmVyaWZpZXJVc2VySWQiOiIiLCJFbnYiOiIiLCJleHAiOjE3NDU0MDYzMzh9.0odMtlLY3fb1T1dcJejTlWOzNObPV4ZUaod6KTCpZGc'
    },
    data: data
  };

  try {
    const response = await axios(config);
    const vpTokenQrCode = response.data.verificationHistory?.vpTokenQrCode; // Safely access vpTokenQrCode
    const presentationExchangeId = response.data.verificationHistory?.presentationExchangeId; // Safely access presentationExchangeId
    console.log({ vpTokenQrCode, presentationExchangeId }); // Log both values
    return { vpTokenQrCode, presentationExchangeId }; // Return both values as an object
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for further handling
  }
};

getVCLoginCode();

export default getVCLoginCode;