//Album

/**
 * @api {get} api/albums/:album_id  Get an Album
 * @apiName Get an Album
 * @apiGroup Album
 * @apiVersion  1.1.0
@apiDescription
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
    "_id": "5e8cb9457f37604d583f8d27",
    "name": "HELLO SLEEP WALKERS",
    "images": [],
    "artistId": "5e8cb7037f37604d583f8d22",
    "artistName": "nada",
    "track": [
        {
            "_id": "5e8ce86082c8d9579467fb73",
            "name": "WHO I AM",
            "images": [],
            "isLiked": true
        },
        {
            "_id": "5e8ce86882c8d9579467fb76",
            "name": "SOKA",
            "images": [],
            "isLiked": true
        },
        {
            "_id": "5e8ce86c82c8d9579467fb79",
            "name": "ARASU",
            "images": [],
            "isLiked": true
        },
*        {
*            "_id": "5e8ce87182c8d9579467fb7c",
*            "name": "WIWI",
*            "images": [],
*            "isLiked": false
*        },
*        {
*            "_id": "5e8ce87682c8d9579467fb7f",
*            "name": "WWIII",
*            "images": [],
*            "isLiked": false
*        }
*    ]
*}
*
*
*/
/**
 * @api {get} api/albums/:id/tracks Get an Album's Tracks
 * @apiName Get an Album's Tracks
 * @apiGroup Album
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
//new 
//new



/**
 * @api {get} api/albums/listeners-per-day/{album_id}  get number of album listeners in specific day
 * @apiName get  album listeners in  day
 * @apiGroup Album
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of album listeners in specific day</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  album_id 					Required. The Spotify ID for the track.
 * 
 * @apiParam (QueryParameter) day {Number} the number of the day from [1-30]
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/albums/listeners-per-day/5eb0a499ec0c444e9c489820?day=8&year=2020&month=6' \

 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */

/**
 * @api {get} api/albums/listeners-per-month/{album_id}  get number of album listeners in specific month
 * @apiName get  album listeners in  month
 * @apiGroup Album
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of album listeners in specific month</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *
 *  @apiParam (PathParameters)  album_id 					Required. The Spotify ID for the track.
 * 
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/albums/listeners-per-month/5eb0a499ec0c444e9c489820?year=2020&month=6' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */
/**
 * @api {get} api/albums/listeners-per-year/{album_id}  get number of album listeners in specific year
 * @apiName get  album listeners in  year
 * @apiGroup Album
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of album  listeners in specific year</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  album_id 					Required. The Spotify ID for the track.
 * 
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 *
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/albums/listeners-per-year/5eb0a499ec0c444e9c489820?year=2020' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */

//Artist
//new
//new
/**
 * @api {delete} api/artist/:album_id   Delete Album
 * @apiName Delete Album
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Artist delete Album</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *  @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/artist/:album_id' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * @apiSuccessExample {json} Success-Response:
{
    "success": "deleted album "
}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body Contains a success message.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *
 *
 */
/**
 * @api {get} api/me/artist   Get Artist from user.
 * @apiName Get Artist from user.
 * @apiGroup Artist
 * @apiDescription
 * <p style="color:red;">Get Artist from user.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/artist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 * @apiSuccessExample {json} Success-Response:
{
    "genre": [
        "genre1",
        "genre2",
        "genre3"
    ],
    "_id": "5e8cb7037f37604d583f8d22",
    "info": "the best",
    "popularity": 501,
    "type": "Artist",
    "Name": "nada",
    "userId": "5e8cb118084a9d2e6c8f21d7",
    "images": [
        {
            "_id": "5ea0cc8a797460648cddaee4",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0ccf9797460648cddaee5",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0cd7f797460648cddaee6",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0cedf797460648cddaee7",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0cfa060db613e6456bad4",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d09e98ae49324cb48956",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d11e13f2868b68e56815",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d1431acc036114533537",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d2b21acc036114533544",
            "height": 830,
            "width": 1914
        },
        {
            "_id": "5ea0d3191acc036114533545",
            "height": 830,
            "width": 1914
        },
        {
            "_id": "5ea0d3541acc036114533546",
            "height": 830,
            "width": 1914
        },
        {
            "_id": "5ea0d3f1199f605c7038af34",
            "height": 830,
            "width": 1914
        },
        {
            "_id": "5ea0d4bd199f605c7038af35",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d5b5199f605c7038af36",
            "height": 2204,
            "width": 3920
        },
        {
            "_id": "5ea0d6ac199f605c7038af37",
            "height": 2204,
            "width": 3920
        }
    ],
    "addAlbums": [
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
    "__v": 68
}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body Contains an Artist Object.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *
 *
 */
/**
 * @api {PUT} api/Artist/update Change a Artist's Details 
 * @apiName Change a Artist's  Details 
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription update artist info 
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
 * curl --location --request PUT 'http://localhost:3000/api/Artist/update' \
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
 * @api {put} api/Artists/me/Albums Create Album
 * @apiName Create Album
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
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
	"albumtype":"Album",
	"releaseDate":"1/1/2002",
	"availablemarkets":"eg,fr",
	"genre":"normal"
}'
 * @apiSuccessExample {json} Success-Response:
 * {
    "availableMarkets": [
        "eg",
        "fr"
    ],
    "_id": "5ed740443e295d759c1b78ea",
    "name": "album1",
    "albumType": "normal",
    "popularity": 0,
    "genre": "normal",
    "releaseDate": "2001-12-31T22:00:00.000Z",
    "label": "label",
    "images": [],
    "artistId": "5eb0a4749b15d854c08f736e",
    "type": "Album",
    "hasTracks": [],
    "releaseDatePercision": "DD-MM-YY",
    "__v": 0
}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body Contains an Album Object.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *
 *
 */

//end new

/**
 * @api {get} api/Artists/:artist_id Get an Artist
 * @apiName Get an Artist
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
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
{
    "genre": [
        "genre1",
        "genre2",
        "genre3"
    ],
    "_id": "5eb0a44b9b15d854c08f7362",
    "info": "info about artist 1",
    "popularity": 806,
    "type": "Artist",
    "Name": "artist1",
    "userId": "5eb0903c30a9a01f144b7238",
    "images": [
        {
            "_id": "5eb0b3cede66c65e34c18b56",
            "height": 100,
            "width": 100
        }
    ],
    "addAlbums": [
        {
            "_id": "5eb0a498ec0c444e9c48981f",
            "albumId": "5eb0a498ec0c444e9c48981e"
        }
    ],
    "addTracks": [
        {
            "_id": "5eb0a49aec0c444e9c489821",
            "trackId": "5eb0a499ec0c444e9c489820"
        },
        {
            "_id": "5eb1a5b4a5ebd959e08d5747",
            "trackId": "5eb1a5b3a5ebd959e08d5746"
        },
        {
            "_id": "5eb1acf1371bc537ec792bbf",
            "trackId": "5eb1acf0371bc537ec792bbe"
        }
    ],
    "__v": 36,
    "followed": [
        {
            "_id": "5ec45ab5a29ba424a86d2f4e",
            "id": "5ebff844ec00612568e2a7a6",
            "date": "2020-05-19T22:16:21.353Z"
        },
        {
            "_id": "5ec48ad46b940c56933c1d39",
            "id": "5eb0900a30a9a01f144b7233",
            "date": "2020-05-20T01:41:40.818Z"
        }
    ]
}
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
 * @apiVersion  1.1.0
@apiDescription
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
* - Album </br>
* - Single </br>
* For example:<br> include_groups=Album,Single.
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
 *[
    {
        "availableMarkets": [
            "rg",
            "fr",
            "ge"
        ],
        "_id": "5eb0a498ec0c444e9c48981e",
        "name": "Ire desire",
        "albumType": "Single",
        "popularity": 808,
        "genre": "action",
        "releaseDate": "2020-02-04T22:00:00.000Z",
        "label": "Unhappy accident",
        "images": [
            {
                "_id": "5eb0b3d3de66c65e34c18b59",
                "height": 100,
                "width": 100
            }
        ],
        "artistId": "5eb0a44b9b15d854c08f7362",
        "type": "Album",
        "hasTracks": [
            {
                "_id": "5eb0a49bec0c444e9c489822",
                "trackId": "5eb0a499ec0c444e9c489820"
            },
            {
                "_id": "5eb1a5b4a5ebd959e08d5748",
                "trackId": "5eb1a5b3a5ebd959e08d5746"
            },
            {
                "_id": "5eb1acf1371bc537ec792bc0",
                "trackId": "5eb1acf0371bc537ec792bbe"
            }
        ],
        "releaseDatePercision": "DD-MM-YY",
        "__v": 18
    }
]
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body </br>contains an array of album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.

 */

/**
 * @api {get} api/Artists/:artist_id/top-tracks Get an Artist's Top Tracks
 * @apiName Get an Artist's Top Tracks
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
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
 * [
    {
        "_id": "5eb1acf0371bc537ec792bbe",
        "url": "undefined",
        "images": [],
        "duration": 75,
        "availableMarkets": [
            "eg",
            "sa"
        ],
        "trackNumber": 12,
        "name": "mariam",
        "artistId": "5eb0a44b9b15d854c08f7362",
        "albumId": "5eb0a498ec0c444e9c48981e",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 44,
        "danceability": 6,
        "energy": 21,
        "instrumentalness": 94,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 22,
        "loudness": 12,
        "mode": 20,
        "speechiness": 49,
        "tempo": 78,
        "timeSignature": "2020-05-05T18:14:08.690Z",
        "valence": 58,
        "like": 1,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "genre": [
            "genre1"
        ],
        "playable": true
    },
    {
        "_id": "5eb1a5b3a5ebd959e08d5746",
        "url": "undefined",
        "images": [],
        "duration": 125,
        "availableMarkets": [
            "eg",
            "sa"
        ],
        "trackNumber": 12,
        "name": "Alsajda",
        "artistId": "5eb0a44b9b15d854c08f7362",
        "albumId": "5eb0a498ec0c444e9c48981e",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 25,
        "danceability": 21,
        "energy": 96,
        "instrumentalness": 88,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 95,
        "loudness": 29,
        "mode": 42,
        "speechiness": 99,
        "tempo": 95,
        "timeSignature": "2020-05-05T17:43:15.684Z",
        "valence": 26,
        "like": 1,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "genre": [
            "genre3"
        ],
        "playable": true
    }
]
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of up to 10 track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */

