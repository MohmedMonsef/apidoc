//Album

/**
 * @api {get} api/albums/:album_id  Get an Album
 * @apiName Get an Album
 * @apiGroup Album
 * @apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * GET https://api.spotify.com/v1/albums/:album_id
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters)  album_id Spotify ID for Albums
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an album object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/albums/5e9b5de4e9c8d87fdc2eca7f' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
*@apiSuccessExample {json} Success-Response:
*{
    "isSaved": false,
    "_id": "5e9b5de4e9c8d87fdc2eca7f",
    "name": "quranAlbum",
    "images": [],
    "artistId": "5e9b5b656dff8d6ee4c13bbc",
    "artistName": "holy quran",
    "track": [
        {
            "_id": "5e9b5e2de9c8d87fdc2eca81",
            "name": "el-doha",
            "images": []
        },
        {
            "_id": "5e9b62c3e9c8d87fdc2ecb58",
            "name": "el-kyama",
            "images": []
        },
        {
            "_id": "5e9b64e4e9c8d87fdc2ecbd8",
            "name": "el-sharh",
            "images": []
        }
    ]
}
*
*
*/
/**
 * @api {get} api/albums/:id/tracks Get an Album's Tracks
 * @apiName Get an Album's Tracks
 * @apiGroup Album
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information about an album’s tracks. </br>
 * Optional parameters can be used to limit the number of tracks returned.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters)  id Spotify ID for Albums
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of  track objects  in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *@apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/albums/5e9b5de4e9c8d87fdc2eca7f/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \
--header 'Content-Type: application/json' 
* @apiSuccessExample {json} Success-Response:
 *{
    "tracks": [
        {
            "_id": "5e9b5e2de9c8d87fdc2eca81",
            "name": "el-doha",
            "images": []
        },
        {
            "_id": "5e9b62c3e9c8d87fdc2ecb58",
            "name": "el-kyama",
            "images": []
        },
        {
            "_id": "5e9b64e4e9c8d87fdc2ecbd8",
            "name": "el-sharh",
            "images": []
        }
    ]
}
 *
 * 
 */

/**
 * @api {get} api/albums Get Several Albums
 * @apiName Get Several Albums
 * @apiGroup Album
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information for multiple albums identified by their Spotify IDs. </br>
 * Optional parameters can be used to limit the number of tracks returned.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 * @apiParam (BodyParameters)  ids 	Required. A comma-separated list of the Spotify IDs for the albums.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an array of album objects in JSON format.</br></br></br> Objects are returned in the order requested. If an object is not found, it's ignored</br> Duplicate ids in the query will result in duplicate objects in the response.</br> On error, the header status code is an error code and the response body contains an error object
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/albums' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \
--header 'Content-Type: application/json' \
--header 'Content-Type: text/plain' \
--data-raw '{
	"ids":"5e9b5de4e9c8d87fdc2eca7f,5e8cb94b7f37604d583f8d29"
}'
 * @apiSuccessExample {json} Success-Response
 *[
    {
        "Album": {
            "availableMarkets": [
                "eg"
            ],
            "_id": "5e9b5de4e9c8d87fdc2eca7f",
            "name": "quranAlbum",
            "albumType": "quran",
            "popularity": 0,
            "genre": "quran",
            "releaseDate": "2001-12-31T22:00:00.000Z",
            "label": "quran",
            "images": [],
            "artistId": "5e9b5b656dff8d6ee4c13bbc",
            "type": "Album",
            "hasTracks": [
                {
                    "_id": "5e9b5e2ee9c8d87fdc2eca83",
                    "trackId": "5e9b5e2de9c8d87fdc2eca81"
                },
                {
                    "_id": "5e9b62c4e9c8d87fdc2ecb5a",
                    "trackId": "5e9b62c3e9c8d87fdc2ecb58"
                },
                {
                    "_id": "5e9b64e5e9c8d87fdc2ecbda",
                    "trackId": "5e9b64e4e9c8d87fdc2ecbd8"
                }
            ],
            "releaseDatePercision": "DD-MM-YY",
            "__v": 5
        },
        "Artist": {
            "genre": [
                "quran"
            ],
            "_id": "5e9b5b656dff8d6ee4c13bbc",
            "info": "quran",
            "popularity": 0,
            "type": "Artist",
            "Name": "holy quran",
            "userId": "5e9b5a4246a4be79f84c31d3",
            "images": [],
            "addAlbums": [
                {
                    "_id": "5e9b5de5e9c8d87fdc2eca80",
                    "albumId": "5e9b5de4e9c8d87fdc2eca7f"
                }
            ],
            "addTracks": [
                {
                    "_id": "5e9b5e2ee9c8d87fdc2eca82",
                    "trackId": "5e9b5e2de9c8d87fdc2eca81"
                },
                {
                    "_id": "5e9b62c3e9c8d87fdc2ecb59",
                    "trackId": "5e9b62c3e9c8d87fdc2ecb58"
                },
                {
                    "_id": "5e9b64e5e9c8d87fdc2ecbd9",
                    "trackId": "5e9b64e4e9c8d87fdc2ecbd8"
                }
            ],
            "__v": 6
        }
    },
    {
        "Album": {
            "availableMarkets": [
                "EG,US"
            ],
            "_id": "5e8cb94b7f37604d583f8d29",
            "name": "OHAYO SLEEP WALKERS",
            "albumType": "Album",
            "popularity": 0,
            "genre": "pop",
            "releaseDate": "2000-01-31T22:00:00.000Z",
            "label": "KIDS",
            "images": [],
            "artistId": "5e8cb7037f37604d583f8d22",
            "type": "Album",
            "hasTracks": [
                {
                    "_id": "5e8ce8b282c8d9579467fb83",
                    "trackId": "5e8ce8b282c8d9579467fb82"
                },
                {
                    "_id": "5e8ce8bb82c8d9579467fb86",
                    "trackId": "5e8ce8bb82c8d9579467fb85"
                },
                {
                    "_id": "5e8ce8bf82c8d9579467fb89",
                    "trackId": "5e8ce8bf82c8d9579467fb88"
                },
                {
                    "_id": "5e8ce8c382c8d9579467fb8c",
                    "trackId": "5e8ce8c382c8d9579467fb8b"
                },
                {
                    "_id": "5e8ce8c982c8d9579467fb8f",
                    "trackId": "5e8ce8c982c8d9579467fb8e"
                }
            ],
            "__v": 5
        },
        "Artist": {
            "genre": [
                "pop",
                "jazz"
            ],
            "_id": "5e8cb7037f37604d583f8d22",
            "info": "ohayo nada",
            "popularity": 6,
            "type": "Artist",
            "Name": "nada",
            "userId": "5e8cb118084a9d2e6c8f21d7",
            "images": [],
            "addAlbums": [
                {
                    "_id": "5e8cb9327f37604d583f8d26",
                    "albumId": "5e8cb9327f37604d583f8d25"
                },
                {
                    "_id": "5e8cb9457f37604d583f8d28",
                    "albumId": "5e8cb9457f37604d583f8d27"
                },
                {
                    "_id": "5e8cb94b7f37604d583f8d2a",
                    "albumId": "5e8cb94b7f37604d583f8d29"
                },
                {
                    "_id": "5e8cb9557f37604d583f8d2c",
                    "albumId": "5e8cb9557f37604d583f8d2b"
                },
                {
                    "_id": "5e8cb95d7f37604d583f8d2e",
                    "albumId": "5e8cb95d7f37604d583f8d2d"
                },
                {
                    "_id": "5e8cb96a7f37604d583f8d30",
                    "albumId": "5e8cb96a7f37604d583f8d2f"
                },
                {
                    "_id": "5e8cb9747f37604d583f8d32",
                    "albumId": "5e8cb9747f37604d583f8d31"
                },
                {
                    "_id": "5e8cb97b7f37604d583f8d34",
                    "albumId": "5e8cb97b7f37604d583f8d33"
                },
                {
                    "_id": "5e8cb9827f37604d583f8d36",
                    "albumId": "5e8cb9827f37604d583f8d35"
                }
            ],
            "addTracks": [
                {
                    "_id": "5e8ce2a17d3d703094eb82f6",
                    "trackId": "5e8ce2a17d3d703094eb82f4"
                },
                {
                    "_id": "5e8ce2ca7d3d703094eb82f9",
                    "trackId": "5e8ce2ca7d3d703094eb82f7"
                },
                {
                    "_id": "5e8ce2ce7d3d703094eb82fc",
                    "trackId": "5e8ce2ce7d3d703094eb82fa"
                },
                {
                    "_id": "5e8ce2d37d3d703094eb82ff",
                    "trackId": "5e8ce2d37d3d703094eb82fd"
                },
                {
                    "_id": "5e8ce2d87d3d703094eb8302",
                    "trackId": "5e8ce2d77d3d703094eb8300"
                },
                {
                    "_id": "5e8ce2dc7d3d703094eb8305",
                    "trackId": "5e8ce2dc7d3d703094eb8303"
                },
                {
                    "_id": "5e8ce86082c8d9579467fb75",
                    "trackId": "5e8ce86082c8d9579467fb73"
                },
                {
                    "_id": "5e8ce86882c8d9579467fb78",
                    "trackId": "5e8ce86882c8d9579467fb76"
                },
                {
                    "_id": "5e8ce86c82c8d9579467fb7b",
                    "trackId": "5e8ce86c82c8d9579467fb79"
                },
                {
                    "_id": "5e8ce87182c8d9579467fb7e",
                    "trackId": "5e8ce87182c8d9579467fb7c"
                },
                {
                    "_id": "5e8ce87682c8d9579467fb81",
                    "trackId": "5e8ce87682c8d9579467fb7f"
                },
                {
                    "_id": "5e8ce8b282c8d9579467fb84",
                    "trackId": "5e8ce8b282c8d9579467fb82"
                },
                {
                    "_id": "5e8ce8bb82c8d9579467fb87",
                    "trackId": "5e8ce8bb82c8d9579467fb85"
                },
                {
                    "_id": "5e8ce8bf82c8d9579467fb8a",
                    "trackId": "5e8ce8bf82c8d9579467fb88"
                },
                {
                    "_id": "5e8ce8c482c8d9579467fb8d",
                    "trackId": "5e8ce8c382c8d9579467fb8b"
                },
                {
                    "_id": "5e8ce8c982c8d9579467fb90",
                    "trackId": "5e8ce8c982c8d9579467fb8e"
                }
            ],
            "__v": 29
        }
    }
]
 */

//Artist

//new
/**
 * @api {put} api/Artists/me/Albums Create Album
 * @apiName Create Album
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Create An Album for the Current Artist .</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-type Required. The content type of the request body: application/json
 * @apiParam (BodyParameters)   name Required. string of the name of the new Album
 * @apiParam (BodyParameters)   label  Required. string of the Label of the new Album
 * @apiParam (BodyParameters)   albumtype Required.Album, single, or compilation.
 * @apiParam (BodyParameters)   releaseDate Required.Release Date of the new Album
 * @apiParam (BodyParameters)   availablemarkets Required.The markets in which the album is available: ISO 3166-1 alpha-2 country codes.
 * @apiParam (BodyParameters)   genre Required.A list of the genres used to classify the album.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/Artists/me/Albums' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \

--data-raw '{
	"name":"album1",
	"label":"label",
	"albumtype":"normal",
	"releaseDate":"1/1/2002",
	"availablemarkets":"eg,fr",
	"genre":"normal"
}'
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "availableMarkets": [
 *       "us,er,rttr,fretgre,jhj"
 *   ],
 *   "_id": "5e833b412b9d7718a491c850",
 *   "name": "album1",
 *   "albumType": "type1",
 *   "popularity": 0,
 *   "genre": "genre1",
 *   "releaseDate": "2020-02-20T00:00:00.000Z",
 *   "label": "iuwdjhwdewjhfhdwe",
 *    "images": [],
 *    "artistId": "5e833a51a51d971174923f17",
 *   "type": "Album",
 *   "hasTracks": [],
 *  "__v": 0 
 * }
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body Contains an Album Object.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *
 *
 */
