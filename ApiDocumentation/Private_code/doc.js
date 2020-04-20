/**
 * @api {POST} api/sign_up Create a new account
 * @apiName Create a new account
 * @apiGroup Account
 * @apiDescription
 * 
 * <p style="color:red;">add new user.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  Content-Type	Required. The content type of the request body: application/json
 * @apiParam (Body Parameters) {string}  username		Required. The display_name of new user
 * @apiParam (Body Parameters) {string}  password		Required. The password of new user
 * @apiParam (Body Parameters) {string}  country		Required. the country of new user
 * @apiParam (Body Parameters) {string}  email  		Required. The email of the user (which is unique).
 * @apiParam (Body Parameters) {string}  gender 		Required. The type of new user ( m:male or f:female).
 * @apiParam (Body Parameters) {string}  birthday		Required. The birthday of a new user
 * 
 * @apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/sign_up' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
"username":"name",
"password":"123",
"country":"eg",
"email":"b@b.com",
"gender":"male",
"birthday":"1/1/1999"
	
}'
 * 
 *  @apiSuccessExample {json} Success-Response:
  *{
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s"
*}
 * @apiparam (Response) Format On success, the response body contains the created user object in JSON format and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for the new user. On error, the header status code is an error code and the response body contains an error object. Trying to create a user when you do not have the user’s authorization returns error 403 Forbidden.
 */

/**
  * @api {post} api/createQueue/:playlist_id/:trackId create queue 
 * @apiName Create queue
 * @apiGroup Player
 * @apiDescription create queue for user
 * 
 * <p style="color:red;">create the user playback queue </p>
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiparam (path parameters) playlist_id  the id of the source if playlist or album
* @apiparam (path parameters) track_id the first track will be playing
 *
 * @apiParam (query Parameters)  isPlaylist Required. is boolean determine if the source of queue is playlist or album &true is playlist &false album  	
 *
 *@apiParam (response) success 200 & error 400  
 *
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/createQueue/5e8cbe527f37604d583f8d5c/5e8cba447f37604d583f8d3b?isPlaylist=true' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 */
/**
 * @api {post} api/login Login to Spotify
 * @apiName Login to Spotify
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (QueryParameters)  email Required. the User e-mail in Spotify Accounts
 * @apiParam (QueryParameters)  password Required. the User Password in Spotify Accounts
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/login' \
--data-raw '{
	"email":"nada5aled52@gmail.com",
	"password":"nada1234"
'}'/
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
*    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc1YzY4Mzg3YmNlYjEwYWMzZDMzOTQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg1NjYzMzQ2LCJleHAiOjE1ODU3NDk3NDZ9.hLom36hxkDhABZEquFdKtFGEdmdxUziQx9eWVVry_3s"
*}
 *
 *
 */

/**
 * @api {POST} api/login/reset_password Reset Password
 * @apiName Reset Password
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Body parameter)  password {string} Required. the User new password .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/login/reset_password' \
--header 'Content-Type: application/json' \
 \
--data-raw '{

"password":"ring"

	
}'
 *
 *
 */
/**
 * @api {DELETE} api/user/logout Logout user 
 * @apiName Logout user
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 *curl --location --request DELETE 'http://localhost:3000/api/user/logout' \
 --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 *
 *
 */

/**
 * @api {POST} api/notification/token Set FCM Token
 * @apiName Set FCM Token
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service

 * @apiParam (Body parameter)  fcmToken {string} Required. the User FCM token  .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/notification/token' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 \
--data-raw '{

"fcmToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NDA1NzM2LCJleHAiOjQ3MzM4OTIxMzZ9.8I49BShfQiu6D7Jkh8hiQM7Ap02BmyShsOHgFQDlNaw"

	
}'
 *
 *
 */
/**
 * @api {POST} api/login/forgetpassword Forget Password
 * @apiName Forget Password
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Body parameter)  email {string} Required. the User e-mail in Spotify Accounts
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/login/forgetpassword' \
--header 'Content-Type: application/json' \
 \
--data-raw '{

"email":"b@b.com"

	
}'
 *
 *
 */