/**
 * @api {get} api/Artists/{artist_id}/tracks Get an Artist's Tracks
 * @apiName Get an Artist's Tracks
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
 *
 * <p style="color:red;">Get Spotify catalog information about an artist’s tracks</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiParam (PathParameters) artist_id  Spotify ID for Albums
  @apiExample {curl} Example usage:
 *
 * curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/tracks' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *[
    {
        "_id": "5eb0a7b1ec0c444e9c48985c",
        "url": "undefined",
        "images": [
            {
                "_id": "5eb0b443de66c65e34c18bd1",
                "height": 100,
                "width": 100
            }
        ],
        "duration": 60,
        "availableMarkets": [
            "eg",
            "sa"
        ],
        "trackNumber": 12,
        "name": "track26",
        "artistId": "5eb0a4749b15d854c08f736e",
        "albumId": "5eb0a7adec0c444e9c48985a",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 60,
        "danceability": 30,
        "energy": 56,
        "instrumentalness": 53,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 28,
        "loudness": 45,
        "mode": 31,
        "speechiness": 45,
        "tempo": 40,
        "timeSignature": "2020-05-04T23:39:29.246Z",
        "valence": 57,
        "like": 0,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "genre": [
            "genre1"
        ],
        "playable": true
    },
    {
        "_id": "5eb1a459a5ebd959e08d5737",
        "url": "undefined",
        "images": [],
        "duration": 125,
        "availableMarkets": [
            "eg",
            "sa"
        ],
        "trackNumber": 12,
        "name": "Alsajda",
        "artistId": "5eb0a4749b15d854c08f736e",
        "albumId": "5eb0a7adec0c444e9c48985a",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 21,
        "danceability": 42,
        "energy": 80,
        "instrumentalness": 45,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 60,
        "loudness": 80,
        "mode": 76,
        "speechiness": 67,
        "tempo": 81,
        "timeSignature": "2020-05-05T17:37:29.445Z",
        "valence": 5,
        "like": 3,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "genre": [
            "genre2"
        ],
        "playable": true
    },
    {
        "_id": "5eb1abb1371bc537ec792baf",
        "url": "undefined",
        "images": [],
        "duration": 75,
        "availableMarkets": [
            "eg",
            "sa"
        ],
        "trackNumber": 12,
        "name": "mariam",
        "artistId": "5eb0a4749b15d854c08f736e",
        "albumId": "5eb0a7adec0c444e9c48985a",
        "discNumber": 1,
        "explicit": false,
        "type": "Track",
        "acousticness": 8,
        "danceability": 13,
        "energy": 47,
        "instrumentalness": 13,
        "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
        "liveness": 63,
        "loudness": 39,
        "mode": 23,
        "speechiness": 18,
        "tempo": 23,
        "timeSignature": "2020-05-05T18:08:49.130Z",
        "valence": 61,
        "like": 1,
        "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
        "genre": [
            "genre3"
        ],
        "playable": true
    }
]
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 */
/**
 * @api {get} api/Artists/:artist_id/related_artists Get an Artist's Related Artists
 * @apiName Get an Artist's Related Artists
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
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
 * [
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a44e9b15d854c08f7363",
        "info": "info about artist 2",
        "popularity": 101,
        "type": "Artist",
        "Name": "artist2",
        "userId": "5eb0904630a9a01f144b7239",
        "images": [
            {
                "_id": "5eb0b3d6de66c65e34c18b5f",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a4d9ec0c444e9c489824",
                "albumId": "5eb0a4d9ec0c444e9c489823"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a4ddec0c444e9c489826",
                "trackId": "5eb0a4dcec0c444e9c489825"
            },
            {
                "_id": "5eb1a5f3a5ebd959e08d574a",
                "trackId": "5eb1a5f3a5ebd959e08d5749"
            },
            {
                "_id": "5eb1ad32371bc537ec792bc2",
                "trackId": "5eb1ad31371bc537ec792bc1"
            }
        ],
        "__v": 17,
        "followed": [
            {
                "_id": "5ec47824a29ba424a86d3067",
                "id": "5eb0901430a9a01f144b7234",
                "date": "2020-05-20T00:21:56.432Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4519b15d854c08f7364",
        "info": "info about artist 3",
        "popularity": 549,
        "type": "Artist",
        "Name": "artist3",
        "userId": "5eb0905030a9a01f144b723a",
        "images": [
            {
                "_id": "5eb0b3dfde66c65e34c18b68",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a51bec0c444e9c489829",
                "albumId": "5eb0a51bec0c444e9c489828"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a51fec0c444e9c48982b",
                "trackId": "5eb0a51eec0c444e9c48982a"
            },
            {
                "_id": "5eb1a632a5ebd959e08d574d",
                "trackId": "5eb1a632a5ebd959e08d574c"
            },
            {
                "_id": "5eb1ad72371bc537ec792bc5",
                "trackId": "5eb1ad72371bc537ec792bc4"
            }
        ],
        "__v": 16,
        "followed": [
            {
                "_id": "5ec4576ca29ba424a86d2f01",
                "id": "5ebff844ec00612568e2a7a6",
                "date": "2020-05-19T22:02:20.330Z"
            },
            {
                "_id": "5ec45785a29ba424a86d2f03",
                "id": "5eb08fec30a9a01f144b7230",
                "date": "2020-05-19T22:02:45.521Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4559b15d854c08f7365",
        "info": "info about artist 4",
        "popularity": 255,
        "type": "Artist",
        "Name": "artist4",
        "userId": "5eb0905a30a9a01f144b723b",
        "images": [
            {
                "_id": "5eb0b3eade66c65e34c18b74",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a55cec0c444e9c48982e",
                "albumId": "5eb0a55cec0c444e9c48982d"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a55fec0c444e9c489830",
                "trackId": "5eb0a55eec0c444e9c48982f"
            },
            {
                "_id": "5eb1a672a5ebd959e08d5750",
                "trackId": "5eb1a672a5ebd959e08d574f"
            },
            {
                "_id": "5eb1adb2371bc537ec792bc8",
                "trackId": "5eb1adb2371bc537ec792bc7"
            }
        ],
        "__v": 14,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4589b15d854c08f7366",
        "info": "info about artist 5",
        "popularity": 26,
        "type": "Artist",
        "Name": "artist5",
        "userId": "5eb0901e30a9a01f144b7235",
        "images": [
            {
                "_id": "5eb0b3f4de66c65e34c18b7d",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a59eec0c444e9c489833",
                "albumId": "5eb0a59eec0c444e9c489832"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a5a2ec0c444e9c489835",
                "trackId": "5eb0a5a1ec0c444e9c489834"
            },
            {
                "_id": "5eb1a6b1a5ebd959e08d5753",
                "trackId": "5eb1a6b1a5ebd959e08d5752"
            },
            {
                "_id": "5eb1adf3371bc537ec792bcb",
                "trackId": "5eb1adf2371bc537ec792bca"
            }
        ],
        "__v": 14,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a45b9b15d854c08f7367",
        "info": "info about artist 6",
        "popularity": 2,
        "type": "Artist",
        "Name": "artist6",
        "userId": "5eb0906430a9a01f144b723c",
        "images": [
            {
                "_id": "5eb0b3fcde66c65e34c18b86",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a5e2ec0c444e9c489838",
                "albumId": "5eb0a5e2ec0c444e9c489837"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a5e4ec0c444e9c48983a",
                "trackId": "5eb0a5e3ec0c444e9c489839"
            },
            {
                "_id": "5eb1a6f1a5ebd959e08d5756",
                "trackId": "5eb1a6f1a5ebd959e08d5755"
            }
        ],
        "__v": 12,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a45f9b15d854c08f7368",
        "info": "info about artist 7",
        "popularity": 449,
        "type": "Artist",
        "Name": "artist7",
        "userId": "5eb0902830a9a01f144b7236",
        "images": [
            {
                "_id": "5eb0b405de66c65e34c18b8f",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a624ec0c444e9c48983d",
                "albumId": "5eb0a623ec0c444e9c48983c"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a627ec0c444e9c48983f",
                "trackId": "5eb0a626ec0c444e9c48983e"
            },
            {
                "_id": "5eb1a730a5ebd959e08d5759",
                "trackId": "5eb1a730a5ebd959e08d5758"
            },
            {
                "_id": "5eb1ae73371bc537ec792bd1",
                "trackId": "5eb1ae73371bc537ec792bd0"
            }
        ],
        "__v": 12,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4629b15d854c08f7369",
        "info": "info about artist 8",
        "popularity": 536,
        "type": "Artist",
        "Name": "artist8",
        "userId": "5eb0915930a9a01f144b723e",
        "images": [
            {
                "_id": "5eb0b410de66c65e34c18b9b",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a665ec0c444e9c489842",
                "albumId": "5eb0a665ec0c444e9c489841"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a669ec0c444e9c489844",
                "trackId": "5eb0a668ec0c444e9c489843"
            },
            {
                "_id": "5eb1a770a5ebd959e08d575c",
                "trackId": "5eb1a770a5ebd959e08d575b"
            },
            {
                "_id": "5eb1aeb3371bc537ec792bd4",
                "trackId": "5eb1aeb3371bc537ec792bd3"
            }
        ],
        "__v": 19,
        "followed": [
            {
                "_id": "5ec26502afb12b366cf04766",
                "id": "5eb08fec30a9a01f144b7230",
                "date": "2020-05-18T10:35:46.774Z"
            },
            {
                "_id": "5ec47815a29ba424a86d3065",
                "id": "5eb0901430a9a01f144b7234",
                "date": "2020-05-20T00:21:41.837Z"
            },
            {
                "_id": "5ed60c9535e1a5252a9c0561",
                "id": "5ebff844ec00612568e2a7a6",
                "date": "2020-06-02T08:23:49.490Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4659b15d854c08f736a",
        "info": "info about artist 9",
        "popularity": 181,
        "type": "Artist",
        "Name": "artist9",
        "userId": "5eb08fce30a9a01f144b722d",
        "images": [
            {
                "_id": "5eb0b418de66c65e34c18ba4",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a6a8ec0c444e9c489847",
                "albumId": "5eb0a6a7ec0c444e9c489846"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a6acec0c444e9c489849",
                "trackId": "5eb0a6aaec0c444e9c489848"
            },
            {
                "_id": "5eb1a3d8a5ebd959e08d5732",
                "trackId": "5eb1a3d8a5ebd959e08d5731"
            },
            {
                "_id": "5eb1ab30371bc537ec792baa",
                "trackId": "5eb1ab2f371bc537ec792ba9"
            },
            {
                "_id": "5ec496275f713479a8312e4b",
                "trackId": "5ec496265f713479a8312e4a"
            }
        ],
        "__v": 21,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4699b15d854c08f736b",
        "info": "info about artist 10",
        "popularity": 42,
        "type": "Artist",
        "Name": "artist10",
        "userId": "5eb08fd830a9a01f144b722e",
        "images": [
            {
                "_id": "5eb0b421de66c65e34c18bad",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a6e9ec0c444e9c48984c",
                "albumId": "5eb0a6e8ec0c444e9c48984b"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a6edec0c444e9c48984e",
                "trackId": "5eb0a6ebec0c444e9c48984d"
            },
            {
                "_id": "5eb1a41aa5ebd959e08d5735",
                "trackId": "5eb1a419a5ebd959e08d5734"
            },
            {
                "_id": "5eb1ab6f371bc537ec792bad",
                "trackId": "5eb1ab6f371bc537ec792bac"
            }
        ],
        "__v": 16,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a46c9b15d854c08f736c",
        "info": "info about artist 11",
        "popularity": 202,
        "type": "Artist",
        "Name": "artist11",
        "userId": "5eb08ff630a9a01f144b7231",
        "images": [
            {
                "_id": "5eb0b42ade66c65e34c18bb6",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a72aec0c444e9c489851",
                "albumId": "5eb0a729ec0c444e9c489850"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a72dec0c444e9c489853",
                "trackId": "5eb0a72dec0c444e9c489852"
            },
            {
                "_id": "5eb1a4d9a5ebd959e08d573e",
                "trackId": "5eb1a4d8a5ebd959e08d573d"
            },
            {
                "_id": "5eb1ac31371bc537ec792bb6",
                "trackId": "5eb1ac30371bc537ec792bb5"
            }
        ],
        "__v": 16,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a46f9b15d854c08f736d",
        "info": "info about artist 12",
        "popularity": 96,
        "type": "Artist",
        "Name": "artist12",
        "userId": "5eb0900030a9a01f144b7232",
        "images": [
            {
                "_id": "5eb0b435de66c65e34c18bc2",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a76dec0c444e9c489856",
                "albumId": "5eb0a76cec0c444e9c489855"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a770ec0c444e9c489858",
                "trackId": "5eb0a76fec0c444e9c489857"
            },
            {
                "_id": "5eb1a575a5ebd959e08d5744",
                "trackId": "5eb1a574a5ebd959e08d5743"
            },
            {
                "_id": "5eb1acb0371bc537ec792bbc",
                "trackId": "5eb1acb0371bc537ec792bbb"
            }
        ],
        "__v": 16,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4779b15d854c08f736f",
        "info": "Amr Diab is a pop singer and songwriter from Egypt. He has won a record seven World Music Awards to date, and is considered the all-time best-selling musical artist from the Middle East. He is the creator of his own genre; he calls his meld of Arabic harmony and Western rhythms \"Mediterranean Music,\" and it has influenced many subsequent artists.  He was born on the October 11, 1961 in Portsaid, Egypt. He began singing at age three and at six, he performed the Egyptian national anthem at the July 23rd Festival in Portsaid. He was awarded a guitar by the governor for his performance and his career course was set.  He continued performing anywhere he could. He recorded his debut album, Ya Tareeq, in 1983, and moved to Cairo in 1984. He studied Arabic music at the Cairo Academy of Arts, where he received a Bachelor's degree. He signed to Delta Sound for 1984's Ghani Men Albak and remained there through 1994's Ya Omrina. He also experimented with film. Diab played himself in the 1989 movie El Afareet. In 1992, he began pioneering big-production, high-tech videos that have proved influential not only in the Middle East but in Europe. He also starred in 1993's Ays Krim fi Glym and played alongside Omar Shariff in the film Deahk We La'ab.  For Diab, film, while interesting, didn't hold his attention. His musical career netted him a series of albums that furthered his vision. As a predecessor and in Egypt, Diab was a bona fide star. He signed to Alam el Phan for 1995's multi-platinum-selling Nour el Ain, his international breakthrough. It charted not only in Egypt, but also in India, Pakistan, Iran, Afghanistan, Brazil, Argentina, Chile, South Africa, and as far west as France. Each of his succeeding recordings for the label charted. 1999's Ama Rain featured his duets with Cheb Khaled and Angela Dimitriou. Diab issued three more albums with Alam el Phan, 2000's Tamally Maak, the following year's Aktar Wahed, and 2003's Allem Alby, before he left for the Rotana label. 2004's Lealy Nahary proved one of his biggest hits and netted three Top Five singles. He followed it the next year with Kammel Kalamak, scoring another chart hit, as did 2007's El Lilady -- the latter earned him a World Music Award. Wayah, his 2009 set, was another best-seller and precipitated a concert at Golf Porto Marina to a crowd of over 80,000. In 2011, during the Egyptian revolution that caused President Hosni Mubarak to resign and go into exile, Diab released the song \"Masr A'let\" (Egypt Said),\" a tribute to those martyred during the Arab Spring. Banadeek Ta'ala followed, and El Leila was issued the following year; Diab topped the charts again. In 2014, Shoft el Ayam was released and entered at number one in several Middle Eastern countries. 2016's Ahla Wa Ahla was a subsequent number one. ~ Thom Jurek, Rovi",
        "popularity": 261,
        "type": "Artist",
        "Name": "Nerdeen",
        "userId": "5eb0901430a9a01f144b7234",
        "images": [
            {
                "_id": "5ed727c135e1a5252a9c085a",
                "height": 284,
                "width": 498
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a7efec0c444e9c489860",
                "albumId": "5eb0a7efec0c444e9c48985f"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a7f3ec0c444e9c489862",
                "trackId": "5eb0a7f1ec0c444e9c489861"
            },
            {
                "_id": "5eb1a7b0a5ebd959e08d575f",
                "trackId": "5eb1a7afa5ebd959e08d575e"
            },
            {
                "_id": "5eb1aef7371bc537ec792bd7",
                "trackId": "5eb1aef6371bc537ec792bd6"
            },
            {
                "_id": "5ec2ce2cafb12b366cf04782",
                "trackId": "5ec2ce2cafb12b366cf04781"
            }
        ],
        "__v": 26,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a47a9b15d854c08f7370",
        "info": "info about artist 15",
        "popularity": 0,
        "type": "Artist",
        "Name": "artist15",
        "userId": "5eb08fec30a9a01f144b7230",
        "images": [
            {
                "_id": "5eb0b44fde66c65e34c18bdd",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a832ec0c444e9c489865",
                "albumId": "5eb0a831ec0c444e9c489864"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a834ec0c444e9c489867",
                "trackId": "5eb0a834ec0c444e9c489866"
            },
            {
                "_id": "5eb1a49aa5ebd959e08d573b",
                "trackId": "5eb1a499a5ebd959e08d573a"
            },
            {
                "_id": "5eb1abf2371bc537ec792bb3",
                "trackId": "5eb1abf2371bc537ec792bb2"
            }
        ],
        "__v": 15,
        "followed": []
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a47d9b15d854c08f7371",
        "info": "info about artist 16",
        "popularity": 1162,
        "type": "Artist",
        "Name": "artist16",
        "userId": "5eb0903230a9a01f144b7237",
        "images": [
            {
                "_id": "5eb0b458de66c65e34c18be6",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a874ec0c444e9c48986a",
                "albumId": "5eb0a872ec0c444e9c489869"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a878ec0c444e9c48986c",
                "trackId": "5eb0a877ec0c444e9c48986b"
            },
            {
                "_id": "5eb1a530a5ebd959e08d5741",
                "trackId": "5eb1a52fa5ebd959e08d5740"
            },
            {
                "_id": "5eb1ac72371bc537ec792bb9",
                "trackId": "5eb1ac71371bc537ec792bb8"
            }
        ],
        "__v": 47,
        "followed": [
            {
                "_id": "5ec1af13afb12b366cf04697",
                "id": "5ec1a1f0d69f9b31b0a4973b",
                "date": "2020-05-17T21:39:31.827Z"
            },
            {
                "_id": "5ec6bf456b940c56933c2318",
                "id": "5ec6bde16b940c56933c22e4",
                "date": "2020-05-21T17:49:57.376Z"
            },
            {
                "_id": "5ecb9a90f4f6c8000698828b",
                "id": "5ec7fc217fea250006d9ee08",
                "date": "2020-05-25T10:14:40.422Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4809b15d854c08f7372",
        "info": "info about artist 17",
        "popularity": 0,
        "type": "Artist",
        "Name": "artist17",
        "userId": "5eb0900a30a9a01f144b7233",
        "images": [
            {
                "_id": "5eb0b460de66c65e34c18bef",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a8b6ec0c444e9c48986f",
                "albumId": "5eb0a8b4ec0c444e9c48986e"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb1a7efa5ebd959e08d5762",
                "trackId": "5eb1a7efa5ebd959e08d5761"
            },
            {
                "_id": "5eb1af37371bc537ec792bda",
                "trackId": "5eb1af36371bc537ec792bd9"
            }
        ],
        "__v": 13,
        "followed": [
            {
                "_id": "5ecb030c6b940c56933c23a1",
                "id": "5ebff844ec00612568e2a7a6",
                "date": "2020-05-24T23:28:12.002Z"
            }
        ]
    }
]
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of up to 20 artist objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *
 */