/**
 * @api {get} api/Artists/{id}/tracks_ratio Get an Artist's radio  (not implemented)
 * @apiName Get an Artist's radio ratio
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get alot of tracks belongs to this artist or tracks in the same artist's genre .</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiParam (PathParameters)  id Spotify ID for Artist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br>an object whose key is "tracks" and whose value is an array of up to 10 track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */
/**
 * @api {put} api/Artists/me/Albums/{album_id}/tracks Create Track   (in progress)
 * @apiName Create Track
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Create Track for an Album for the Current Artist .</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-type Required. The content type of the request body: application/json
 * @apiParam (PathParameters)   id Required. the id of the Album containing the new track
 * @apiParam (BodyParameters)   Name Required. string of the name of the new Album
 * @apiParam (BodyParameters)   file  Required. The URL for the track
 * @apiParam (BodyParameters)   trackNum Required.the number of the track on the album
 * @apiParam (BodyParameters)   availableMarkets Required.The markets in which the track is available: ISO 3166-1 alpha-2 country codes.
 * @apiParam (BodyParameters)   duration Required.The length of track
 *
 * 
 *
 * 
 *@apiSuccessExample {json} Success-Response:
 *{
 *   "availableMarkets": [
 *       "usa,tt,wdwq,dwdw,wdw,dss"
 *   ],
 *   "_id": "5e834091a0d4a20f746732f7",
 *   "duration": 462,
 *   "name": "track1",
 *   "artistId": "5e833a51a51d971174923f17",
 *   "albumId": "5e833b412b9d7718a491c850",
 *   "discNumber": 1,
 *   "explicit": false,
 *   "type": "Track",
 *   "acousticness": 10,
 *   "danceability": 23,
 *   "energy": 100,
 *   "instrumentalness": 4,
 *   "key": 90,
 *   "liveness": 25,
 *   "loudness": 70,
 *   "mode": 56,
 *   "speechiness": 67,
 *   "tempo": 76,
 *   "timeSignature": "2020-03-31T13:07:29.395Z",
 *   "valence": 70,
 *   "like": 0,
 *   "__v": 0
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body Contains a Track Object.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *
 *
 */

/**
 * @api {delete} api/Artists/me/Albums/{id}/tracks Delete Artist's Track   (Not implemented yet)
 * @apiName Delete Artist's Track
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Delete Tracks for an Album for the Current Artist .</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-type Required. The content type of the request body: application/json
 * @apiParam (PathParameters)   id Required. the id of the Album containing the deleted track
 * @apiParam (BodyParameters)   tracks 	equired. An array of objects containing Spotify URIs of the tracks to remove. For example: { "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }. A maximum of 100 objects can be sent at once.
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *
 *
 */
//end new

/**
 * @api {get} api/Artists/:artist_id Get an Artist
 * @apiName Get an Artist
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Get Spotify catalog information for a single artist identified by their unique Spotify ID.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters) artist_id Spotify ID for the Artist
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 *  @apiSuccessExample {json} Success-Response:
 * {
 *     
 *
 *    
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
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an artist object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *
 *
 */
/**
 * @api {get} api/Artists/:artist_id/Albums Get an Artist's Albums
 * @apiName Get an Artist's Albums
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information about an artist’s albums.</br> Optional parameters can be specified in the query string to filter and sort the response.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters)  artist_id Spotify ID for Albums
 * 
 * 
 * @apiParam (QueryParameters)  groups 	Optional. A comma-separated list of keywords that will be used to filter the response.</br> If not supplied, all album types will be returned. Valid values are:</br>
* - album </br>
* - single </br>
* - appears_on </br>
* - compilation </br>
* For example:<br> include_groups=album,single.
 * @apiParam (QueryParameters)  country  	Optional. An ISO 3166-1 alpha-2 </br> country code or the string from_token. </br>
* Supply this parameter to limit the response to one particular geographical market.</br> For example, for albums available in Sweden: country=SE.
* </br>If not given, results will be returned for all countries and you are likely to get duplicate results per album,</br> one for each country in which the album is available!
 * @apiParam (QueryParameters)  limit 	Optional. The number of album objects to return.</br> Default: 20. Minimum: 1. Maximum: 50.</br> For example: limit=2
* @apiParam (QueryParameters)  offset 		Optional. The index of the first album to return.</br> Default: 0 (i.e., the first album).</br> Use with limit to get the next set of albums.
 *
 * 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/Albums' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
*
*
  * @apiSuccessExample {json} Success-Response:
 * {
 *     
  *   {
 *       "availableMarkets": [
 *           "us,yu,ywgd"
 *       ],
 *       "_id": "5e7f44905cce7d09a82e5a75",
 *       "name": "album1",
 *       "albumType": "type1",
 *       "popularity": 0,
 *       "genre": "genre1",
 *       "releaseDate": "2020-02-20T00:00:00.000Z",
 *       "label": "yyuwhhxb",
 *       "images": [],
 *       "artistId": "5e7ef28326e2fa0da04f81ae",
 *       "type": "Album",
 *       "hasTracks": [],
  *      "__v": 0
  *  },
  *  {
 *       "availableMarkets": [],
 *       "_id": "5e7f4d475cce7d09a82e5a7f",
 *       "popularity": 0,
 *       "images": [],
 *       "artistId": "5e7ef28326e2fa0da04f81ae",
 *       "type": "Album",
 *       "hasTracks": [],
 *       "__v": 0
 *   }
*    }
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body </br>contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.

 */

/**
 * @api {get} api/Artists/:artist_id/top-tracks Get an Artist's Top Tracks
 * @apiName Get an Artist's Top Tracks
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information about an artist’s top tracks by country.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiParam (PathParameters) artist_id  Spotify ID for Albums
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 *  @apiParam (QueryParameters)  country Required. An ISO 3166-1 alpha-2 country code or the string from_token.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/top-tracks?country=eg' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     [
 *   {
 *       "availableMarkets": [
 *           "usa"
 *       ],
 *       "_id": "5e834091a0d4a20f746732f7",
 *       "duration": 462,
 *       "name": "track1",
 *       "artistId": "5e833a51a51d971174923f17",
 *       "albumId": "5e833b412b9d7718a491c850",
 *       "discNumber": 1,
 *       "explicit": false,
 *       "type": "Track",
 *s       "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:07:29.395Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    },
 *    {
 *        "availableMarkets": [
 *            "usa"
 *        ],
 *        "_id": "5e834255a0d4a20f74673300",
 *        "duration": 462,
 *        "name": "track1",
 *        "artistId": "5e833a51a51d971174923f17",
 *        "albumId": "5e833b412b9d7718a491c850",
 *        "discNumber": 1,
 *        "explicit": false,
 *        "type": "Track",
 *        "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:15:01.821Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    },
 *    {
 *        "availableMarkets": [
 *            "usa"
 *        ],
 *        "_id": "5e834258a0d4a20f74673305",
 *        "duration": 462,
 *        "name": "track1",
 *        "artistId": "5e833a51a51d971174923f17",
 *        "albumId": "5e833b412b9d7718a491c850",
 *        "discNumber": 1,
 *        "explicit": false,
 *        "type": "Track",
 *        "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:15:04.155Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    }
 *]
 * }
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br>an object whose key is "tracks" and whose value is an array of up to 10 track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */

/**
 * @api {get} api/Artists/{artist_id}/tracks Get an Artist's Tracks
 * @apiName Get an Artist's Top Tracks
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information about an artist’s top tracks by country.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters) artist_id  Spotify ID for Albums
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     [
 *   {
 *       "availableMarkets": [
 *           "usa,tt,wdwq,dwdw,wdw,dss"
 *       ],
 *       "_id": "5e834091a0d4a20f746732f7",
 *       "duration": 462,
 *       "name": "track1",
 *       "artistId": "5e833a51a51d971174923f17",
 *       "albumId": "5e833b412b9d7718a491c850",
 *       "discNumber": 1,
 *       "explicit": false,
 *       "type": "Track",
 *       "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:07:29.395Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    },
 *    {
 *        "availableMarkets": [
 *            "usa,tt,wdwq,dwdw,wdw,dss"
 *        ],
 *        "_id": "5e834255a0d4a20f74673300",
 *        "duration": 462,
 *        "name": "track1",
 *        "artistId": "5e833a51a51d971174923f17",
 *        "albumId": "5e833b412b9d7718a491c850",
 *        "discNumber": 1,
 *        "explicit": false,
 *        "type": "Track",
 *        "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:15:01.821Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    },
 *    {
 *        "availableMarkets": [
 *            "usa,tt,wdwq,dwdw,wdw,dss"
 *        ],
 *        "_id": "5e834258a0d4a20f74673305",
 *        "duration": 462,
 *        "name": "track1",
 *        "artistId": "5e833a51a51d971174923f17",
 *        "albumId": "5e833b412b9d7718a491c850",
 *        "discNumber": 1,
 *        "explicit": false,
 *        "type": "Track",
 *        "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2020-03-31T13:15:04.155Z",
 *        "valence": 70,
 *        "like": 0,
 *        "__v": 0
 *    }
 *]
 * }
 *  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br>an object whose key is "tracks" and whose value is an array of up to 10 track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */
/**
 * @api {get} api/Artists/:artist_id/related_artists Get an Artist's Related Artists
 * @apiName Get an Artist's Related Artists
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information about artists similar to a given artist.</br> Similarity is based on analysis of the Spotify community’s listening history.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiParam (PathParameters)  artist_id Spotify ID for Artist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/related_artists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *     [
 *  {
 *    {
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
 *    },
 *    {
 *        "genre": [
 *            "genre1",
 *            "genre2",
 *            "genre3",
 *            "genre4"
 *        ],
 *        "_id": "5e833a51a51d971174923f17",
 *        "popularity": 0,
 *        "type": "Artist",
 *        "Name": "ahmedsamir",
 *        "userId": "5e75c68387bceb10ac3d3394",
 *        "images": [],
 *        "addAlbums": [
 *            {
 *                "_id": "5e833b412b9d7718a491c851",
 *                "albumId": "5e833b412b9d7718a491c850"
 *            }
 *        ],
 *        "addTracks": [
 *            {
 *                "_id": "5e834091a0d4a20f746732f9",
 *                "trackId": "5e834091a0d4a20f746732f7"
 *            },
 *            {
 *                "_id": "5e834255a0d4a20f74673302",
 *                "trackId": "5e834255a0d4a20f74673300"
 *            },
 *            {
 *                "_id": "5e834258a0d4a20f74673307",
 *                "trackId": "5e834258a0d4a20f74673305"
 *     },
 *      {
 *          "_id": "5e834259a0d4a20f7467330c",
 *           "trackId": "5e834259a0d4a20f7467330a"
 *        },
 *         {
 *              "_id": "5e834260a0d4a20f74673311",
 *               "trackId": "5e834260a0d4a20f7467330f"
 *           },
 *            {
 *                "_id": "5e834265a0d4a20f74673316",
 *               "trackId": "5e834265a0d4a20f74673314"
 *          },
 *          {
 *              "_id": "5e834268a0d4a20f7467331b",
 *               "trackId": "5e834268a0d4a20f74673319"
 *           }
 *        ],
 *        "__v": 17,
 *        "name": "artist1"
 *    },
 *    {
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
 *    },
 *    {
 *        "genre": [
 *            "genre1",
 *            "genre2",
 *            "genre3",
 *            "genre4"
 *        ],
 *        "_id": "5e833a51a51d971174923f17",
 *        "popularity": 0,
 *        "type": "Artist",
 *        "Name": "ahmedsamir",
 *        "userId": "5e75c68387bceb10ac3d3394",
 *        "images": [],
 *        "addAlbums": [
 *            {
 *                "_id": "5e833b412b9d7718a491c851",
 *                "albumId": "5e833b412b9d7718a491c850"
 *            }
 *        ],
 *        "addTracks": [
 *            {
 *                "_id": "5e834091a0d4a20f746732f9",
 *                "trackId": "5e834091a0d4a20f746732f7"
 *            },
 *            {
 *                "_id": "5e834255a0d4a20f74673302",
 *                "trackId": "5e834255a0d4a20f74673300"
 *            },
 *            {
 *                "_id": "5e834258a0d4a20f74673307",
 *                "trackId": "5e834258a0d4a20f74673305"
 *     },
 *      {
 *          "_id": "5e834259a0d4a20f7467330c",
 *           "trackId": "5e834259a0d4a20f7467330a"
 *        },
 *         {
 *              "_id": "5e834260a0d4a20f74673311",
 *               "trackId": "5e834260a0d4a20f7467330f"
 *           },
 *            {
 *                "_id": "5e834265a0d4a20f74673316",
 *               "trackId": "5e834265a0d4a20f74673314"
 *          },
 *          {
 *               "_id": "5e834268a0d4a20f7467331b",
 *               "trackId": "5e834268a0d4a20f74673319"
 *           }
 *       ],
 *        "__v": 8
 *    }
 *]
 * }
 * @apiParam (Response)  ormat  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an object whose key is "artists" and whose value is an array of up to 20 artist objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *
 */

