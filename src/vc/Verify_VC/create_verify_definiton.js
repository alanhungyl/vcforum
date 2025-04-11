const axios = require('axios');
let data = JSON.stringify({
  "label": "CUHK VC Verification SD-JWT",
  "presentationDefinition": {
    "id": "d70b761e-4f4d-4261-9c2a-b0ca05cc15dd",
    "input_descriptors": [
      {
        "id": "94e44bf9-fefb-4dad-8908-42950d268143",
        "name": "",
        "purpose": "",
        "format": {
          "dc+sd-jwt": {
            "alg": [
              "ES256"
            ]
          },
          "vp+sd-jwt": {
            "alg": [
              "ES256"
            ]
          }
        },
        "constraints": {
          "fields": [
            {
              "path": [
                "$.vct"
              ],
              "filter": {
                "type": "string",
                "const": "CuhkE-studentCard"
              }
            },
            {
              "path": [
                "$.major"
              ]
            },
            {
              "path": [
                "$.college"
              ]
            },
            {
              "path": [
                "$.admissionYear"
              ]
            }
          ],
          "limit_disclosure": "required"
        }
      }
    ]
  }
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://api.igrant.io/v2/config/digital-wallet/openid/sdjwt/presentation-definition',
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