/**
 * @api {get} api/Artists Get Several Artists
 * @apiName Get Several Artists
 * @apiGroup Artist
 * @apiVersion  1.1.0
@apiDescription
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
 *  [
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a44b9b15d854c08f7362",
        "info": "info about artist 1",
        "popularity": 806,
        "type": "Artist",
        "Name": "artist1",
        "userId": "5eb0903c30a9a01f144b7238",
        "images": [
            {
                "_id": "5eb0b3cede66c65e34c18b56",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a498ec0c444e9c48981f",
                "albumId": "5eb0a498ec0c444e9c48981e"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a49aec0c444e9c489821",
                "trackId": "5eb0a499ec0c444e9c489820"
            },
            {
                "_id": "5eb1a5b4a5ebd959e08d5747",
                "trackId": "5eb1a5b3a5ebd959e08d5746"
            },
            {
                "_id": "5eb1acf1371bc537ec792bbf",
                "trackId": "5eb1acf0371bc537ec792bbe"
            }
        ],
        "__v": 36,
        "followed": [
            {
                "_id": "5ec45ab5a29ba424a86d2f4e",
                "id": "5ebff844ec00612568e2a7a6",
                "date": "2020-05-19T22:16:21.353Z"
            },
            {
                "_id": "5ec48ad46b940c56933c1d39",
                "id": "5eb0900a30a9a01f144b7233",
                "date": "2020-05-20T01:41:40.818Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a44e9b15d854c08f7363",
        "info": "info about artist 2",
        "popularity": 101,
        "type": "Artist",
        "Name": "artist2",
        "userId": "5eb0904630a9a01f144b7239",
        "images": [
            {
                "_id": "5eb0b3d6de66c65e34c18b5f",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a4d9ec0c444e9c489824",
                "albumId": "5eb0a4d9ec0c444e9c489823"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a4ddec0c444e9c489826",
                "trackId": "5eb0a4dcec0c444e9c489825"
            },
            {
                "_id": "5eb1a5f3a5ebd959e08d574a",
                "trackId": "5eb1a5f3a5ebd959e08d5749"
            },
            {
                "_id": "5eb1ad32371bc537ec792bc2",
                "trackId": "5eb1ad31371bc537ec792bc1"
            }
        ],
        "__v": 17,
        "followed": [
            {
                "_id": "5ec47824a29ba424a86d3067",
                "id": "5eb0901430a9a01f144b7234",
                "date": "2020-05-20T00:21:56.432Z"
            }
        ]
    },
    {
        "genre": [
            "genre1",
            "genre2",
            "genre3"
        ],
        "_id": "5eb0a4519b15d854c08f7364",
        "info": "info about artist 3",
        "popularity": 549,
        "type": "Artist",
        "Name": "artist3",
        "userId": "5eb0905030a9a01f144b723a",
        "images": [
            {
                "_id": "5eb0b3dfde66c65e34c18b68",
                "height": 100,
                "width": 100
            }
        ],
        "addAlbums": [
            {
                "_id": "5eb0a51bec0c444e9c489829",
                "albumId": "5eb0a51bec0c444e9c489828"
            }
        ],
        "addTracks": [
            {
                "_id": "5eb0a51fec0c444e9c48982b",
                "trackId": "5eb0a51eec0c444e9c48982a"
            },
            {
                "_id": "5eb1a632a5ebd959e08d574d",
                "trackId": "5eb1a632a5ebd959e08d574c"
            },
            {
                "_id": "5eb1ad72371bc537ec792bc5",
                "trackId": "5eb1ad72371bc537ec792bc4"
            }
        ],
        "__v": 16,
        "followed": [
            {
                "_id": "5ec4576ca29ba424a86d2f01",
                "id": "5ebff844ec00612568e2a7a6",
                "date": "2020-05-19T22:02:20.330Z"
            },
            {
                "_id": "5ec45785a29ba424a86d2f03",
                "id": "5eb08fec30a9a01f144b7230",
                "date": "2020-05-19T22:02:45.521Z"
            }
        ]
    }
]
 * @apiParam (QueryParameters)  artists_ids 		Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
 *
 *
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an array</br>  of artist objects in JSON format.</br></br></br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response.</br> On error, the header status code is an error code and the response body contains an error object.
 */