/**
 * @api {get} api/Artists Get Several Artists
 * @apiName Get Several Artists
 * @apiGroup Artist
 * @apiDescription
 * 
 * <p style="color:red;">Get Spotify catalog information for several artists based on their Spotify IDs.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 *  @apiExample {curl} Example usage:
 * 
 * curl --location --request GET 'http://localhost:3000/api/Artists?artists_ids=5e8cb7037f37604d583f8d22,5e8cb7307f37604d583f8d23' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *@apiSuccessExample {json} Success-Response: 
 *  {
 *     [
 *    {
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
 *    },
 *    {
 *        "genre": [
 *            "genre1",
 *            "genre2",
 *            "genre3",
 *            "genre4"
 *        ],
 *        "_id": "5e833a51a51d971174923f17",
 *        "popularity": 0,
 *        "type": "Artist",
 *        "Name": "ahmedsamir",
 *        "userId": "5e75c68387bceb10ac3d3394",
 *        "images": [],
 *        "addAlbums": [
 *            {
 *                "_id": "5e833b412b9d7718a491c851",
 *                "albumId": "5e833b412b9d7718a491c850"
 *            }
 *        ],
 *        "addTracks": [
 *            {
 *                "_id": "5e834091a0d4a20f746732f9",
 *                "trackId": "5e834091a0d4a20f746732f7"
 *            },
 *            {
 *                "_id": "5e834255a0d4a20f74673302",
 *                "trackId": "5e834255a0d4a20f74673300"
 *            },
 *            {
 *                "_id": "5e834258a0d4a20f74673307",
 *                "trackId": "5e834258a0d4a20f74673305"
 *     },
 *      {
 *          "_id": "5e834259a0d4a20f7467330c",
 *           "trackId": "5e834259a0d4a20f7467330a"
 *        },
 *         {
 *              "_id": "5e834260a0d4a20f74673311",
 *               "trackId": "5e834260a0d4a20f7467330f"
 *           },
 *            {
 *                "_id": "5e834265a0d4a20f74673316",
 *               "trackId": "5e834265a0d4a20f74673314"
 *          },
 *          {
 *              "_id": "5e834268a0d4a20f7467331b",
 *               "trackId": "5e834268a0d4a20f74673319"
 *           }
 *        ],
 *        "__v": 17,
 *        "name": "artist1"
 *    }
 *]
 * }
 * @apiParam (QueryParameters)  artists_ids 		Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
 *
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an object</br> whose key is "artists" and whose value is an array of artist objects in JSON format.</br></br></br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response.</br> On error, the header status code is an error code and the response body contains an error object.
 */



//Browse

/**
 * @api {get} api/browse/categories/{category_id} Get a Category
 * @apiName Get a Category
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters)  category_id 	The Spotify category ID for the category.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/categories/5e8ce900e192f95244e5ca05' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "category": {
        "playlist": [],
        "_id": "5e8ce900e192f95244e5ca05",
        "name": "classic",
        "images": [],
        "__v": 0
    }
}
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a category object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.
 *
 */

/**
 * @api {get} api/browse/categories/{category_id}/playlists Get a Category's Playlists  (not implemented yet)
 * @apiName Get a Category's Playlists
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a list of Spotify playlists tagged with a particular category.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (PathParameters)  category_id 	The Spotify category ID for the category.
 * 
 *  @apiParam (QueryParameters)  country  			Optional. A country: an ISO 3166-1 alpha-2 country code.
 * @apiParam (QueryParameters)  limit 	Optional. The maximum number of items to return.</br> Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (QueryParameters)  offset 	Optional. The index of the first item to return.</br> Default: 0 (the first object).</br> Use with limit to get the next set of items.
 *@apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of simplified playlist objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 */

/**
 * @api {get} api/browse/categories Get a List of Categories  
 * @apiName Get a List of Categories
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/categories' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 * @apiSuccessExample {json} Success-Response:
 * {
*  [
*{
*   "playlist": [],
*    "_id": "5e7c102709c7361328f32fad",
*    "name": "category1",
*        "images": [],
*        "__v": 0
* },
* {
*  "playlist": [],
*   "_id": "5e7c1042179e9216f4dab449",
*    "name": "category1",
*    "images": [],
*     "__v": 0
  *  },
  *  {
  *      "playlist": [],
 *       "_id": "5e7c108d78089d06e4d403db",
 *       "name": "category1",
 *       "images": [],
 *       "__v": 0
*    },
*    {
*        "playlist": [
*         "5e756a10c8bb822d60284aef",
*         "5e763294478b3a1fa4b09344"
*     ],
*     "_id": "5e7c10a6b66f9415acd336b8",
*     "name": "category1",
*      "images": [],
 *       "__v": 1
 *   }
*]

*}
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an object with a categories field, with an array of category objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */

/**
 * @api {get} api/browse/featured-playlists Get a List of Featured Playlists       (not implemented yet)
 * @apiName Get a List of Featured Playlists
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *  @apiParam (QueryParameters)  country  			Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter </br> if you want to narrow the list of returned categories to those relevant to a particular country.</br> If omitted, the returned items will be globally relevant.
 * @apiParam (QueryParameters)  locale 		Optional. The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code</br> , joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. </br> Provide this parameter if you want the category metadata returned in a particular language.</br>  Note that, if locale is not supplied, or if the specified language is not available,</br>  all strings will be returned in the Spotify default language (American English). The locale parameter,</br>  combined with the country parameter, may give odd results if not carefully matched.</br> For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
 * @apiParam (QueryParameters)  limit  Optional. The maximum number of categories to return.</br> Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (QueryParameters)  offset 	Optional. The index of the first item to return.</br> Default: 0 (the first object). Use with limit to get the next set of categories. 
 * @apiParam (Response)  Format  On success, </br>the HTTP status code in the response header is 200 OK</br> and the response body contains a message and a playlists object.</br> The playlists object contains an array of simplified playlist objects</br> (wrapped in a paging object) in JSON format. On error,</br> the header status code is an error code and the response body contains an error object.</br></br></br></br> Once you have retrieved the list of playlist objects,</br> you can use Get a Playlist and Get a Playlist’s Tracks to drill down further.
 */
/**
 * @api {get} api/browse/recently-playing Get a List of recently playing Playlists,artists,albums
 * @apiName Get a List of recently-playing
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a List of recently playing Playlists,artists,albums in Spotify (on, for example, the Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/recently-playing' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *   "recentlyArtist": [
        {
            "genre": [
                "pop",
                "jazz"
            ],
            "type": "artist",
            "name": "nada",
            "images": [],
            "id": "5e8cb7037f37604d583f8d22",
            "info": "ohayo nada",
            "index": 1
        }
    ],
    "recentlyPlaylist": [
        {
            "owner": {
                "id": "5e8cb118084a9d2e6c8f21d7",
                "type": "user",
                "name": "nada"
            },
            "collaborative": false,
            "type": "playlist",
            "name": "SPACETOON",
            "images": [],
            "id": "5e8cbe527f37604d583f8d5c",
            "Description": "",
            "isPublic": true,
            "index": 2
        },
        {
            "owner": {
                "id": "5e8cb202084a9d2e6c8f21e9",
                "type": "user",
                "name": "menna"
            },
            "collaborative": false,
            "type": "playlist",
            "name": "KILL ME",
            "images": [],
            "id": "5e8cbfa97f37604d583f8d6a",
            "Description": "",
            "isPublic": true,
            "index": 3
        }
    ],
    "recentlyAlbum": [
        {
            "id": "5e8cb9327f37604d583f8d25",
            "name": "HELLO KIDS",
            "type": "album",
            "album_type": "Album",
            "images": [],
            "availableMarkets": [
                "EG,US"
            ],
            "artist": {
                "type": "artist",
                "id": "5e8cb7037f37604d583f8d22",
                "name": "nada"
            },
            "index": 0
        }
    ]
*}
 * @apiParam (Response)  Format  On success, </br>the HTTP status code in the response header is 200 OK</br> and the response body contains a message and a playlists and albums and artists object.</br> The playlists object contains an array of simplified playlist objects</br> (wrapped in a paging object) in JSON format. On error,</br> the header status code is an error code and the response body contains an error object.</br></br></br></br> Once you have retrieved the list of playlist objects,</br> you can use Get a Playlist and Get a Playlist’s Tracks to drill down further.
 */

/**
 * @api {get} api/browse/new-releases Get a List of New Releases
 * @apiName Get a List of New Releases
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/new-releases/' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *
 *   "albums": [
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [
 *               "us,yu,ywgd"
 *           ],
 *           "images": [],
 *           "id": "5e7f44905cce7d09a82e5a75",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [
 *               "us,yu,ywgd"
 *           ],
 *           "images": [],
 *           "id": "5e7f4bf85cce7d09a82e5a77",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4c925cce7d09a82e5a79",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4c985cce7d09a82e5a7b",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e833a51a51d971174923f17",
 *               "name": "ahmedsamir"
 *           },
 *           "available_markets": [
 *               "us,er,rttr,fretgre,jhj"
 *           ],
 *           "images": [],
 *           "id": "5e833b412b9d7718a491c850",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4ca05cce7d09a82e5a7d",
 *           "type": "album"
 *       }
 *   ]
 * 
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.
 */

/**
 * @api {get} api/browse/popular-albums Get a List of popular albums
 * @apiName Get a List of popular albums
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a List of popular albums featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/popular-albums' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *
 *   "albums": [
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [
 *               "us,yu,ywgd"
 *           ],
 *           "images": [],
 *           "id": "5e7f44905cce7d09a82e5a75",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [
 *               "us,yu,ywgd"
 *           ],
 *           "images": [],
 *           "id": "5e7f4bf85cce7d09a82e5a77",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4c925cce7d09a82e5a79",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4c985cce7d09a82e5a7b",
 *           "name": "album1",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e7ef28326e2fa0da04f81ae",
 *               "name": "artist1"
 *           },
 *           "available_markets": [],
 *           "images": [],
 *           "id": "5e7f4ca05cce7d09a82e5a7d",
 *           "type": "album"
 *       },
 *       {
 *           "album_type": "type1",
 *           "artist": {
 *               "type": "artist",
 *               "id": "5e833a51a51d971174923f17",
 *               "name": "ahmedsamir"
 *           },
 *           "available_markets": [
 *               "us,er,rttr,fretgre,jhj"
 *           ],
 *           "images": [],
 *           "id": "5e833b412b9d7718a491c850",
 *           "name": "album1",
 *           "type": "album"
 *       }
 *   ]
 * 
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.
 */
/**
 * @api {get} api/browse/popular-artists Get a List of popular artists 
 * @apiName Get a List of popular artists 
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a List of popular artists  featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/popular-artists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *    "artists": [
 *        {
 *            "genre": [
 *                "genre2",
 *                "genre1"
 *            ],
 *            "type": "artist",
 *            "name": "artist1",
 *            "images": [],
 *            "id": "5e7ef28326e2fa0da04f81ae",
 *            "info": "i am a good artist "
 *        },
 *        {
 *            "genre": [
 *                "genre1",
 *                "genre2",
 *                "genre3",
 *                "genre4"
 *            ],
 *            "type": "artist",
 *            "name": "ahmedsamir",
 *            "images": [],
 *            "id": "5e833a51a51d971174923f17"
 *        },
 *        {
 *            "genre": [
 *                "rytyt",
 *                "genre2",
 *                "genre1"
 *            ],
 *            "type": "artist",
 *            "name": "yytguguy",
 *            "images": [],
 *            "id": "5e7f67e438150c15e8589ece",
 *            "info": "jdshgdjdhfjkd"
 *        }
 *    ]
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a message and artists object. On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.
 */

/**
 * @api {get} api/browse/popular-playlists Get a List of popular playlists
 * @apiName Get a List of popular playlists 
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Get a List of popular playlists  featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/popular-playlists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 *  @apiSuccessExample {json} Success-Response:
 * {
 *    "playlists": [
 *        {
 *            "owner": {
 *                "id": "5e75c68387bceb10ac3d3394",
 *                "type": "user",
 *                "name": "ahmedsamir"
 *            },
 *            "collaborative": false,
 *            "type": "playlist",
 *            "name": "playlist1",
 *            "images": [],
 *            "id": "5e7d894d7832511978ec6b30",
 *            "Description": "",
 *            "isPublic": true
 *        },
 *        {
 *            "owner": {
 *                "id": "5e7d9045854b0419f4f409b7",
 *                "type": "user"
 *            },
 *            "collaborative": false,
 *            "type": "playlist",
 *            "name": "ssad",
 *            "images": [],
 *            "id": "5e7d9066854b0419f4f409b9",
 *            "Description": "",
 *            "isPublic": true
 *        },
 *        {
 *            "owner": {
 *                "id": "5e85f48b1ba5cf17ccca66e9",
 *                "type": "user",
 *                "name": "ahmedsamir"
 *            },
 *            "collaborative": false,
 *            "type": "playlist",
 *            "name": "playlist1",
 *            "images": [],
 *            "id": "5e85f4ca1ba5cf17ccca66eb",
 *            "Description": "",
 *            "isPublic": true
 *        },
 *        {
 *            "owner": {
 *                "id": "5e7d9045854b0419f4f409b7",
 *                "type": "user"
 *            },
 *            "collaborative": false,
 *            "type": "playlist",
 *            "name": "dhjgjdjdjg",
 *            "images": [],
 *            "id": "5e7d93dad82adf07f4121bac",
 *            "Description": "",
 *            "isPublic": true
 *        }
 *    ]
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a message and artists object. On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.
 */