/**
 * @api {GET} api/auth/facebook Login to Spotify with Facebook
 * @apiName Login to Spotify with Facebook
 * @apiGroup Account
 * @apiDescription
 * 

 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error, redirects to GET login
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3YzJlZGQ3OGZkMzQ1MThmOWViYTIiLCJpYXQiOjE1ODYwMzA0NTEsImV4cCI6MTE1NTY5ODM3NTc2NTF9.tteoEG6Udupn3qwQYTq5PpdpldP40IbP8yaxHGL8B5k"}
 * 
 * 
 *
 *
 */

/**
 * @api {POST} api/auth/facebookAndroid Login to Spotify with Facebook for android native app
 * @apiName Login to Spotify with Facebook android
 * @apiGroup Account
 * @apiDescription login with facebook using android custom route
 * 
 * 
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response header contains a JWT </br> On error,send 404 if email not found
 * 
 * @apiParam (Body) email   Required user email
 *  @apiParam (Body) name   Required user display name
 * @apiParam (Body) gender   optional user gender Male/Female
 *  @apiParam (Body) photos   optional user photos
 *  @apiParam (Body) birthday   optional user birthday
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg3YzJlZGQ3OGZkMzQ1MThmOWViYTIiLCJpYXQiOjE1ODYwMzA0NTEsImV4cCI6MTE1NTY5ODM3NTc2NTF9.tteoEG6Udupn3qwQYTq5PpdpldP40IbP8yaxHGL8B5k"}
 * 
 * 
 *
 *
 */


/**
 * @api {post} api/me/logout logout 
 * @apiName logout 
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (QueryParameters) id Required. The User ID in Spotify Accounts
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a user object </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 *
 *
 */

/**
 * @api {PUT} api/me/promote make user premium 
 * @apiName make user premium
 * @apiGroup Account
 * @apiDescription
 * 
 * <p style="color:red;">promote user to premium.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiparam (Query parameters) credit card  Required. A user credit card 
 * @apiparam (Response) Format On success, the response body contains the user_id and credit card and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for promote . On error, the header status code is an error code and the response body contains an error object. Trying to promote when you do not have the user’s authorization returns error 403 Forbidden.
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/me/promote' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' 
\
 *  @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success":"promote to premium "
 *   }
 */

/**
 * @api {PUT} api/me/update update Current User's Profile
 * @apiName update Current User's Profile
 * @apiGroup Users Profile
 * @apiDescription
 * <p style="color:red;">update current user profile.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.
 * 
 * @apiParam (Body Parameters) {string} Email     optional. email to be updated to, should be new email and not already existing one.
 * 
 *@apiParam (Body Parameters)     {string}  Password  optional. password to be updated to.
 * 
* @apiParam (Body Parameters)     {string} Country    optional. country to be updated to.
 *
 *  @apiParam (Body Parameters)      {string}   Display_Name      optional. name to be updated to.
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a success object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.
 * @apiExample {curl} Example usage
 * curl --location --request PUT 'http://localhost:3000/api/me/update' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{

"Email":"b@bb.com",
"Password":"111",
"Country":"fr",
"Display_Name":"bb"

	
}'
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success":"information has been updated successfully"
 *   }
 */

/**
 * @api {DELETE} api/remove delete Current User's Profile
 * @apiName delete Current User's Profile
 * @apiGroup Users Profile
 * @apiDescription
 * <p style="color:red;">delete current user profile.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a success object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.
 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success":"user deleted"
 *   }
 */
/**
 * @api {post} api/me/ToArtist Change User Type to Artist
 * @apiName Change User Type to Artist
 * @apiGroup Account
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiParam (BodyParameters) name Optional. The Artist name shown to public if it's not given the user name will be shown.
 * @apiParam (BodyParameters) genre Required. The Artist Genre (Pop/Jazz/Rock/...)
 * @apiParam (BodyParameters) info Required. The Artist's Overview shown to public 
 *  @apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/me/ToArtist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
"name":"new artist",
"genre":"action,scifi",
"info":"info"
	
}'
 *@apiSuccessExample {json} Success-Response:
 * {
 *      Artist Succeded
 * }
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a confirmation sent to the Spotify Admins </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 *
 *
 */