//Browse

/**
 * @api {get} api/browse/categories/:category_id Get a Category
 * @apiName Get a Category
 * @apiGroup Browse
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {get} api/browse/categories/:category_id/playlists Get a Category's Playlists
 * @apiName Get a Category's Playlists
 * @apiGroup Browse
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (QueryParameters)  limit 	Optional. The maximum number of items to return.</br> Default: 20. Minimum: 1. Maximum: 50.
 * @apiParam (QueryParameters)  offset 	Optional. The index of the first item to return.</br> Default: 0 (the first object).</br> Use with limit to get the next set of items.
 *@apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of simplified playlist objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/browse/categories/5ec36eeaedbc6b20ecdbd823/playlists' \
 * @apiSuccessExample {json} Success-Response:
 {
    "playlists": [
        {
            "_id": "5eb5258b680ef51b4c449321",
            "name": "my favorite",
            "images": [
                {
                    "_id": "5eb52590680ef51b4c449325",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0903230a9a01f144b7237",
            "ownerName": "Omar"
        },
        {
            "_id": "5eb5259d680ef51b4c449329",
            "name": "Ayat el quran",
            "images": [
                {
                    "_id": "5eb525a2680ef51b4c44932d",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0903c30a9a01f144b7238",
            "ownerName": "Kareem"
        },
        {
            "_id": "5eb525aa680ef51b4c449331",
            "name": "Soura",
            "images": [
                {
                    "_id": "5eb525af680ef51b4c449335",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0903c30a9a01f144b7238",
            "ownerName": "Kareem"
        },
        {
            "_id": "5eb525bc680ef51b4c449339",
            "name": "Playlist4",
            "images": [
                {
                    "_id": "5eb525c1680ef51b4c44933d",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0904630a9a01f144b7239",
            "ownerName": "Mohmed"
        },
        {
            "_id": "5eb525ce680ef51b4c449341",
            "name": " playlist5",
            "images": [
                {
                    "_id": "5eb525d3680ef51b4c449345",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0905030a9a01f144b723a",
            "ownerName": "Tarek"
        },
        {
            "_id": "5eb525e0680ef51b4c449349",
            "name": "Which need",
            "images": [
                {
                    "_id": "5eb525e5680ef51b4c44934d",
                    "height": 100,
                    "width": 100
                }
            ],
            "ownerId": "5eb0905a30a9a01f144b723b",
            "ownerName": "Abdel Rahman"
        }
    ]
}
 */

/**
 * @api {get} api/browse/categories Get a List of Categories
 * @apiName Get a List of Categories
 * @apiGroup Browse
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {get} api/browse/recently-playing Get a List of recently playing Playlists,artists,albums
 * @apiName Get a List of recently-playing
 * @apiGroup Browse
 * @apiVersion  1.1.0
*@apiDescription
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
 * @apiVersion  1.1.0
*@apiDescription
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
 * @api {get} api/browse/genre Get genres playlists
 * @apiName Get genres playlists
 * @apiGroup Browse
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get a list ofGet genres playlists (shown, for example, on a Spotify player’s “Browse” tab).</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
  *  @apiExample {curl} Example usage:
 curl --location --request GET 'http://localhost:3000/api/browse/genre' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NjgyNTU2LCJleHAiOjQ3MzQxNjg5NTZ9.fKWnF2BQIh_LHYqsS9HU0jfUBdBsVcD74gnnqqQehN0' \
 *  @apiSuccessExample {json} Success-Response:
 *{
 *[
    {
        "genre": "quran",
        "playlists": [
            {
                "playlist": {
                    "_id": "5e9e4754f09b30378ce0f769",
                    "type": "playlist",
                    "Description": "",
                    "collaborative": false,
                    "name": "quran",
                    "isPublic": true,
                    "ownerId": "5e9dd1535a2ce73fe4a73b12",
                    "images": [],
                    "snapshot": [
                        {
                            "hasTracks": [
                                "5e9b5e2de9c8d87fdc2eca81"
                            ],
                            "_id": "5e9e4756f09b30378ce0f76d",
                            "action": "Add Tracks"
                        },
                        {
                            "hasTracks": [
                                "5e9b5e2de9c8d87fdc2eca81"
                            ],
                            "_id": "5e9e515bf09b30378ce0f76e",
                            "action": "Add Tracks"
                        }
                    ],
                    "__v": 2
                },
                "owner": {
                    "id": "5e9dd1535a2ce73fe4a73b12"
                }
            },
            {
                "playlist": {
                    "_id": "5e9e5295f09b30378ce0f76f",
                    "type": "playlist",
                    "Description": "",
                    "collaborative": false,
                    "name": "quran1",
                    "isPublic": true,
                    "ownerId": "5e9dd1535a2ce73fe4a73b12",
                    "images": [],
                    "snapshot": [
                        {
                            "hasTracks": [
                                "5e9b5e2de9c8d87fdc2eca81"
                            ],
                            "_id": "5e9e5296f09b30378ce0f773",
                            "action": "Add Tracks"
                        }
                    ],
                    "__v": 1
                },
                "owner": {
                    "id": "5e9dd1535a2ce73fe4a73b12"
                }
            },
            {
                "playlist": {
                    "_id": "5ea0b53d0e077a374488cb3d",
                    "type": "playlist",
                    "Description": "",
                    "collaborative": false,
                    "name": "quran3",
                    "isPublic": true,
                    "ownerId": "5e9dd1535a2ce73fe4a73b12",
                    "images": [],
                    "snapshot": [
                        {
                            "hasTracks": [
                                "5e9b62c3e9c8d87fdc2ecb58"
                            ],
                            "_id": "5ea0b53f0e077a374488cb41",
                            "action": "Add Tracks"
                        }
                    ],
                    "__v": 1
                },
                "owner": {
                    "id": "5e9dd1535a2ce73fe4a73b12"
                }
            }
        ]
    },
    "genre": "Hafs",
        "playlists": [
            {
                "playlist": {
                    "_id": "5e9e4754f09b30378ce0f769",
                    "type": "playlist",
                    "Description": "",
                    "collaborative": false,
                    "name": "quran",
                    "isPublic": true,
                    "ownerId": "5e9dd1535a2ce73fe4a73b12",
                    "images": [],
                    "snapshot": [
                        {
                            "hasTracks": [
                                "5e9b5e2de9c8d87fdc2eca81"
                            ],
                            "_id": "5e9e4756f09b30378ce0f76d",
                            "action": "Add Tracks"
                        },
                        {
                            "hasTracks": [
                                "5e9b5e2de9c8d87fdc2eca81"
                            ],
                            "_id": "5e9e515bf09b30378ce0f76e",
                            "action": "Add Tracks"
                        }
                    ],
                    "__v": 2
                },
                "owner": {
                    "id": "5e9dd1535a2ce73fe4a73b12"
                }
            }
]
 *}
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.
 */

/**
 * @api {get} api/browse/popular-albums Get a List of popular albums
 * @apiName Get a List of popular albums
 * @apiGroup Browse
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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


//Follow

/**
 * @api {get} api/me/following/contains/{id} Check if Current User Follows Artist
 * @apiName Check if Current User Follows Artists or Users
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Check to see if the current user is following one artist .</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service</br>The access token must have been issued on behalf of the current user.</br> Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.
 *
 *
 * @apiParam (Path Parameters)  id		Required.the user Spotify ID to check.</br> For example: id=74ASZWbe4lXaubB36ztrGX A maximum of 1 can be sent in one request.
 *
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains a JSON array of true or false value.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/following/contains/5eb0a4749b15d854c08f736e' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 *  @apiSuccessExample {json} Success-Response:
 * {
 *  "follow": false
 *}
 */



/**
 * @api {get} /api/Artists/numberOfFollowers/id Get number of followers for an artist.
 * @apiName Get number of followers for an artist per day, month and year
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get number of followers for an artist per day, month and year.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service</br>The access token must have been issued on behalf of the current user.</br> Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.
 *
 *
 * @apiParam (Path Parameters)  id		Required. the artist's Spotify ID to check.</br> For example: id=74ASZWbe4lXaubB36ztrGX A maximum of 1 can be sent in one request.
 *
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains a JSON array of numbers of followers for an artist per day/month/year.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET '127.0.0.1:3000/api/Artists/numberOfFollowers/5eb0a44b9b15d854c08f7362' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI1YTcxNzc3Y2Q0ODFmYTgwYmQ0MWMiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU4OTkxMjQ0NywiZXhwIjozMTQ2NDg4ODc4MDI2MDI4MDAwfQ.bvWXaS3yQ9qXVxrMbVv4Y37IwV9ThIjaLmKI8FeRA80' \

 *  @apiSuccessExample {json} Success-Response:
 *{
 *   "numOfFollowers": [
 *      0,
 *      0,
 *     2
 *   ]
 *}
 */









































