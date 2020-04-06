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
    "filename": "private_code/doc.js",
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
    "filename": "private_code/doc.js",
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
    "filename": "private_code/doc.js",
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
    "filename": "private_code/doc.js",
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
          "content": "{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3YzJlZGQ3OGZkMzQ1MThmOWViYTIiLCJpYXQiOjE1ODYwMzA0NTEsImV4cCI6MTE1NTY5ODM3NTc2NTF9.tteoEG6Udupn3qwQYTq5PpdpldP40IbP8yaxHGL8B5k\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "private_code/doc.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "/auth/facebookAndroid",
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
    "filename": "private_code/doc.js",
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
    "filename": "private_code/doc.js",
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
            "field": "x-auth-token",
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
    "filename": "private_code/doc.js",
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
    "version": "0.0.0",
    "filename": "private_code/doc.js",
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
    "version": "0.0.0",
    "filename": "private_code/doc.js",
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
    "version": "0.0.0",
    "filename": "private_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "GET",
    "url": "/tracks/android/{track_id}",
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
            "description": "<p>Optional. can be &quot;high&quot; or &quot;medium&quot; or &quot;low&quot; or review it has a default of &quot;medium&quot;,if free user and choose high quality it will automatically set to medium</p>"
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
    "filename": "private_code/doc.js",
    "groupTitle": "Track"
  },
  {
    "type": "POST",
    "url": "/artists/me/albums/{album_id}/tracks",
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
            "description": "<p>Optional. comma seperated dtring with available markets for track</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Required. track duration in milliseconds</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>200 if success,403 forbidden if not an artist or doesn't own the album or failed to upload the track</p>"
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
    "filename": "private_code/doc.js",
    "groupTitle": "Track"
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
    "filename": "private_code/doc.js",
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
    "filename": "private_code/doc.js",
    "groupTitle": "Users_Profile"
  }
] });