/**
 * @api {get} api/recommendations Get Recommendations Based on Seeds  (not implemented yet)
 * @apiName Get Recommendations Based on Seeds
 * @apiGroup Browse
 * @apiDescription
 * <p style="color:red;">Create a playlist-style listening experience based on seed artists, tracks and genres.</p>
 *</br>
 *<p>Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks.</br></br> If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.</br></br> For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks. </p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *  @apiParam (QueryParameters)  limit  				Optional. The target size of the list of recommended tracks.</br> For seeds with unusually small pools or when highly restrictive filtering is applied,</br> it may be impossible to generate the requested number </br>of recommended tracks. Debugging information for </br>such cases is available in the response.</br> Default: 20. Minimum: 1. Maximum: 100.
 * @apiParam (QueryParameters)  market  		Optional. An ISO 3166-1 alpha-2 country code or the string from_token.</br> Provide this parameter if you want to apply Track Relinking.</br> Because min, max and target are applied to pools before relinking,</br> the generated results may not precisely match the filters applied. Original,</br> non-relinked tracks are available via the linked_from attribute of the relinked track response.
 * @apiParam (QueryParameters)  max 			Optional. Multiple values. For each tunable track attribute,</br> a hard ceiling on the selected track attribute’s value can be provided.</br> See tunable track attributes below for the list of available options.</br> For example, max_instrumentalness=0.35 would filter out most tracks that are likely</br> to be instrumental. 
 * @apiParam (QueryParameters)  min 			Optional. Multiple values. For each tunable track attribute,</br> a hard floor on the selected track attribute’s value can be provided.</br> See tunable track attributes below for the list of available options.</br> For example, min_tempo=140 would restrict results</br> to only those tracks with a tempo of greater than 140 beats per minute. 
 * @apiParam (QueryParameters)  seed_artists  		A comma separated list of Spotify IDs for seed artists.</br> Up to 5 seed values may be provided in any combination of seed_artists, </br>seed_tracks and seed_genres.
 *  @apiParam (QueryParameters)  seed_genres  			A comma separated list of any genres in the set of available genre seeds.</br> Up to 5 seed values may be</br> provided in any combination of seed_artists, seed_tracks and seed_genres.
 * @apiParam (QueryParameters)  seed_tracks  			A comma separated list of Spotify IDs for a seed track.</br> Up to 5 seed values may be provided in</br> any combination of seed_artists, seed_tracks and seed_genres.
 * @apiParam (QueryParameters)  target  		Optional. Multiple values. For each of the tunable track attributes (below)</br> a target value may be provided.</br> Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
 * 
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a recommendations response object in JSON format.
 */



//Follow

/**
 * @api {get} api/me/following/contains Check if Current User Follows Artists or Users  (not implement yet)
 * @apiName Check if Current User Follows Artists or Users
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Check to see if the current user is following one or more artists or other Spotify users.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 *
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service</br>The access token must have been issued on behalf of the current user.</br> Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.
 * 
 * 
 *  @apiParam (QueryParameters)  type  		Required. The ID type: either artist or user.
 * @apiParam (QueryParameters)  ids 		Required. A comma-separated list of the artist or the user Spotify IDs to check.</br> For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
 * 
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains a JSON array of true or false values, in the same order in which the ids were specified.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 * 
 */

/**
 * @api {get} api/playlists/{playlist_id}/followers/contains  Check if Users Follow a Playlist (Not implemented yet)
 * @apiName Check if Users Follow a Playlist
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Check to see if one or more Spotify users are following a specified playlist.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. Required. A valid access token from the Spotify Accounts service.
 * Following a playlist can be done publicly or privately.</br> Checking if a user publicly follows a playlist doesn’t require any scopes;</br> if the user is publicly following the playlist, this endpoint returns true.
 * Checking if the user is privately following a playlist is only possible for the current user</br> when that user has granted access to the playlist-read-private scope.
 * 
 * @apiParam (PathParameters)  playlist_id 		The Spotify ID of the playlist.
 * 
 *  @apiParam (QueryParameters)  ids  				Required. A comma-separated list of Spotify User IDs ;</br> the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response </br>body contains a JSON array oftrue or false values, in the same order in which the ids were specified.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 */

/**
 * @api {put} api/me/following Follow Artists or Users         (not implemented yet)
 * @apiName Follow Artists or Users
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Add the current user as a follower of one or more artists or other Spotify users.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope
 * @apiHeader (Header)  Content-Type Required if IDs are passed in the request body,</br> otherwise ignored. The content type of the request body: application/json.
 * 
 *  @apiParam (QueryParameters)  type  		Required. The ID type: either artist or user.
 * @apiParam (QueryParameters)  id 		Optional. A comma-separated list of the artist or the user Spotify IDs.</br> For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
 * @apiParam (BodyParameters)  ids   Optional. A JSON array of the artist or user Spotify IDs.</br> For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}.</br> A maximum of 50 IDs can be sent in one request.</br> Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *
 * 
 */

/**
 * @api {PUT} api/playlists/{playlist_id}/followers Follow a Playlist      
 * @apiName Follow a Playlist
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Add the current user as a follower of a playlist.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.</br> The access token must have been issued on behalf of the current user.</br>Following a playlist publicly requires authorization of the playlist-modify-public scope; following it privately requires the playlist-modify-private scope. 
 * @apiHeader (Header)  Content-Type Required. The content type of the request body: application/json
 * 
 * 
 *  @apiParam (PathParameters)  playlist_id  			The Spotify ID of the playlist. Any playlist can be followed,</br> regardless of its public/private status, as long as you know its playlist ID.
 * @apiParam (BodyParameters)   isPrivate   	Optional. (Boolean) Defaults to false. If false the playlist will be included in user’s public playlists,</br> if true it will remain private. To be able to follow playlists privately,</br> the user must have granted the playlist-modify-private scope.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is {success:" followed this playlist successfully"}.</br> On error, the header status code is an error code 400 and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/followers' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 */



/**
 * @api {get} api/me/followingArtist Get User's Followed Artists
 * @apiName Get User's Followed Artists
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Get the current user’s followed artists.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user. </br>Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.
 * 
 * 
 * @apiParam (QueryParameters)  limit  	Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50. 
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an artists object. The artists object in turn contains a cursor-based paging object of Artists.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/followingArtist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 */

/**
 * @api {delete} api/me/following Unfollow Artists or Users  (not implemented yet)
 * @apiName Unfollow Artists or Users
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Remove the current user as a follower of one or more artists or other Spotify users.</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope.
 * @apiHeader (Header)  Content-Type 	Required if IDs are passed in the request body, otherwise ignored.</br> The content type of the request body: application/json.
 * 
 *  @apiParam (QueryParameters)  type  				Required. The ID type: either artist or user.
 * @apiParam (QueryParameters)  ids  			Optional. A comma-separated list of the artist or the user Spotify IDs.</br> For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
 * @apiParam (BodyParameters)  ids 	Optional. A JSON array of the artist or user Spotify IDs. For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}.</br> A maximum of 50 IDs can be sent in one request.</br> Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored. 
 * 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 */
//like Tracks
/**
 * @api {put} api/me/like/:track_id like track   
 * @apiName like track
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Add the current user  like this track.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope
 * @apiParam (path Parameters)  track_id 		require.require.  track Spotify ID .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/like/5e8cba1b7f37604d583f8d37' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 */
/**
 * @api {delete} api/me/unlike/:track_id unlike track
 * @apiName unlike track
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Add the current user  unlike this track.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope
 * @apiParam (path Parameters)  track_id  		require.  track Spotify ID .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/me/unlike/5e8cba1b7f37604d583f8d37' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 */

//public

/**
 * @api {DELETE} api/playlists/{playlist_id}/followers Unfollow a Playlist
 * @apiName Unfollow a Playlist
 * @apiGroup Follow
 * @apiDescription
 * <p style="color:red;">Remove the current user as a follower of a playlist.</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the user.</br>Unfollowing a publicly followed playlist for a user requires authorization of the playlist-modify-public scope; unfollowing a privately followed playlist requires the playlist-modify-private scope.
 * 
 *  @apiParam (PathParameter)  playlist_id  		The Spotify ID of the playlist that is to be no longer followed.
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is {success:"unfollowed this playlist successfully"}.</br> On error, the header status code is an error code and the response body contains an error object.
 *  @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/followers' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 * 
 */

//Library

/**
 * @api {get} api/me/albums/contains Check User's Saved Albums   
 * @apiName Check User's Saved Albums
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details. </br>The user-library-read scope must have been authorized by the user.
 * 
 * 
 * @apiParam (QueryParameters)  albums_ids 			Required. A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.
 * 
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> a JSON array of true or false values, in the same order in which the ids were specified. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/albums/contains?albums_ids=5e8cba1b7f37604d583f8d37,5e8cba2d7f37604d583f8d38' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
*  @apiSuccessExample {json} Success-Response:
 *{
*[
 *   true,
 *   true,
 *   true
*]
 *}
 * 
 */

/**
 * @api {get} api/me/tracks/contains  Check User's Saved Tracks       
 * @apiName Check User's Saved Tracks
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.</br> The user-library-read scope must have been authorized by the user.

 * 
 *  @apiParam (QueryParameters)  tracks_ids 					Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> a JSON array of true or false values, in the same order in which the ids were specified. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/track/contains?track_ids=5e8cba1b7f37604d583f8d37,5e8cba2d7f37604d583f8d38' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
*  @apiSuccessExample {json} Success-Response:
 *{
*[
 *   true,
 *   true,
 *   true
*]
 *}
*/

/**
 * @api {get} api/me/albums Get Current User's Saved Albums
 * @apiName Get Current User's Saved Albums
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service. </br>The user-library-read scope must have been authorized by the user.
 * 
 *  @apiParam (QueryParameters)  limit  			Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (QueryParameters)  offset 			Optional. The index of the first object to return.</br> Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an array of </br>album objects (wrapped in a paging object) in JSON format. Each album object is accompanied</br> by a timestamp (added_at) to show when it was added. There is also an etag in the header that can be used in future conditional requests.</br> On error, the header status code is an error code and the response body contains an error object.
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/albums' \
*--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 *
 *  @apiSuccessExample {json} Success-Response:
*{  
 [
    {
        "isSaved": true,
        "_id": "5e8cb9327f37604d583f8d25",
        "name": "HELLO KIDS",
        "images": [],
        "artistId": "5e8cb7037f37604d583f8d22",
        "artistName": "nada",
        "track": [
            {
                "_id": "5e8ce2a17d3d703094eb82f4",
                "name": "GOGO",
                "images": []
            },
            {
                "_id": "5e8ce2ca7d3d703094eb82f7",
                "name": "OHAY",
                "images": []
            },
            {
                "_id": "5e8ce2ce7d3d703094eb82fa",
                "name": "POP",
                "images": []
            },
            {
                "_id": "5e8ce2d37d3d703094eb82fd",
                "name": "SASA",
                "images": []
            },
            {
                "_id": "5e8ce2d77d3d703094eb8300",
                "name": "DOMAIN",
                "images": []
            },
            {
                "_id": "5e8ce2dc7d3d703094eb8303",
                "name": "NOMAIN",
                "images": []
            }
        ]
    },
    {
        "isSaved": true,
        "_id": "5e8cb9457f37604d583f8d27",
        "name": "HELLO SLEEP WALKERS",
        "images": [],
        "artistId": "5e8cb7037f37604d583f8d22",
        "artistName": "nada",
        "track": [
            {
                "_id": "5e8ce86082c8d9579467fb73",
                "name": "WHO I AM",
                "images": []
            },
            {
                "_id": "5e8ce86882c8d9579467fb76",
                "name": "SOKA",
                "images": []
            },
            {
                "_id": "5e8ce86c82c8d9579467fb79",
                "name": "ARASU",
                "images": []
            },
            {
                "_id": "5e8ce87182c8d9579467fb7c",
                "name": "WIWI",
                "images": []
            },
            {
                "_id": "5e8ce87682c8d9579467fb7f",
                "name": "WWIII",
                "images": []
            }
        ]
    },
    {
        "isSaved": true,
        "_id": "5e8cb94b7f37604d583f8d29",
        "name": "OHAYO SLEEP WALKERS",
        "images": [],
        "artistId": "5e8cb7037f37604d583f8d22",
        "artistName": "nada",
        "track": [
            {
                "_id": "5e8ce8b282c8d9579467fb82",
                "name": "KJKJQ",
                "images": []
            },
            {
                "_id": "5e8ce8bb82c8d9579467fb85",
                "name": "HEHE",
                "images": []
            },
            {
                "_id": "5e8ce8bf82c8d9579467fb88",
                "name": "MOON",
                "images": []
            },
            {
                "_id": "5e8ce8c382c8d9579467fb8b",
                "name": "SUN",
                "images": []
            },
            {
                "_id": "5e8ce8c982c8d9579467fb8e",
                "name": "FREEZE",
                "images": []
            }
        ]
    }
]
*}
 */