/**
 * @api {put} api/me/following Follow Artist
 * @apiName Follow Artist
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (BodyParameters)  id 		Required.  the artist ID.</br> For example: id=74ASZWbe4lXaubB36ztrGX. A maximum of 1 ID can be sent in one request.
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/following' \
 * --header 'Content-Type: application/json' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
*--data-raw '{
	"id":"5eb0a4749b15d854c08f736e"
}'
 *
 */

/**
 * @api {PUT} api/playlists/{playlist_id}/followers Follow a Playlist
 * @apiName Follow a Playlist
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains an artists object. The artists object in turn contains a cursor-based paging object of Artists.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/followingArtist' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
* @apiSuccessExample {json} Success-Response:
 *{
     
    "Artists": [
        {
            "_id": "5eb0a44b9b15d854c08f7362",
            "Name": "artist1",
            "images": [
                {
                    "_id": "5eb0b3cede66c65e34c18b56",
                    "height": 100,
                    "width": 100
                }
            ],
            "type": "Artist"
        }
    ]
 }
 */

/**
 * @api {delete} api/me/following Unfollow Artist
 * @apiName Unfollow Artist
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (BodyParameters)  id 	Optional. A JSON of the artist ID. For example: {id:"74ASZWbe4lXaubB36ztrGX"}.</br> A maximum of 1 ID can be sent in one request.</br> Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
 *
 *
 * curl --location --request GET 'http://localhost:3000api/me/following ' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
--header 'Content-Type: application/json' \
--data-raw '{
	"id":"5eb0a4749b15d854c08f736e"
}' 
* @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.

 */
//like Tracks
/**
 * @api {put} api/me/like/:track_id like track
 * @apiName like track
 * @apiGroup Library
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup Library
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {get} api/Albums/numberOfLikes/id Get number of likes for an album.
 * @apiName Get number of likes for an album per day, month and year
 * @apiGroup Library
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get number of likes for an album per day, month and year.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 	Required. A valid access token from the Spotify Accounts service</br>The access token must have been issued on behalf of the current user.</br> Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.
 *
 *
 * @apiParam (Path Parameters)  id		Required. the album's Spotify ID to check.</br> For example: id=74ASZWbe4lXaubB36ztrGX A maximum of 1 can be sent in one request.
 *
 *
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains a JSON array of numbers of likes for an album per day/month/year.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET '127.0.0.1:3000/api/Albums/numberOfLikes/5eb0a498ec0c444e9c48981e' \
 * --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI1YTcxNzc3Y2Q0ODFmYTgwYmQ0MWMiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU4OTc2Njg0OCwiZXhwIjo0NzM2MjUzMjQ4fQ.TAkHzm3mDhd_YhieRnXJ3GiPa42GOScu8sFSrdyTfgs' \
 * --data-raw '{  "ids":"5eb0a498ec0c444e9c48981e"} 
 * 
 *  @apiSuccessExample {json} Success-Response:
 *{
 *   "numOfLikes": [
 *      0,
 *      0,
 *     2
 *   ]
 *}
 */

/**
 * @api {get} api/me/albums/contains Check User's Saved Albums
 * @apiName Check User's Saved Albums
 * @apiGroup Library
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
    "savedAlbums": [
        {
            "isSaved": true,
            "_id": "5eb0a872ec0c444e9c489869",
            "name": "Just the beginning",
            "images": [
                {
                    "_id": "5eb0b45bde66c65e34c18be9",
                    "height": 100,
                    "width": 100
                }
            ],
            "artistId": "5eb0a47d9b15d854c08f7371",
            "artistName": "artist16",
            "track": [
                {
                    "_id": "5eb0a877ec0c444e9c48986b",
                    "name": "track35",
                    "images": [
                        {
                            "_id": "5eb0b45ede66c65e34c18bec",
                            "height": 100,
                            "width": 100
                        }
                    ],
                    "isLiked": false,
                    "playable": true,
                    "duration": 60
                },
                {
                    "_id": "5eb1a52fa5ebd959e08d5740",
                    "name": "Alsajda",
                    "images": [],
                    "isLiked": false,
                    "playable": true,
                    "duration": 125
                },
                {
                    "_id": "5eb1ac71371bc537ec792bb8",
                    "name": "mariam",
                    "images": [],
                    "isLiked": false,
                    "playable": true,
                    "duration": 75
                }
            ]
        }
    ]
}
 */

/**
 * @api {get} api/me/tracks Get a User's Saved Tracks
 * @apiName Get a User's Saved Tracks
 * @apiGroup Library
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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

/**
 * @api {get} /api/me/following/user get users that user follows
 * @apiName get users that user follows
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get all the  users that the logged in  user follows.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service
 *
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of users in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/following/user' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M' 
 *
 *  @apiSuccessExample {json} Success-Response:
*[
    {
        "gender": "f",
        "email": "dai.a.elrihany@gmail.com",
        "displayName": "Dai",
        "birthDate": "1998-01-01T00:00:00.000Z",
        "product": "free",
        "images": [
            {
                "_id": "5eb51153dd06db2ffca30291",
                "height": 100,
                "width": 100
            }
        ],
        "follow": [
            {
                "_id": "5ec046a2058f3c35b859add0",
                "id": "5eb0a4749b15d854c08f736e"
            }
        ],
        "createPlaylist": [
            {
                "collaboratorsId": [],
                "_id": "5ec46acc6fc95d6c54420970",
                "playListId": "5eb52479680ef51b4c449299",
                "addedAt": "2020-05-19T23:25:00.759Z",
                "isPrivate": false
            },
            {
                "collaboratorsId": [],
                "_id": "5ec47f426b940c56933c1cb4",
                "playListId": "5eb5246b680ef51b4c449291",
                "addedAt": "2020-05-20T00:52:18.550Z",
                "isPrivate": false
            },
            {
                "collaboratorsId": [],
                "_id": "5ec48db96b940c56933c1d6a",
                "playListId": "5ec2af35afb12b366cf04775",
                "addedAt": "2020-05-20T01:54:01.698Z",
                "isPrivate": false
            }
        ],
        "followPlaylist": [
            {
                "_id": "5eb51bb0e8fb881a3ce466ad",
                "playListId": "5eb51bb0e8fb881a3ce466aa",
                "isPrivate": false
            },
            {
                "_id": "5eb51c3995f7fd0cecb19e95",
                "playListId": "5eb51c3995f7fd0cecb19e92",
                "isPrivate": false
            },
            {
                "_id": "5eb51c4595f7fd0cecb19e99",
                "playListId": "5eb51c4595f7fd0cecb19e96",
                "isPrivate": false
            },
            {
                "_id": "5eb51f1932fc2c23b034fad2",
                "playListId": "5eb51f1932fc2c23b034facf",
                "isPrivate": false
            },
            {
                "_id": "5eb51f2532fc2c23b034fad6",
                "playListId": "5eb51f2432fc2c23b034fad3",
                "isPrivate": false
            },
            {
                "_id": "5eb51fc3afa54d23a0297fb2",
                "playListId": "5eb51fc2afa54d23a0297faf",
                "isPrivate": false
            },
            {
                "_id": "5eb51fcfafa54d23a0297fb6",
                "playListId": "5eb51fcfafa54d23a0297fb3",
                "isPrivate": false
            },
            {
                "_id": "5eb520fdc71ff52ca44f6982",
                "playListId": "5eb520fcc71ff52ca44f697f",
                "isPrivate": false
            },
            {
                "_id": "5eb5217b468bdf2e6c3baa60",
                "playListId": "5eb5217b468bdf2e6c3baa5d",
                "isPrivate": false
            },
            {
                "_id": "5eb52188468bdf2e6c3baa64",
                "playListId": "5eb52187468bdf2e6c3baa61",
                "isPrivate": false
            },
            {
                "_id": "5eb521a247ed2c1cc072f556",
                "playListId": "5eb521a247ed2c1cc072f553",
                "isPrivate": false
            },
            {
                "_id": "5eb5222cd6ef000f6866ea5d",
                "playListId": "5eb5222bd6ef000f6866ea5a",
                "isPrivate": false
            },
            {
                "_id": "5eb52239d6ef000f6866ea62",
                "playListId": "5eb52239d6ef000f6866ea5f",
                "isPrivate": false
            },
            {
                "_id": "5eb5229bf5d33f2daca6357e",
                "playListId": "5eb5229af5d33f2daca6357b",
                "isPrivate": false
            },
            {
                "_id": "5eb522a8f5d33f2daca63586",
                "playListId": "5eb522a8f5d33f2daca63583",
                "isPrivate": false
            },
            {
                "_id": "5eb522b6f5d33f2daca6358e",
                "playListId": "5eb522b5f5d33f2daca6358b",
                "isPrivate": false
            },
            {
                "_id": "5eb522c3f5d33f2daca63596",
                "playListId": "5eb522c3f5d33f2daca63593",
                "isPrivate": false
            },
            {
                "_id": "5eb522d1f5d33f2daca6359e",
                "playListId": "5eb522d0f5d33f2daca6359b",
                "isPrivate": false
            },
            {
                "_id": "5eb522def5d33f2daca635a6",
                "playListId": "5eb522def5d33f2daca635a3",
                "isPrivate": false
            },
            {
                "_id": "5eb522ecf5d33f2daca635ae",
                "playListId": "5eb522ebf5d33f2daca635ab",
                "isPrivate": false
            },
            {
                "_id": "5eb522faf5d33f2daca635b6",
                "playListId": "5eb522f9f5d33f2daca635b3",
                "isPrivate": false
            },
            {
                "_id": "5eb52307f5d33f2daca635be",
                "playListId": "5eb52307f5d33f2daca635bb",
                "isPrivate": false
            },
            {
                "_id": "5eb52315f5d33f2daca635c6",
                "playListId": "5eb52314f5d33f2daca635c3",
                "isPrivate": false
            },
            {
                "_id": "5eb52322f5d33f2daca635ce",
                "playListId": "5eb52322f5d33f2daca635cb",
                "isPrivate": false
            },
            {
                "_id": "5eb52330f5d33f2daca635d6",
                "playListId": "5eb5232ff5d33f2daca635d3",
                "isPrivate": false
            },
            {
                "_id": "5eb5233df5d33f2daca635de",
                "playListId": "5eb5233df5d33f2daca635db",
                "isPrivate": false
            },
            {
                "_id": "5eb5234bf5d33f2daca635e6",
                "playListId": "5eb5234af5d33f2daca635e3",
                "isPrivate": false
            },
            {
                "_id": "5ec46acd6fc95d6c54420971",
                "playListId": "5eb52479680ef51b4c449299",
                "isPrivate": false
            },
            {
                "_id": "5ec47f426b940c56933c1cb5",
                "playListId": "5eb5246b680ef51b4c449291",
                "isPrivate": false
            },
            {
                "_id": "5ec48db96b940c56933c1d6b",
                "playListId": "5ec2af35afb12b366cf04775",
                "isPrivate": false
            }
        ],
        "saveAlbum": [],
        "following": [],
        "followers": [
            "5eb0906430a9a01f144b723c"
        ]
    }
]
 */


