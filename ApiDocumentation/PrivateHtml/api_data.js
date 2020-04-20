define({ "api": [
  {
    "type": "post",
    "url": "api/me/ToArtist",
    "title": "Change User Type to Artist",
    "name": "Change_User_Type_to_Artist",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/sign_up",
    "title": "Create a new account",
    "name": "Create_a_new_account",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/login/forgetpassword",
    "title": "Forget Password",
    "name": "Forget_Password",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/login",
    "title": "Login to Spotify",
    "name": "Login_to_Spotify",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "GET",
    "url": "api/auth/facebook",
    "title": "Login to Spotify with Facebook",
    "name": "Login_to_Spotify_with_Facebook",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/auth/facebookAndroid",
    "title": "Login to Spotify with Facebook for android native app",
    "name": "Login_to_Spotify_with_Facebook_android",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "DELETE",
    "url": "api/user/logout",
    "title": "Logout user",
    "name": "Logout_user",
    "group": "Account",
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
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/user/logout' \\\n --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/login/reset_password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Account",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1>",
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
        "content": "curl --location --request POST 'http://localhost:3000/api/login/reset_password' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\n\"password\":\"ring\"\n\n\t\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "api/notification/token",
    "title": "Set FCM Token",
    "name": "Set_FCM_Token",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/me/logout",
    "title": "logout",
    "name": "logout",
    "group": "Account",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "api/me/promote",
    "title": "make user premium",
    "name": "make_user_premium",
    "group": "Account",
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
        "Query parameters": [
          {
            "group": "Query parameters",
            "optional": false,
            "field": "credit",
            "description": "<p>card  Required. A user credit card</p>"
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
        "content": "curl --location --request POST 'http://localhost:3000/api/me/promote' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \n\\",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "api/Artist/update",
    "title": "Change a Artist's Details",
    "name": "Change_a_Artist's_Details",
    "group": "Artist",
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
        "content": "curl --location --request POST 'http://localhost:3000/api/Artist/update' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\"name\":\"new artist\",\n\"genre\":\"action,scifi\",\n\"info\":\"info\"\n\t\n}",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "post",
    "url": "api/createQueue/:playlist_id/:trackId",
    "title": "create queue",
    "name": "Create_queue",
    "group": "Player",
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
            "field": "playlist_id",
            "description": "<p>the id of the source if playlist or album</p>"
          },
          {
            "group": "path parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>the first track will be playing</p>"
          }
        ],
        "query Parameters": [
          {
            "group": "query Parameters",
            "optional": false,
            "field": "isPlaylist",
            "description": "<p>Required. is boolean determine if the source of queue is playlist or album &amp;true is playlist &amp;false album</p>"
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
        "content": "curl --location --request POST 'http://localhost:3000/api/createQueue/5e8cbe527f37604d583f8d5c/5e8cba447f37604d583f8d3b?isPlaylist=true' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}",
    "title": "add collaborator",
    "name": "Change_a_add_collaborator",
    "group": "Playlist",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "DELETE",
    "url": "/api/tracks/delete/{track_id}",
    "title": "delete track",
    "name": "delete_track",
    "group": "Track",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "/api/tracks/encryption/{track_id}/keys",
    "title": "get decryption key for track for web player",
    "name": "get_track_encryption_key_for_web_player",
    "group": "Track",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "api/tracks/android/{track_id}",
    "title": "get track for android",
    "name": "get_track_file_for_android",
    "group": "Track",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "GET",
    "url": "/api/tracks/web-player/{track_id}",
    "title": "get track for web player",
    "name": "get_track_file_for_web_player",
    "group": "Track",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "POST",
    "url": "/api/artists/me/albums/{album_id}/tracks",
    "title": "upload tracks",
    "name": "upload_tracks_to_album",
    "group": "Track",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "DELETE",
    "url": "api/remove",
    "title": "delete Current User's Profile",
    "name": "delete_Current_User's_Profile",
    "group": "Users_Profile",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Users_Profile"
  },
  {
    "type": "PUT",
    "url": "api/me/update",
    "title": "update Current User's Profile",
    "name": "update_Current_User's_Profile",
    "group": "Users_Profile",
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
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/update' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\n\"Email\":\"b@bb.com\",\n\"Password\":\"111\",\n\"Country\":\"fr\",\n\"Display_Name\":\"bb\"\n\n\t\n}'",
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
    "version": "0.0.0",
    "filename": "ApiDocumentation/Private_code/doc.js",
    "groupTitle": "Users_Profile"
  }
] });