/**
 * @api {PUT} api/playlists/{playlist_id} add collaborator
 * @apiName Change a add collaborator
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">add a Playlist's collaborator. (The user must, of course, own the playlist.)</p>
 *Note that the request data is a JSON string, not separate fields
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-Type	Required if URIs are passed in the request body, otherwise ignored. The content type of the request body: application/json
 *
 *
 * @apiParam (Body Parameters) {array_string}  username   Required . users'name of the user who will be collaborator
 *
 * @apiparam (Response) Format On success the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Trying to change a playlist when you do not have the user’s authorization returns error 403 Forbidden.
 * @apiExample {curl} Example usage
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
 \
--data-raw '{

"username":"new name,name,nada"

	
}'
 */
/**
 * @api {PUT} api/Artist/update Change a Artist's Details 
 * @apiName Change a Artist's  Details 
 * @apiGroup Artist
 * @apiDescription update artist info 
 * 
 * <p style="color:red;">Change a Artist's Details Change a Artist’s name and genre and info .</p>
 *Note that the request data is a JSON string, not separate fields
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 *
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-Type	Required if URIs are passed in the request body, otherwise ignored. The content type of the request body: application/json
 *
 *
 * @apiParam (Body Parameters) {string}  name	         	   Optional. The new name for the Artist
 * @apiParam (Body Parameters) {string}  genre		           Optional.types of most artist's track example " genre1,genre2,genre3"
 * @apiParam (Body Parameters) {string} info		           Optional.all information about this artist
 * @apiparam (Response) Format On success the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Trying to change an artist when you do not have the user’s authorization returns error 403 Forbidden.
 **  @apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/Artist/update' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
"name":"new artist",
"genre":"action,scifi",
"info":"info"
	
}
*
 *  @apiSuccessExample {json} Success-Response:
 * {   
 *        "genre": [
 *            "rytyt",
 *            "genre2",
 *            "genre1"
 *        ],
 *        "_id": "5e7f67e438150c15e8589ece",
 *        "info": "jdshgdjdhfjkd",
 *        "popularity": 0,
 *        "type": "Artist",
 *        "Name": "yytguguy",
 *        "userId": "5e7f670838150c15e8589ecc",
 *        "images": [],
 *        "addAlbums": [],
 *        "addTracks": [],
 *       "__v": 0
 *    }
 * 
 */