/**
 * @api {get} /api/me/followers/user get user followers
 * @apiName  get user followers
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">follow other  user</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service
 *
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of users in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/followers/user' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOGZjZTMwYTlhMDFmMTQ0YjcyMmQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4NzkzLCJleHAiOjMxNDY0ODg4NzgwMjY4MDQwMDB9.gaUBESzDLwhm7uPg9pvv03aH4gsS4RlT3TyPAj7mtoA' 
 *
 *  @apiSuccessExample {json} Success-Response:
*[
    {
        "gender": "male",
        "email": "bahaaeldeen1999@gmail.com",
        "displayName": "Bahaa",
        "birthDate": "1999-06-07T00:00:00.000Z",
        "product": "free",
        "images": [
            {
                "_id": "5ec336c7903e064e047da9a3",
                "height": 100,
                "width": 100
            }
        ],
        "follow": [],
        "createPlaylist": [
            {
                "collaboratorsId": [],
                "_id": "5eb52a2663eea332d416b9b0",
                "playListId": "5eb52a2563eea332d416b9ae",
                "addedAt": "2020-05-08T09:45:10.004Z",
                "isPrivate": false
            },
            {
                "collaboratorsId": [],
                "_id": "5eb52a3363eea332d416b9b8",
                "playListId": "5eb52a3363eea332d416b9b6",
                "addedAt": "2020-05-08T09:45:23.641Z",
                "isPrivate": false
            }
        ],
        "followPlaylist": [
            {
                "_id": "5eb52a2663eea332d416b9b1",
                "playListId": "5eb52a2563eea332d416b9ae",
                "isPrivate": false
            },
            {
                "_id": "5eb52a3463eea332d416b9b9",
                "playListId": "5eb52a3363eea332d416b9b6",
                "isPrivate": false
            }
        ],
        "saveAlbum": [],
        "following": [
            "5eb08fce30a9a01f144b722d"
        ],
        "followers": []
    }
]
 */


/**
 * @api {DELETE} /api/me/unfollow/user/{user_id} unfollow user with user_id
 * @apiName  unfollow user
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">unfollow user</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service
 * @apiParam (Path Param) user_id           Required. user id that the user will follow 
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 *curl --location --request DELETE 'http://localhost:3000/api/me/unfollow/user/5eb08fce30a9a01f144b722d' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M' \
 *
 *  @apiSuccessExample {json} Success-Response:
*unfollowed user successfully
 */




/**
 * @api {PUT} /api/me/follow/user/{user_id} follow user with user_id
 * @apiName  follow user
 * @apiGroup Follow
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">make user follow another.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service
 * @apiParam (path Param) user_id      Required. user id that the user will follow 
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body</br> On error, the header status code is an error code and the response body contains an error object.
 *
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/me/follow/user/5eb08fce30a9a01f144b722d' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M' \
 *
 *  @apiSuccessExample {json} Success-Response:
*followed user successfully
 */

//Player
/**
  * @api {post} api/createQueue/:source_id/:track_id create queue 
 * @apiName Create queue
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription create queue for user
 * 
 * <p style="color:red;">create the user playback queue </p>
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiparam (path parameters) source_id   required.the id of the source if playlist or album but if you will send an array of track not playlist and not album but it by any value you need and put tracksIds with array of tracks
 * @apiparam (path parameters) track_id    required .the first track will be playing
 *
 * @apiParam (query Parameters)  isPlaylist optional. is boolean determine if the source of queue is playlist or album &true is playlist &false album  	
 *
 * @apiParam  (Body Parameters)  sourceType  optional if you will send array write the the name which define this tracks 
 * @apiParam  (Body Parameters)  tracksIds   optional if you will send array tracks  
 *@apiParam (response) success 200 & error 400  
 *
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/createQueue/5e8cbe527f37604d583f8d5c/5e8cba447f37604d583f8d3b?isPlaylist=true' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
OR
curl --location --request POST 'http://localhost:3000/api/createQueue/0/5eb1acf0371bc537ec792bbe' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5MzgyNDc0LCJleHAiOjQ3MzU4Njg4NzR9.wGYAj-M2tedMOutlO2BCyoGw3XhZzHaMDSH3m8sAJq0' \
--header 'Content-Type: application/json' \
--data-raw '{
	
     "sourceType":"ratio",
     "tracksIds":["5eb1a5b3a5ebd959e08d5746","5eb1acf0371bc537ec792bbe","5eb0a55eec0c444e9c48982f","5eb0a5a1ec0c444e9c489834","5eb0a5e3ec0c444e9c489839"]
          
}
'

 */
/**
 * @api {get} api/me/player/currently-playing Get the User's Currently Playing Track
 * @apiName Get the User's Currently Playing Track
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 *  @apiSuccessExample {json} Success-Response:
{
  [
    {
        "_id": "5ed761915f4bc91e6c4b8fcb",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ed75d997131c224e824bf67",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ed1d8b2041f5217f0b5bb42",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ed1d6c6c8c3850eacfd0d9b",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ed06547e569f126b8ec8fdf",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ecdb22ea0352401f8d53c5a",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ec23629b14e0830282538fb",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    },
    {
        "_id": "5ec23626b14e0830282538fa",
        "trackId": "5eb0a877ec0c444e9c48986b",
        "sourceId": "5eb5246b680ef51b4c449291",
        "sourceType": "playlist"
    }
]  
}
 */

/**
 * @api {PUT} api/me/player/pause Pause a User's Playback
 * @apiName Pause a User's Playback
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {PUT} api/player/repeat Set Repeat Mode On User’s Playback
 * @apiName Set Repeat Mode On User’s Playback
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 *
 *
 *
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code,current playing track, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 */
/**
 * @api {GET} api/me/player/next-playing get User’s Playback To Next Track
 * @apiName get User’s Playback To Next Track
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
 *
 * <p style="color:red;">gets to next track in the user’s queue.</p>
 *
 * After a successful get operation.
 *
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/player/next-playing' \
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
 *    "isPlaylist": false,
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
 * @apiVersion  1.1.0
@apiDescription
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
 *}
 *
 *
 * @apiParam (Response) Format A completed request will return a 200 NO CONTENT response code,and current playing  track , and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.
 */

/**
 * @api {GET} api/me/player/prev-playing get User’s Playback To Previous Track
 * @apiName get User’s Playback To Previous Track
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
 *
 * <p style="color:red;">gets to previous track in the user’s queue.</p>
 *
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/me/player/prev-playing' \
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {POST} api/player/add-to-queue/:playlist_id/:track_id Add an Item to the User's Playback Queue
 * @apiName Add an Item to the User's Playback Queue
 * @apiGroup Player
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (Path Paramaters) requried.track_id the id of the track went to add
 * @apiParam (Path Paramaters) requried.playlist_id the id of the playlist or album this track from
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
 * @apiVersion  1.1.0
@apiDescription
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
 * curl --location --request PUT 'http://localhost:3000/api/me/restoreplaylists?playlistsIds=5e8cbe6b7f37604d583f8d64' \
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {DELETE} api/playlists/{playlist_id}/tracks Remove Tracks from a Playlist
 * @apiName Remove Tracks from a Playlist
 * @apiGroup Playlist
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {PUT} api/playlists/{playlist_id}/collaborative toggle playlist collaborative attribute
 * @apiName toggle collaborative.
 * @apiGroup Playlist
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {PUT} api/recently-search Add in search history
 * @apiName add to search history
 * @apiGroup Search
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">add an object  to search history  </p>
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiparam (Query parameters) type  the type of object if playlist ,track ,artist ,artist or user
 * 
 * @apiparam (Query parameters) id the object id 
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request PUT 'http://localhost:3000/api/recently-search?type=track&id=5eb0a51eec0c444e9c48982a' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \
--header 'Content-Type: application/json' \
*
*
* @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK .</br> On error, the header status code is an error code 
 *
*/
/**
 * @api {DELETE} api/recently-search remove from search history
 * @apiName remove from search history
 * @apiGroup Search
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">remove  an object  from search history  </p>
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * 
 * @apiparam (Query parameters) type  the type of object if playlist ,track ,artist ,artist or user
 * 
 * @apiparam (Query parameters) id the object id 
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request DELETE 'http://localhost:3000/api/recently-search?type=track&id=5eb0a51eec0c444e9c48982a' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \
--header 'Content-Type: application/json' \
*
*
* @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK .</br> On error, the header status code is an error code 
 *
*/
/**
 * @api {GET} api/recently-search get search history
 * @apiName get search history
 * @apiGroup Search
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get search history  </p>
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *  
 * 
 *  @apiExample {curl} Example usage:
 * curl --location --request GET 'http://localhost:3000/api/recently-search' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \
--header 'Content-Type: application/json' \
*
*
* @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200  and body has object of five arrays of object .</br> On error, the header status code is an error code 
* @apiSuccessExample {json} Success-Response:
{
    "playlists": [
        {
            "owner": {
                "id": "5eb08fce30a9a01f144b722d",
                "type": "user",
                "name": "Dai"
            },
            "collaborative": false,
            "type": "playlist",
            "name": "My Playlist",
            "images": [
                {
                    "_id": "5eb52470680ef51b4c449295",
                    "height": 100,
                    "width": 100
                }
            ],
            "id": "5eb5246b680ef51b4c449291",
            "Description": "",
            "isPublic": true
        }
    ],
    "tracks": [
        {
            "track": {
                "_id": "5eb1a3d8a5ebd959e08d5731",
                "url": "undefined",
                "images": [],
                "duration": 125,
                "availableMarkets": [
                    "eg",
                    "sa"
                ],
                "trackNumber": 12,
                "name": "Alsajda",
                "artistId": "5eb0a4659b15d854c08f736a",
                "albumId": "5eb0a6a7ec0c444e9c489846",
                "discNumber": 1,
                "explicit": false,
                "type": "Track",
                "acousticness": 19,
                "danceability": 45,
                "energy": 32,
                "instrumentalness": 86,
                "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
                "liveness": 34,
                "loudness": 15,
                "mode": 75,
                "speechiness": 84,
                "tempo": 94,
                "timeSignature": "2020-05-05T17:35:20.220Z",
                "valence": 37,
                "like": 0,
                "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
                "genre": [],
                "playable": true
            },
            "isLiked": false,
            "album": {
                "name": "Take cover",
                "_id": "5eb0a6a7ec0c444e9c489846",
                "artist": {
                    "name": "artist9",
                    "_id": "5eb0a4659b15d854c08f736a"
                }
            }
        },
        {
            "track": {
                "_id": "5eb0a51eec0c444e9c48982a",
                "url": "undefined",
                "images": [
                    {
                        "_id": "5eb0b3e6de66c65e34c18b6e",
                        "height": 100,
                        "width": 100
                    }
                ],
                "duration": 60,
                "availableMarkets": [
                    "eg",
                    "sa"
                ],
                "trackNumber": 12,
                "name": "track28",
                "artistId": "5eb0a4519b15d854c08f7364",
                "albumId": "5eb0a51bec0c444e9c489828",
                "discNumber": 1,
                "explicit": false,
                "type": "Track",
                "acousticness": 23,
                "danceability": 85,
                "energy": 68,
                "instrumentalness": 34,
                "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
                "liveness": 3,
                "loudness": 61,
                "mode": 52,
                "speechiness": 34,
                "tempo": 67,
                "timeSignature": "2020-05-04T23:28:30.501Z",
                "valence": 79,
                "like": 0,
                "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
                "genre": [],
                "playable": true
            },
            "isLiked": false,
            "album": {
                "name": "Badge of honor",
                "_id": "5eb0a51bec0c444e9c489828",
                "artist": {
                    "name": "artist3",
                    "_id": "5eb0a4519b15d854c08f7364"
                }
            }
        }
    ],
    "albums": [
        {
            "album_type": "Single",
            "artist": {
                "type": "artist",
                "id": "5eb0a44b9b15d854c08f7362",
                "name": "artist1"
            },
            "available_markets": [
                "rg",
                "fr",
                "ge"
            ],
            "images": [
                {
                    "_id": "5eb0b3d3de66c65e34c18b59",
                    "height": 100,
                    "width": 100
                }
            ],
            "id": "5eb0a498ec0c444e9c48981e",
            "name": "Ire desire",
            "type": "album",
            "isFollow": false
        }
    ],
    "users": [
        {
            "name": "Dai",
            "id": "5eb08fce30a9a01f144b722d",
            "type": "user",
            "images": [
                {
                    "_id": "5eb51153dd06db2ffca30291",
                    "height": 100,
                    "width": 100
                }
            ],
            "country": "eg",
            "email": "dai.a.elrihany@gmail.com"
        }
    ],
    "artists": [
        {
            "genre": [
                "genre1",
                "genre2",
                "genre3"
            ],
            "type": "artist",
            "name": "artist1",
            "images": [
                {
                    "_id": "5eb0b3cede66c65e34c18b56",
                    "height": 100,
                    "width": 100
                }
            ],
            "id": "5eb0a44b9b15d854c08f7362",
            "info": "info about artist 1",
            "popularity": 42,
            "isFollow": false
        },
        {
            "genre": [
                "genre1",
                "genre2",
                "genre3"
            ],
            "type": "artist",
            "name": "artist13",
            "images": [
                {
                    "_id": "5eb0b43dde66c65e34c18bcb",
                    "height": 100,
                    "width": 100
                }
            ],
            "id": "5eb0a4749b15d854c08f736e",
            "info": "info about artist 13",
            "popularity": 32,
            "isFollow": false
        }
    ]
}
*
*/