/**
 * @api {get} api/me/tracks Get a User's Saved Tracks
 * @apiName Get a User's Saved Tracks
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.</br> The user-library-read scope must have been authorized by the user. 
 * 
 * 
 *  @apiParam (QueryParameters)  limit  			Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (QueryParameters)   offset   		Optional. The index of the first object to return.</br> Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of saved track objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 *
 *  @apiSuccessExample {json} Success-Response:
*{
    "tracks": [
        {
            "artistId": "5e8cb7037f37604d583f8d22",
            "artistName": "nada",
            "artistimages": [],
            "artistType": "Artist",
            "albumId": "5e8cb9327f37604d583f8d25",
            "albumName": "HELLO KIDS",
            "albumImages": [],
            "albumType": "Album",
            "_id": "5e8cba367f37604d583f8d39",
            "name": "SWALLA",
            "type": "Track",
            "images": []
        },
        {
            "artistId": "5e8cb7037f37604d583f8d22",
            "artistName": "nada",
            "artistimages": [],
            "artistType": "Artist",
            "albumId": "5e8cb9457f37604d583f8d27",
            "albumName": "HELLO SLEEP WALKERS",
            "albumImages": [],
            "albumType": "Album",
            "_id": "5e8cba7f7f37604d583f8d3f",
            "name": "LOVE",
            "type": "Track",
            "images": []
        }
    ],
    "ownerName": " Samir",
    "playlistId": "5e9c637cfac98e0e1041a769"
*} 
 */

/**
 * @api {delete} api/me/albums Remove Albums for Current User   
 * @apiName Remove Albums for Current User
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Remove one or more albums from the current user’s ‘Your Music’ library.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service.</br>Modification of the current user’s “Your Music” collection requires authorization of the user-library-modify scope.
 * @apiHeader (Header)  content-type 	Required if the IDs are passed in the request body, otherwise ignored.</br> The content type of the request body: application/json
 * 
 *  @apiParam (BodyParameters)  ids  					Optional. A comma-separated list of the Spotify IDs.</br> For example: {"ids":"4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M"}
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 Success.</br> On error, the header status code is an error code and the response body contains an error object.
 */

/**
 * @api {put} api/me/Albums Save Albums for Current User
 * @apiName Save Albums for Current User
 * @apiGroup Library
 * @apiDescription
 * <p style="color:red;">Save one or more albums to the current user’s ‘Your Music’ library.</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.</br>Modification of the current user’s “Your Music” collection requires authorization of the user-library-modify scope.
 * 
 *  @apiParam (BodyParameters)  ids  					Optional. A comma-separated list of the Spotify IDs.</br> For example: {"ids":"4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M"}
 *
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 Created.</br> On error, the header status code is an error code and the response body contains an error object. 
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/Albums?ids=5e8cb9327f37604d583f8d25' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 */


//Personalization

/**
 * @api {get} api/me/top/{type} Get a User's Top Artists and Tracks        (not implemented yet)
 * @apiName Get a User's Top Artists and Tracks
 * @apiGroup Personalization
 * @apiDescription
 * <p style="color:red;">Get the current user’s top artists or tracks based on calculated affinity.</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Getting details of a user’s top artists and tracks requires authorization of the user-top-read scope.
 * @apiParam (PathParameters)  type 		The type of entity to return. Valid values: artists or tracks. 
 * 
 * @apiParam (QueryParameters)  limit  				Optional. The number of entities to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
 * @apiParam (QueryParameters)  offset  					Optional. The index of the first entity to return.</br> Default: 0 (i.e., the first track). Use with limit to get the next set of entities.
 * @apiParam (QueryParameters)  time-range  					Optional. Over what time frame the affinities are computed.</br> Valid values: long_term (calculated from several years of data and including all new data as it becomes available),</br> medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a paging object of Artists or Tracks. </br>On error, the header status code is an error code and the response body contains an error object.
 */

//Player


/**
 * @api {get} api/player Get Information About The User's Current Playback  (not implemented yet)
 * @apiName Get Information About The User's Current Playback
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Get information about the user’s current playback state, including track, track progress, and active device.</br> Optional parameters can be specified in the query string to filter and sort the response.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (Query Parameters)  market 	Optional. An ISO 3166-1 alpha-2 country code or the string from_token.
 *
 * @apiParam (Response) Format A successful request will return a 200 OK response code with a json payload that contains information about the current playback. The information returned is for the last known state, which means an inactive device could be returned if it was the last one to execute playback. When no available devices are found, the request will return a 200 OK response but with no data populated.
 */
/**
 * @api {get} api/me/player/currently-playing Get the User's Currently Playing Track
 * @apiName Get the User's Currently Playing Track
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Get the object currently being played on the user’s Spotify account.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *   @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/player/currently-playing' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 *   
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        },
 *    
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb",
 *   "isPlayable":true
 *}
 * 
 * 
 * @apiParam (Response) Format A successful request will return a 200 OK response code with a json payload that contains information about the currently playing track and context (see below). The information returned is for the last known state, which means an inactive device could be returned if it was the last one to execute playback. When no available devices are found, the request will return a 200 OK response but with no data populated. When no track is currently playing, the request will return a 204 NO CONTENT response with no payload. If private session is enabled the response will be a 204 NO CONTENT with an empty payload.
 */
/**
 * @api {get} api/me/queue Get currently queue for this user
 * @apiName Get the User's Currently playback queue
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Get the User's Currently playback queue</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/queue' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *[
 *{   
 *    "fullTrack": {
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        }
 *    },
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb",
 *     "isPlayable": false
 *},
 *{   
 *    "fullTrack": {
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        }
 *    },
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb",
 *     "isPlayable": false
 *},   
 *    "fullTrack": {
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        }
 *    },
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb",
 *     "isPlayable": false
 *}
 *]
 *}
 * 
 * 
 * 
 * @apiParam (Response) Format A successful request will return a 200 OK response code with a json array of tracks in queue if error 400 status
 */

/**
 * @api {get} api/me/player/recently-played Get Current User's Recently Played Tracks
 * @apiName Get Current User's Recently Played Tracks.
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Get tracks from the current user’s recently played tracks.</p>
 * 
 * 
 *Returns the most recent 50 tracks played by a user. Note that a track currently playing will not be visible in play history until it has completed. A track must be played for more than 30 seconds to be included in play history.
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 *
 *  @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *  
 * 
 * @apiParam (Query Parameters)  limit  Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (Query Parameters)  after  Optional. A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If after is specified, before must not be specified.
 * @apiParam (Query Parameters)  before Optional. A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If before is specified, after must not be specified.
 * 
 * 
 *
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 200 OK and the response body contains an array of play history objects (wrapped in a cursor-based paging object) in JSON format. The play history items each contain the context the track was played from (e.g. playlist, album), the date and time the track was played, and a track object (simplified). On error, the header status code is an error code and the response body contains an error object. If private session is enabled the response will be a 204 NO CONTENT with an empty payload.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/player/recently-played' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 */

/**
 * @api {PUT} api/me/player/pause Pause a User's Playback
 * @apiName Pause a User's Playback
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Pause playback on the user’s account.</br> 
 * 
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *
 * @apiParam (Response) Format A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/player/pause' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 */

/**
 * @api {PUT} api/player Seek To Position In Currently Playing Track       (not implemented yet)
 * @apiName Seek To Position In Currently Playing Track
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Seeks to the given position in the user’s currently playing track.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Query Paramaters)  position_ms	 Required. The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
 * 
 * 
 * @apiParam (Response) Format A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 */
/**
 * @api {PUT} api/player/repeat Set Repeat Mode On User’s Playback
 * @apiName Set Repeat Mode On User’s Playback
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 * @apiParam (Query Paramaters) state	     Required.track, boolean true if repeat false if not repeat to repeat playlist  
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/player/repeat?state=true' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 */
/**
 * @api {POST} api/me/player/next-playing Skip User’s Playback To Next Track
 * @apiName Skip User’s Playback To Next Track
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Skips to next track in the user’s queue.</p>
 *
 * After a successful skip operation, playback will automatically start.
 * 
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/me/player/next-playing' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 *    
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        },
 *   
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb",
 *     "isPlayable": false
 *}
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code,current playing track, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 */
/**
 * @api {POST} api/me/player/prev-playing Skip User’s Playback To Previous Track
 * @apiName Skip User’s Playback To Previous Track
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Skips to previous track in the user’s queue.</p>
 *
 * Note that this will ALWAYS skip to the previous track, regardless of the current track’s progress. Returning to the start of the current track should be performed using the https://api.spotify.com/v1/me/player/seek endpoint.
 * 
 * After a successful skip operation, playback will automatically start.
 * 
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/me/player/prev-playing' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 *    
 *        "track": {
 *            "availableMarkets": [
 *                "\"er,ty,eue,euu\""
 *            ],
 *            "_id": "5e85f4241ba5cf17ccca66d7",
 *            "url": "5e85f4241ba5cf17ccca66d5",
 *            "images": [],
 *            "duration": 436,
 *            "trackNumber": 236,
 *            "name": "\"track6\"",
 *            "artistId": "5e833a51a51d971174923f17",
 *            "albumId": "5e833b412b9d7718a491c850",
 *            "discNumber": 1,
 *            "explicit": false,
 *            "type": "Track",
 *            "acousticness": 10,
 *            "danceability": 23,
 *            "energy": 100,
 *            "instrumentalness": 4,
 *            "key": 90,
 *            "liveness": 25,
 *            "loudness": 70,
 *            "mode": 56,
 *            "speechiness": 67,
 *            "tempo": 76,
 *            "timeSignature": "2020-04-02T14:18:12.619Z",
 *            "valence": 70,
 *            "like": 0,
 *            "__v": 0
 *        },
 *        "isLiked": false,
 *        "album": {
 *            "name": "album1",
 *            "_id": "5e833b412b9d7718a491c850",
 *            "artist": {
 *                "name": "ahmedsamir",
 *               "_id": "5e833a51a51d971174923f17"
 *            }
 *        }
 *    },
 *    "isPlaylist": true,
 *    "playlistId": "5e85f4ca1ba5cf17ccca66eb"
 *     "isPlayable": false
 *}
 * 
 * 
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code,and current playing  track , and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 */
/**
 * @api {PUT} api/me/player/play Start/Resume a User's Playback 
 * @apiName Start/Resume a User's Playback 
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Start a new context or resume current playback on the user’s active device.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 * @apiParam (Response) Format A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/player/play' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 */
/**
 * @api {PUT} api/me/player/shuffle Toggle Shuffle For User’s Playback
 * @apiName Toggle Shuffle For User’s Playback
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Toggle shuffle on or off for user’s playback.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * 
 * @apiParam (Query Paramaters)  state	Required   true : Shuffle user’s playback & false : Do not shuffle user’s playback.
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/player/shuffle?state=true' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 */

/**
 * @api {POST} api/player/add-to-queue/:playlistId/:trackId Add an Item to the User's Playback Queue
 * @apiName Add an Item to the User's Playback Queue
 * @apiGroup Player
 * @apiDescription
 * 
 * <p style="color:red;">Add an item to the end of the user’s current playback queue.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 * @apiParam (Path Paramaters) requried.trackId the id of the track went to add
 * @apiParam (Path Paramaters) requried.playlistId the id of the playlist or album this track from 
 * @apiParam (Query Paramaters) requried.isPlaylist boolean if true this track from playlist else this from album
 * 
 *   
 * @apiParam (Response) format A completed request will return a 200  response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/player/add-to-queue/5e8cbe527f37604d583f8d5c/5e8cbefc7f37604d583f8d68/?isPlaylist=true' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 */
//Playlist

/**
 * @api {PUT} api/me/restoreplaylists Restore user deleted Playlists.
 * @apiName Restore user deleted Playlists.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Restore user deleted Playlists.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * @apiParam (Query Parameters)  playlistsIds	The Spotify IDs for the playlists
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (Response) Format On success, the response body contains a array of 1's and 0's values with the same order of the given array of playlists ids to detect whether restored or not and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 404  and the response body contains an error object, If the ids not given error 403 will be sent .
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/restoreplaylists?playlistsIds=5e8cbe6b7f37604d583f8d64' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
*  [
*    1
*  ]
 */


/**
 * @api {GET} api/me/deletedplaylists Get user deleted Playlists
 * @apiName Get user deleted Playlists.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Get user deleted Playlists</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (Response) Format On success, the response body contains a array of deleted playlists object in JSON format and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 404  and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/deletedplaylists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
*  [
*    {
*        "id": "5e9d8b96cee2040d0c675837",
*        "name": "New Playlist",
*        "songsNumber": 0,
*        "deletedAt": "2020-04-20T13:55:14.438Z"
*    },
*    {
*        "id": "5e9dbc06f01d440db972ee71",
*        "name": "mmm",
*        "songsNumber": 0,
*        "deletedAt": "2020-04-20T15:13:16.070Z"
*    },
*    {
*        "id": "5e8cbe6b7f37604d583f8d64",
*        "name": "SpaceToon",
*        "songsNumber": 2,
*        "deletedAt": "2020-04-20T16:00:21.601Z"
*    },
*    {
*        "id": "5e9dca05f01d440db972eed8",
*        "name": "New Playlist",
*        "songsNumber": 0,
*        "deletedAt": "2020-04-20T18:17:19.521Z"
*    }
*]
 */


