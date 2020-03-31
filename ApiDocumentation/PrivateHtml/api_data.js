define({ "api": [
  {
    "type": "post",
    "url": "/me/ToArtist",
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
            "field": "Authorization",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "/sign_up",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "/login/forgetpassword",
    "title": "Forget Password",
    "name": "Forget_Password",
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
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/login",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "/auth/facebook",
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
          "content": "{\"success\":true,\"token\":\"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdmNzE3YjU3MjQ5ZjIyODhkYzEyZjQiLCJpYXQiOjE1ODU1MDU5MDksImV4cCI6MTU4NTU5MjMwOX0.HniUR47rVmHBvuALPeD4rPZ-YERu4zHCogjxWPymHRw\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "me/logout",
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
            "field": "Authorization",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "/promote",
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
            "field": "Authorization",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "id",
            "description": "<p>Required. A user id who want to promote apiparam (Query parameters) credit card  Required. A user credit card</p>"
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
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Account"
  },
  {
    "type": "PUT",
    "url": "/Artist/update",
    "title": "Change a Artist's Details",
    "name": "Change_a_Artist's_Details",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Change a Artist's Details Change a Artist’s name and genre and info .</p> Note that the request data is a JSON string, not separate fields <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "Artist_id",
            "description": "<p>The Spotify ID for the Artist</p>"
          }
        ],
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
            "description": "<p>Optional.type of most artist's track</p>"
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
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
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
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Artist"
  },
  {
    "type": "post",
    "url": "/createQueue/:playlist_id/:trackId",
    "title": "",
    "name": "Create_queue",
    "group": "Player",
    "description": "<p style=\"color:red;\">create the user playback queue </p> <h1> Request parameters</h1>  </br></br><h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
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
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "/playlists/{playlist_id}",
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
            "field": "Authorization",
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
    "version": "0.0.0",
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "DELETE",
    "url": "/remove",
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
            "field": "Authorization",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Users_Profile"
  },
  {
    "type": "PUT",
    "url": "/me/update",
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
            "field": "Authorization",
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
    "filename": "Private_code/docs-private.js",
    "groupTitle": "Users_Profile"
  }
] });