/**
 * @api {get} api/search Search for an Item
 * @apiName Search for an Item
 * @apiGroup Search
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.</p>
 *
 * <h1> Request parameters</h1>
 * </br></br><h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 *
 * @apiParam (Query parameters) name	Required.Search query keywords.
 * @apiParam (Query parameters) type	Required.A comma-separated list of item types to search across.Valid types are: top, album , artist, playlist, profile and track.Search results include hits from all the specified item types.
*  @apiParam (Body parameters)  limit  optional. the limit of response length .
*  @apiParam (Body parameters)  offset  Optional. The index of the first object  to return..
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
 * @api {get} /api/tracks/related/{track_id} get related tracks for specific track
 * @apiName get related tracks
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {get} api/track/{id} Get a Track with full info
 * @apiName Get a Track with artist name & isLike
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {GET} api/tracks/android/{track_id} get track for android
 * @apiName get track file for android
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 *  @apiExample {curl} Example usage
 * curl --location --request GET 'http://localhost:3000/api/tracks/android/5e9b64e4e9c8d87fdc2ecbd8?type=review' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' 
 */


/**
 * @api {GET} /api/tracks/encryption/{track_id}/keys get decryption key for track for web player
 * @apiName get track encryption key for web player
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {PUT} /api/tracks/update/{track_id} edit track
 * @apiName edit track
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * 
 * <p style="color:red;">edit track parameters in database</p>
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
 * @apiparam (Body Parameter) availableMarkets array containing the available markets for a track
 * 
 *  @apiparam (Body Parameter) genre  array containing the genres for a track
 * 
 * @apiparam (Body Parameter) duration number of seconds of the track
 * 
 * @apiparam (Body Parameter) name name of the track
 * 
 * 
 * @apiparam (Response)  Format the new updated track on success with 200 code, on failure 403 error message
 * 
 * @apiExample {curl} Example usage 
 * 
 *curl --location --request PUT 'http://localhost:3000/api/tracks/update/5eb0a499ec0c444e9c489820' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAzYzMwYTlhMDFmMTQ0YjcyMzgiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg4OTU5NTg5LCJleHAiOjQ3MzU0NDU5ODl9.lI3hEl7ic6R4Qpv6JI2TcIFTumVhhWR2IzdfsSzYrV4' \
--header 'Content-Type: application/json' \
--data-raw '{
"name":"track_76",
"genre":["normal","pop"],
"availableMarkets":["fr","en"],
"duration":1000
}'


 * @apiSuccessExample {json} Success-Response:
 {
    "availableMarkets": [
        "fr",
        "en"
    ],
    "genre": [
        "normal",
        "pop"
    ],
    "_id": "5eb0a499ec0c444e9c489820",
    "url": "undefined",
    "images": [
        {
            "_id": "5eb0b3d4de66c65e34c18b5b",
            "height": 100,
            "width": 100
        }
    ],
    "duration": 1000,
    "trackNumber": 12,
    "name": "track_76",
    "artistId": "5eb0a44b9b15d854c08f7362",
    "albumId": "5eb0a498ec0c444e9c48981e",
    "discNumber": 1,
    "explicit": false,
    "type": "Track",
    "acousticness": 74,
    "danceability": 44,
    "energy": 34,
    "instrumentalness": 33,
    "key": "pGMaFTpEPfnu0FkwQ9t1GQ",
    "liveness": 68,
    "loudness": 63,
    "mode": 32,
    "speechiness": 79,
    "tempo": 1,
    "timeSignature": "2020-05-04T23:26:17.951Z",
    "valence": 49,
    "like": 0,
    "keyId": "88XgNh5mVLKPgEnHeLI5Rg",
    "__v": 11
}
 */


/**
 * @api {POST} /api/artists/me/albums/{album_id}/tracks upload tracks
 * @apiName upload tracks to album
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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
/**
 * @api {get} api/me/track/{id} Get a Track
 * @apiName Get a Track
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
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




/**
 * @api {get} api/tracks/likes-per-day/{track_id}  get number of track likes in specific day
 * @apiName get  track likes in  day
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track likes in specific day</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * @apiParam (QueryParameter) day {Number} the number of the day from [1-30]
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/likes-per-day/5eb0a499ec0c444e9c489820?day=8&year=2020&month=6' \

 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfLikes": 1
}
 *
 */

/**
 * @api {get} api/tracks/likes-per-month/{track_id}  get number of track likes in specific month
 * @apiName get  track likes in  month
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track likes in specific month</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/likes-per-month/5eb0a499ec0c444e9c489820?year=2020&month=6' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfLikes": 1
}
 *
 */
/**
 * @api {get} api/tracks/likes-per-year/{track_id}  get number of track likes in specific year
 * @apiName get  track likes in  year
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track likes in specific year</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 *
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/likes-per-year/5eb0a499ec0c444e9c489820?year=2020' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfLikes": 1
}
 *
 */



/**
 * @api {get} api/tracks/listeners-per-day/{track_id}  get number of track listeners in specific day
 * @apiName get  track listeners in  day
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track listeners in specific day</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * @apiParam (QueryParameter) day {Number} the number of the day from [1-30]
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/listeners-per-day/5eb0a499ec0c444e9c489820?day=8&year=2020&month=6' \

 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */

/**
 * @api {get} api/tracks/listeners-per-month/{track_id}  get number of track listeners in specific month
 * @apiName get  track listeners in  month
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track listeners in specific month</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * 
 *   @apiParam (QueryParameter) month 
 * {Number} the number of the month from [1-12]
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/listeners-per-month/5eb0a499ec0c444e9c489820?year=2020&month=6' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */
/**
 * @api {get} api/tracks/listeners-per-year/{track_id}  get number of track listeners in specific year
 * @apiName get  track listeners in  year
 * @apiGroup Tracks
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get number of track listeners in specific year</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *  @apiParam (PathParameters)  track_id 					Required. The Spotify ID for the track.
 * 
 * 
 *  @apiParam (QueryParameter) year {Number} the number of the year  
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and 400 on error
 *
 * @apiExample {curl} Example usage:
 *curl --location --request GET 'http://localhost:3000/api/tracks/listeners-per-year/5eb0a499ec0c444e9c489820?year=2020' \
 * @apiSuccessExample {json} Success-Response:
 * {
    "numberOfListners": 1
}
 *
 */






//User
/**
 * @api {post} api/login Login to Spotify
 * @apiName Login to Spotify
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {POST} api/sendmail Send confirmation mail
 * @apiName Send confirmation mail
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * @apiParam (Link Sent To User Email) Format http://52.87.106.56/confirm?id=5eb08fce30a9a01f144b722d
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/sendmail' 
 --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 *
 *
 */
/**
 * @api {POST} api/login/confirm Confirm Signup
 * @apiName Confirm Signup
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Query parameter)  id {string} Required. the User id .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * @apiParam (Link Sent To User Email) Format http://52.87.106.56/confirm?id=5eb08fce30a9a01f144b722d
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/login/confirm?id=5eb08fce30a9a01f144b722d' 
 
 *
 *
 */
/**
 * @api {POST} api/me/confirmUpdate Confirm Update
 * @apiName Confirm Update
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Query parameter)  id {string} Required. the User id .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * @apiParam (Link Sent To User Email) Format http://100.25.194.8/confirmUpdate?id=5eb08fce30a9a01f144b722d
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/me/confirmUpdate?id=5ed4b0c235e1a5252a9c0247' 
 
 *
 *
 */
/**
 * @api {POST} api/premium/confirm Confirm Premium
 * @apiName Confirm Premium
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * 
 * @apiParam (Query parameter)  id {string} Required. the User id .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * @apiParam (Link Sent To User Email) Format http://52.87.106.56/premium/confirm?id=5eb08fce30a9a01f144b722d
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/premium/confirm?id=5eb08fce30a9a01f144b722d' 
 *
 *
 */