/**
 * @api {POST} api/playlists/{playlist_id}/tracks Add Tracks to a Playlist
 * @apiName Add Tracks to a Playlist
 * @apiGroup Playlist
 * @apiDescription
 * <p style="color:red;">Add one or more tracks to a user’s playlist..</p>
 *
 * The Spotify URIs of the tracks to add can be passed either in the query string or as a JSON array in the request body
 * 
 * . Passing them in the query string
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-Type	Required if URIs are passed in the request body, otherwise ignored. The content type of the request body: application/json
 *
 *
 *
 * @apiParam (Body Parameters) tracks { string }  comma seperated string of track_ids that will be added to playlist
 * 
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 201 Created. The response body contains the playlist in JSON format. on error 404 error will be sent with error object, if there are no tracks 401 response will be sent with bad request error 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
	"tracks":"5e8cba1b7f37604d583f8d37"
}'
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"_id":"5e7cee3c35bf5449a0aa0a24",
 *   "type":"playlist",
 *   "Description":"",
 *   "collaborative":false,
 *   "name":"playlist1Demo",
 *   "isPublic":true,"ownerId":"5e7ced3535bf5449a0aa0a23",
 *   "images":[],
 *   "snapshot":[
 *       {
 *            "hasTracks":
 *           ["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139"],*           "_id":"5e7cf0e4f37b461aac6afdd0","action":"Add Tracks"}
 *       ]
 *   ,"__v":1}
 */

/**
 * @api {GET} api/playlists/{playlist_id}/tracks Get Tracks from a Playlist
 * @apiName Get Tracks from a Playlist
 * @apiGroup Playlist
 * @apiDescription
 * <p style="color:red;">Get Tracks from a playlist..</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 *
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 200 . The response body contains the playlist main info and array of its tracks in JSON format. on error 404 error will be sent with error object, if there are no tracks 401 response will be sent with bad request error 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 * @apiSuccessExample {json} Success-Response:
 * [
*    {
*        "id": "5e8cbe647f37604d583f8d60",
*        "type": "playlist",
*        "name": "SunShine",
*        "ownerId": "5e8cb118084a9d2e6c8f21d7",
*        "collaborative": false,
*        "isPublic": true,
*        "images": [],
*        "tracks": [
*            {
*                "trackid": "5e8cbb037f37604d583f8d47",
*                "name": "OH WOW",
*                "artistId": "5e8cb7037f37604d583f8d22",
*                "artistName": "nada",
*                "albumId": "5e8cb95d7f37604d583f8d2d",
*                "albumName": "KONNICHIWA KIDS",
*                "isLiked": false
*            },
*            {
*                "trackid": "5e8cbb147f37604d583f8d48",
*                "name": "WOW",
*                "artistId": "5e8cb7037f37604d583f8d22",
*                "artistName": "nada",
*                "albumId": "5e8cb96a7f37604d583f8d2f",
*                "albumName": "SAY YOU WON'T LET GO",
*                "isLiked": false
*            },
*            {
*                "trackid": "5e8cba6c7f37604d583f8d3e",
*                "name": "KILL ME",
*                "artistId": "5e8cb7037f37604d583f8d22",
*                "artistName": "nada",
*                "albumId": "5e8cb9457f37604d583f8d27",
*                "albumName": "HELLO SLEEP WALKERS",
*                "isLiked": false
*            }
*        ],
*        "isfollowed": false,
*        "checkType": "none"
*    }
*]
 */

/**
 * @api {POST} api/users/playlists Create a Playlist
 * @apiName Create a Playlist
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiHeader (Header)  Content-Type	Required. The content type of the request body: application/json
 * @apiParam (Body Parameters) {string}  name				Required. The new name for the playlist
 * @apiParam (Body Parameters) {string}  Describtion		optional. The description for the playlist
 * @apiParam (Response) Format On success, the response body contains the created playlist object in JSON format and the HTTP status code in the response header is 200 Ok Created. On error, the header status code is an error code and the response body contains an error object. Trying to create a playlist when you do not have the user’s authorization returns error 400 Forbidden.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request POST 'http://localhost:3000/api/users/playlists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
	"name":"new playlist name",
	"describtion":"ant desc"
	
}'
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"_id":"5e7cee3c35bf5449a0aa0a24",
 * "type":"playlist",
 * "Description":"",
 * "collaborative":false,
 * "name":"playlist1Demo",
 * "isPublic":true,
 * "ownerId":"5e7ced3535bf5449a0aa0a23",
 * "images":[],
 * "snapshot":[],
 * "__v":0}
 * 
 */
/**
 * @api {PUT} api/playlists/{playlist_id} Change a Playlist's Details
 * @apiName Change a Playlist's Details
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Change a Playlist's Details Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)</p>
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
 * @apiParam (Body Parameters) {string}  name		Optional. The new name for the playlist
 * @apiParam (Body Parameters) {Boolean} public		Optional. If true the playlist will be public, if false it will be private.
 * @apiParam (Body Parameters) {Boolean} collaborative		Optional. If true , the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. Note: You can only set collaborative to true on non-public playlists.
 * @apiParam (Body Parameters) {string}  description	Optional. Value for playlist description as displayed in Spotify Clients and in the Web API.
 * 
 *
 * @apiParam (Response) Format On success the HTTP status code in the response header is 200 OK. On error, the header status code is 400 status and the response body contains an error object. Trying to change a playlist when you do not have the user’s authorization returns error 403 Forbidden.
 * 
 *   @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
	"name":"new name"
	
}'
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * "_id":"5e7cee3c35bf5449a0aa0a24",
 * "type":"playlist",
 * "Description":"anything",
 * "collaborative":false,
 * "name":"changedPlaylist1",
 * "isPublic":true,
 * "ownerId":"5e7ced3535bf5449a0aa0a23",
 * "images":[],
 * "snapshot":[
 * {"hasTracks":["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139"],"_id":"5e7cf0e4f37b461aac6afdd0","action":"Add Tracks"},
 * {"hasTracks":["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139"],"_id":"5e7cf10728082026100db373","action":"Add Tracks"},
 * {"hasTracks":["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139","5e7c95e2cb9f6a5270ea412d"],"_id":"5e7cf11d28082026100db374","action":"Add Tracks"},
 * {"hasTracks":["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139","5e7c95e2cb9f6a5270ea412d"],"_id":"5e7cf12f28082026100db375","action":"Add Tracks"}],
 * "__v":4}
 * 
 */

/**
 * @api {get} api/me/playlists Get a List of Current User's Playlists
 * @apiName Get a List of Current User's Playlists.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Get a list of the playlists owned or followed by the current Spotify user.</p>
 * 
 * 
 *Returns list of user's playlists created and followed by user
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 *
 *  @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *  
 * 
 * 
 *
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 200 OK and the response body contains an array of  playlist objects in JSON format. On error, the header status code is an error code 404 and the response body contains an error object. Please note that the access token has to be tied to a user.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/playlists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 * 
*@apiSuccessExample {json} Success-Response:
*[
*    {
*        "id": "5e9d4a5917bf6c123f3f093d",
*        "name": "mm",
*        "ownerId": "5e8cb118084a9d2e6c8f21d7",
*        "owner": "nada",
*        "collaborative": false,
*        "isPublic": true,
*        "images": [],
*        "type": "created"
*    },
*    {
*        "id": "5e9dc7d4f01d440db972eec8",
*        "name": "spacetoon",
*        "ownerId": "5e8cb118084a9d2e6c8f21d7",
*        "owner": "nada",
*        "collaborative": false,
*        "isPublic": true,
*        "images": [],
*        "type": "created"
*    },
*    {
*        "id": "5e9dc832f01d440db972eed1",
*        "name": "MENNA",
*        "ownerId": "5e8cb118084a9d2e6c8f21d7",
*        "owner": "nada",
*        "collaborative": false,
*        "isPublic": true,
*        "images": [],
*        "type": "created"
*    },
*    {
*        "id": "5e9dca05f01d440db972eed8",
*        "name": "New Playlist",
*        "ownerId": "5e8cb118084a9d2e6c8f21d7",
*        "owner": "nada",
*        "collaborative": false,
*        "isPublic": true,
*        "images": [],
*        "type": "created"
*    }
*]
 */

/**
 * @api {GET} api/users/{user_id}/playlists  Get a List of a User's Playlists created and followed
 * @apiName Get a List of a User's Playlists
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Get a list of the playlists owned or followed by a Spotify user.</br> 
 * 
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * @apiParam (path Parameters) user_id	The user’s Spotify user ID.
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * 
 *@apiParam (Query Parameters)  limit  Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (Query Parameters)  offset	Optional. The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000. Use with limit to get the next set of playlists
 *
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 200 OK and the response body contains an array of  playlist objects  in JSON format. On error, the header status code is an error code 404 and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/users/5e8cb14d084a9d2e6c8f21db/playlists' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 *@apiSuccessExample {json} Success-Response:
 * [{"_id":"5e7cee3c35bf5449a0aa0a24",
 * "type":"playlist",
 * "Description":"anything",
 * "collaborative":false,
 * "name":"changedPlaylist1",
 * "isPublic":true,
 * "ownerId":"5e7ced3535bf5449a0aa0a23",
 * "images":[],
 * "snapshot":[{"hasTracks":["5e7c9618cb9f6a5270ea413a","5e7c9618cb9f6a5270ea4139"],"_id":"5e7cf0e4f37b461aac6afdd0","action":"Add Tracks"}],
 * "__v":4}]
 */

/**
 * @api {GET} api/playlists/{playlist_id} Get a Playlist
 * @apiName Get a Playlist.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Get a playlist owned by a Spotify user.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (Query Paramaters)  snapshot-id	Optional. Snapshot is the id of the version of playlist if not give me it will be the last by defult
 * @apiParam (Response) Format On success, the response body contains a playlist object in JSON format and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 400  and the response body contains an error object. Requesting playlists that you do not have the user’s authorization to access returns error 400 Forbidden. For the description in the Playlist object, it should be expected that HTML will be escaped.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"_id":"5e7b6413357189256c64f202",
 * "type":"playlist",
 * "collaborative":false,
 * "name":"playlist1Demo",
 * "isPublic":true,
 * "images":[],
 * "snapshot":[],
 * "__v":0}
 */
/**
 * @api {Delete} api/me/delete/playlists/{playlist_id} delete a Playlist
 * @apiName delete a Playlist.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">delete a playlist owned by a Spotify user.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 
 * @apiParam (Response) Format On success, the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Requesting playlists that you do not have the user’s authorization to access returns error 400 Forbidden. For the description in the Playlist object, it should be expected that HTML will be escaped.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/me/delete/playlists/5e8cbfa97f37604d583f8d6a' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * 
 * @apiSuccessExample {json} Success-Response:
 * {"success":"Delete successfully"}
 */
/**
 * @api {GET} api/Playlist/next Get a Playlist Cover Image(not implemented yet)
 * @apiName Get a Playlist Cover Image
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Get the current image associated with a specific playlist.</p>
 *
 * @apiParam (Path Parameters)  playlist_id	The Spotify ID for the playlist
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiParam (Response) Format On success, the response body contains a list of image objects in JSON format and the HTTP status code in the response header is 200 OK On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 */
/**
 * @api {DELETE} api/playlists/{playlist_id}/tracks Remove Tracks from a Playlist
 * @apiName Remove Tracks from a Playlist
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Remove one or more tracks from a user’s playlist.</p>
 *There are several ways to specify which tracks to remove, determined by the request parameters.
 *<b>Removing all occurrences of specific tracks</b>
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
 *@apiParam (Body parameter) track_ids required. comma seperated string contain ids of tracks to be removed from playlist 
 *  
 *@apiParam (Body parameter) snapshot_id optional. id of the snapshot to remove tracks from
 *
 * @apiParam (Response) Format On success, the response body contains a snapshot_id in JSON format and the HTTP status code in the response header is 200 OK.  On error, the header status code is an error code 404 and the response body contains an error object. Trying to remove a track when you do not have the user’s authorization returns error 403 Forbidden. Attempting to use several different ways to remove tracks returns 400 Bad Request
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
	"track_ids":"5e8cba1b7f37604d583f8d37,5e8cba6c7f37604d583f8d3e"
	
}'

 */
