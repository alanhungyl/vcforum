const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://demo-api.igrant.io/v2/config/digital-wallet/openid/sdjwt/verification/history/b19786d4-5795-4ec4-ada8-b5ede539b2b4',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'ApiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTY29wZXMiOlsiY29uZmlnIiwiYXVkaXQiLCJzZXJ2aWNlIiwib25ib2FyZCJdLCJPcmdhbmlzYXRpb25JZCI6IjY2NTViOTg2MmUyYzMxMWI3YzM1MDY1NiIsIk9yZ2FuaXNhdGlvbkFkbWluSWQiOiI2NjU1Yjk4NTJlMmMzMTFiN2MzNTA2NTEiLCJEYXRhVmVyaWZpZXJVc2VySWQiOiIiLCJFbnYiOiIiLCJleHAiOjE3NDU0MDYzMzh9.0odMtlLY3fb1T1dcJejTlWOzNObPV4ZUaod6KTCpZGc'
  }
};

axios(config)
  .then((response) => {
    // Safely access the verifiableCredential array
    const verifiableCredential = response.data.verificationHistory?.presentation?.vp?.verifiableCredential?.[0];
    if (verifiableCredential) {
      const college = verifiableCredential.college || 'N/A';
      const major = verifiableCredential.major || 'N/A';
      const admissionYear = verifiableCredential.admissionYear || 'N/A';

      // Log the extracted fields
      console.log({ college, major, admissionYear });
    } else {
      console.log('No verifiable credential found.');
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });