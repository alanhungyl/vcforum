const axios = require('axios');
let data = JSON.stringify({
  "issuanceMode": "InTime",
  "credentialDefinitionId": "1af0c77e-0dda-49f8-a7af-5cdfed403846",
  "credential": {
    "claims": {
      "fullName": "Chan Siu Ming 陳小明",
      "gender": "Male",
      "studentID": "1155123123",
      "major": "BSc Computer Science",
      "college": "United College",
      "admissionYear": "2022"
    }
  }
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://demo-api.igrant.io/v2/config/digital-wallet/openid/sdjwt/credential/issue',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'ApiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTY29wZXMiOlsiY29uZmlnIiwiYXVkaXQiLCJzZXJ2aWNlIiwib25ib2FyZCJdLCJPcmdhbmlzYXRpb25JZCI6IjY2NTViOTg2MmUyYzMxMWI3YzM1MDY1NiIsIk9yZ2FuaXNhdGlvbkFkbWluSWQiOiI2NjU1Yjk4NTJlMmMzMTFiN2MzNTA2NTEiLCJEYXRhVmVyaWZpZXJVc2VySWQiOiIiLCJFbnYiOiIiLCJleHAiOjE3NDU0MDYzMzh9.0odMtlLY3fb1T1dcJejTlWOzNObPV4ZUaod6KTCpZGc'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});