/**
 * @api {PUT} api/playlists/{playlist_id}/tracks Reorder a Playlist's Tracks
 * @apiName Reorder a Playlist's Tracks
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Reorder a track or a group of tracks in a playlist.</p>
 *
 * When reordering tracks, the timestamp indicating when they were added and the user who added them will be kept untouched. In addition, the users following the playlists won’t be notified about changes in the playlists when the tracks are reordered.
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
 * @apiParam (Body Parameters) {integer}       range_start		Required. The position of the first track to be reordered.
 * @apiParam (Body Parameters)  {integer}	 range_length		Optional. The amount of tracks to be reordered. Defaults to 1 if not set. The range of tracks to be reordered begins from the range_start position, and includes the range_length subsequent tracks.
 * @apiParam (Body Parameters)  {integer}     insert_before   	Required. The position where the tracks should be inserted.
 *To reorder the tracks to the end of the playlist, simply set insert_before to the position after the last track
 * @apiParam (Body Parameters) {string}        snapshot_id		Optional. The playlist’s snapshot ID against which you want to make the changes.
 *
 * 
 * @apiParam (Response) Format On success, the response body contains a snapshot_id in JSON format and the HTTP status code in the response header is 200 OK. The snapshot_id can be used to identify your playlist version in future requests. On error, the header status code is an error code, the response body contains an error object, and the existing playlist is unmodified.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
	"range_start":2
	
}'

 * 
 *@apiSuccessExample {json} Success-Response:
 *{"_id":"5e7cee3c35bf5449a0aa0a24","type":"playlist",*"Description":"anything",
 *"collaborative":false,
 *"name":"changedPlaylist1",
 *"isPublic":false,
 *"ownerId":"5e7ced3535bf5449a0aa0a23",
 *"images":[],
 *"snapshot":["hasTracks":["5e7c95e1cb9f6a5270ea412a",*"5e7c95e2cb9f6a5270ea412d","5e7c9618cb9f6a5270ea413a",*"5e7c95e2cb9f6a5270ea412c","5e7c95e2cb9f6a5270ea412b"],*"_id":"5e7e63cb0348392ef49bf95d","action":"Add Tracks"},
 *{"hasTracks":["5e7c95e1cb9f6a5270ea412a","5e7c9618cb9f6a5270ea413a",*"5e7c95e2cb9f6a5270ea412c","5e7c95e2cb9f6a5270ea412b",*"5e7c95e2cb9f6a5270ea412d"],"_id":"5e7e63dc0348392ef49bf95e",*"action":"reorder Tracks"},{"hasTracks":["5e7c9618cb9f6a5270ea413a",*"5e7c95e2cb9f6a5270ea412c","5e7c95e2cb9f6a5270ea412b",*"5e7c95e2cb9f6a5270ea412d","5e7c95e1cb9f6a5270ea412a"],*"_id":"5e7e63f00348392ef49bf95f","action":"reorder Tracks"}],
 *"__v":38}
 */
/**
 * @api {PUT} api/playlists/{playlist_id}/tracks Replace a Playlist's Tracks (Not implemented yet)
 * @apiName Replace a Playlist's Tracks.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Replace all the tracks in a playlist, overwriting its existing tracks. This powerful request can be useful for replacing tracks, re-ordering existing tracks, or clearing the playlist.</p>
 *
 * The Spotify URIs of the tracks to set can be passed either as a JSON array in the request body or as a list in the query string. The request can only accept a maximum of 100 tracks; any additional tracks will need to be added using the “Add Tracks to a Playlist” endpoint.
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
 * @apiParam (Query Paramaters) {list_of_Spotify_URIs} uris		Optional. A comma-separated list of Spotify track URIs to set.
 *
 * 
 * @apiParam (body Paramaters)  {list_of_Spotify_URIs_strings} uris	Optional. A JSON array of the Spotify track URIs to set. For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}Currently, a maximum of 100 tracks can be set. Note: if the uris parameter is present in the query string, any URIs listed here in the body will be ignored.
 * 
 * @apiParam (Response) Format on success, the HTTP status code in the response header is 201 Created. On error, the header status code is an error code, the response body contains an error object, and the existing playlist is unmodified. Trying to set a track when you do not have the user’s authorization returns error 403 Forbidden.
 */
/**
 * @api {PUT} api/playlists/{playlist_id}/images Upload a Custom Playlist  Cover Image (Not implemented yet)
 * @apiName Upload a Custom Playlist Cover Image.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">Replace the image used to represent a specific playlist.</p>
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
 * @apiParam (body Paramaters)  image Base64 encoded JPEG image data, maximum payload size is 256 KB
 * @apiParam (Rate limiting) Ratelimiting If you get status code 429, it means that you have sent too many requests. If this happens, have a look in the Retry-After header, where you will see a number displayed. This is the amount of seconds that you need to wait, before you can retry sending your requests.
 * @apiParam (Response) Format A successful request will return a 202 ACCEPTED response code. When the image has been provided, we forward it on to our transcoder service in order to generate the three sizes provided in the playlist’s images object. This operation may take a short time, so performing a GET request to the playlist may not immediately return URLs to the updated images.On error, the header status code is an error code and the response body contains an error object.
 */
/**
 * @api {PUT} api/playlists/{playlist_id}/collaborative toggle playlist collaborative attribute
 * @apiName toggle collaborative.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">toggle the collaborative attribute of the specified playlist in the request</p>
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
 * @apiParam (Response) Format on success, the HTTP status code in the response header is 200. On error, the header status code is an error code 404, the response body contains an error object, and the existing playlist is unmodified. Trying to set a track when you do not have the user’s authorization returns error 403 Forbidden.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbfa97f37604d583f8d6a/collaborative' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 */
/**
 * @api {PUT} api/playlists/{playlist_id}/public toggle playlist public attribute
 * @apiName toggle public.
 * @apiGroup Playlist
 * @apiDescription
 * 
 * <p style="color:red;">toggle the public attribute of the specified playlist in the request.</p>
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
 * @apiParam (Response) Format on success, the HTTP status code in the response header is 200. On error, the header status code is an error code 404, the response body contains an error object, and the existing playlist is unmodified. Trying to set a track when you do not have the user’s authorization returns error 403 Forbidden.
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbfa97f37604d583f8d6a/public' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 */

//search
/**
 * @api {get} api/search Search for an Item
 * @apiName Search for an Item
 * @apiGroup Search
 * @apiDescription
 * <p style="color:red;">Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.</p>
 *
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiParam (Query parameters) name	Required.Search query keywords.
 * @apiParam (Query parameters) type	Required.A comma-separated list of item types to search across.Valid types are: top, album , artist, playlist, and track.Search results include hits from all the specified item types.

 * @apiParam (Response) Format
 * On success: 
 * </br></br>In the response header the HTTP status code is 200 OK.
 * </br></br>The response body contains an array of the given type objects EX : type =artist,track then the response body contains a json object of artists and tracks.
 * </br> </br>On error: 
 * </br></br>The header status code is 404.
 * </br></br>The response body contains "No results found".
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/search?name=nada&type=artist,playlist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 */



//Tracks

/**
 * @api {get} api/audio-analysis/{id} Get Audio Analysis for a Track (not implemented)
 * @apiName Get Audio Analysis for a Track
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get a detailed audio analysis for a single track identified by its unique Spotify ID.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.
 * 
 * 
 * @apiParam (PathParameters)  id				Required. The Spotify ID for the track.
 * 
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an audio analysis object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 */

/**
 * @api {get} /api/tracks/related/{track_id} get related tracks for specific track
 * @apiName get related tracks 
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">get related tracks for specific track based on its genre.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.
 * 
 * 
 * @apiParam (PathParameters)  track_id				Required. The Spotify ID for the track.
 * 
 *
 * @apiParam (Response)  Format  On success 200 and get array of related tracks, on error or if no tracks then 404 not found
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/tracks/related/5e9b64e4e9c8d87fdc2ecbd8' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \
* @apiSuccessExample {json} Success-Response:
* 
 *[
    {
        "availableMarkets": [
            "\"eg\""
        ],
        "genre": [
            "quran",
            ""
        ],
        "_id": "5e9b62c3e9c8d87fdc2ecb58",
        "url": "undefined",
        "images": [],
        "duration": 3000,
        "trackNumber": 1,
        "name": "el-kyama",
        "artistId": "5e9b5b656dff8d6ee4c13bbc",
        "albumId": "5e9b5de4e9c8d87fdc2eca7f",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 25,
        "danceability": 78,
        "energy": 30,
        "instrumentalness": 85,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 69,
        "loudness": 76,
        "mode": 6,
        "speechiness": 44,
        "tempo": 8,
        "timeSignature": "2020-04-18T20:27:47.497Z",
        "valence": 36,
        "like": 0,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "__v": 0
    }
]
 */

 /**
 * @api {get}/api/tracks/related/full-track/{track_id} get related full tracks for specific track
 * @apiName get related full tracks 
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">get related full tracks for specific track based on its genre. and first element is always the current track full info</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.
 * 
 * 
 * @apiParam (PathParameters)  track_id				Required. The Spotify ID for the track.
 * 
 *
 * @apiParam (Response)  Format  On success 200 and get array of related tracks, on error or if no tracks then 404 not found
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/tracks/related/full-track/5e9b5e2de9c8d87fdc2eca81' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
* @apiSuccessExample {json} Success-Response:
* 
 *[
    {
        "track": {
            "availableMarkets": [
                "\"eg\""
            ],
            "genre": [
                "quran",
                ""
            ],
            "_id": "5e9b5e2de9c8d87fdc2eca81",
            "url": "undefined",
            "images": [],
            "duration": 3000,
            "trackNumber": 1,
            "name": "el-doha",
            "artistId": "5e9b5b656dff8d6ee4c13bbc",
            "albumId": "5e9b5de4e9c8d87fdc2eca7f",
            "discNumber": 1,
            "explicit": false,
            "type": "Track",
            "acousticness": 36,
            "danceability": 84,
            "energy": 97,
            "instrumentalness": 35,
            "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
            "liveness": 84,
            "loudness": 71,
            "mode": 82,
            "speechiness": 70,
            "tempo": 66,
            "timeSignature": "2020-04-18T20:08:13.905Z",
            "valence": 0,
            "like": 0,
            "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
            "__v": 1
        },
        "isLiked": false,
        "album": {
            "name": "quranAlbum",
            "_id": "5e9b5de4e9c8d87fdc2eca7f",
            "artist": {
                "name": "holy quran",
                "_id": "5e9b5b656dff8d6ee4c13bbc"
            }
        }
    },
    {
        "track": {
            "availableMarkets": [
                "\"eg\""
            ],
            "genre": [
                "quran",
                "5403"
            ],
            "_id": "5e9b64e4e9c8d87fdc2ecbd8",
            "url": "undefined",
            "images": [],
            "duration": 3000,
            "trackNumber": 1,
            "name": "el-sharh",
            "artistId": "5e9b5b656dff8d6ee4c13bbc",
            "albumId": "5e9b5de4e9c8d87fdc2eca7f",
            "discNumber": 1,
            "explicit": false,
            "type": "Track",
            "acousticness": 39,
            "danceability": 67,
            "energy": 56,
            "instrumentalness": 85,
            "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
            "liveness": 99,
            "loudness": 37,
            "mode": 26,
            "speechiness": 4,
            "tempo": 41,
            "timeSignature": "2020-04-18T20:36:52.877Z",
            "valence": 20,
            "like": 0,
            "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
            "__v": 0
        },
        "isLiked": false,
        "album": {
            "name": "quranAlbum",
            "_id": "5e9b5de4e9c8d87fdc2eca7f",
            "artist": {
                "name": "holy quran",
                "_id": "5e9b5b656dff8d6ee4c13bbc"
            }
        }
    },
    {
        "track": {
            "availableMarkets": [
                "\"eg\""
            ],
            "genre": [
                "quran",
                ""
            ],
            "_id": "5e9b62c3e9c8d87fdc2ecb58",
            "url": "undefined",
            "images": [],
            "duration": 3000,
            "trackNumber": 1,
            "name": "el-kyama",
            "artistId": "5e9b5b656dff8d6ee4c13bbc",
            "albumId": "5e9b5de4e9c8d87fdc2eca7f",
            "discNumber": 1,
            "explicit": false,
            "type": "Track",
            "acousticness": 25,
            "danceability": 78,
            "energy": 30,
            "instrumentalness": 85,
            "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
            "liveness": 69,
            "loudness": 76,
            "mode": 6,
            "speechiness": 44,
            "tempo": 8,
            "timeSignature": "2020-04-18T20:27:47.497Z",
            "valence": 36,
            "like": 0,
            "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
            "__v": 0
        },
        "isLiked": false,
        "album": {
            "name": "quranAlbum",
            "_id": "5e9b5de4e9c8d87fdc2eca7f",
            "artist": {
                "name": "holy quran",
                "_id": "5e9b5b656dff8d6ee4c13bbc"
            }
        }
    }
]
 */