/**
 * @api {GET} api/tracks/android/{track_id} get track for android
 * @apiName get track file for android
 * @apiGroup Track
 * @apiDescription
 * 
 * <p style="color:red;">get track media file for android</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  track_id	the trackID
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 *
 * @apiParam (Query Parameters) {string}  type	         	   Optional. can be "high" or "medium" or "low" or "review" it has a default of "medium",if free user and choose high quality it will automatically set to medium
 * 
 * @apiparam (Response) Format media file stream on success, and if incorrect track then 404, if error in streaming will be 500 insternal server error
 */

 
 /**
 * @api {GET} /api/tracks/encryption/{track_id}/keys get decryption key for track for web player
 * @apiName get track encryption key for web player
 * @apiGroup Track
 * @apiDescription
 * 
 * <p style="color:red;">get track media file encryption key and keyId for web player</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  track_id	the trackID
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 *
 * @apiparam (Response) Key object wiith 200 status  on success, and if incorrect track then 404
 * @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/tracks/web-player/5e973b973ca79e980c34ec04?type=medium' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
    "keyId": "88XgNh5mVLKPgEnHeLI5Rg"
  }
 */

 /**
 * @api {GET} /api/tracks/web-player/{track_id} get track for web player
 * @apiName get track file for web player
 * @apiGroup Track
 * @apiDescription
 * 
 * <p style="color:red;">get track media file for web player</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  track_id	the trackID
 * 
 *
 *
 * @apiParam (Query Parameters) {string}  type	         	   Optional. can be "high" or "medium" or "low" , it has a default of "medium",if free user and choose high quality it will automatically set to medium
 * 
 *@apiParam (Query Parameters) {string}  token	         	   Required.the jwt token for the user
 * 
 * @apiparam (Response) Format media file stream on success, and if incorrect track then 404, if error in streaming will be 500 insternal server error
 */

  /**
 * @api {POST} /api/artists/me/albums/{album_id}/tracks upload tracks
 * @apiName upload tracks to album
 * @apiGroup Track
 * @apiDescription
 * 
 * <p style="color:red;">upload tracks by artist to specific album, only artist with valid album can upload track to this album</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  album_id	the album id to which track will be added
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiParam (form-data) {file} high  Required the hight qaulity version of the track
 *  @apiParam (form-data) {file} medium  Required the medium qaulity version of the track
 * @apiParam (form-data) {file} low  Required the low qaulity version of the track
 * @apiParam (form-data) {file} high_enc  Required the hight qaulity encrypted version of the track
 * @apiParam (form-data) {file} medium_enc  Required the medium qaulity encrypted version of the track
 * @apiParam (form-data) {file} low_enc  Required the low qaulity encrypted version of the track
 * @apiParam (form-data) {file} review  Required the review track to be shown for android
 *
 * @apiParam (Query Parameters) {string}  name	         	   Required.name of the track
 * @apiParam (Query Parameters) {Number}  trackNumber	         	   Required.number of the track
 * @apiParam (Query Parameters) {string}  availableMarkets	         	   Required. comma seperated string with available markets for track
 * @apiParam (Query Parameters) {string}  genres	         	   Required. comma seperated string with genre of track
 * @apiParam (Query Parameters) {Number}  duration	         	   Required. track duration in milliseconds
 * @apiParam (Query Parameters) {String}  Key	         	   Required. encryption key used to encrypt the track
 * @apiParam (Query Parameters) {String}  keyId	         	   Required. encryption key id used to encrypt the track
 * @apiparam (Response) Format 200 if success,403 forbidden if not an artist or doesn't own the album or 404 if failed to upload the track
 * 
 *  @apiExample {curl} Example usage
 * curl --location --request POST 'http://localhost:3000/api/artists/me/albums/5e8cb9327f37604d583f8d25/tracks?name=track1&availableMarkets=%22eg,fr%22&trackNumber=12&duration=1200&key=a4631a153a443df9eed0593043db7519&keyId=f3c5e0361e6654b28f8049c778b23946' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \

--form 'high=@/F:/softwareEng/eme/sub/audio_320k.webm' \
--form 'medium=@/F:/softwareEng/eme/sub/audio_256k.webm' \
--form 'low=@/F:/softwareEng/eme/sub/audio_128k.webm' \
--form 'review=@/F:/softwareEng/eme/sub/audio_review.webm' \
--form 'high_enc=@/F:/softwareEng/eme/sub/audio_320k_e.webm' \
--form 'medium_enc=@/F:/softwareEng/eme/sub/audio_256k_e.webm' \
--form 'low_enc=@/F:/softwareEng/eme/sub/audio_128k_e.webm'
*@apiSuccessExample {json} Success-Response:
*{
    "success": "uploaded succesfully"
}
*

 */

 /**
 * @api {DELETE} /api/tracks/delete/{track_id} delete track
 * @apiName delete track
 * @apiGroup Track
 * @apiDescription
 * 
 * <p style="color:red;">delete track from database and from all instances that it occurs in</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiParam (Path Parameters)  track_id	the trackID
 * 
 *
 *
 *
 * 
 * @apiparam (Response) 200 status if deleted successfully elss error code will be sent
 *  @apiExample {curl} Example usage
 * curl --location --request DELETE 'http://localhost:3000/api/tracks/delete/5e9a288b65140b24a8cba950' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw'
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
    "success": "deleted track"
}
 */

