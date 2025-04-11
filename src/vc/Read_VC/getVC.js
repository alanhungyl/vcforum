import axios from 'axios';

export const getVerifiableCredential = async (presentationExchangeId) => {
    if (!presentationExchangeId) {
      throw new Error('presentationExchangeId is required');
    }
  
    console.log('Using presentationExchangeId:', presentationExchangeId); // Debug log
  
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://demo-api.igrant.io/v2/config/digital-wallet/openid/sdjwt/verification/history/${presentationExchangeId}`,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': 'ApiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTY29wZXMiOlsiY29uZmlnIiwiYXVkaXQiLCJzZXJ2aWNlIiwib25ib2FyZCJdLCJPcmdhbmlzYXRpb25JZCI6IjY2NTViOTg2MmUyYzMxMWI3YzM1MDY1NiIsIk9yZ2FuaXNhdGlvbkFkbWluSWQiOiI2NjU1Yjk4NTJlMmMzMTFiN2MzNTA2NTEiLCJEYXRhVmVyaWZpZXJVc2VySWQiOiIiLCJFbnYiOiIiLCJleHAiOjE3NDU0MDYzMzh9.0odMtlLY3fb1T1dcJejTlWOzNObPV4ZUaod6KTCpZGc'
      }
    };
  
    try {
      const response = await axios(config);
      console.log('API response:', response.data); // Debug log
  
      const verifiableCredential = response.data.verificationHistory?.presentation?.vp?.verifiableCredential?.[0];
      if (verifiableCredential) {
        const college = verifiableCredential.college || 'N/A';
        const major = verifiableCredential.major || 'N/A';
        const admissionYear = verifiableCredential.admissionYear || 'N/A';
  
        return { college, major, admissionYear };
      } else {
        throw new Error('No verifiable credential found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error.response?.data || error.message); // Improved error logging
      throw error;
    }
  };