/**
 * @api {get} api/track/audio-features/{id}  Get Audio Features for a Track 
 * @apiName Get Audio Features for a Track
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get audio feature information for a single track identified by its unique Spotify ID.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 *
 * 
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service.

 * 
 *  @apiParam (PathParameters)  id 					Required. The Spotify ID for the track.
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an audio features object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/track/audio-features/5e8cba1b7f37604d583f8d37' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "explicit": false,
 *   "acousticness": 10,
 *   "danceability": 23,
 *   "energy": 23,
 *   "instrumentalness": 4,
 *   "key": 90,
 *   "liveness": 25,
 *   "loudness": 70,
 *   "mode": 56,
 *   "speechiness": 67,
 *   "tempo": 76,
 *   "valence": 70
}
 * 
 */

/**
 * @api {get} api/tracks/audio-features Get Audio Features for Several Tracks
 * @apiName Get Audio Features for Several Tracks
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get audio features for multiple tracks based on their Spotify IDs.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.
 * 
 *  @apiParam (Body parameters)  ids  		Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 100 IDs.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an object whose key is "audio_features" and whose value is an array of audio features objects in JSON format.</br></br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 * 
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/tracks/audio-features' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
 "ids":"5e8cba1b7f37604d583f8d37,5e8cba367f37604d583f8d39"
	
}'
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "5e7f58bb4fe2420d34a881db": {
 *       "explicit": false,
 *       "acousticness": 10,
 *       "danceability": 23,
 *       "energy": 23,
 *       "instrumentalness": 4,
 *       "key": 90,
 *       "liveness": 25,
 *       "loudness": 70,
 *       "mode": 56,
 *       "speechiness": 67,
 *       "tempo": 76,
 *       "valence": 70
 *   },
 *   "5e7f5c6328a1a2111841e5d6": {
 *       "explicit": false,
 *       "acousticness": 10,
 *       "danceability": 23,
 *       "energy": 23,
 *       "instrumentalness": 4,
 *       "key": 90,
 *       "liveness": 25,
 *       "loudness": 70,
 *       "mode": 56,
 *       "speechiness": 67,
 *       "tempo": 76,
 *       "valence": 70
 *   }
 *}
 */

/**
 * @api {get} api/tracks Get Several Tracks
 * @apiName Get Several Tracks
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get Spotify catalog information for multiple tracks based on their Spotify IDs.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service. 
 * 
 * 
 *  @apiParam (Body Parameters)  ids  	Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
 *
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an object whose key is tracks and whose value is an array of track objects in JSON format.</br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response. </br>On error, the header status code is an error code and the response body contains an error object. in 404
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \
--data-raw '{
"ids":"5e8cba1b7f37604d583f8d37,5e8cba367f37604d583f8d39"
	
}'

 * 
 * @apiSuccessExample {json} Success-Response:
 * [
 *   {
 *       "track": {
 *           "availableMarkets": [
 *               "ttyt,rewwf,fff"
 *           ],
 *          "_id": "5e7f58bb4fe2420d34a881db",
 *          "trackNumber": 55,
 *          "name": "frist",
 *         "artistId": "5e7ef28326e2fa0da04f81ae",
 *        "albumId": "5e7f44905cce7d09a82e5a75",
 *        "discNumber": 1,
 *         "explicit": false,
 *         "type": "Track",
 *         "acousticness": 10,
 *         "danceability": 23,
 *         "energy": 100,
 *         "instrumentalness": 4,
 *         "key": 90,
 *         "liveness": 25,
 *         "loudness": 70,
 *         "mode": 56,
 *         "speechiness": 67,
 *         "tempo": 76,
 *         "timeSignature": "2000-01-31T22:00:00.000Z",
 *         "valence": 70,
 *         "__v": 0
 *     },
 *     "isLiked": true,
 *     "album": {
 *         "name": "album1",
 *         "_id": "5e7f44905cce7d09a82e5a75",
 *         "artist": {
 *             "name": "artist1",
 *             "_id": "5e7ef28326e2fa0da04f81ae"
 *         }
 *     }
 * },
 *{
 *    "track": {
 *        "availableMarkets": [
 *            "ttyt,rewwf,fff"
 *        ],
 *        "_id": "5e7f58bb4fe2420d34a881db",
 *        "trackNumber": 55,
 *        "name": "frist",
 *        "artistId": "5e7ef28326e2fa0da04f81ae",
 *        "albumId": "5e7f44905cce7d09a82e5a75",
 *        "discNumber": 1,
 *        "explicit": false,
 *        "type": "Track",
 *        "acousticness": 10,
 *        "danceability": 23,
 *        "energy": 100,
 *        "instrumentalness": 4,
 *        "key": 90,
 *        "liveness": 25,
 *        "loudness": 70,
 *        "mode": 56,
 *        "speechiness": 67,
 *        "tempo": 76,
 *        "timeSignature": "2000-01-31T22:00:00.000Z",
 *        "valence": 70,
 *        "__v": 0
 *    },
 *    "isLiked": true,
 *    "album": {
 *        "name": "album1",
 *        "_id": "5e7f44905cce7d09a82e5a75",
 *        "artist": {
 *            "name": "artist1",
 *            "_id": "5e7ef28326e2fa0da04f81ae"
 *        }
 *    }
 *}]
 * 
 */



/**
 * @api {get} api/track/{id} Get a Track 
 * @apiName Get a Track with artist name & isLike
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get Spotify catalog information for a single track identified by its unique Spotify ID.and get track artist name ,album name and if user like this track or no </p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.
 * 
 *  @apiParam (QueryParameters)  id   Required.The Spotify ID for the track.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a track object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 *  @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/track/5e8cba1b7f37604d583f8d37' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
 \

 * 
 *  @apiSuccessExample {json} Success-Response:
 * {
    "track": {
        "availableMarkets": [
            "ttyt,rewwf,fff"
        ],
        "_id": "5e7f58bb4fe2420d34a881db",
        "trackNumber": 55,
        "name": "frist",
        "artistId": "5e7ef28326e2fa0da04f81ae",
        "albumId": "5e7f44905cce7d09a82e5a75",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 10,
        "danceability": 23,
        "energy": 100,
        "instrumentalness": 4,
        "key": 90,
        "liveness": 25,
        "loudness": 70,
        "mode": 56,
        "speechiness": 67,
        "tempo": 76,
        "timeSignature": "2000-01-31T22:00:00.000Z",
        "valence": 70,
        "__v": 0
    },
    "isLiked": true,
    "album": {
        "name": "album1",
        "_id": "5e7f44905cce7d09a82e5a75",
        "artist": {
            "name": "artist1",
            "_id": "5e7ef28326e2fa0da04f81ae"
        }
    }
}
 */
/**
 * @api {get} api/me/track/{id} Get a Track
 * @apiName Get a Track
 * @apiGroup Tracks
 * @apiDescription
 * <p style="color:red;">Get Spotify catalog information for a single track identified by its unique Spotify ID.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service.
 * 
 *  @apiParam (QueryParameters)  id 		Required.The Spotify ID for the track.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a track object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/me/track/5e8cba1b7f37604d583f8d37' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \

 * 
 *  @apiSuccessExample {json} Success-Response:
 * {
    "availableMarkets": [
        "ttyt,rewwf,fff"
    ],
    "_id": "5e7f58bb4fe2420d34a881db",
    "trackNumber": 55,
    "name": "frist",
    "artistId": "5e7ef28326e2fa0da04f81ae",
    "albumId": "5e7f44905cce7d09a82e5a75",
    "discNumber": 1,
    "explicit": false,
    "type": "Track",
    "acousticness": 10,
    "danceability": 23,
    "energy": 100,
    "instrumentalness": 4,
    "key": 90,
    "liveness": 25,
    "loudness": 70,
    "mode": 56,
    "speechiness": 67,
    "tempo": 76,
    "timeSignature": "2000-01-31T22:00:00.000Z",
    "valence": 70,
    "__v": 0
}
 */
//Users Profile

/**
 * @api {get} api/me Get Current User's Profile
 * @apiName Get Current User's Profile
 * @apiGroup Users Profile
 * @apiDescription
 * <p style="color:red;">Get detailed profile information about the current user (including the current user’s username).</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token			Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.
 * 
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a user object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.</br></br></br> <b>Important!</b> If the user-read-email scope is authorized, </br>the returned JSON will include the email address that was entered when the user created their Spotify account.</br> This email address is unverified; do not assume that the email address belongs to the user.
 * 
 *  @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/me' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 * 
 * @apiSuccessExample {json} Success-Response:
 * 
 * [{"_id":"5e80a8c6dd73fc4fa469b0ba",
 * "email":"bahaaeldeen1999@gmail.com",
 * "displayName":"bahaaEldeen",
 * "gender":"Male","country":"eg",
 * "birthDate":"1999-01-11T22:00:00.000Z",
 * "product":"free",
 * "images":[]}]
 */

/**
 * @api {get} api/users/{user_id} Get a User's Profile
 * @apiName Get a User's Profile
 * @apiGroup Users Profile
 * @apiDescription
 * <p style="color:red;">Get public profile information about a Spotify user.</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.
 * 
 * @apiParam (PathParameters)  User_id 				The user’s Spotify user ID.
 * 
 * @apiParam (Removing Specific Occurance of a Track in a Specific Playlist Snapshot)  REQUEST_DATA 
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a user object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> If a user with that user_id doesn’t exist, the status code is 404 NOT FOUND.
 * 
 * @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/users/5e8cb12e084a9d2e6c8f21d9' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "_id": "5e80a8c6dd73fc4fa469b0ba",
    "displayName": "bahaaEldeen",
    "images": [],
    "type": "user",
    "followedBy": []
}
 */
// Image
/**
 * @api {POST} /api/images/upload/{source_id} upload image 
 * @apiName upload image
 * @apiGroup Image
 * @apiDescription
 * <p style="color:red;">upload image to specific entity in database, without removing the existing images for this entity</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.
 * 
 * @apiParam (PathParameters)  source_id 				the id of the entity that will have the image
 * 
 * @apiParam (QueryParameters)  belongs_to  {String}		Required.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).
 *  @apiParam (QueryParameters)  height  {Number} Required. the height of the image in pixels 
* 
 *@apiParam (QueryParameters)  width  {Number} Required. the width of the image in pixels
 * 
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK .on error 403 status code will occur
 * 
 * @apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/images/upload/5e99e98d9f8daeb6b42076ff?belongs_to=track&height=100&width=100' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \
--form 'image=@/C:/Users/bahaaEldeen/Pictures/Annotation 2020-03-29 005428.png'

 * 
 * @apiSuccessExample {json} Success-Response:
 * {"success":"uploaded succesfully"}
 */

/**
 * @api {POST} /api/images/update/{source_id} update image 
 * @apiName update image
 * @apiGroup Image
 * @apiDescription
 * <p style="color:red;">update image to specific entity in database, with removing the existing images for this entity</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.
 * 
 * @apiParam (PathParameters)  source_id 				the id of the entity that will have the image
 * 
 * @apiParam (QueryParameters)  belongs_to  {String}		Required.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).
 *  @apiParam (QueryParameters)  height  {Number} Required. the height of the image in pixels 
* 
 *@apiParam (QueryParameters)  width  {Number} Required. the width of the image in pixels
 * 
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK .on error 403 status code will occur
 * 
 * @apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/images/update/5e8cb7037f37604d583f8d22?belongs_to=artist&height=100&width=100' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \
--form 'image=@/C:/Users/bahaaEldeen/Pictures/Annotation 2020-03-29 005428.png'

 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "success": "updated succesfully"
}
 */

/**
 * @api {GET} /api/images/{image_id} get image 
 * @apiName get image
 * @apiGroup Image
 * @apiDescription
 * <p style="color:red;">get image file</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * 
 * @apiParam (PathParameters)  image_id 	{String}			the id of the image
 * 
 * @apiParam (QueryParameters)  belongs_to  {String}		Required.string that specify the entity type that the image is  uploaded to can take values (user,playlist,track,album,artist).
 * 
 *  @apiParam (Response)  Format  On success an media stream will be piped to response, and partial content will be recieved
 * 
 * @apiExample {curl} Example usage
 *curl --location --request GET 'http://localhost:3000/api/images/5e9c9790fc69ad92e0a7eda5?belongs_to=artist' \

 * 
 *
 */

/**
 * @api {DELETE} /api/images/delete/{image_id} delete image 
 * @apiName delete image
 * @apiGroup Image
 * @apiDescription
 * <p style="color:red;">delete image file</p>
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * 
 * 
 * @apiParam (PathParameters)  image_id 	{String}			the id of the image
 * 
 * @apiParam (QueryParameters)  source_id 	{String}			the id of the entity that  have the image
 * 
 * @apiParam (QueryParameters)  belongs_to  {String}		Required.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).
 * 
 *  @apiParam (Response)  Format  On success 200 status, else error code will be sent
 * @apiExample {curl} Example usage
 * curl --location --request DELETE 'http://localhost:3000/api/images/delete/5e9a241d809e981ef0b64a69?source_id=5e8cb118084a9d2e6c8f21d7&belongs_to=artist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw'
 *@apiSuccessExample {json} Success-Response:
 * {
    "success": "image deleted"
}
 *
 */