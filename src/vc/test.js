const axios = require('axios');
let data = JSON.stringify({
  "issuanceMode": "InTime",
  "userPin": "5678",
  "credentialDefinitionId": "8f6225ad-82bd-4b0c-af70-50fb9e4e8115",
  "credential": {
    "credentialSubject": {
      "identifier": "123400-7899",
      "legalName": "Bygg AB"
    }
  }
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://api.igrant.io/v2/config/digital-wallet/openid/sdjwt/credential/issue',
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