/**
 * @api {POST} api/login/reset_password Reset Password
 * @apiName Reset Password
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Body parameter)  password {string} Required. the User new password .
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 *@apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/login/reset_password' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \
 \
--data-raw '{

"password":"ring"

	
}'
 *
 *
 */
/**
 * @api {POST} api/user/logout Logout user 
 * @apiName Logout user
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is empty </br> On error, the header status code is an error code and the response body contains an error object.
 * 
 * @apiParam (body parameters)  currentTimeStampe optional  current second in track when user logout
 * @apiParam (body parameters)  isRepeatTrack  optional   if user select repeat track mode 
 * @apiParam (body parameters)  volume optional  current volume in web 
 * 
 *@apiExample {curl} Example usage
 *ccurl --location --request POST 'http://localhost:3000/api/user/logout' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOGZmNjMwYTlhMDFmMTQ0YjcyMzEiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5MDgyNjkzLCJleHAiOjQ3MzU1NjkwOTN9.i-6sBIXMCGwChT0Ou1OTFoVV75i7lSlAlLM7Mf9l0zw' \
--header 'Content-Type: application/json' \
--data-raw '{
	
      "currentTimeStampe":0.445,
      "isRepeatTrack":true,
      "volume":5
      
        
}
 *
 */
/**
 * @api {GET} api/me/notifications User notifications
 * @apiName User notifications
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1>Endpoint</h1> 
 * 
* @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body is array of json notifications objects  </br> On error, the header status code is an error code and the response body contains an error object.
 *@apiExample {curl} Example usage
 *curl --location --request GET 'http://localhost:3000/api//me/notifications' 
 *@apiSuccessExample {json} Success-Response:
 *[
    {
        "data": {
            "artistId": "5eb0a4749b15d854c08f736e",
            "albumId": "5ececb4ceedca51f5079346b",
            "title": "WOOOOOH NEW ALBUM",
            "body": "Nada Uploaded a New Album -- CHECK IT OUT !"
        }
    }
]
 *
 */
/**
 * @api {POST} api/notification/token Set FCM Token
 * @apiName Set FCM Token
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription login with facebook using android custom route
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * <p style="color:red;">promote user to premium.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
 * @apiparam (Body parameters) cardNumber   Required. A user credit card 
 * @apiparam (Body parameters) expiresDate  Required. the card expire date 
 * @apiparam (Body parameters) isMonth  Required.boolean if  for month or for  year  (if need -can be change to number from (1--->12)  if for 3 month or 2 ,else)
 * @apiparam (Response) Format On success, the response body contains the user_id and credit card and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for promote . On error, the header status code is an error code and the response body contains an error object. Trying to promote when you do not have the user’s authorization returns error 403 Forbidden.
 *@apiExample {curl} Example usage
 *curl --location --request PUT 'http://localhost:3000/api/me/promote' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTljZjQ1YWUxNzZhOTI5NzBmMzY4OGEiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTU4NzM0NDQ3NCwiZXhwIjozMjU1OTMwMDk5NzI3NH0.ltM83Tf00e2yM9cHIa4z0OktdFjU5QOtbdSnHhi8SNw' \
--header 'Content-Type: application/json' \
--data-raw '{
	
        "expiresDate":"2020-12-03",
        "cardNumber": "374245455400126",
*        "isMonth": false
*}'
 *  @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success":"promote to premium "
 *   }
 */
/**
 * @api {PUT} api/me/free make user free
 * @apiName make user free
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * 
 * <p style="color:red;">make user free.</p>
 *
 * 
 * <h1> Request parameters</h1> 
 * </br></br><h1> Endpoint</h1>
 * 
 * 
 * @apiHeader (Header)  x-auth-token Required. A valid access token from the Spotify Accounts service
* @apiparam (Response) Format On success, the response body contains the user_id and credit card and the HTTP status code in the response header is 200 OK or 201 Created. There is also a Location response header giving the Web API endpoint for promote . On error, the header status code is an error code and the response body contains an error object. Trying to promote when you do not have the user’s authorization returns error 403 Forbidden.
 *@apiExample {curl} Example usage
 *curl --location --request PUT 'http://localhost:3000/api/me/free' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NTg3ODcxLCJleHAiOjQ3MzQwNzQyNzF9.K3X2eOVhdvgpWqpTBTVEdqAr8ukiT7hZAne5OpLgztA' \
--header 'Content-Type: application/json' \
*
*}'
 *  @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success": "become free"  
 *   }
 */
/**
 * @api {PUT} api/me/update update Current User's Profile
 * @apiName update Current User's Profile
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">update current user profile.</p>
 *
 * 
 * <h1>Request Parameters</h1></br></br>
 * 
 * <h1> Endpoint</h1> 
 * 
 * @apiHeader (Header)  x-auth-token 			Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Reading the user’s email address requires the user-read-email scope; </br>reading country and product subscription level requires the user-read-private scope.
 * @apiParam (Body Parameters)     {object} user 
 * 
 * @apiParam (Object Parameters)     {string} email     optional. email, should be new email and not already existing one.
 * @apiParam (Object Parameters)     {string}  password  required. old password
 * @apiParam (Object Parameters)     {string}  newpassword  optional. new password
 * @apiParam (Object Parameters)     {string}  repeatedPassword  optional. required for changing password, repeated new password
 * @apiparam (Object parameters)     {date}    birthday   optional.  birthday date
 * @apiParam (Object Parameters)     {string}  gender  optional. gender
 * @apiParam (Object Parameters)     {string}  country    optional. country.
 * @apiParam (Object Parameters)     {string}  displayName      optional. name
 * @apiparam (Object Parameters)     {string}  cardNumber   optional. A user credit card 
 * @apiparam (Object parameters)     {date}    expiresDate   optional. the card expire date 
 * @apiparam (Object parameters)     {boolean} isMonth  optional if  for month or for  year  (if need -can be change to number from (1--->12)  if for 3 month or 2 ,else)
 * 
 * @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK and the response body contains a success object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.
 * @apiExample {curl} Example usage
 *url --location --request PUT 'http://localhost:3000/api/me/update' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NTg3ODcxLCJleHAiOjQ3MzQwNzQyNzF9.K3X2eOVhdvgpWqpTBTVEdqAr8ukiT7hZAne5OpLgztA' \
--header 'Content-Type: application/json' \

--data-raw '{
    "user":{
	    "email": "ayaabohadima@gmail.com",
        "password": "123456",
        "newpassword": "123",
        "repeatedPassword": "123",
        "country": "Eg",
        "displayName": "Aya Samir",
        "gender": "M",
        "birthday": "1999-07-03",
        "expiresDate":"2020-12-09",
        "cardNumber": "374245455400126",
        "isMonth": true
    }
*}'
 * @apiSuccessExample {json} Success-Response:
 * 
 * {
 *  "success":"information has been updated successfully"
 *   }
 */

/**
 * @api {DELETE} api/remove delete Current User's Profile
 * @apiName delete Current User's Profile
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {POST} api/sign_up Create a new account
 * @apiName Create a new account
 * @apiGroup User
 * @apiVersion  1.1.0
*@apiDescription
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
 * @api {get} api/me Get Current User's Profile
 * @apiName Get Current User's Profile
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {get} api/me-player Get  Current User's Profile with player info 
 * @apiName Get Current User's Profile with player info and product
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
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
 * curl --location --request GET 'http://localhost:3000/api/me-player' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \


 *
 * @apiSuccessExample {json} Success-Response:
 *
 *[
    {
        "displayName": "Aya",
        "email": "ayasabohadima@gmail.com",
        "birthDate": "2000-02-20T00:00:00.000Z",
        "country": "eg",
        "product": "premium",
        "gender": "female",
        "images": [
            {
                "_id": "5eb51185dd06db2ffca302a3",
                "height": 100,
                "width": 100
            }
        ],
        "userType": "Artist",
        "player": {
            "source_name": "playlist",
            "is_shuffled": false,
            "volume": 4,
            "is_repeat": false,
            "current_source": "5eb5246b680ef51b4c449291",
            "isPlaylist": true,
            "currentTimeStampe": 0,
            "isRepeatTrack": false,
            "haveQueue": true
        }
    }
]
 */


/**
 * @api {get} api/users/{id} Get a User's Profile
 * @apiName Get a User's Profile
 * @apiGroup User
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">Get public profile information about a Spotify user.</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 * @apiHeader (Header)  x-auth-token 		Required. A valid access token from the Spotify Accounts service.
 *
 * @apiParam (PathParameters)  id 				The user’s Spotify user ID.
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
 * @apiVersion  1.1.0
@apiDescription
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
*@apiParam (form-data) {file} image  Required the image file
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
 * {
    "success": "uploaded succesfully",
    "imageId": "5ea17ca7686dde47e84b9be1"
}
 */

/**
 * @api {POST} /api/images/update/{source_id} update image
 * @apiName update image
 * @apiGroup Image
 * @apiVersion  1.1.0
@apiDescription
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
 * @apiParam (form-data) {file} image  Required the image file
 *  @apiParam (Response)  Format  On success, the HTTP status code in the response header is 200 OK .on error 403 status code will occur
 *
 * @apiExample {curl} Example usage
 *curl --location --request POST 'http://localhost:3000/api/images/update/5e8cb7037f37604d583f8d22?belongs_to=artist&height=100&width=100' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \
--form 'image=@/C:/Users/bahaaEldeen/Pictures/Annotation 2020-03-29 005428.png'

 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "success": "updated succesfully",
    "imageId": "5ea17c80686dde47e84b9bde"
}
 */

/**
 * @api {GET} /api/images/{image_id} get image
 * @apiName get image
 * @apiGroup Image
 * @apiVersion  1.1.0
@apiDescription
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
 * @api {GET} /api/images/get_id/{source_id} get id of latest image of specific document
 * @apiName get id of image
 * @apiGroup Image
 * @apiVersion  1.1.0
@apiDescription
 * <p style="color:red;">get id of latest image in the source document</p>
 *
 *
 * <h1>Request Parameters</h1></br></br>
 *
 * <h1> Endpoint</h1>
 *
 *
 *
 * @apiParam (PathParameters)  source_id 	{String}			the id of entity to get the image from
 *
 * @apiParam (QueryParameters)  belongs_to  {String}		Required.string that specify the entity type that the image is  belongs to can take values (user,playlist,track,album,artist).
 *
 *  @apiParam (Response)  Format  On success 200, if cant get image will return 404 with error message
 *
 * @apiExample {curl} Example usage
 *curl --location --request GET 'http://localhost:3000/api/images/get_id/5e8cb7037f37604d583f8d22/?belongs_to=artist' 
 *@apiSuccessExample {json} Success-Response:
 *{
    "imageId": "5ea0d6ac199f605c7038af37"
}
 *
 */
/**
 * @api {DELETE} /api/images/delete/{image_id} delete image
 * @apiName delete image
 * @apiGroup Image
 * @apiVersion  1.1.0
@apiDescription
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