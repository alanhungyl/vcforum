const axios = require('axios');
let data = JSON.stringify({
  "label": "CUHK VC Definition",
  "vct": "CUHK E-Student Card",
  "claims": {
    "type": "object",
    "properties": {
      "fullName": {
        "type": "string",
        "limitDisclosure": true
      },
      "gender": {
        "type": "string",
        "limitDisclosure": true
      },
      "studentID": {
        "type": "string",
        "limitDisclosure": true
      },
      "major": {
        "type": "string",
        "limitDisclosure": true
      },
      "college": {
        "type": "string",
        "limitDisclosure": true
      },
      "admissionYear": {
        "type": "string",
        "limitDisclosure": true
      }
    },
    "required": [
      "fullName",
      "gender",
      "studentID",
      "major",
      "college",
      "admissionYear"
    ]
  },
  "credentialFormat": "dc+sd-jwt"
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://demo-api.igrant.io/v2/config/digital-wallet/openid/sdjwt/credential-definition',
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