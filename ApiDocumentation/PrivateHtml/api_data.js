define({ "api": [
  {
    "type": "post",
    "url": "api/me/ToArtist",
    "title": "Change User Type to Artist",
    "name": "Change_User_Type_to_Artist",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "name",
            "description": "<p>Optional. The Artist name shown to public if it's not given the user name will be shown.</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "genre",
            "description": "<p>Required. The Artist Genre (Pop/Jazz/Rock/...)</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "info",
            "description": "<p>Required. The Artist's Overview shown to public</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a confirmation sent to the Spotify Admins </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/me/ToArtist' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\"name\":\"new artist\",\n\"genre\":\"action,scifi\",\n\"info\":\"info\"\n\t\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     Artist Succeded\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/premium/confirm",
    "title": "Confirm Premium",
    "name": "Confirm_Premium",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "Query parameter": [
          {
            "group": "Query parameter",
            "optional": false,
            "field": "id",
            "description": "<p>{string} Required. the User id .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ],
        "Link Sent To User Email": [
          {
            "group": "Link Sent To User Email",
            "optional": false,
            "field": "Format",
            "description": "<p>http://52.87.106.56/premium/confirm?id=5eb08fce30a9a01f144b722d</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/premium/confirm?id=5eb08fce30a9a01f144b722d'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/login/confirm",
    "title": "Confirm Signup",
    "name": "Confirm_Signup",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "Query parameter": [
          {
            "group": "Query parameter",
            "optional": false,
            "field": "id",
            "description": "<p>{string} Required. the User id .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ],
        "Link Sent To User Email": [
          {
            "group": "Link Sent To User Email",
            "optional": false,
            "field": "Format",
            "description": "<p>http://52.87.106.56/confirm?id=5eb08fce30a9a01f144b722d</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login/confirm?id=5eb08fce30a9a01f144b722d'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/sign_up",
    "title": "Create a new account",
    "name": "Create_a_new_account",
    "group": "Account",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">add new user.</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Required. The content type of the request body: application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Required. The display_name of new user</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Required. The password of new user</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Required. the country of new user</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Required. The email of the user (which is unique).</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>Required. The type of new user ( m:male or f:female).</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>Required. The birthday of a new user</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains the created user object in JSON format and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for the new user. On error, the header status code is an error code and the response body contains an error object. Trying to create a user when you do not have the user’s authorization returns error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/sign_up' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\"username\":\"name\",\n\"password\":\"123\",\n\"country\":\"eg\",\n\"email\":\"b@b.com\",\n\"gender\":\"male\",\n\"birthday\":\"1/1/1999\"\n\t\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/login/forgetpassword",
    "title": "Forget Password",
    "name": "Forget_Password",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "Body parameter": [
          {
            "group": "Body parameter",
            "optional": false,
            "field": "email",
            "description": "<p>{string} Required. the User e-mail in Spotify Accounts</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login/forgetpassword' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\n\"email\":\"b@b.com\"\n\n\t\n}'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/login",
    "title": "Login to Spotify",
    "name": "Login_to_Spotify",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "email",
            "description": "<p>Required. the User e-mail in Spotify Accounts</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "password",
            "description": "<p>Required. the User Password in Spotify Accounts</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login' \\\n--data-raw '{\n\t\"email\":\"nada5aled52@gmail.com\",\n\t\"password\":\"nada1234\"\n'}'/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "GET",
    "url": "api/auth/facebook",
    "title": "Login to Spotify with Facebook",
    "name": "Login_to_Spotify_with_Facebook",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error, redirects to GET login</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3YzJlZGQ3OGZkMzQ1MThmOWViYTIiLCJpYXQiOjE1ODYwMzA0NTEsImV4cCI6MTE1NTY5ODM3NTc2NTF9.tteoEG6Udupn3qwQYTq5PpdpldP40IbP8yaxHGL8B5k\"}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/auth/facebookAndroid",
    "title": "Login to Spotify with Facebook for android native app",
    "name": "Login_to_Spotify_with_Facebook_android",
    "group": "Account",
    "version": "1.1.0",
    "description": "<p>login with facebook using android custom route</p> <h1>Endpoint</h1>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error,send 404 if email not found</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "optional": false,
            "field": "email",
            "description": "<p>Required user email</p>"
          },
          {
            "group": "Body",
            "optional": false,
            "field": "name",
            "description": "<p>Required user display name</p>"
          },
          {
            "group": "Body",
            "optional": false,
            "field": "gender",
            "description": "<p>optional user gender Male/Female</p>"
          },
          {
            "group": "Body",
            "optional": false,
            "field": "photos",
            "description": "<p>optional user photos</p>"
          },
          {
            "group": "Body",
            "optional": false,
            "field": "birthday",
            "description": "<p>optional user birthday</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3YzJlZGQ3OGZkMzQ1MThmOWViYTIiLCJpYXQiOjE1ODYwMzA0NTEsImV4cCI6MTE1NTY5ODM3NTc2NTF9.tteoEG6Udupn3qwQYTq5PpdpldP40IbP8yaxHGL8B5k\"}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/user/logout",
    "title": "Logout user",
    "name": "Logout_user",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ],
        "body parameters": [
          {
            "group": "body parameters",
            "optional": false,
            "field": "currentTimeStampe",
            "description": "<p>optional  current second in track when user logout</p>"
          },
          {
            "group": "body parameters",
            "optional": false,
            "field": "isRepeatTrack",
            "description": "<p>optional   if user select repeat track mode</p>"
          },
          {
            "group": "body parameters",
            "optional": false,
            "field": "volume",
            "description": "<p>optional  current volume in web</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "ccurl --location --request POST 'http://localhost:3000/api/user/logout' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOGZmNjMwYTlhMDFmMTQ0YjcyMzEiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5MDgyNjkzLCJleHAiOjQ3MzU1NjkwOTN9.i-6sBIXMCGwChT0Ou1OTFoVV75i7lSlAlLM7Mf9l0zw' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\n      \"currentTimeStampe\":0.445,\n      \"isRepeatTrack\":true,\n      \"volume\":5\n      \n        \n}",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/login/reset_password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body parameter": [
          {
            "group": "Body parameter",
            "optional": false,
            "field": "password",
            "description": "<p>{string} Required. the User new password .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/login/reset_password' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n \\\n--data-raw '{\n\n\"password\":\"ring\"\n\n\t\n}'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/sendmail",
    "title": "Send confirmation mail",
    "name": "Send_confirmation_mail",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ],
        "Link Sent To User Email": [
          {
            "group": "Link Sent To User Email",
            "optional": false,
            "field": "Format",
            "description": "<p>http://52.87.106.56/confirm?id=5eb08fce30a9a01f144b722d</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/sendmail' \n --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/notification/token",
    "title": "Set FCM Token",
    "name": "Set_FCM_Token",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body parameter": [
          {
            "group": "Body parameter",
            "optional": false,
            "field": "fcmToken",
            "description": "<p>{string} Required. the User FCM token  .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/notification/token' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n \\\n--data-raw '{\n\n\"fcmToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NDA1NzM2LCJleHAiOjQ3MzM4OTIxMzZ9.8I49BShfQiu6D7Jkh8hiQM7Ap02BmyShsOHgFQDlNaw\"\n\n\t\n}'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "GET",
    "url": "api/me/notifications",
    "title": "User notifications",
    "name": "User_notifications",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is array of json notifications objects  </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api//me/notifications'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"data\": {\n            \"artistId\": \"5eb0a4749b15d854c08f736e\",\n            \"albumId\": \"5ececb4ceedca51f5079346b\",\n            \"title\": \"WOOOOOH NEW ALBUM\",\n            \"body\": \"Nada Uploaded a New Album -- CHECK IT OUT !\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/me/logout",
    "title": "logout",
    "name": "logout",
    "group": "Account",
    "version": "1.1.0",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "id",
            "description": "<p>Required. The User ID in Spotify Accounts</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a user object </br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "api/me/free",
    "title": "make user free",
    "name": "make_user_free",
    "group": "Account",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">make user free.</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains the user_id and credit card and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for promote . On error, the header status code is an error code and the response body contains an error object. Trying to promote when you do not have the user’s authorization returns error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/free' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NTg3ODcxLCJleHAiOjQ3MzQwNzQyNzF9.K3X2eOVhdvgpWqpTBTVEdqAr8ukiT7hZAne5OpLgztA' \\\n--header 'Content-Type: application/json' \\\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"success\": \"become free\"  \n  }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "api/me/promote",
    "title": "make user premium",
    "name": "make_user_premium",
    "group": "Account",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">promote user to premium.</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>Required. A user credit card</p>"
          },
          {
            "group": "Body parameters",
            "optional": false,
            "field": "expiresDate",
            "description": "<p>Required. the card expire date</p>"
          },
          {
            "group": "Body parameters",
            "optional": false,
            "field": "isMonth",
            "description": "<p>Required.boolean if  for month or for  year  (if need -can be change to number from (1---&gt;12)  if for 3 month or 2 ,else)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains the user_id and credit card and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for promote . On error, the header status code is an error code and the response body contains an error object. Trying to promote when you do not have the user’s authorization returns error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/promote' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTljZjQ1YWUxNzZhOTI5NzBmMzY4OGEiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU4NzM0NDQ3NCwiZXhwIjozMjU1OTMwMDk5NzI3NH0.ltM83Tf00e2yM9cHIa4z0OktdFjU5QOtbdSnHhi8SNw' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\n        \"expiresDate\":\"2020-12-03\",\n        \"cardNumber\": \"374245455400126\",\n       \"isMonth\": false\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"success\":\"promote to premium \"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "delete",
    "url": "/api/artist/:album_id",
    "title": "",
    "name": "upload_tracks_to_album",
    "group": "Album",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">delete album and all its tracks by its artist </p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "album_id",
            "description": "<p>the album id  want to delete</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>200 if success,403 forbidden if not an artist or doesn't own the album or 404 if failed to delete album</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage ",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/artist/5e8cb9327f37604d583f8d25' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NjAyNDE2LCJleHAiOjQ3MzQwODg4MTZ9.djYsfv1BbS72dnnJM42mTN0032lagwW9fxMAT0nZtJw' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"deleted succesfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Album"
  },
  {
    "type": "PUT",
    "url": "api/Artist/update",
    "title": "Change a Artist's Details",
    "name": "Change_a_Artist's_Details",
    "group": "Artist",
    "version": "1.1.0",
    "description": "<p>update artist info</p> <p style=\"color:red;\">Change a Artist's Details Change a Artist’s name and genre and info .</p> Note that the request data is a JSON string, not separate fields <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Required if URIs are passed in the request body, otherwise ignored. The content type of the request body: application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Optional. The new name for the Artist</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": "<p>Optional.types of most artist's track example &quot; genre1,genre2,genre3&quot;</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>Optional.all information about this artist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Trying to change an artist when you do not have the user’s authorization returns error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/Artist/update' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\"name\":\"new artist\",\n\"genre\":\"action,scifi\",\n\"info\":\"info\"\n\t\n}",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{   \n       \"genre\": [\n           \"rytyt\",\n           \"genre2\",\n           \"genre1\"\n       ],\n       \"_id\": \"5e7f67e438150c15e8589ece\",\n       \"info\": \"jdshgdjdhfjkd\",\n       \"popularity\": 0,\n       \"type\": \"Artist\",\n       \"Name\": \"yytguguy\",\n       \"userId\": \"5e7f670838150c15e8589ecc\",\n       \"images\": [],\n       \"addAlbums\": [],\n       \"addTracks\": [],\n      \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "delete",
    "url": "api/artist/:album_id",
    "title": "Delete Album",
    "name": "Delete_Album",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Artist delete Album</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/artist/:album_id' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"deleted album \"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body Contains a success message.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/me/artist",
    "title": "Get Artist from user.",
    "name": "Get_Artist_from_user.",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Artist from user.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/artist' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"genre\": [\n        \"genre1\",\n        \"genre2\",\n        \"genre3\"\n    ],\n    \"_id\": \"5e8cb7037f37604d583f8d22\",\n    \"info\": \"the best\",\n    \"popularity\": 501,\n    \"type\": \"Artist\",\n    \"Name\": \"nada\",\n    \"userId\": \"5e8cb118084a9d2e6c8f21d7\",\n    \"images\": [\n        {\n            \"_id\": \"5ea0cc8a797460648cddaee4\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0ccf9797460648cddaee5\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0cd7f797460648cddaee6\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0cedf797460648cddaee7\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0cfa060db613e6456bad4\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d09e98ae49324cb48956\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d11e13f2868b68e56815\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d1431acc036114533537\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d2b21acc036114533544\",\n            \"height\": 830,\n            \"width\": 1914\n        },\n        {\n            \"_id\": \"5ea0d3191acc036114533545\",\n            \"height\": 830,\n            \"width\": 1914\n        },\n        {\n            \"_id\": \"5ea0d3541acc036114533546\",\n            \"height\": 830,\n            \"width\": 1914\n        },\n        {\n            \"_id\": \"5ea0d3f1199f605c7038af34\",\n            \"height\": 830,\n            \"width\": 1914\n        },\n        {\n            \"_id\": \"5ea0d4bd199f605c7038af35\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d5b5199f605c7038af36\",\n            \"height\": 2204,\n            \"width\": 3920\n        },\n        {\n            \"_id\": \"5ea0d6ac199f605c7038af37\",\n            \"height\": 2204,\n            \"width\": 3920\n        }\n    ],\n    \"addAlbums\": [\n        {\n            \"_id\": \"5e8cb9457f37604d583f8d28\",\n            \"albumId\": \"5e8cb9457f37604d583f8d27\"\n        },\n        {\n            \"_id\": \"5e8cb94b7f37604d583f8d2a\",\n            \"albumId\": \"5e8cb94b7f37604d583f8d29\"\n        },\n        {\n            \"_id\": \"5e8cb9557f37604d583f8d2c\",\n            \"albumId\": \"5e8cb9557f37604d583f8d2b\"\n        },\n        {\n            \"_id\": \"5e8cb95d7f37604d583f8d2e\",\n            \"albumId\": \"5e8cb95d7f37604d583f8d2d\"\n        },\n        {\n            \"_id\": \"5e8cb96a7f37604d583f8d30\",\n            \"albumId\": \"5e8cb96a7f37604d583f8d2f\"\n        },\n        {\n            \"_id\": \"5e8cb9747f37604d583f8d32\",\n            \"albumId\": \"5e8cb9747f37604d583f8d31\"\n        },\n        {\n            \"_id\": \"5e8cb97b7f37604d583f8d34\",\n            \"albumId\": \"5e8cb97b7f37604d583f8d33\"\n        },\n        {\n            \"_id\": \"5e8cb9827f37604d583f8d36\",\n            \"albumId\": \"5e8cb9827f37604d583f8d35\"\n        }\n    ],\n    \"addTracks\": [\n        {\n            \"_id\": \"5e8ce86082c8d9579467fb75\",\n            \"trackId\": \"5e8ce86082c8d9579467fb73\"\n        },\n        {\n            \"_id\": \"5e8ce86882c8d9579467fb78\",\n            \"trackId\": \"5e8ce86882c8d9579467fb76\"\n        },\n        {\n            \"_id\": \"5e8ce86c82c8d9579467fb7b\",\n            \"trackId\": \"5e8ce86c82c8d9579467fb79\"\n        },\n        {\n            \"_id\": \"5e8ce87182c8d9579467fb7e\",\n            \"trackId\": \"5e8ce87182c8d9579467fb7c\"\n        },\n        {\n            \"_id\": \"5e8ce87682c8d9579467fb81\",\n            \"trackId\": \"5e8ce87682c8d9579467fb7f\"\n        },\n        {\n            \"_id\": \"5e8ce8b282c8d9579467fb84\",\n            \"trackId\": \"5e8ce8b282c8d9579467fb82\"\n        },\n        {\n            \"_id\": \"5e8ce8bb82c8d9579467fb87\",\n            \"trackId\": \"5e8ce8bb82c8d9579467fb85\"\n        },\n        {\n            \"_id\": \"5e8ce8bf82c8d9579467fb8a\",\n            \"trackId\": \"5e8ce8bf82c8d9579467fb88\"\n        },\n        {\n            \"_id\": \"5e8ce8c482c8d9579467fb8d\",\n            \"trackId\": \"5e8ce8c382c8d9579467fb8b\"\n        },\n        {\n            \"_id\": \"5e8ce8c982c8d9579467fb90\",\n            \"trackId\": \"5e8ce8c982c8d9579467fb8e\"\n        }\n    ],\n    \"__v\": 68\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body Contains an Artist Object.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "post",
    "url": "api/createQueue/:sourceId/:trackId",
    "title": "create queue",
    "name": "Create_queue",
    "group": "Player",
    "version": "1.1.0",
    "description": "<p>create queue for user</p> <p style=\"color:red;\">create the user playback queue </p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path parameters": [
          {
            "group": "path parameters",
            "optional": false,
            "field": "sourceId",
            "description": "<p>required.the id of the source if playlist or album but if you will send an array of track not playlist and not album but it by any value you need and put tracksIds with array of tracks</p>"
          },
          {
            "group": "path parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>required .the first track will be playing</p>"
          }
        ],
        "query Parameters": [
          {
            "group": "query Parameters",
            "optional": false,
            "field": "isPlaylist",
            "description": "<p>optional. is boolean determine if the source of queue is playlist or album &amp;true is playlist &amp;false album</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "optional": false,
            "field": "sourceType",
            "description": "<p>optional if you will send array write the the name which define this tracks</p>"
          },
          {
            "group": "Body Parameters",
            "optional": false,
            "field": "tracksIds",
            "description": "<p>optional if you will send array tracks</p>"
          }
        ],
        "response": [
          {
            "group": "response",
            "optional": false,
            "field": "success",
            "description": "<p>200 &amp; error 400</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/createQueue/5e8cbe527f37604d583f8d5c/5e8cba447f37604d583f8d3b?isPlaylist=true' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\nOR\ncurl --location --request POST 'http://localhost:3000/api/createQueue/0/5eb1acf0371bc537ec792bbe' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5MzgyNDc0LCJleHAiOjQ3MzU4Njg4NzR9.wGYAj-M2tedMOutlO2BCyoGw3XhZzHaMDSH3m8sAJq0' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\n     \"sourceType\":\"ratio\",\n     \"tracksIds\":[\"5eb1a5b3a5ebd959e08d5746\",\"5eb1acf0371bc537ec792bbe\",\"5eb0a55eec0c444e9c48982f\",\"5eb0a5a1ec0c444e9c489834\",\"5eb0a5e3ec0c444e9c489839\"]\n          \n}\n'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}",
    "title": "add collaborator",
    "name": "Change_a_add_collaborator",
    "group": "Playlist",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">add a Playlist's collaborator. (The user must, of course, own the playlist.)</p> Note that the request data is a JSON string, not separate fields <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The Spotify ID for the playlist</p>"
          }
        ],
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "type": "array_string",
            "optional": false,
            "field": "username",
            "description": "<p>Required . users'name of the user who will be collaborator</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Trying to change a playlist when you do not have the user’s authorization returns error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Required if URIs are passed in the request body, otherwise ignored. The content type of the request body: application/json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\n\"username\":\"new name,name,nada\"\n\n\t\n}'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "DELETE",
    "url": "/api/tracks/delete/{track_id}",
    "title": "delete track",
    "name": "delete_track",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">delete track from database and from all instances that it occurs in</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the trackID</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "200",
            "description": "<p>status if deleted successfully elss error code will be sent</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/tracks/delete/5e9a288b65140b24a8cba950' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"success\": \"deleted track\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "PUT",
    "url": "/api/tracks/update/{track_id}",
    "title": "edit track",
    "name": "edit_track",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">edit track parameters in database</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the trackID</p>"
          }
        ],
        "Body Parameter": [
          {
            "group": "Body Parameter",
            "optional": false,
            "field": "availableMarkets",
            "description": "<p>array containing the available markets for a track</p>"
          },
          {
            "group": "Body Parameter",
            "optional": false,
            "field": "genre",
            "description": "<p>array containing the genres for a track</p>"
          },
          {
            "group": "Body Parameter",
            "optional": false,
            "field": "duration",
            "description": "<p>number of seconds of the track</p>"
          },
          {
            "group": "Body Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>name of the track</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>the new updated track on success with 200 code, on failure 403 error message</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage ",
        "content": "\ncurl --location --request PUT 'http://localhost:3000/api/tracks/update/5eb0a499ec0c444e9c489820' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAzYzMwYTlhMDFmMTQ0YjcyMzgiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg4OTU5NTg5LCJleHAiOjQ3MzU0NDU5ODl9.lI3hEl7ic6R4Qpv6JI2TcIFTumVhhWR2IzdfsSzYrV4' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\"name\":\"track_76\",\n\"genre\":[\"normal\",\"pop\"],\n\"availableMarkets\":[\"fr\",\"en\"],\n\"duration\":1000\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"availableMarkets\": [\n        \"fr\",\n        \"en\"\n    ],\n    \"genre\": [\n        \"normal\",\n        \"pop\"\n    ],\n    \"_id\": \"5eb0a499ec0c444e9c489820\",\n    \"url\": \"undefined\",\n    \"images\": [\n        {\n            \"_id\": \"5eb0b3d4de66c65e34c18b5b\",\n            \"height\": 100,\n            \"width\": 100\n        }\n    ],\n    \"duration\": 1000,\n    \"trackNumber\": 12,\n    \"name\": \"track_76\",\n    \"artistId\": \"5eb0a44b9b15d854c08f7362\",\n    \"albumId\": \"5eb0a498ec0c444e9c48981e\",\n    \"discNumber\": 1,\n    \"explicit\": false,\n    \"type\": \"Track\",\n    \"acousticness\": 74,\n    \"danceability\": 44,\n    \"energy\": 34,\n    \"instrumentalness\": 33,\n    \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n    \"liveness\": 68,\n    \"loudness\": 63,\n    \"mode\": 32,\n    \"speechiness\": 79,\n    \"tempo\": 1,\n    \"timeSignature\": \"2020-05-04T23:26:17.951Z\",\n    \"valence\": 49,\n    \"like\": 0,\n    \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n    \"__v\": 11\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "/api/tracks/encryption/{track_id}/keys",
    "title": "get decryption key for track for web player",
    "name": "get_track_encryption_key_for_web_player",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">get track media file encryption key and keyId for web player</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the trackID</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Key",
            "description": "<p>object wiith 200 status  on success, and if incorrect track then 404</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/tracks/web-player/5e973b973ca79e980c34ec04?type=medium' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n    \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "api/tracks/android/{track_id}",
    "title": "get track for android",
    "name": "get_track_file_for_android",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">get track media file for android</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the trackID</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Optional. can be &quot;high&quot; or &quot;medium&quot; or &quot;low&quot; or &quot;review&quot; it has a default of &quot;medium&quot;,if free user and choose high quality it will automatically set to medium</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>media file stream on success, and if incorrect track then 404, if error in streaming will be 500 insternal server error</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/tracks/android/5e9b64e4e9c8d87fdc2ecbd8?type=review' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U'",
        "type": "curl"
      }
    ],
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "/api/tracks/web-player/{track_id}",
    "title": "get track for web player",
    "name": "get_track_file_for_web_player",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">get track media file for web player</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the trackID</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Optional. can be &quot;high&quot; or &quot;medium&quot; or &quot;low&quot; , it has a default of &quot;medium&quot;,if free user and choose high quality it will automatically set to medium</p>"
          },
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Required.the jwt token for the user</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>media file stream on success, and if incorrect track then 404, if error in streaming will be 500 insternal server error</p>"
          }
        ]
      }
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "POST",
    "url": "/api/artists/me/albums/{album_id}/tracks",
    "title": "upload tracks",
    "name": "upload_tracks_to_album",
    "group": "Track",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">upload tracks by artist to specific album, only artist with valid album can upload track to this album</p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "album_id",
            "description": "<p>the album id to which track will be added</p>"
          }
        ],
        "form-data": [
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "high",
            "description": "<p>Required the hight qaulity version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "medium",
            "description": "<p>Required the medium qaulity version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "low",
            "description": "<p>Required the low qaulity version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "high_enc",
            "description": "<p>Required the hight qaulity encrypted version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "medium_enc",
            "description": "<p>Required the medium qaulity encrypted version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "low_enc",
            "description": "<p>Required the low qaulity encrypted version of the track</p>"
          },
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "review",
            "description": "<p>Required the review track to be shown for android</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Required.name of the track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": false,
            "field": "trackNumber",
            "description": "<p>Required.number of the track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "availableMarkets",
            "description": "<p>Required. comma seperated string with available markets for track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "string",
            "optional": false,
            "field": "genres",
            "description": "<p>Required. comma seperated string with genre of track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Required. track duration in milliseconds</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>Required. encryption key used to encrypt the track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "keyId",
            "description": "<p>Required. encryption key id used to encrypt the track</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>200 if success,403 forbidden if not an artist or doesn't own the album or 404 if failed to upload the track</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/artists/me/albums/5e8cb9327f37604d583f8d25/tracks?name=track1&availableMarkets=%22eg,fr%22&trackNumber=12&duration=1200&key=a4631a153a443df9eed0593043db7519&keyId=f3c5e0361e6654b28f8049c778b23946' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \\\n\n--form 'high=@/F:/softwareEng/eme/sub/audio_320k.webm' \\\n--form 'medium=@/F:/softwareEng/eme/sub/audio_256k.webm' \\\n--form 'low=@/F:/softwareEng/eme/sub/audio_128k.webm' \\\n--form 'review=@/F:/softwareEng/eme/sub/audio_review.webm' \\\n--form 'high_enc=@/F:/softwareEng/eme/sub/audio_320k_e.webm' \\\n--form 'medium_enc=@/F:/softwareEng/eme/sub/audio_256k_e.webm' \\\n--form 'low_enc=@/F:/softwareEng/eme/sub/audio_128k_e.webm'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"uploaded succesfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "DELETE",
    "url": "api/remove",
    "title": "delete Current User's Profile",
    "name": "delete_Current_User's_Profile",
    "group": "Users_Profile",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">delete current user profile.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a success object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"success\":\"user deleted\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Users_Profile"
  },
  {
    "type": "PUT",
    "url": "api/me/update",
    "title": "update Current User's Profile",
    "name": "update_Current_User's_Profile",
    "group": "Users_Profile",
    "version": "1.1.0",
    "description": "<p style=\"color:red;\">update current user profile.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>optional. email to be updated to, should be new email and not already existing one.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>optional. password to be updated to.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "Country",
            "description": "<p>optional. country to be updated to.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "Display_Name",
            "description": "<p>optional. name to be updated to.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>optional. A user credit card</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "date",
            "optional": false,
            "field": "expiresDate",
            "description": "<p>optional. the card expire date</p>"
          },
          {
            "group": "Body parameters",
            "type": "boolean",
            "optional": false,
            "field": "isMonth",
            "description": "<p>optional if  for month or for  year  (if need -can be change to number from (1---&gt;12)  if for 3 month or 2 ,else)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a success object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "url --location --request PUT 'http://localhost:3000/api/me/update' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NTg3ODcxLCJleHAiOjQ3MzQwNzQyNzF9.K3X2eOVhdvgpWqpTBTVEdqAr8ukiT7hZAne5OpLgztA' \\\n--header 'Content-Type: application/json' \\\n\n--data-raw '{\n\t\"Email\": \"ayaabohadima@gmail.com\",\n        \"Password\": \"123456\",\n        \"Country\": \"Eg\",\n        \"Display_Name\": \"Aya Samir\",\n        //if premium can send \n        \"expiresDate\":\"2020-12-09\",\n        \"cardNumber\": \"374245455400126\",\n        \"isMonth\": true\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"success\":\"information has been updated successfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Users_Profile"
  }
] });
