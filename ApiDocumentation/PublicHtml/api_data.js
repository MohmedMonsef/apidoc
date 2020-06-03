define({ "api": [
  {
    "type": "get",
    "url": "api/albums",
    "title": "Get Several Albums",
    "name": "Get_Several_Albums",
    "group": "Album",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for multiple albums identified by their Spotify IDs. </br> Optional parameters can be used to limit the number of tracks returned.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "field": "ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the albums.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array of album objects in JSON format.</br></br></br> Objects are returned in the order requested. If an object is not found, it's ignored</br> Duplicate ids in the query will result in duplicate objects in the response.</br> On error, the header status code is an error code and the response body contains an error object</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/albums' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: text/plain' \\\n--data-raw '{\n\t\"ids\":\"5e9b5de4e9c8d87fdc2eca7f,5e8cb94b7f37604d583f8d29\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "[\n    {\n        \"Album\": {\n            \"availableMarkets\": [\n                \"eg\"\n            ],\n            \"_id\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"name\": \"quranAlbum\",\n            \"albumType\": \"quran\",\n            \"popularity\": 0,\n            \"genre\": \"quran\",\n            \"releaseDate\": \"2001-12-31T22:00:00.000Z\",\n            \"label\": \"quran\",\n            \"images\": [],\n            \"artistId\": \"5e9b5b656dff8d6ee4c13bbc\",\n            \"type\": \"Album\",\n            \"hasTracks\": [\n                {\n                    \"_id\": \"5e9b5e2ee9c8d87fdc2eca83\",\n                    \"trackId\": \"5e9b5e2de9c8d87fdc2eca81\"\n                },\n                {\n                    \"_id\": \"5e9b62c4e9c8d87fdc2ecb5a\",\n                    \"trackId\": \"5e9b62c3e9c8d87fdc2ecb58\"\n                },\n                {\n                    \"_id\": \"5e9b64e5e9c8d87fdc2ecbda\",\n                    \"trackId\": \"5e9b64e4e9c8d87fdc2ecbd8\"\n                }\n            ],\n            \"releaseDatePercision\": \"DD-MM-YY\",\n            \"__v\": 5\n        },\n        \"Artist\": {\n            \"genre\": [\n                \"quran\"\n            ],\n            \"_id\": \"5e9b5b656dff8d6ee4c13bbc\",\n            \"info\": \"quran\",\n            \"popularity\": 0,\n            \"type\": \"Artist\",\n            \"Name\": \"holy quran\",\n            \"userId\": \"5e9b5a4246a4be79f84c31d3\",\n            \"images\": [],\n            \"addAlbums\": [\n                {\n                    \"_id\": \"5e9b5de5e9c8d87fdc2eca80\",\n                    \"albumId\": \"5e9b5de4e9c8d87fdc2eca7f\"\n                }\n            ],\n            \"addTracks\": [\n                {\n                    \"_id\": \"5e9b5e2ee9c8d87fdc2eca82\",\n                    \"trackId\": \"5e9b5e2de9c8d87fdc2eca81\"\n                },\n                {\n                    \"_id\": \"5e9b62c3e9c8d87fdc2ecb59\",\n                    \"trackId\": \"5e9b62c3e9c8d87fdc2ecb58\"\n                },\n                {\n                    \"_id\": \"5e9b64e5e9c8d87fdc2ecbd9\",\n                    \"trackId\": \"5e9b64e4e9c8d87fdc2ecbd8\"\n                }\n            ],\n            \"__v\": 6\n        }\n    },\n    {\n        \"Album\": {\n            \"availableMarkets\": [\n                \"EG,US\"\n            ],\n            \"_id\": \"5e8cb94b7f37604d583f8d29\",\n            \"name\": \"OHAYO SLEEP WALKERS\",\n            \"albumType\": \"Album\",\n            \"popularity\": 0,\n            \"genre\": \"pop\",\n            \"releaseDate\": \"2000-01-31T22:00:00.000Z\",\n            \"label\": \"KIDS\",\n            \"images\": [],\n            \"artistId\": \"5e8cb7037f37604d583f8d22\",\n            \"type\": \"Album\",\n            \"hasTracks\": [\n                {\n                    \"_id\": \"5e8ce8b282c8d9579467fb83\",\n                    \"trackId\": \"5e8ce8b282c8d9579467fb82\"\n                },\n                {\n                    \"_id\": \"5e8ce8bb82c8d9579467fb86\",\n                    \"trackId\": \"5e8ce8bb82c8d9579467fb85\"\n                },\n                {\n                    \"_id\": \"5e8ce8bf82c8d9579467fb89\",\n                    \"trackId\": \"5e8ce8bf82c8d9579467fb88\"\n                },\n                {\n                    \"_id\": \"5e8ce8c382c8d9579467fb8c\",\n                    \"trackId\": \"5e8ce8c382c8d9579467fb8b\"\n                },\n                {\n                    \"_id\": \"5e8ce8c982c8d9579467fb8f\",\n                    \"trackId\": \"5e8ce8c982c8d9579467fb8e\"\n                }\n            ],\n            \"__v\": 5\n        },\n        \"Artist\": {\n            \"genre\": [\n                \"pop\",\n                \"jazz\"\n            ],\n            \"_id\": \"5e8cb7037f37604d583f8d22\",\n            \"info\": \"ohayo nada\",\n            \"popularity\": 6,\n            \"type\": \"Artist\",\n            \"Name\": \"nada\",\n            \"userId\": \"5e8cb118084a9d2e6c8f21d7\",\n            \"images\": [],\n            \"addAlbums\": [\n                {\n                    \"_id\": \"5e8cb9327f37604d583f8d26\",\n                    \"albumId\": \"5e8cb9327f37604d583f8d25\"\n                },\n                {\n                    \"_id\": \"5e8cb9457f37604d583f8d28\",\n                    \"albumId\": \"5e8cb9457f37604d583f8d27\"\n                },\n                {\n                    \"_id\": \"5e8cb94b7f37604d583f8d2a\",\n                    \"albumId\": \"5e8cb94b7f37604d583f8d29\"\n                },\n                {\n                    \"_id\": \"5e8cb9557f37604d583f8d2c\",\n                    \"albumId\": \"5e8cb9557f37604d583f8d2b\"\n                },\n                {\n                    \"_id\": \"5e8cb95d7f37604d583f8d2e\",\n                    \"albumId\": \"5e8cb95d7f37604d583f8d2d\"\n                },\n                {\n                    \"_id\": \"5e8cb96a7f37604d583f8d30\",\n                    \"albumId\": \"5e8cb96a7f37604d583f8d2f\"\n                },\n                {\n                    \"_id\": \"5e8cb9747f37604d583f8d32\",\n                    \"albumId\": \"5e8cb9747f37604d583f8d31\"\n                },\n                {\n                    \"_id\": \"5e8cb97b7f37604d583f8d34\",\n                    \"albumId\": \"5e8cb97b7f37604d583f8d33\"\n                },\n                {\n                    \"_id\": \"5e8cb9827f37604d583f8d36\",\n                    \"albumId\": \"5e8cb9827f37604d583f8d35\"\n                }\n            ],\n            \"addTracks\": [\n                {\n                    \"_id\": \"5e8ce2a17d3d703094eb82f6\",\n                    \"trackId\": \"5e8ce2a17d3d703094eb82f4\"\n                },\n                {\n                    \"_id\": \"5e8ce2ca7d3d703094eb82f9\",\n                    \"trackId\": \"5e8ce2ca7d3d703094eb82f7\"\n                },\n                {\n                    \"_id\": \"5e8ce2ce7d3d703094eb82fc\",\n                    \"trackId\": \"5e8ce2ce7d3d703094eb82fa\"\n                },\n                {\n                    \"_id\": \"5e8ce2d37d3d703094eb82ff\",\n                    \"trackId\": \"5e8ce2d37d3d703094eb82fd\"\n                },\n                {\n                    \"_id\": \"5e8ce2d87d3d703094eb8302\",\n                    \"trackId\": \"5e8ce2d77d3d703094eb8300\"\n                },\n                {\n                    \"_id\": \"5e8ce2dc7d3d703094eb8305\",\n                    \"trackId\": \"5e8ce2dc7d3d703094eb8303\"\n                },\n                {\n                    \"_id\": \"5e8ce86082c8d9579467fb75\",\n                    \"trackId\": \"5e8ce86082c8d9579467fb73\"\n                },\n                {\n                    \"_id\": \"5e8ce86882c8d9579467fb78\",\n                    \"trackId\": \"5e8ce86882c8d9579467fb76\"\n                },\n                {\n                    \"_id\": \"5e8ce86c82c8d9579467fb7b\",\n                    \"trackId\": \"5e8ce86c82c8d9579467fb79\"\n                },\n                {\n                    \"_id\": \"5e8ce87182c8d9579467fb7e\",\n                    \"trackId\": \"5e8ce87182c8d9579467fb7c\"\n                },\n                {\n                    \"_id\": \"5e8ce87682c8d9579467fb81\",\n                    \"trackId\": \"5e8ce87682c8d9579467fb7f\"\n                },\n                {\n                    \"_id\": \"5e8ce8b282c8d9579467fb84\",\n                    \"trackId\": \"5e8ce8b282c8d9579467fb82\"\n                },\n                {\n                    \"_id\": \"5e8ce8bb82c8d9579467fb87\",\n                    \"trackId\": \"5e8ce8bb82c8d9579467fb85\"\n                },\n                {\n                    \"_id\": \"5e8ce8bf82c8d9579467fb8a\",\n                    \"trackId\": \"5e8ce8bf82c8d9579467fb88\"\n                },\n                {\n                    \"_id\": \"5e8ce8c482c8d9579467fb8d\",\n                    \"trackId\": \"5e8ce8c382c8d9579467fb8b\"\n                },\n                {\n                    \"_id\": \"5e8ce8c982c8d9579467fb90\",\n                    \"trackId\": \"5e8ce8c982c8d9579467fb8e\"\n                }\n            ],\n            \"__v\": 29\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "api/albums/:album_id",
    "title": "Get an Album",
    "name": "Get_an_Album",
    "group": "Album",
    "description": "<h1>Request Parameters</h1></br></br> <h1>Endpoint</h1> <p>GET https://api.spotify.com/v1/albums/:album_id</p>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "album_id",
            "description": "<p>Spotify ID for Albums</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an album object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/albums/5e9b5de4e9c8d87fdc2eca7f' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"isSaved\": false,\n    \"_id\": \"5e8cb9457f37604d583f8d27\",\n    \"name\": \"HELLO SLEEP WALKERS\",\n    \"images\": [],\n    \"artistId\": \"5e8cb7037f37604d583f8d22\",\n    \"artistName\": \"nada\",\n    \"track\": [\n        {\n            \"_id\": \"5e8ce86082c8d9579467fb73\",\n            \"name\": \"WHO I AM\",\n            \"images\": [],\n            \"isLiked\": true\n        },\n        {\n            \"_id\": \"5e8ce86882c8d9579467fb76\",\n            \"name\": \"SOKA\",\n            \"images\": [],\n            \"isLiked\": true\n        },\n        {\n            \"_id\": \"5e8ce86c82c8d9579467fb79\",\n            \"name\": \"ARASU\",\n            \"images\": [],\n            \"isLiked\": true\n        },\n       {\n           \"_id\": \"5e8ce87182c8d9579467fb7c\",\n           \"name\": \"WIWI\",\n           \"images\": [],\n           \"isLiked\": false\n       },\n       {\n           \"_id\": \"5e8ce87682c8d9579467fb7f\",\n           \"name\": \"WWIII\",\n           \"images\": [],\n           \"isLiked\": false\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "api/albums/:id/tracks",
    "title": "Get an Album's Tracks",
    "name": "Get_an_Album's_Tracks",
    "group": "Album",
    "description": "<p style=\"color:red;\">Get Spotify catalog information about an album’s tracks. </br> Optional parameters can be used to limit the number of tracks returned.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "id",
            "description": "<p>Spotify ID for Albums</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of  track objects  in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/albums/5e9b5de4e9c8d87fdc2eca7f/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \\\n--header 'Content-Type: application/json'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"tracks\": [\n        {\n            \"_id\": \"5e9b5e2de9c8d87fdc2eca81\",\n            \"name\": \"el-doha\",\n            \"images\": []\n        },\n        {\n            \"_id\": \"5e9b62c3e9c8d87fdc2ecb58\",\n            \"name\": \"el-kyama\",\n            \"images\": []\n        },\n        {\n            \"_id\": \"5e9b64e4e9c8d87fdc2ecbd8\",\n            \"name\": \"el-sharh\",\n            \"images\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Album"
  },
  {
    "type": "put",
    "url": "api/Artists/me/Albums",
    "title": "Create Album",
    "name": "Create_Album",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Create An Album for the Current Artist .</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "field": "Content-type",
            "description": "<p>Required. The content type of the request body: application/json</p>"
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
            "description": "<p>Required. string of the name of the new Album</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "label",
            "description": "<p>Required. string of the Label of the new Album</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "albumtype",
            "description": "<p>Required.Album, single, or compilation.</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Required.Release Date of the new Album</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "availablemarkets",
            "description": "<p>Required.The markets in which the album is available: ISO 3166-1 alpha-2 country codes.</p>"
          },
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "genre",
            "description": "<p>Required.A list of the genres used to classify the album.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body Contains an Album Object.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/Artists/me/Albums' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: application/json' \\\n\n--data-raw '{\n\t\"name\":\"album1\",\n\t\"label\":\"label\",\n\t\"albumtype\":\"Album\",\n\t\"releaseDate\":\"1/1/2002\",\n\t\"availablemarkets\":\"eg,fr\",\n\t\"genre\":\"normal\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"availableMarkets\": [\n        \"eg\",\n        \"fr\"\n    ],\n    \"_id\": \"5ed740443e295d759c1b78ea\",\n    \"name\": \"album1\",\n    \"albumType\": \"normal\",\n    \"popularity\": 0,\n    \"genre\": \"normal\",\n    \"releaseDate\": \"2001-12-31T22:00:00.000Z\",\n    \"label\": \"label\",\n    \"images\": [],\n    \"artistId\": \"5eb0a4749b15d854c08f736e\",\n    \"type\": \"Album\",\n    \"hasTracks\": [],\n    \"releaseDatePercision\": \"DD-MM-YY\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists",
    "title": "Get Several Artists",
    "name": "Get_Several_Artists",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for several artists based on their Spotify IDs.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "content": "\ncurl --location --request GET 'http://localhost:3000/api/Artists?artists_ids=5e8cb7037f37604d583f8d22,5e8cb7307f37604d583f8d23' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a44b9b15d854c08f7362\",\n        \"info\": \"info about artist 1\",\n        \"popularity\": 806,\n        \"type\": \"Artist\",\n        \"Name\": \"artist1\",\n        \"userId\": \"5eb0903c30a9a01f144b7238\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3cede66c65e34c18b56\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a498ec0c444e9c48981f\",\n                \"albumId\": \"5eb0a498ec0c444e9c48981e\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a49aec0c444e9c489821\",\n                \"trackId\": \"5eb0a499ec0c444e9c489820\"\n            },\n            {\n                \"_id\": \"5eb1a5b4a5ebd959e08d5747\",\n                \"trackId\": \"5eb1a5b3a5ebd959e08d5746\"\n            },\n            {\n                \"_id\": \"5eb1acf1371bc537ec792bbf\",\n                \"trackId\": \"5eb1acf0371bc537ec792bbe\"\n            }\n        ],\n        \"__v\": 36,\n        \"followed\": [\n            {\n                \"_id\": \"5ec45ab5a29ba424a86d2f4e\",\n                \"id\": \"5ebff844ec00612568e2a7a6\",\n                \"date\": \"2020-05-19T22:16:21.353Z\"\n            },\n            {\n                \"_id\": \"5ec48ad46b940c56933c1d39\",\n                \"id\": \"5eb0900a30a9a01f144b7233\",\n                \"date\": \"2020-05-20T01:41:40.818Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a44e9b15d854c08f7363\",\n        \"info\": \"info about artist 2\",\n        \"popularity\": 101,\n        \"type\": \"Artist\",\n        \"Name\": \"artist2\",\n        \"userId\": \"5eb0904630a9a01f144b7239\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3d6de66c65e34c18b5f\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a4d9ec0c444e9c489824\",\n                \"albumId\": \"5eb0a4d9ec0c444e9c489823\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a4ddec0c444e9c489826\",\n                \"trackId\": \"5eb0a4dcec0c444e9c489825\"\n            },\n            {\n                \"_id\": \"5eb1a5f3a5ebd959e08d574a\",\n                \"trackId\": \"5eb1a5f3a5ebd959e08d5749\"\n            },\n            {\n                \"_id\": \"5eb1ad32371bc537ec792bc2\",\n                \"trackId\": \"5eb1ad31371bc537ec792bc1\"\n            }\n        ],\n        \"__v\": 17,\n        \"followed\": [\n            {\n                \"_id\": \"5ec47824a29ba424a86d3067\",\n                \"id\": \"5eb0901430a9a01f144b7234\",\n                \"date\": \"2020-05-20T00:21:56.432Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4519b15d854c08f7364\",\n        \"info\": \"info about artist 3\",\n        \"popularity\": 549,\n        \"type\": \"Artist\",\n        \"Name\": \"artist3\",\n        \"userId\": \"5eb0905030a9a01f144b723a\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3dfde66c65e34c18b68\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a51bec0c444e9c489829\",\n                \"albumId\": \"5eb0a51bec0c444e9c489828\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a51fec0c444e9c48982b\",\n                \"trackId\": \"5eb0a51eec0c444e9c48982a\"\n            },\n            {\n                \"_id\": \"5eb1a632a5ebd959e08d574d\",\n                \"trackId\": \"5eb1a632a5ebd959e08d574c\"\n            },\n            {\n                \"_id\": \"5eb1ad72371bc537ec792bc5\",\n                \"trackId\": \"5eb1ad72371bc537ec792bc4\"\n            }\n        ],\n        \"__v\": 16,\n        \"followed\": [\n            {\n                \"_id\": \"5ec4576ca29ba424a86d2f01\",\n                \"id\": \"5ebff844ec00612568e2a7a6\",\n                \"date\": \"2020-05-19T22:02:20.330Z\"\n            },\n            {\n                \"_id\": \"5ec45785a29ba424a86d2f03\",\n                \"id\": \"5eb08fec30a9a01f144b7230\",\n                \"date\": \"2020-05-19T22:02:45.521Z\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "artists_ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array</br>  of artist objects in JSON format.</br></br></br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists/:artist_id",
    "title": "Get an Artist",
    "name": "Get_an_Artist",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for a single artist identified by their unique Spotify ID.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "artist_id",
            "description": "<p>Spotify ID for the Artist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an artist object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"genre\": [\n        \"genre1\",\n        \"genre2\",\n        \"genre3\"\n    ],\n    \"_id\": \"5eb0a44b9b15d854c08f7362\",\n    \"info\": \"info about artist 1\",\n    \"popularity\": 806,\n    \"type\": \"Artist\",\n    \"Name\": \"artist1\",\n    \"userId\": \"5eb0903c30a9a01f144b7238\",\n    \"images\": [\n        {\n            \"_id\": \"5eb0b3cede66c65e34c18b56\",\n            \"height\": 100,\n            \"width\": 100\n        }\n    ],\n    \"addAlbums\": [\n        {\n            \"_id\": \"5eb0a498ec0c444e9c48981f\",\n            \"albumId\": \"5eb0a498ec0c444e9c48981e\"\n        }\n    ],\n    \"addTracks\": [\n        {\n            \"_id\": \"5eb0a49aec0c444e9c489821\",\n            \"trackId\": \"5eb0a499ec0c444e9c489820\"\n        },\n        {\n            \"_id\": \"5eb1a5b4a5ebd959e08d5747\",\n            \"trackId\": \"5eb1a5b3a5ebd959e08d5746\"\n        },\n        {\n            \"_id\": \"5eb1acf1371bc537ec792bbf\",\n            \"trackId\": \"5eb1acf0371bc537ec792bbe\"\n        }\n    ],\n    \"__v\": 36,\n    \"followed\": [\n        {\n            \"_id\": \"5ec45ab5a29ba424a86d2f4e\",\n            \"id\": \"5ebff844ec00612568e2a7a6\",\n            \"date\": \"2020-05-19T22:16:21.353Z\"\n        },\n        {\n            \"_id\": \"5ec48ad46b940c56933c1d39\",\n            \"id\": \"5eb0900a30a9a01f144b7233\",\n            \"date\": \"2020-05-20T01:41:40.818Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists/:artist_id/Albums",
    "title": "Get an Artist's Albums",
    "name": "Get_an_Artist's_Albums",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information about an artist’s albums.</br> Optional parameters can be specified in the query string to filter and sort the response.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "artist_id",
            "description": "<p>Spotify ID for Albums</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "groups",
            "description": "<p>Optional. A comma-separated list of keywords that will be used to filter the response.</br> If not supplied, all album types will be returned. Valid values are:</br></p> <ul> <li>Album </br></li> <li>Single </br> For example:<br> include_groups=Album,Single.</li> </ul>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "country",
            "description": "<p>Optional. An ISO 3166-1 alpha-2 </br> country code or the string from_token. </br> Supply this parameter to limit the response to one particular geographical market.</br> For example, for albums available in Sweden: country=SE. </br>If not given, results will be returned for all countries and you are likely to get duplicate results per album,</br> one for each country in which the album is available!</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional. The number of album objects to return.</br> Default: 20. Minimum: 1. Maximum: 50.</br> For example: limit=2</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first album to return.</br> Default: 0 (i.e., the first album).</br> Use with limit to get the next set of albums.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body </br>contains an array of album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/Albums' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"availableMarkets\": [\n            \"rg\",\n            \"fr\",\n            \"ge\"\n        ],\n        \"_id\": \"5eb0a498ec0c444e9c48981e\",\n        \"name\": \"Ire desire\",\n        \"albumType\": \"Single\",\n        \"popularity\": 808,\n        \"genre\": \"action\",\n        \"releaseDate\": \"2020-02-04T22:00:00.000Z\",\n        \"label\": \"Unhappy accident\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3d3de66c65e34c18b59\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"artistId\": \"5eb0a44b9b15d854c08f7362\",\n        \"type\": \"Album\",\n        \"hasTracks\": [\n            {\n                \"_id\": \"5eb0a49bec0c444e9c489822\",\n                \"trackId\": \"5eb0a499ec0c444e9c489820\"\n            },\n            {\n                \"_id\": \"5eb1a5b4a5ebd959e08d5748\",\n                \"trackId\": \"5eb1a5b3a5ebd959e08d5746\"\n            },\n            {\n                \"_id\": \"5eb1acf1371bc537ec792bc0\",\n                \"trackId\": \"5eb1acf0371bc537ec792bbe\"\n            }\n        ],\n        \"releaseDatePercision\": \"DD-MM-YY\",\n        \"__v\": 18\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists/:artist_id/related_artists",
    "title": "Get an Artist's Related Artists",
    "name": "Get_an_Artist's_Related_Artists",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information about artists similar to a given artist.</br> Similarity is based on analysis of the Spotify community’s listening history.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "artist_id",
            "description": "<p>Spotify ID for Artist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of up to 20 artist objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/related_artists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a44e9b15d854c08f7363\",\n        \"info\": \"info about artist 2\",\n        \"popularity\": 101,\n        \"type\": \"Artist\",\n        \"Name\": \"artist2\",\n        \"userId\": \"5eb0904630a9a01f144b7239\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3d6de66c65e34c18b5f\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a4d9ec0c444e9c489824\",\n                \"albumId\": \"5eb0a4d9ec0c444e9c489823\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a4ddec0c444e9c489826\",\n                \"trackId\": \"5eb0a4dcec0c444e9c489825\"\n            },\n            {\n                \"_id\": \"5eb1a5f3a5ebd959e08d574a\",\n                \"trackId\": \"5eb1a5f3a5ebd959e08d5749\"\n            },\n            {\n                \"_id\": \"5eb1ad32371bc537ec792bc2\",\n                \"trackId\": \"5eb1ad31371bc537ec792bc1\"\n            }\n        ],\n        \"__v\": 17,\n        \"followed\": [\n            {\n                \"_id\": \"5ec47824a29ba424a86d3067\",\n                \"id\": \"5eb0901430a9a01f144b7234\",\n                \"date\": \"2020-05-20T00:21:56.432Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4519b15d854c08f7364\",\n        \"info\": \"info about artist 3\",\n        \"popularity\": 549,\n        \"type\": \"Artist\",\n        \"Name\": \"artist3\",\n        \"userId\": \"5eb0905030a9a01f144b723a\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3dfde66c65e34c18b68\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a51bec0c444e9c489829\",\n                \"albumId\": \"5eb0a51bec0c444e9c489828\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a51fec0c444e9c48982b\",\n                \"trackId\": \"5eb0a51eec0c444e9c48982a\"\n            },\n            {\n                \"_id\": \"5eb1a632a5ebd959e08d574d\",\n                \"trackId\": \"5eb1a632a5ebd959e08d574c\"\n            },\n            {\n                \"_id\": \"5eb1ad72371bc537ec792bc5\",\n                \"trackId\": \"5eb1ad72371bc537ec792bc4\"\n            }\n        ],\n        \"__v\": 16,\n        \"followed\": [\n            {\n                \"_id\": \"5ec4576ca29ba424a86d2f01\",\n                \"id\": \"5ebff844ec00612568e2a7a6\",\n                \"date\": \"2020-05-19T22:02:20.330Z\"\n            },\n            {\n                \"_id\": \"5ec45785a29ba424a86d2f03\",\n                \"id\": \"5eb08fec30a9a01f144b7230\",\n                \"date\": \"2020-05-19T22:02:45.521Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4559b15d854c08f7365\",\n        \"info\": \"info about artist 4\",\n        \"popularity\": 255,\n        \"type\": \"Artist\",\n        \"Name\": \"artist4\",\n        \"userId\": \"5eb0905a30a9a01f144b723b\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3eade66c65e34c18b74\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a55cec0c444e9c48982e\",\n                \"albumId\": \"5eb0a55cec0c444e9c48982d\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a55fec0c444e9c489830\",\n                \"trackId\": \"5eb0a55eec0c444e9c48982f\"\n            },\n            {\n                \"_id\": \"5eb1a672a5ebd959e08d5750\",\n                \"trackId\": \"5eb1a672a5ebd959e08d574f\"\n            },\n            {\n                \"_id\": \"5eb1adb2371bc537ec792bc8\",\n                \"trackId\": \"5eb1adb2371bc537ec792bc7\"\n            }\n        ],\n        \"__v\": 14,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4589b15d854c08f7366\",\n        \"info\": \"info about artist 5\",\n        \"popularity\": 26,\n        \"type\": \"Artist\",\n        \"Name\": \"artist5\",\n        \"userId\": \"5eb0901e30a9a01f144b7235\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3f4de66c65e34c18b7d\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a59eec0c444e9c489833\",\n                \"albumId\": \"5eb0a59eec0c444e9c489832\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a5a2ec0c444e9c489835\",\n                \"trackId\": \"5eb0a5a1ec0c444e9c489834\"\n            },\n            {\n                \"_id\": \"5eb1a6b1a5ebd959e08d5753\",\n                \"trackId\": \"5eb1a6b1a5ebd959e08d5752\"\n            },\n            {\n                \"_id\": \"5eb1adf3371bc537ec792bcb\",\n                \"trackId\": \"5eb1adf2371bc537ec792bca\"\n            }\n        ],\n        \"__v\": 14,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a45b9b15d854c08f7367\",\n        \"info\": \"info about artist 6\",\n        \"popularity\": 2,\n        \"type\": \"Artist\",\n        \"Name\": \"artist6\",\n        \"userId\": \"5eb0906430a9a01f144b723c\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b3fcde66c65e34c18b86\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a5e2ec0c444e9c489838\",\n                \"albumId\": \"5eb0a5e2ec0c444e9c489837\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a5e4ec0c444e9c48983a\",\n                \"trackId\": \"5eb0a5e3ec0c444e9c489839\"\n            },\n            {\n                \"_id\": \"5eb1a6f1a5ebd959e08d5756\",\n                \"trackId\": \"5eb1a6f1a5ebd959e08d5755\"\n            }\n        ],\n        \"__v\": 12,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a45f9b15d854c08f7368\",\n        \"info\": \"info about artist 7\",\n        \"popularity\": 449,\n        \"type\": \"Artist\",\n        \"Name\": \"artist7\",\n        \"userId\": \"5eb0902830a9a01f144b7236\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b405de66c65e34c18b8f\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a624ec0c444e9c48983d\",\n                \"albumId\": \"5eb0a623ec0c444e9c48983c\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a627ec0c444e9c48983f\",\n                \"trackId\": \"5eb0a626ec0c444e9c48983e\"\n            },\n            {\n                \"_id\": \"5eb1a730a5ebd959e08d5759\",\n                \"trackId\": \"5eb1a730a5ebd959e08d5758\"\n            },\n            {\n                \"_id\": \"5eb1ae73371bc537ec792bd1\",\n                \"trackId\": \"5eb1ae73371bc537ec792bd0\"\n            }\n        ],\n        \"__v\": 12,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4629b15d854c08f7369\",\n        \"info\": \"info about artist 8\",\n        \"popularity\": 536,\n        \"type\": \"Artist\",\n        \"Name\": \"artist8\",\n        \"userId\": \"5eb0915930a9a01f144b723e\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b410de66c65e34c18b9b\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a665ec0c444e9c489842\",\n                \"albumId\": \"5eb0a665ec0c444e9c489841\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a669ec0c444e9c489844\",\n                \"trackId\": \"5eb0a668ec0c444e9c489843\"\n            },\n            {\n                \"_id\": \"5eb1a770a5ebd959e08d575c\",\n                \"trackId\": \"5eb1a770a5ebd959e08d575b\"\n            },\n            {\n                \"_id\": \"5eb1aeb3371bc537ec792bd4\",\n                \"trackId\": \"5eb1aeb3371bc537ec792bd3\"\n            }\n        ],\n        \"__v\": 19,\n        \"followed\": [\n            {\n                \"_id\": \"5ec26502afb12b366cf04766\",\n                \"id\": \"5eb08fec30a9a01f144b7230\",\n                \"date\": \"2020-05-18T10:35:46.774Z\"\n            },\n            {\n                \"_id\": \"5ec47815a29ba424a86d3065\",\n                \"id\": \"5eb0901430a9a01f144b7234\",\n                \"date\": \"2020-05-20T00:21:41.837Z\"\n            },\n            {\n                \"_id\": \"5ed60c9535e1a5252a9c0561\",\n                \"id\": \"5ebff844ec00612568e2a7a6\",\n                \"date\": \"2020-06-02T08:23:49.490Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4659b15d854c08f736a\",\n        \"info\": \"info about artist 9\",\n        \"popularity\": 181,\n        \"type\": \"Artist\",\n        \"Name\": \"artist9\",\n        \"userId\": \"5eb08fce30a9a01f144b722d\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b418de66c65e34c18ba4\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a6a8ec0c444e9c489847\",\n                \"albumId\": \"5eb0a6a7ec0c444e9c489846\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a6acec0c444e9c489849\",\n                \"trackId\": \"5eb0a6aaec0c444e9c489848\"\n            },\n            {\n                \"_id\": \"5eb1a3d8a5ebd959e08d5732\",\n                \"trackId\": \"5eb1a3d8a5ebd959e08d5731\"\n            },\n            {\n                \"_id\": \"5eb1ab30371bc537ec792baa\",\n                \"trackId\": \"5eb1ab2f371bc537ec792ba9\"\n            },\n            {\n                \"_id\": \"5ec496275f713479a8312e4b\",\n                \"trackId\": \"5ec496265f713479a8312e4a\"\n            }\n        ],\n        \"__v\": 21,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4699b15d854c08f736b\",\n        \"info\": \"info about artist 10\",\n        \"popularity\": 42,\n        \"type\": \"Artist\",\n        \"Name\": \"artist10\",\n        \"userId\": \"5eb08fd830a9a01f144b722e\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b421de66c65e34c18bad\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a6e9ec0c444e9c48984c\",\n                \"albumId\": \"5eb0a6e8ec0c444e9c48984b\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a6edec0c444e9c48984e\",\n                \"trackId\": \"5eb0a6ebec0c444e9c48984d\"\n            },\n            {\n                \"_id\": \"5eb1a41aa5ebd959e08d5735\",\n                \"trackId\": \"5eb1a419a5ebd959e08d5734\"\n            },\n            {\n                \"_id\": \"5eb1ab6f371bc537ec792bad\",\n                \"trackId\": \"5eb1ab6f371bc537ec792bac\"\n            }\n        ],\n        \"__v\": 16,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a46c9b15d854c08f736c\",\n        \"info\": \"info about artist 11\",\n        \"popularity\": 202,\n        \"type\": \"Artist\",\n        \"Name\": \"artist11\",\n        \"userId\": \"5eb08ff630a9a01f144b7231\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b42ade66c65e34c18bb6\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a72aec0c444e9c489851\",\n                \"albumId\": \"5eb0a729ec0c444e9c489850\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a72dec0c444e9c489853\",\n                \"trackId\": \"5eb0a72dec0c444e9c489852\"\n            },\n            {\n                \"_id\": \"5eb1a4d9a5ebd959e08d573e\",\n                \"trackId\": \"5eb1a4d8a5ebd959e08d573d\"\n            },\n            {\n                \"_id\": \"5eb1ac31371bc537ec792bb6\",\n                \"trackId\": \"5eb1ac30371bc537ec792bb5\"\n            }\n        ],\n        \"__v\": 16,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a46f9b15d854c08f736d\",\n        \"info\": \"info about artist 12\",\n        \"popularity\": 96,\n        \"type\": \"Artist\",\n        \"Name\": \"artist12\",\n        \"userId\": \"5eb0900030a9a01f144b7232\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b435de66c65e34c18bc2\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a76dec0c444e9c489856\",\n                \"albumId\": \"5eb0a76cec0c444e9c489855\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a770ec0c444e9c489858\",\n                \"trackId\": \"5eb0a76fec0c444e9c489857\"\n            },\n            {\n                \"_id\": \"5eb1a575a5ebd959e08d5744\",\n                \"trackId\": \"5eb1a574a5ebd959e08d5743\"\n            },\n            {\n                \"_id\": \"5eb1acb0371bc537ec792bbc\",\n                \"trackId\": \"5eb1acb0371bc537ec792bbb\"\n            }\n        ],\n        \"__v\": 16,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4779b15d854c08f736f\",\n        \"info\": \"Amr Diab is a pop singer and songwriter from Egypt. He has won a record seven World Music Awards to date, and is considered the all-time best-selling musical artist from the Middle East. He is the creator of his own genre; he calls his meld of Arabic harmony and Western rhythms \\\"Mediterranean Music,\\\" and it has influenced many subsequent artists.  He was born on the October 11, 1961 in Portsaid, Egypt. He began singing at age three and at six, he performed the Egyptian national anthem at the July 23rd Festival in Portsaid. He was awarded a guitar by the governor for his performance and his career course was set.  He continued performing anywhere he could. He recorded his debut album, Ya Tareeq, in 1983, and moved to Cairo in 1984. He studied Arabic music at the Cairo Academy of Arts, where he received a Bachelor's degree. He signed to Delta Sound for 1984's Ghani Men Albak and remained there through 1994's Ya Omrina. He also experimented with film. Diab played himself in the 1989 movie El Afareet. In 1992, he began pioneering big-production, high-tech videos that have proved influential not only in the Middle East but in Europe. He also starred in 1993's Ays Krim fi Glym and played alongside Omar Shariff in the film Deahk We La'ab.  For Diab, film, while interesting, didn't hold his attention. His musical career netted him a series of albums that furthered his vision. As a predecessor and in Egypt, Diab was a bona fide star. He signed to Alam el Phan for 1995's multi-platinum-selling Nour el Ain, his international breakthrough. It charted not only in Egypt, but also in India, Pakistan, Iran, Afghanistan, Brazil, Argentina, Chile, South Africa, and as far west as France. Each of his succeeding recordings for the label charted. 1999's Ama Rain featured his duets with Cheb Khaled and Angela Dimitriou. Diab issued three more albums with Alam el Phan, 2000's Tamally Maak, the following year's Aktar Wahed, and 2003's Allem Alby, before he left for the Rotana label. 2004's Lealy Nahary proved one of his biggest hits and netted three Top Five singles. He followed it the next year with Kammel Kalamak, scoring another chart hit, as did 2007's El Lilady -- the latter earned him a World Music Award. Wayah, his 2009 set, was another best-seller and precipitated a concert at Golf Porto Marina to a crowd of over 80,000. In 2011, during the Egyptian revolution that caused President Hosni Mubarak to resign and go into exile, Diab released the song \\\"Masr A'let\\\" (Egypt Said),\\\" a tribute to those martyred during the Arab Spring. Banadeek Ta'ala followed, and El Leila was issued the following year; Diab topped the charts again. In 2014, Shoft el Ayam was released and entered at number one in several Middle Eastern countries. 2016's Ahla Wa Ahla was a subsequent number one. ~ Thom Jurek, Rovi\",\n        \"popularity\": 261,\n        \"type\": \"Artist\",\n        \"Name\": \"Nerdeen\",\n        \"userId\": \"5eb0901430a9a01f144b7234\",\n        \"images\": [\n            {\n                \"_id\": \"5ed727c135e1a5252a9c085a\",\n                \"height\": 284,\n                \"width\": 498\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a7efec0c444e9c489860\",\n                \"albumId\": \"5eb0a7efec0c444e9c48985f\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a7f3ec0c444e9c489862\",\n                \"trackId\": \"5eb0a7f1ec0c444e9c489861\"\n            },\n            {\n                \"_id\": \"5eb1a7b0a5ebd959e08d575f\",\n                \"trackId\": \"5eb1a7afa5ebd959e08d575e\"\n            },\n            {\n                \"_id\": \"5eb1aef7371bc537ec792bd7\",\n                \"trackId\": \"5eb1aef6371bc537ec792bd6\"\n            },\n            {\n                \"_id\": \"5ec2ce2cafb12b366cf04782\",\n                \"trackId\": \"5ec2ce2cafb12b366cf04781\"\n            }\n        ],\n        \"__v\": 26,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a47a9b15d854c08f7370\",\n        \"info\": \"info about artist 15\",\n        \"popularity\": 0,\n        \"type\": \"Artist\",\n        \"Name\": \"artist15\",\n        \"userId\": \"5eb08fec30a9a01f144b7230\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b44fde66c65e34c18bdd\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a832ec0c444e9c489865\",\n                \"albumId\": \"5eb0a831ec0c444e9c489864\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a834ec0c444e9c489867\",\n                \"trackId\": \"5eb0a834ec0c444e9c489866\"\n            },\n            {\n                \"_id\": \"5eb1a49aa5ebd959e08d573b\",\n                \"trackId\": \"5eb1a499a5ebd959e08d573a\"\n            },\n            {\n                \"_id\": \"5eb1abf2371bc537ec792bb3\",\n                \"trackId\": \"5eb1abf2371bc537ec792bb2\"\n            }\n        ],\n        \"__v\": 15,\n        \"followed\": []\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a47d9b15d854c08f7371\",\n        \"info\": \"info about artist 16\",\n        \"popularity\": 1162,\n        \"type\": \"Artist\",\n        \"Name\": \"artist16\",\n        \"userId\": \"5eb0903230a9a01f144b7237\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b458de66c65e34c18be6\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a874ec0c444e9c48986a\",\n                \"albumId\": \"5eb0a872ec0c444e9c489869\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb0a878ec0c444e9c48986c\",\n                \"trackId\": \"5eb0a877ec0c444e9c48986b\"\n            },\n            {\n                \"_id\": \"5eb1a530a5ebd959e08d5741\",\n                \"trackId\": \"5eb1a52fa5ebd959e08d5740\"\n            },\n            {\n                \"_id\": \"5eb1ac72371bc537ec792bb9\",\n                \"trackId\": \"5eb1ac71371bc537ec792bb8\"\n            }\n        ],\n        \"__v\": 47,\n        \"followed\": [\n            {\n                \"_id\": \"5ec1af13afb12b366cf04697\",\n                \"id\": \"5ec1a1f0d69f9b31b0a4973b\",\n                \"date\": \"2020-05-17T21:39:31.827Z\"\n            },\n            {\n                \"_id\": \"5ec6bf456b940c56933c2318\",\n                \"id\": \"5ec6bde16b940c56933c22e4\",\n                \"date\": \"2020-05-21T17:49:57.376Z\"\n            },\n            {\n                \"_id\": \"5ecb9a90f4f6c8000698828b\",\n                \"id\": \"5ec7fc217fea250006d9ee08\",\n                \"date\": \"2020-05-25T10:14:40.422Z\"\n            }\n        ]\n    },\n    {\n        \"genre\": [\n            \"genre1\",\n            \"genre2\",\n            \"genre3\"\n        ],\n        \"_id\": \"5eb0a4809b15d854c08f7372\",\n        \"info\": \"info about artist 17\",\n        \"popularity\": 0,\n        \"type\": \"Artist\",\n        \"Name\": \"artist17\",\n        \"userId\": \"5eb0900a30a9a01f144b7233\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b460de66c65e34c18bef\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"addAlbums\": [\n            {\n                \"_id\": \"5eb0a8b6ec0c444e9c48986f\",\n                \"albumId\": \"5eb0a8b4ec0c444e9c48986e\"\n            }\n        ],\n        \"addTracks\": [\n            {\n                \"_id\": \"5eb1a7efa5ebd959e08d5762\",\n                \"trackId\": \"5eb1a7efa5ebd959e08d5761\"\n            },\n            {\n                \"_id\": \"5eb1af37371bc537ec792bda\",\n                \"trackId\": \"5eb1af36371bc537ec792bd9\"\n            }\n        ],\n        \"__v\": 13,\n        \"followed\": [\n            {\n                \"_id\": \"5ecb030c6b940c56933c23a1\",\n                \"id\": \"5ebff844ec00612568e2a7a6\",\n                \"date\": \"2020-05-24T23:28:12.002Z\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists/:artist_id/top-tracks",
    "title": "Get an Artist's Top Tracks",
    "name": "Get_an_Artist's_Top_Tracks",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information about an artist’s top tracks by country.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "artist_id",
            "description": "<p>Spotify ID for Albums</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "country",
            "description": "<p>Required. An ISO 3166-1 alpha-2 country code or the string from_token.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of up to 10 track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/top-tracks?country=eg' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"_id\": \"5eb1acf0371bc537ec792bbe\",\n        \"url\": \"undefined\",\n        \"images\": [],\n        \"duration\": 75,\n        \"availableMarkets\": [\n            \"eg\",\n            \"sa\"\n        ],\n        \"trackNumber\": 12,\n        \"name\": \"mariam\",\n        \"artistId\": \"5eb0a44b9b15d854c08f7362\",\n        \"albumId\": \"5eb0a498ec0c444e9c48981e\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 44,\n        \"danceability\": 6,\n        \"energy\": 21,\n        \"instrumentalness\": 94,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 22,\n        \"loudness\": 12,\n        \"mode\": 20,\n        \"speechiness\": 49,\n        \"tempo\": 78,\n        \"timeSignature\": \"2020-05-05T18:14:08.690Z\",\n        \"valence\": 58,\n        \"like\": 1,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"genre\": [\n            \"genre1\"\n        ],\n        \"playable\": true\n    },\n    {\n        \"_id\": \"5eb1a5b3a5ebd959e08d5746\",\n        \"url\": \"undefined\",\n        \"images\": [],\n        \"duration\": 125,\n        \"availableMarkets\": [\n            \"eg\",\n            \"sa\"\n        ],\n        \"trackNumber\": 12,\n        \"name\": \"Alsajda\",\n        \"artistId\": \"5eb0a44b9b15d854c08f7362\",\n        \"albumId\": \"5eb0a498ec0c444e9c48981e\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 25,\n        \"danceability\": 21,\n        \"energy\": 96,\n        \"instrumentalness\": 88,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 95,\n        \"loudness\": 29,\n        \"mode\": 42,\n        \"speechiness\": 99,\n        \"tempo\": 95,\n        \"timeSignature\": \"2020-05-05T17:43:15.684Z\",\n        \"valence\": 26,\n        \"like\": 1,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"genre\": [\n            \"genre3\"\n        ],\n        \"playable\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/Artists/{artist_id}/tracks",
    "title": "Get an Artist's Tracks",
    "name": "Get_an_Artist's_Tracks",
    "group": "Artist",
    "description": "<p style=\"color:red;\">Get Spotify catalog information about an artist’s top tracks by country.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "artist_id",
            "description": "<p>Spotify ID for Albums</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of track objects in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "\ncurl --location --request GET 'http://localhost:3000/api/Artists/5e8cb7037f37604d583f8d22/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"_id\": \"5eb0a7b1ec0c444e9c48985c\",\n        \"url\": \"undefined\",\n        \"images\": [\n            {\n                \"_id\": \"5eb0b443de66c65e34c18bd1\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"duration\": 60,\n        \"availableMarkets\": [\n            \"eg\",\n            \"sa\"\n        ],\n        \"trackNumber\": 12,\n        \"name\": \"track26\",\n        \"artistId\": \"5eb0a4749b15d854c08f736e\",\n        \"albumId\": \"5eb0a7adec0c444e9c48985a\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 60,\n        \"danceability\": 30,\n        \"energy\": 56,\n        \"instrumentalness\": 53,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 28,\n        \"loudness\": 45,\n        \"mode\": 31,\n        \"speechiness\": 45,\n        \"tempo\": 40,\n        \"timeSignature\": \"2020-05-04T23:39:29.246Z\",\n        \"valence\": 57,\n        \"like\": 0,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"genre\": [\n            \"genre1\"\n        ],\n        \"playable\": true\n    },\n    {\n        \"_id\": \"5eb1a459a5ebd959e08d5737\",\n        \"url\": \"undefined\",\n        \"images\": [],\n        \"duration\": 125,\n        \"availableMarkets\": [\n            \"eg\",\n            \"sa\"\n        ],\n        \"trackNumber\": 12,\n        \"name\": \"Alsajda\",\n        \"artistId\": \"5eb0a4749b15d854c08f736e\",\n        \"albumId\": \"5eb0a7adec0c444e9c48985a\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 21,\n        \"danceability\": 42,\n        \"energy\": 80,\n        \"instrumentalness\": 45,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 60,\n        \"loudness\": 80,\n        \"mode\": 76,\n        \"speechiness\": 67,\n        \"tempo\": 81,\n        \"timeSignature\": \"2020-05-05T17:37:29.445Z\",\n        \"valence\": 5,\n        \"like\": 3,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"genre\": [\n            \"genre2\"\n        ],\n        \"playable\": true\n    },\n    {\n        \"_id\": \"5eb1abb1371bc537ec792baf\",\n        \"url\": \"undefined\",\n        \"images\": [],\n        \"duration\": 75,\n        \"availableMarkets\": [\n            \"eg\",\n            \"sa\"\n        ],\n        \"trackNumber\": 12,\n        \"name\": \"mariam\",\n        \"artistId\": \"5eb0a4749b15d854c08f736e\",\n        \"albumId\": \"5eb0a7adec0c444e9c48985a\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 8,\n        \"danceability\": 13,\n        \"energy\": 47,\n        \"instrumentalness\": 13,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 63,\n        \"loudness\": 39,\n        \"mode\": 23,\n        \"speechiness\": 18,\n        \"tempo\": 23,\n        \"timeSignature\": \"2020-05-05T18:08:49.130Z\",\n        \"valence\": 61,\n        \"like\": 1,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"genre\": [\n            \"genre3\"\n        ],\n        \"playable\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "api/recommendations",
    "title": "Get Recommendations Based on Seeds  (not implemented yet)",
    "name": "Get_Recommendations_Based_on_Seeds",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Create a playlist-style listening experience based on seed artists, tracks and genres.</p> </br> <p>Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks.</br></br> If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.</br></br> For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks. </p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "field": "limit",
            "description": "<p>Optional. The target size of the list of recommended tracks.</br> For seeds with unusually small pools or when highly restrictive filtering is applied,</br> it may be impossible to generate the requested number </br>of recommended tracks. Debugging information for </br>such cases is available in the response.</br> Default: 20. Minimum: 1. Maximum: 100.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "market",
            "description": "<p>Optional. An ISO 3166-1 alpha-2 country code or the string from_token.</br> Provide this parameter if you want to apply Track Relinking.</br> Because min, max and target are applied to pools before relinking,</br> the generated results may not precisely match the filters applied. Original,</br> non-relinked tracks are available via the linked_from attribute of the relinked track response.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "max",
            "description": "<p>Optional. Multiple values. For each tunable track attribute,</br> a hard ceiling on the selected track attribute’s value can be provided.</br> See tunable track attributes below for the list of available options.</br> For example, max_instrumentalness=0.35 would filter out most tracks that are likely</br> to be instrumental.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "min",
            "description": "<p>Optional. Multiple values. For each tunable track attribute,</br> a hard floor on the selected track attribute’s value can be provided.</br> See tunable track attributes below for the list of available options.</br> For example, min_tempo=140 would restrict results</br> to only those tracks with a tempo of greater than 140 beats per minute.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "seed_artists",
            "description": "<p>A comma separated list of Spotify IDs for seed artists.</br> Up to 5 seed values may be provided in any combination of seed_artists, </br>seed_tracks and seed_genres.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "seed_genres",
            "description": "<p>A comma separated list of any genres in the set of available genre seeds.</br> Up to 5 seed values may be</br> provided in any combination of seed_artists, seed_tracks and seed_genres.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "seed_tracks",
            "description": "<p>A comma separated list of Spotify IDs for a seed track.</br> Up to 5 seed values may be provided in</br> any combination of seed_artists, seed_tracks and seed_genres.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "target",
            "description": "<p>Optional. Multiple values. For each of the tunable track attributes (below)</br> a target value may be provided.</br> Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a recommendations response object in JSON format.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/categories/:category_id",
    "title": "Get a Category",
    "name": "Get_a_Category",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "category_id",
            "description": "<p>The Spotify category ID for the category.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a category object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/categories/5e8ce900e192f95244e5ca05' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"category\": {\n        \"playlist\": [],\n        \"_id\": \"5e8ce900e192f95244e5ca05\",\n        \"name\": \"classic\",\n        \"images\": [],\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/categories/:category_id/playlists",
    "title": "Get a Category's Playlists",
    "name": "Get_a_Category's_Playlists",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a list of Spotify playlists tagged with a particular category.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "category_id",
            "description": "<p>The Spotify category ID for the category.</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "country",
            "description": "<p>Optional. A country: an ISO 3166-1 alpha-2 country code.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional. The maximum number of items to return.</br> Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first item to return.</br> Default: 0 (the first object).</br> Use with limit to get the next set of items.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an array of simplified playlist objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/categories/5ec36eeaedbc6b20ecdbd823/playlists' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"playlists\": [\n        {\n            \"_id\": \"5eb5258b680ef51b4c449321\",\n            \"name\": \"my favorite\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb52590680ef51b4c449325\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0903230a9a01f144b7237\",\n            \"ownerName\": \"Omar\"\n        },\n        {\n            \"_id\": \"5eb5259d680ef51b4c449329\",\n            \"name\": \"Ayat el quran\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb525a2680ef51b4c44932d\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0903c30a9a01f144b7238\",\n            \"ownerName\": \"Kareem\"\n        },\n        {\n            \"_id\": \"5eb525aa680ef51b4c449331\",\n            \"name\": \"Soura\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb525af680ef51b4c449335\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0903c30a9a01f144b7238\",\n            \"ownerName\": \"Kareem\"\n        },\n        {\n            \"_id\": \"5eb525bc680ef51b4c449339\",\n            \"name\": \"Playlist4\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb525c1680ef51b4c44933d\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0904630a9a01f144b7239\",\n            \"ownerName\": \"Mohmed\"\n        },\n        {\n            \"_id\": \"5eb525ce680ef51b4c449341\",\n            \"name\": \" playlist5\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb525d3680ef51b4c449345\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0905030a9a01f144b723a\",\n            \"ownerName\": \"Tarek\"\n        },\n        {\n            \"_id\": \"5eb525e0680ef51b4c449349\",\n            \"name\": \"Which need\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb525e5680ef51b4c44934d\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"ownerId\": \"5eb0905a30a9a01f144b723b\",\n            \"ownerName\": \"Abdel Rahman\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/categories",
    "title": "Get a List of Categories",
    "name": "Get_a_List_of_Categories",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/categories' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n [\n{\n  \"playlist\": [],\n   \"_id\": \"5e7c102709c7361328f32fad\",\n   \"name\": \"category1\",\n       \"images\": [],\n       \"__v\": 0\n},\n{\n \"playlist\": [],\n  \"_id\": \"5e7c1042179e9216f4dab449\",\n   \"name\": \"category1\",\n   \"images\": [],\n    \"__v\": 0\n },\n {\n     \"playlist\": [],\n      \"_id\": \"5e7c108d78089d06e4d403db\",\n      \"name\": \"category1\",\n      \"images\": [],\n      \"__v\": 0\n   },\n   {\n       \"playlist\": [\n        \"5e756a10c8bb822d60284aef\",\n        \"5e763294478b3a1fa4b09344\"\n    ],\n    \"_id\": \"5e7c10a6b66f9415acd336b8\",\n    \"name\": \"category1\",\n     \"images\": [],\n      \"__v\": 1\n  }\n]\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an object with a categories field, with an array of category objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/featured-playlists",
    "title": "Get a List of Featured Playlists       (not implemented yet)",
    "name": "Get_a_List_of_Featured_Playlists",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "field": "country",
            "description": "<p>Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter </br> if you want to narrow the list of returned categories to those relevant to a particular country.</br> If omitted, the returned items will be globally relevant.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "locale",
            "description": "<p>Optional. The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code</br> , joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. </br> Provide this parameter if you want the category metadata returned in a particular language.</br>  Note that, if locale is not supplied, or if the specified language is not available,</br>  all strings will be returned in the Spotify default language (American English). The locale parameter,</br>  combined with the country parameter, may give odd results if not carefully matched.</br> For example country=SE&amp;locale=de_DE will return a list of categories relevant to Sweden but as German language strings.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional. The maximum number of categories to return.</br> Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first item to return.</br> Default: 0 (the first object). Use with limit to get the next set of categories.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, </br>the HTTP status code in the response header is 200 OK</br> and the response body contains a message and a playlists object.</br> The playlists object contains an array of simplified playlist objects</br> (wrapped in a paging object) in JSON format. On error,</br> the header status code is an error code and the response body contains an error object.</br></br></br></br> Once you have retrieved the list of playlist objects,</br> you can use Get a Playlist and Get a Playlist’s Tracks to drill down further.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/new-releases",
    "title": "Get a List of New Releases",
    "name": "Get_a_List_of_New_Releases",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/new-releases/' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n  \"albums\": [\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [\n              \"us,yu,ywgd\"\n          ],\n          \"images\": [],\n          \"id\": \"5e7f44905cce7d09a82e5a75\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [\n              \"us,yu,ywgd\"\n          ],\n          \"images\": [],\n          \"id\": \"5e7f4bf85cce7d09a82e5a77\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4c925cce7d09a82e5a79\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4c985cce7d09a82e5a7b\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e833a51a51d971174923f17\",\n              \"name\": \"ahmedsamir\"\n          },\n          \"available_markets\": [\n              \"us,er,rttr,fretgre,jhj\"\n          ],\n          \"images\": [],\n          \"id\": \"5e833b412b9d7718a491c850\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4ca05cce7d09a82e5a7d\",\n          \"type\": \"album\"\n      }\n  ]\n\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/popular-albums",
    "title": "Get a List of popular albums",
    "name": "Get_a_List_of_popular_albums",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a List of popular albums featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/popular-albums' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n  \"albums\": [\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [\n              \"us,yu,ywgd\"\n          ],\n          \"images\": [],\n          \"id\": \"5e7f44905cce7d09a82e5a75\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [\n              \"us,yu,ywgd\"\n          ],\n          \"images\": [],\n          \"id\": \"5e7f4bf85cce7d09a82e5a77\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4c925cce7d09a82e5a79\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4c985cce7d09a82e5a7b\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e7ef28326e2fa0da04f81ae\",\n              \"name\": \"artist1\"\n          },\n          \"available_markets\": [],\n          \"images\": [],\n          \"id\": \"5e7f4ca05cce7d09a82e5a7d\",\n          \"type\": \"album\"\n      },\n      {\n          \"album_type\": \"type1\",\n          \"artist\": {\n              \"type\": \"artist\",\n              \"id\": \"5e833a51a51d971174923f17\",\n              \"name\": \"ahmedsamir\"\n          },\n          \"available_markets\": [\n              \"us,er,rttr,fretgre,jhj\"\n          ],\n          \"images\": [],\n          \"id\": \"5e833b412b9d7718a491c850\",\n          \"name\": \"album1\",\n          \"type\": \"album\"\n      }\n  ]\n\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/popular-artists",
    "title": "Get a List of popular artists",
    "name": "Get_a_List_of_popular_artists",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a List of popular artists  featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/popular-artists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"artists\": [\n       {\n           \"genre\": [\n               \"genre2\",\n               \"genre1\"\n           ],\n           \"type\": \"artist\",\n           \"name\": \"artist1\",\n           \"images\": [],\n           \"id\": \"5e7ef28326e2fa0da04f81ae\",\n           \"info\": \"i am a good artist \"\n       },\n       {\n           \"genre\": [\n               \"genre1\",\n               \"genre2\",\n               \"genre3\",\n               \"genre4\"\n           ],\n           \"type\": \"artist\",\n           \"name\": \"ahmedsamir\",\n           \"images\": [],\n           \"id\": \"5e833a51a51d971174923f17\"\n       },\n       {\n           \"genre\": [\n               \"rytyt\",\n               \"genre2\",\n               \"genre1\"\n           ],\n           \"type\": \"artist\",\n           \"name\": \"yytguguy\",\n           \"images\": [],\n           \"id\": \"5e7f67e438150c15e8589ece\",\n           \"info\": \"jdshgdjdhfjkd\"\n       }\n   ]\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a message and artists object. On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/popular-playlists",
    "title": "Get a List of popular playlists",
    "name": "Get_a_List_of_popular_playlists",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a List of popular playlists  featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/popular-playlists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"playlists\": [\n       {\n           \"owner\": {\n               \"id\": \"5e75c68387bceb10ac3d3394\",\n               \"type\": \"user\",\n               \"name\": \"ahmedsamir\"\n           },\n           \"collaborative\": false,\n           \"type\": \"playlist\",\n           \"name\": \"playlist1\",\n           \"images\": [],\n           \"id\": \"5e7d894d7832511978ec6b30\",\n           \"Description\": \"\",\n           \"isPublic\": true\n       },\n       {\n           \"owner\": {\n               \"id\": \"5e7d9045854b0419f4f409b7\",\n               \"type\": \"user\"\n           },\n           \"collaborative\": false,\n           \"type\": \"playlist\",\n           \"name\": \"ssad\",\n           \"images\": [],\n           \"id\": \"5e7d9066854b0419f4f409b9\",\n           \"Description\": \"\",\n           \"isPublic\": true\n       },\n       {\n           \"owner\": {\n               \"id\": \"5e85f48b1ba5cf17ccca66e9\",\n               \"type\": \"user\",\n               \"name\": \"ahmedsamir\"\n           },\n           \"collaborative\": false,\n           \"type\": \"playlist\",\n           \"name\": \"playlist1\",\n           \"images\": [],\n           \"id\": \"5e85f4ca1ba5cf17ccca66eb\",\n           \"Description\": \"\",\n           \"isPublic\": true\n       },\n       {\n           \"owner\": {\n               \"id\": \"5e7d9045854b0419f4f409b7\",\n               \"type\": \"user\"\n           },\n           \"collaborative\": false,\n           \"type\": \"playlist\",\n           \"name\": \"dhjgjdjdjg\",\n           \"images\": [],\n           \"id\": \"5e7d93dad82adf07f4121bac\",\n           \"Description\": \"\",\n           \"isPublic\": true\n       }\n   ]\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a message and artists object. On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/recently-playing",
    "title": "Get a List of recently playing Playlists,artists,albums",
    "name": "Get_a_List_of_recently-playing",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a List of recently playing Playlists,artists,albums in Spotify (on, for example, the Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "content": "curl --location --request GET 'http://localhost:3000/api/browse/recently-playing' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"recentlyArtist\": [\n        {\n            \"genre\": [\n                \"pop\",\n                \"jazz\"\n            ],\n            \"type\": \"artist\",\n            \"name\": \"nada\",\n            \"images\": [],\n            \"id\": \"5e8cb7037f37604d583f8d22\",\n            \"info\": \"ohayo nada\",\n            \"index\": 1\n        }\n    ],\n    \"recentlyPlaylist\": [\n        {\n            \"owner\": {\n                \"id\": \"5e8cb118084a9d2e6c8f21d7\",\n                \"type\": \"user\",\n                \"name\": \"nada\"\n            },\n            \"collaborative\": false,\n            \"type\": \"playlist\",\n            \"name\": \"SPACETOON\",\n            \"images\": [],\n            \"id\": \"5e8cbe527f37604d583f8d5c\",\n            \"Description\": \"\",\n            \"isPublic\": true,\n            \"index\": 2\n        },\n        {\n            \"owner\": {\n                \"id\": \"5e8cb202084a9d2e6c8f21e9\",\n                \"type\": \"user\",\n                \"name\": \"menna\"\n            },\n            \"collaborative\": false,\n            \"type\": \"playlist\",\n            \"name\": \"KILL ME\",\n            \"images\": [],\n            \"id\": \"5e8cbfa97f37604d583f8d6a\",\n            \"Description\": \"\",\n            \"isPublic\": true,\n            \"index\": 3\n        }\n    ],\n    \"recentlyAlbum\": [\n        {\n            \"id\": \"5e8cb9327f37604d583f8d25\",\n            \"name\": \"HELLO KIDS\",\n            \"type\": \"album\",\n            \"album_type\": \"Album\",\n            \"images\": [],\n            \"availableMarkets\": [\n                \"EG,US\"\n            ],\n            \"artist\": {\n                \"type\": \"artist\",\n                \"id\": \"5e8cb7037f37604d583f8d22\",\n                \"name\": \"nada\"\n            },\n            \"index\": 0\n        }\n    ]\n}",
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
            "description": "<p>On success, </br>the HTTP status code in the response header is 200 OK</br> and the response body contains a message and a playlists and albums and artists object.</br> The playlists object contains an array of simplified playlist objects</br> (wrapped in a paging object) in JSON format. On error,</br> the header status code is an error code and the response body contains an error object.</br></br></br></br> Once you have retrieved the list of playlist objects,</br> you can use Get a Playlist and Get a Playlist’s Tracks to drill down further.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/browse/genre",
    "title": "Get genres playlists",
    "name": "Get_genres_playlists",
    "group": "Browse",
    "description": "<p style=\"color:red;\">Get a list ofGet genres playlists (shown, for example, on a Spotify player’s “Browse” tab).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "examples": [
      {
        "title": "Example usage:",
        "content": " curl --location --request GET 'http://localhost:3000/api/browse/genre' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3NjgyNTU2LCJleHAiOjQ3MzQxNjg5NTZ9.fKWnF2BQIh_LHYqsS9HU0jfUBdBsVcD74gnnqqQehN0' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n[\n    {\n        \"genre\": \"quran\",\n        \"playlists\": [\n            {\n                \"playlist\": {\n                    \"_id\": \"5e9e4754f09b30378ce0f769\",\n                    \"type\": \"playlist\",\n                    \"Description\": \"\",\n                    \"collaborative\": false,\n                    \"name\": \"quran\",\n                    \"isPublic\": true,\n                    \"ownerId\": \"5e9dd1535a2ce73fe4a73b12\",\n                    \"images\": [],\n                    \"snapshot\": [\n                        {\n                            \"hasTracks\": [\n                                \"5e9b5e2de9c8d87fdc2eca81\"\n                            ],\n                            \"_id\": \"5e9e4756f09b30378ce0f76d\",\n                            \"action\": \"Add Tracks\"\n                        },\n                        {\n                            \"hasTracks\": [\n                                \"5e9b5e2de9c8d87fdc2eca81\"\n                            ],\n                            \"_id\": \"5e9e515bf09b30378ce0f76e\",\n                            \"action\": \"Add Tracks\"\n                        }\n                    ],\n                    \"__v\": 2\n                },\n                \"owner\": {\n                    \"id\": \"5e9dd1535a2ce73fe4a73b12\"\n                }\n            },\n            {\n                \"playlist\": {\n                    \"_id\": \"5e9e5295f09b30378ce0f76f\",\n                    \"type\": \"playlist\",\n                    \"Description\": \"\",\n                    \"collaborative\": false,\n                    \"name\": \"quran1\",\n                    \"isPublic\": true,\n                    \"ownerId\": \"5e9dd1535a2ce73fe4a73b12\",\n                    \"images\": [],\n                    \"snapshot\": [\n                        {\n                            \"hasTracks\": [\n                                \"5e9b5e2de9c8d87fdc2eca81\"\n                            ],\n                            \"_id\": \"5e9e5296f09b30378ce0f773\",\n                            \"action\": \"Add Tracks\"\n                        }\n                    ],\n                    \"__v\": 1\n                },\n                \"owner\": {\n                    \"id\": \"5e9dd1535a2ce73fe4a73b12\"\n                }\n            },\n            {\n                \"playlist\": {\n                    \"_id\": \"5ea0b53d0e077a374488cb3d\",\n                    \"type\": \"playlist\",\n                    \"Description\": \"\",\n                    \"collaborative\": false,\n                    \"name\": \"quran3\",\n                    \"isPublic\": true,\n                    \"ownerId\": \"5e9dd1535a2ce73fe4a73b12\",\n                    \"images\": [],\n                    \"snapshot\": [\n                        {\n                            \"hasTracks\": [\n                                \"5e9b62c3e9c8d87fdc2ecb58\"\n                            ],\n                            \"_id\": \"5ea0b53f0e077a374488cb41\",\n                            \"action\": \"Add Tracks\"\n                        }\n                    ],\n                    \"__v\": 1\n                },\n                \"owner\": {\n                    \"id\": \"5e9dd1535a2ce73fe4a73b12\"\n                }\n            }\n        ]\n    },\n    \"genre\": \"Hafs\",\n        \"playlists\": [\n            {\n                \"playlist\": {\n                    \"_id\": \"5e9e4754f09b30378ce0f769\",\n                    \"type\": \"playlist\",\n                    \"Description\": \"\",\n                    \"collaborative\": false,\n                    \"name\": \"quran\",\n                    \"isPublic\": true,\n                    \"ownerId\": \"5e9dd1535a2ce73fe4a73b12\",\n                    \"images\": [],\n                    \"snapshot\": [\n                        {\n                            \"hasTracks\": [\n                                \"5e9b5e2de9c8d87fdc2eca81\"\n                            ],\n                            \"_id\": \"5e9e4756f09b30378ce0f76d\",\n                            \"action\": \"Add Tracks\"\n                        },\n                        {\n                            \"hasTracks\": [\n                                \"5e9b5e2de9c8d87fdc2eca81\"\n                            ],\n                            \"_id\": \"5e9e515bf09b30378ce0f76e\",\n                            \"action\": \"Add Tracks\"\n                        }\n                    ],\n                    \"__v\": 2\n                },\n                \"owner\": {\n                    \"id\": \"5e9dd1535a2ce73fe4a73b12\"\n                }\n            }\n]\n}",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a message and analbums object.</br> The albums object contains an array of simplified album objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br></br></br> Once you have retrieved the list, you can use Get an Album’s Tracks to drill down further.</br></br> The results are returned in an order reflected within the Spotify clients, and therefore may not be ordered by date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Browse"
  },
  {
    "type": "get",
    "url": "api/me/following/contains/{id}",
    "title": "Check if Current User Follows Artist",
    "name": "Check_if_Current_User_Follows_Artists_or_Users",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Check to see if the current user is following one artist .</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service</br>The access token must have been issued on behalf of the current user.</br> Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "optional": false,
            "field": "id",
            "description": "<p>Required.the user Spotify ID to check.</br> For example: id=74ASZWbe4lXaubB36ztrGX A maximum of 1 can be sent in one request.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> contains a JSON array of true or false value.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/following/contains/5eb0a4749b15d854c08f736e' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"follow\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "api/playlists/{playlist_id}/followers/contains",
    "title": "Check if Users Follow a Playlist (Not implemented yet)",
    "name": "Check_if_Users_Follow_a_Playlist",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Check to see if one or more Spotify users are following a specified playlist.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. Required. A valid access token from the Spotify Accounts service. Following a playlist can be done publicly or privately.</br> Checking if a user publicly follows a playlist doesn’t require any scopes;</br> if the user is publicly following the playlist, this endpoint returns true. Checking if the user is privately following a playlist is only possible for the current user</br> when that user has granted access to the playlist-read-private scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The Spotify ID of the playlist.</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "ids",
            "description": "<p>Required. A comma-separated list of Spotify User IDs ;</br> the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response </br>body contains a JSON array oftrue or false values, in the same order in which the ids were specified.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "put",
    "url": "api/me/following",
    "title": "Follow Artist",
    "name": "Follow_Artist",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Add the current user as a follower of one or more artists or other Spotify users.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Required if IDs are passed in the request body,</br> otherwise ignored. The content type of the request body: application/json.</p>"
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
            "field": "id",
            "description": "<p>Required.  the artist ID.</br> For example: id=74ASZWbe4lXaubB36ztrGX. A maximum of 1 ID can be sent in one request.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/following' \\\n--header 'Content-Type: application/json' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--data-raw '{\n\t\"id\":\"5eb0a4749b15d854c08f736e\"\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}/followers",
    "title": "Follow a Playlist",
    "name": "Follow_a_Playlist",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Add the current user as a follower of a playlist.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details.</br> The access token must have been issued on behalf of the current user.</br>Following a playlist publicly requires authorization of the playlist-modify-public scope; following it privately requires the playlist-modify-private scope.</p>"
          },
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
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The Spotify ID of the playlist. Any playlist can be followed,</br> regardless of its public/private status, as long as you know its playlist ID.</p>"
          }
        ],
        "BodyParameters": [
          {
            "group": "BodyParameters",
            "optional": false,
            "field": "isPrivate",
            "description": "<p>Optional. (Boolean) Defaults to false. If false the playlist will be included in user’s public playlists,</br> if true it will remain private. To be able to follow playlists privately,</br> the user must have granted the playlist-modify-private scope.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is {success:&quot; followed this playlist successfully&quot;}.</br> On error, the header status code is an error code 400 and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/followers' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "api/me/followingArtist",
    "title": "Get User's Followed Artists",
    "name": "Get_User's_Followed_Artists",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Get the current user’s followed artists.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user. </br>Getting details of the artists or users the current user follows requires authorization of the user-follow-read scope.</p>"
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an artists object. The artists object in turn contains a cursor-based paging object of Artists.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/followingArtist' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \n    \"Artists\": [\n        {\n            \"_id\": \"5eb0a44b9b15d854c08f7362\",\n            \"Name\": \"artist1\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb0b3cede66c65e34c18b56\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"type\": \"Artist\"\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "delete",
    "url": "api/me/following",
    "title": "Unfollow Artist",
    "name": "Unfollow_Artist",
    "group": "Follow",
    "description": "<p style=\"color:red;\">Remove the current user as a follower of one or more artists or other Spotify users.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Required if IDs are passed in the request body, otherwise ignored.</br> The content type of the request body: application/json.</p>"
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
            "field": "id",
            "description": "<p>Optional. A JSON of the artist ID. For example: {id:&quot;74ASZWbe4lXaubB36ztrGX&quot;}.</br> A maximum of 1 ID can be sent in one request.</br> Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.</p> <p>curl --location --request GET 'http://localhost:3000api/me/following ' <br> --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' <br> --header 'Content-Type: application/json' <br> --data-raw '{ &quot;id&quot;:&quot;5eb0a4749b15d854c08f736e&quot; }'</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "PUT",
    "url": "/api/me/follow/user/{user_id}",
    "title": "follow user with user_id",
    "name": "follow_user",
    "group": "Follow",
    "description": "<p style=\"color:red;\">make user follow another.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "path Param": [
          {
            "group": "path Param",
            "optional": false,
            "field": "user_id",
            "description": "<p>Required. user id that the user will follow</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/follow/user/5eb08fce30a9a01f144b722d' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "followed user successfully",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/api/me/followers/user",
    "title": "get user followers",
    "name": "get_user_followers",
    "group": "Follow",
    "description": "<p style=\"color:red;\">follow other  user</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of users in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/followers/user' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOGZjZTMwYTlhMDFmMTQ0YjcyMmQiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4NzkzLCJleHAiOjMxNDY0ODg4NzgwMjY4MDQwMDB9.gaUBESzDLwhm7uPg9pvv03aH4gsS4RlT3TyPAj7mtoA'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"gender\": \"male\",\n        \"email\": \"bahaaeldeen1999@gmail.com\",\n        \"displayName\": \"Bahaa\",\n        \"birthDate\": \"1999-06-07T00:00:00.000Z\",\n        \"product\": \"free\",\n        \"images\": [\n            {\n                \"_id\": \"5ec336c7903e064e047da9a3\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"follow\": [],\n        \"createPlaylist\": [\n            {\n                \"collaboratorsId\": [],\n                \"_id\": \"5eb52a2663eea332d416b9b0\",\n                \"playListId\": \"5eb52a2563eea332d416b9ae\",\n                \"addedAt\": \"2020-05-08T09:45:10.004Z\",\n                \"isPrivate\": false\n            },\n            {\n                \"collaboratorsId\": [],\n                \"_id\": \"5eb52a3363eea332d416b9b8\",\n                \"playListId\": \"5eb52a3363eea332d416b9b6\",\n                \"addedAt\": \"2020-05-08T09:45:23.641Z\",\n                \"isPrivate\": false\n            }\n        ],\n        \"followPlaylist\": [\n            {\n                \"_id\": \"5eb52a2663eea332d416b9b1\",\n                \"playListId\": \"5eb52a2563eea332d416b9ae\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52a3463eea332d416b9b9\",\n                \"playListId\": \"5eb52a3363eea332d416b9b6\",\n                \"isPrivate\": false\n            }\n        ],\n        \"saveAlbum\": [],\n        \"following\": [\n            \"5eb08fce30a9a01f144b722d\"\n        ],\n        \"followers\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/api/me/following/user",
    "title": "get users that user follows",
    "name": "get_users_that_user_follows",
    "group": "Follow",
    "description": "<p style=\"color:red;\">get all the  users that the logged in  user follows.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of users in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/following/user' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"gender\": \"f\",\n        \"email\": \"dai.a.elrihany@gmail.com\",\n        \"displayName\": \"Dai\",\n        \"birthDate\": \"1998-01-01T00:00:00.000Z\",\n        \"product\": \"free\",\n        \"images\": [\n            {\n                \"_id\": \"5eb51153dd06db2ffca30291\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"follow\": [\n            {\n                \"_id\": \"5ec046a2058f3c35b859add0\",\n                \"id\": \"5eb0a4749b15d854c08f736e\"\n            }\n        ],\n        \"createPlaylist\": [\n            {\n                \"collaboratorsId\": [],\n                \"_id\": \"5ec46acc6fc95d6c54420970\",\n                \"playListId\": \"5eb52479680ef51b4c449299\",\n                \"addedAt\": \"2020-05-19T23:25:00.759Z\",\n                \"isPrivate\": false\n            },\n            {\n                \"collaboratorsId\": [],\n                \"_id\": \"5ec47f426b940c56933c1cb4\",\n                \"playListId\": \"5eb5246b680ef51b4c449291\",\n                \"addedAt\": \"2020-05-20T00:52:18.550Z\",\n                \"isPrivate\": false\n            },\n            {\n                \"collaboratorsId\": [],\n                \"_id\": \"5ec48db96b940c56933c1d6a\",\n                \"playListId\": \"5ec2af35afb12b366cf04775\",\n                \"addedAt\": \"2020-05-20T01:54:01.698Z\",\n                \"isPrivate\": false\n            }\n        ],\n        \"followPlaylist\": [\n            {\n                \"_id\": \"5eb51bb0e8fb881a3ce466ad\",\n                \"playListId\": \"5eb51bb0e8fb881a3ce466aa\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51c3995f7fd0cecb19e95\",\n                \"playListId\": \"5eb51c3995f7fd0cecb19e92\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51c4595f7fd0cecb19e99\",\n                \"playListId\": \"5eb51c4595f7fd0cecb19e96\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51f1932fc2c23b034fad2\",\n                \"playListId\": \"5eb51f1932fc2c23b034facf\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51f2532fc2c23b034fad6\",\n                \"playListId\": \"5eb51f2432fc2c23b034fad3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51fc3afa54d23a0297fb2\",\n                \"playListId\": \"5eb51fc2afa54d23a0297faf\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb51fcfafa54d23a0297fb6\",\n                \"playListId\": \"5eb51fcfafa54d23a0297fb3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb520fdc71ff52ca44f6982\",\n                \"playListId\": \"5eb520fcc71ff52ca44f697f\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb5217b468bdf2e6c3baa60\",\n                \"playListId\": \"5eb5217b468bdf2e6c3baa5d\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52188468bdf2e6c3baa64\",\n                \"playListId\": \"5eb52187468bdf2e6c3baa61\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb521a247ed2c1cc072f556\",\n                \"playListId\": \"5eb521a247ed2c1cc072f553\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb5222cd6ef000f6866ea5d\",\n                \"playListId\": \"5eb5222bd6ef000f6866ea5a\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52239d6ef000f6866ea62\",\n                \"playListId\": \"5eb52239d6ef000f6866ea5f\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb5229bf5d33f2daca6357e\",\n                \"playListId\": \"5eb5229af5d33f2daca6357b\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522a8f5d33f2daca63586\",\n                \"playListId\": \"5eb522a8f5d33f2daca63583\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522b6f5d33f2daca6358e\",\n                \"playListId\": \"5eb522b5f5d33f2daca6358b\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522c3f5d33f2daca63596\",\n                \"playListId\": \"5eb522c3f5d33f2daca63593\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522d1f5d33f2daca6359e\",\n                \"playListId\": \"5eb522d0f5d33f2daca6359b\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522def5d33f2daca635a6\",\n                \"playListId\": \"5eb522def5d33f2daca635a3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522ecf5d33f2daca635ae\",\n                \"playListId\": \"5eb522ebf5d33f2daca635ab\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb522faf5d33f2daca635b6\",\n                \"playListId\": \"5eb522f9f5d33f2daca635b3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52307f5d33f2daca635be\",\n                \"playListId\": \"5eb52307f5d33f2daca635bb\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52315f5d33f2daca635c6\",\n                \"playListId\": \"5eb52314f5d33f2daca635c3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52322f5d33f2daca635ce\",\n                \"playListId\": \"5eb52322f5d33f2daca635cb\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb52330f5d33f2daca635d6\",\n                \"playListId\": \"5eb5232ff5d33f2daca635d3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb5233df5d33f2daca635de\",\n                \"playListId\": \"5eb5233df5d33f2daca635db\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5eb5234bf5d33f2daca635e6\",\n                \"playListId\": \"5eb5234af5d33f2daca635e3\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5ec46acd6fc95d6c54420971\",\n                \"playListId\": \"5eb52479680ef51b4c449299\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5ec47f426b940c56933c1cb5\",\n                \"playListId\": \"5eb5246b680ef51b4c449291\",\n                \"isPrivate\": false\n            },\n            {\n                \"_id\": \"5ec48db96b940c56933c1d6b\",\n                \"playListId\": \"5ec2af35afb12b366cf04775\",\n                \"isPrivate\": false\n            }\n        ],\n        \"saveAlbum\": [],\n        \"following\": [],\n        \"followers\": [\n            \"5eb0906430a9a01f144b723c\"\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "DELETE",
    "url": "/api/me/unfollow/user/{user_id}",
    "title": "unfollow user with user_id",
    "name": "unfollow_user",
    "group": "Follow",
    "description": "<p style=\"color:red;\">unfollow user</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
        "Path Param": [
          {
            "group": "Path Param",
            "optional": false,
            "field": "user_id",
            "description": "<p>Required. user id that the user will follow</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/me/unfollow/user/5eb08fce30a9a01f144b722d' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTA2NDMwYTlhMDFmMTQ0YjcyM2MiLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTkwNjg4MTkwLCJleHAiOjMxNDY0ODg4NzgwMjY4MDM3MDB9.jr-AzUxXBEF9veCGB0JZHUtEpnjSQOQ-_w5Vi5XGh0M' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "unfollowed user successfully",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Follow"
  },
  {
    "type": "DELETE",
    "url": "/api/images/delete/{image_id}",
    "title": "delete image",
    "name": "delete_image",
    "group": "Image",
    "description": "<p style=\"color:red;\">delete image file</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "image_id",
            "description": "<p>{String}\t\t\tthe id of the image</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "source_id",
            "description": "<p>{String}\t\t\tthe id of the entity that  have the image</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "belongs_to",
            "description": "<p>{String}\t\tRequired.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success 200 status, else error code will be sent</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/images/delete/5e9a241d809e981ef0b64a69?source_id=5e8cb118084a9d2e6c8f21d7&belongs_to=artist' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"image deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Image"
  },
  {
    "type": "GET",
    "url": "/api/images/get_id/{source_id}",
    "title": "get id of latest image of specific document",
    "name": "get_id_of_image",
    "group": "Image",
    "description": "<p style=\"color:red;\">get id of latest image in the source document</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "source_id",
            "description": "<p>{String}\t\t\tthe id of entity to get the image from</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "belongs_to",
            "description": "<p>{String}\t\tRequired.string that specify the entity type that the image is  belongs to can take values (user,playlist,track,album,artist).</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success 200, if cant get image will return 404 with error message</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/images/get_id/5e8cb7037f37604d583f8d22/?belongs_to=artist'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"imageId\": \"5ea0d6ac199f605c7038af37\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Image"
  },
  {
    "type": "GET",
    "url": "/api/images/{image_id}",
    "title": "get image",
    "name": "get_image",
    "group": "Image",
    "description": "<p style=\"color:red;\">get image file</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "image_id",
            "description": "<p>{String}\t\t\tthe id of the image</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "belongs_to",
            "description": "<p>{String}\t\tRequired.string that specify the entity type that the image is  uploaded to can take values (user,playlist,track,album,artist).</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success an media stream will be piped to response, and partial content will be recieved</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/images/5e9c9790fc69ad92e0a7eda5?belongs_to=artist' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Image"
  },
  {
    "type": "POST",
    "url": "/api/images/update/{source_id}",
    "title": "update image",
    "name": "update_image",
    "group": "Image",
    "description": "<p style=\"color:red;\">update image to specific entity in database, with removing the existing images for this entity</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "source_id",
            "description": "<p>the id of the entity that will have the image</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "belongs_to",
            "description": "<p>{String}\t\tRequired.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "height",
            "description": "<p>{Number} Required. the height of the image in pixels</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "width",
            "description": "<p>{Number} Required. the width of the image in pixels</p>"
          }
        ],
        "form-data": [
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Required the image file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK .on error 403 status code will occur</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/images/update/5e8cb7037f37604d583f8d22?belongs_to=artist&height=100&width=100' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \\\n--form 'image=@/C:/Users/bahaaEldeen/Pictures/Annotation 2020-03-29 005428.png'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"updated succesfully\",\n    \"imageId\": \"5ea17c80686dde47e84b9bde\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Image"
  },
  {
    "type": "POST",
    "url": "/api/images/upload/{source_id}",
    "title": "upload image",
    "name": "upload_image",
    "group": "Image",
    "description": "<p style=\"color:red;\">upload image to specific entity in database, without removing the existing images for this entity</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "source_id",
            "description": "<p>the id of the entity that will have the image</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "belongs_to",
            "description": "<p>{String}\t\tRequired.string that specify the entity type that the image will be uploaded to can take values (user,playlist,track,album,artist).</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "height",
            "description": "<p>{Number} Required. the height of the image in pixels</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "width",
            "description": "<p>{Number} Required. the width of the image in pixels</p>"
          }
        ],
        "form-data": [
          {
            "group": "form-data",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Required the image file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK .on error 403 status code will occur</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request POST 'http://localhost:3000/api/images/upload/5e99e98d9f8daeb6b42076ff?belongs_to=track&height=100&width=100' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2OTY2MTgyLCJleHAiOjQ3MzM0NTI1ODJ9.IOtODsiHiTM7VXlxq1Dan072FtNdo0l_UXfOqdnMRFw' \\\n--form 'image=@/C:/Users/bahaaEldeen/Pictures/Annotation 2020-03-29 005428.png'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": \"uploaded succesfully\",\n    \"imageId\": \"5ea17ca7686dde47e84b9be1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "api/me/albums/contains",
    "title": "Check User's Saved Albums",
    "name": "Check_User's_Saved_Albums",
    "group": "Library",
    "description": "<p style=\"color:red;\">Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service: see the Web API Authorization Guide for details. </br>The user-library-read scope must have been authorized by the user.</p>"
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
            "field": "albums_ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> a JSON array of true or false values, in the same order in which the ids were specified. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/albums/contains?albums_ids=5e8cba1b7f37604d583f8d37,5e8cba2d7f37604d583f8d38' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n[\n  true,\n  true,\n  true\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "get",
    "url": "api/me/tracks/contains",
    "title": "Check User's Saved Tracks",
    "name": "Check_User's_Saved_Tracks",
    "group": "Library",
    "description": "<p style=\"color:red;\">Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The user-library-read scope must have been authorized by the user.</p>"
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
            "field": "tracks_ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> a JSON array of true or false values, in the same order in which the ids were specified. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/track/contains?track_ids=5e8cba1b7f37604d583f8d37,5e8cba2d7f37604d583f8d38' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n[\n  true,\n  true,\n  true\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "get",
    "url": "api/me/albums",
    "title": "Get Current User's Saved Albums",
    "name": "Get_Current_User's_Saved_Albums",
    "group": "Library",
    "description": "<p style=\"color:red;\">Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service. </br>The user-library-read scope must have been authorized by the user.</p>"
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
            "field": "limit",
            "description": "<p>Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first object to return.</br> Default: 0 (i.e., the first object). Use with limit to get the next set of objects.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array of </br>album objects (wrapped in a paging object) in JSON format. Each album object is accompanied</br> by a timestamp (added_at) to show when it was added. There is also an etag in the header that can be used in future conditional requests.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/albums' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"savedAlbums\": [\n        {\n            \"isSaved\": true,\n            \"_id\": \"5eb0a872ec0c444e9c489869\",\n            \"name\": \"Just the beginning\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb0b45bde66c65e34c18be9\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"artistId\": \"5eb0a47d9b15d854c08f7371\",\n            \"artistName\": \"artist16\",\n            \"track\": [\n                {\n                    \"_id\": \"5eb0a877ec0c444e9c48986b\",\n                    \"name\": \"track35\",\n                    \"images\": [\n                        {\n                            \"_id\": \"5eb0b45ede66c65e34c18bec\",\n                            \"height\": 100,\n                            \"width\": 100\n                        }\n                    ],\n                    \"isLiked\": false,\n                    \"playable\": true,\n                    \"duration\": 60\n                },\n                {\n                    \"_id\": \"5eb1a52fa5ebd959e08d5740\",\n                    \"name\": \"Alsajda\",\n                    \"images\": [],\n                    \"isLiked\": false,\n                    \"playable\": true,\n                    \"duration\": 125\n                },\n                {\n                    \"_id\": \"5eb1ac71371bc537ec792bb8\",\n                    \"name\": \"mariam\",\n                    \"images\": [],\n                    \"isLiked\": false,\n                    \"playable\": true,\n                    \"duration\": 75\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "get",
    "url": "api/me/tracks",
    "title": "Get a User's Saved Tracks",
    "name": "Get_a_User's_Saved_Tracks",
    "group": "Library",
    "description": "<p style=\"color:red;\">Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The user-library-read scope must have been authorized by the user.</p>"
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
            "field": "limit",
            "description": "<p>Optional. The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first object to return.</br> Default: 0 (i.e., the first object). Use with limit to get the next set of objects.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body</br> contains an array of saved track objects (wrapped in a paging object) in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"tracks\": [\n        {\n            \"artistId\": \"5e8cb7037f37604d583f8d22\",\n            \"artistName\": \"nada\",\n            \"artistimages\": [],\n            \"artistType\": \"Artist\",\n            \"albumId\": \"5e8cb9327f37604d583f8d25\",\n            \"albumName\": \"HELLO KIDS\",\n            \"albumImages\": [],\n            \"albumType\": \"Album\",\n            \"_id\": \"5e8cba367f37604d583f8d39\",\n            \"name\": \"SWALLA\",\n            \"type\": \"Track\",\n            \"images\": []\n        },\n        {\n            \"artistId\": \"5e8cb7037f37604d583f8d22\",\n            \"artistName\": \"nada\",\n            \"artistimages\": [],\n            \"artistType\": \"Artist\",\n            \"albumId\": \"5e8cb9457f37604d583f8d27\",\n            \"albumName\": \"HELLO SLEEP WALKERS\",\n            \"albumImages\": [],\n            \"albumType\": \"Album\",\n            \"_id\": \"5e8cba7f7f37604d583f8d3f\",\n            \"name\": \"LOVE\",\n            \"type\": \"Track\",\n            \"images\": []\n        }\n    ],\n    \"ownerName\": \" Samir\",\n    \"playlistId\": \"5e9c637cfac98e0e1041a769\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "delete",
    "url": "api/me/albums",
    "title": "Remove Albums for Current User",
    "name": "Remove_Albums_for_Current_User",
    "group": "Library",
    "description": "<p style=\"color:red;\">Remove one or more albums from the current user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br>Modification of the current user’s “Your Music” collection requires authorization of the user-library-modify scope.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "content-type",
            "description": "<p>Required if the IDs are passed in the request body, otherwise ignored.</br> The content type of the request body: application/json</p>"
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
            "field": "ids",
            "description": "<p>Optional. A comma-separated list of the Spotify IDs.</br> For example: {&quot;ids&quot;:&quot;4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M&quot;}</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 Success.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "put",
    "url": "api/me/Albums",
    "title": "Save Albums for Current User",
    "name": "Save_Albums_for_Current_User",
    "group": "Library",
    "description": "<p style=\"color:red;\">Save one or more albums to the current user’s ‘Your Music’ library.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br>Modification of the current user’s “Your Music” collection requires authorization of the user-library-modify scope.</p>"
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
            "field": "ids",
            "description": "<p>Optional. A comma-separated list of the Spotify IDs.</br> For example: {&quot;ids&quot;:&quot;4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M&quot;}</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 Created.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/Albums?ids=5e8cb9327f37604d583f8d25' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "DELETE",
    "url": "api/playlists/{playlist_id}/followers",
    "title": "Unfollow a Playlist",
    "name": "Unfollow_a_Playlist",
    "group": "Library",
    "description": "<p style=\"color:red;\">Remove the current user as a follower of a playlist.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the user.</br>Unfollowing a publicly followed playlist for a user requires authorization of the playlist-modify-public scope; unfollowing a privately followed playlist requires the playlist-modify-private scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameter": [
          {
            "group": "PathParameter",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The Spotify ID of the playlist that is to be no longer followed.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body is {success:&quot;unfollowed this playlist successfully&quot;}.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/followers' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "put",
    "url": "api/me/like/:track_id",
    "title": "like track",
    "name": "like_track",
    "group": "Library",
    "description": "<p style=\"color:red;\">Add the current user  like this track.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path Parameters": [
          {
            "group": "path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>require.require.  track Spotify ID .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/like/5e8cba1b7f37604d583f8d37' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "delete",
    "url": "api/me/unlike/:track_id",
    "title": "unlike track",
    "name": "unlike_track",
    "group": "Library",
    "description": "<p style=\"color:red;\">Add the current user  unlike this track.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br> Modifying the list of artists or users the current user follows requires authorization of the user-follow-modify scope</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "path Parameters": [
          {
            "group": "path Parameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>require.  track Spotify ID .</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 204 No Content and the response body is empty.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/me/unlike/5e8cba1b7f37604d583f8d37' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Library"
  },
  {
    "type": "get",
    "url": "api/me/top/{type}",
    "title": "Get a User's Top Artists and Tracks        (not implemented yet)",
    "name": "Get_a_User's_Top_Artists_and_Tracks",
    "group": "Personalization",
    "description": "<p style=\"color:red;\">Get the current user’s top artists or tracks based on calculated affinity.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</br> The access token must have been issued on behalf of the current user.</br>Getting details of a user’s top artists and tracks requires authorization of the user-top-read scope.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "type",
            "description": "<p>The type of entity to return. Valid values: artists or tracks.</p>"
          }
        ],
        "QueryParameters": [
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional. The number of entities to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first entity to return.</br> Default: 0 (i.e., the first track). Use with limit to get the next set of entities.</p>"
          },
          {
            "group": "QueryParameters",
            "optional": false,
            "field": "time-range",
            "description": "<p>Optional. Over what time frame the affinities are computed.</br> Valid values: long_term (calculated from several years of data and including all new data as it becomes available),</br> medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a paging object of Artists or Tracks. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Personalization"
  },
  {
    "type": "POST",
    "url": "api/player/add-to-queue/:playlistId/:trackId",
    "title": "Add an Item to the User's Playback Queue",
    "name": "Add_an_Item_to_the_User's_Playback_Queue",
    "group": "Player",
    "description": "<p style=\"color:red;\">Add an item to the end of the user’s current playback queue.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Path Paramaters": [
          {
            "group": "Path Paramaters",
            "optional": false,
            "field": "requried.trackId",
            "description": "<p>the id of the track went to add</p>"
          },
          {
            "group": "Path Paramaters",
            "optional": false,
            "field": "requried.playlistId",
            "description": "<p>the id of the playlist or album this track from</p>"
          }
        ],
        "Query Paramaters": [
          {
            "group": "Query Paramaters",
            "optional": false,
            "field": "requried.isPlaylist",
            "description": "<p>boolean if true this track from playlist else this from album</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "format",
            "description": "<p>A completed request will return a 200  response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://localhost:3000/api/player/add-to-queue/5e8cbe527f37604d583f8d5c/5e8cbefc7f37604d583f8d68/?isPlaylist=true' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "api/me/player/recently-played",
    "title": "Get Current User's Recently Played Tracks",
    "name": "Get_Current_User's_Recently_Played_Tracks.",
    "group": "Player",
    "description": "<p style=\"color:red;\">Get tracks from the current user’s recently played tracks.</p> <p>Returns the most recent 50 tracks played by a user. Note that a track currently playing will not be visible in play history until it has completed. A track must be played for more than 30 seconds to be included in play history.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "limit",
            "description": "<p>Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "after",
            "description": "<p>Optional. A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If after is specified, before must not be specified.</p>"
          },
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "before",
            "description": "<p>Optional. A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If before is specified, after must not be specified.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array of play history objects (wrapped in a cursor-based paging object) in JSON format. The play history items each contain the context the track was played from (e.g. playlist, album), the date and time the track was played, and a track object (simplified). On error, the header status code is an error code and the response body contains an error object. If private session is enabled the response will be a 204 NO CONTENT with an empty payload.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/player/recently-played' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "api/player",
    "title": "Get Information About The User's Current Playback  (not implemented yet)",
    "name": "Get_Information_About_The_User's_Current_Playback",
    "group": "Player",
    "description": "<p style=\"color:red;\">Get information about the user’s current playback state, including track, track progress, and active device.</br> Optional parameters can be specified in the query string to filter and sort the response.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "market",
            "description": "<p>Optional. An ISO 3166-1 alpha-2 country code or the string from_token.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>A successful request will return a 200 OK response code with a json payload that contains information about the current playback. The information returned is for the last known state, which means an inactive device could be returned if it was the last one to execute playback. When no available devices are found, the request will return a 200 OK response but with no data populated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "api/me/player/currently-playing",
    "title": "Get the User's Currently Playing Track",
    "name": "Get_the_User's_Currently_Playing_Track",
    "group": "Player",
    "description": "<p style=\"color:red;\">Get the object currently being played on the user’s Spotify account.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "content": "curl --location --request GET 'http://localhost:3000/api/me/player/currently-playing' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       },\n\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\",\n  \"isPlayable\":true\n}",
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
            "description": "<p>A successful request will return a 200 OK response code with a json payload that contains information about the currently playing track and context (see below). The information returned is for the last known state, which means an inactive device could be returned if it was the last one to execute playback. When no available devices are found, the request will return a 200 OK response but with no data populated. When no track is currently playing, the request will return a 204 NO CONTENT response with no payload. If private session is enabled the response will be a 204 NO CONTENT with an empty payload.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "api/me/queue",
    "title": "Get currently queue for this user",
    "name": "Get_the_User's_Currently_playback_queue",
    "group": "Player",
    "description": "<p style=\"color:red;\">Get the User's Currently playback queue</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "content": "curl --location --request GET 'http://localhost:3000/api/me/queue' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n[\n{\n   \"fullTrack\": {\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       }\n   },\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\",\n    \"isPlayable\": false\n},\n{\n   \"fullTrack\": {\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       }\n   },\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\",\n    \"isPlayable\": false\n},\n   \"fullTrack\": {\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       }\n   },\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\",\n    \"isPlayable\": false\n}\n]\n}",
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
            "description": "<p>A successful request will return a 200 OK response code with a json array of tracks in queue if error 400 status</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/me/player/pause",
    "title": "Pause a User's Playback",
    "name": "Pause_a_User's_Playback",
    "group": "Player",
    "description": "<p style=\"color:red;\">Pause playback on the user’s account.</br> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "description": "<p>A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/player/pause' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/player",
    "title": "Seek To Position In Currently Playing Track       (not implemented yet)",
    "name": "Seek_To_Position_In_Currently_Playing_Track",
    "group": "Player",
    "description": "<p style=\"color:red;\">Seeks to the given position in the user’s currently playing track.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Query Paramaters": [
          {
            "group": "Query Paramaters",
            "optional": false,
            "field": "position_ms",
            "description": "<p>Required. The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/player/repeat",
    "title": "Set Repeat Mode On User’s Playback",
    "name": "Set_Repeat_Mode_On_User’s_Playback",
    "group": "Player",
    "description": "<p style=\"color:red;\">Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Query Paramaters": [
          {
            "group": "Query Paramaters",
            "optional": false,
            "field": "state",
            "description": "<p>Required.track, boolean true if repeat false if not repeat to repeat playlist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>A completed request will return a 200 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/player/repeat?state=true' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "POST",
    "url": "api/me/player/next-playing",
    "title": "Skip User’s Playback To Next Track",
    "name": "Skip_User’s_Playback_To_Next_Track",
    "group": "Player",
    "description": "<p style=\"color:red;\">Skips to next track in the user’s queue.</p> <p>After a successful skip operation, playback will automatically start.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "content": "curl --location --request POST 'http://localhost:3000/api/me/player/next-playing' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       },\n\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\",\n    \"isPlayable\": false\n}",
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
            "description": "<p>A completed request will return a 200 NO CONTENT response code,current playing track, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "POST",
    "url": "api/me/player/prev-playing",
    "title": "Skip User’s Playback To Previous Track",
    "name": "Skip_User’s_Playback_To_Previous_Track",
    "group": "Player",
    "description": "<p style=\"color:red;\">Skips to previous track in the user’s queue.</p> <p>Note that this will ALWAYS skip to the previous track, regardless of the current track’s progress. Returning to the start of the current track should be performed using the https://api.spotify.com/v1/me/player/seek endpoint.</p> <p>After a successful skip operation, playback will automatically start.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "content": "curl --location --request POST 'http://localhost:3000/api/me/player/prev-playing' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\n       \"track\": {\n           \"availableMarkets\": [\n               \"\\\"er,ty,eue,euu\\\"\"\n           ],\n           \"_id\": \"5e85f4241ba5cf17ccca66d7\",\n           \"url\": \"5e85f4241ba5cf17ccca66d5\",\n           \"images\": [],\n           \"duration\": 436,\n           \"trackNumber\": 236,\n           \"name\": \"\\\"track6\\\"\",\n           \"artistId\": \"5e833a51a51d971174923f17\",\n           \"albumId\": \"5e833b412b9d7718a491c850\",\n           \"discNumber\": 1,\n           \"explicit\": false,\n           \"type\": \"Track\",\n           \"acousticness\": 10,\n           \"danceability\": 23,\n           \"energy\": 100,\n           \"instrumentalness\": 4,\n           \"key\": 90,\n           \"liveness\": 25,\n           \"loudness\": 70,\n           \"mode\": 56,\n           \"speechiness\": 67,\n           \"tempo\": 76,\n           \"timeSignature\": \"2020-04-02T14:18:12.619Z\",\n           \"valence\": 70,\n           \"like\": 0,\n           \"__v\": 0\n       },\n       \"isLiked\": false,\n       \"album\": {\n           \"name\": \"album1\",\n           \"_id\": \"5e833b412b9d7718a491c850\",\n           \"artist\": {\n               \"name\": \"ahmedsamir\",\n              \"_id\": \"5e833a51a51d971174923f17\"\n           }\n       }\n   },\n   \"isPlaylist\": true,\n   \"playlistId\": \"5e85f4ca1ba5cf17ccca66eb\"\n    \"isPlayable\": false\n}",
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
            "description": "<p>A completed request will return a 200 NO CONTENT response code,and current playing  track , and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/me/player/play",
    "title": "Start/Resume a User's Playback",
    "name": "Start/Resume_a_User's_Playback",
    "group": "Player",
    "description": "<p style=\"color:red;\">Start a new context or resume current playback on the user’s active device.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "description": "<p>A completed request will return a 204 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 404 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/player/play' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "PUT",
    "url": "api/me/player/shuffle",
    "title": "Toggle Shuffle For User’s Playback",
    "name": "Toggle_Shuffle_For_User’s_Playback",
    "group": "Player",
    "description": "<p style=\"color:red;\">Toggle shuffle on or off for user’s playback.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Query Paramaters": [
          {
            "group": "Query Paramaters",
            "optional": false,
            "field": "state",
            "description": "<p>Required   true : Shuffle user’s playback &amp; false : Do not shuffle user’s playback.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>A completed request will return a 200 NO CONTENT response code, and then issue the command to the player. Due to the asynchronous nature of the issuance of the command, you should use the Get Information About The User’s Current Playback endpoint to check that your issued command was handled correctly by the player. When performing an action that is restricted, 400 NOT FOUND or 403 FORBIDDEN will be returned together with a player error message. For example, if there are no active devices found, the request will return 404 NOT FOUND response code and the reason NO_ACTIVE_DEVICE, or, if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned together with the PREMIUM_REQUIRED reason.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/player/shuffle?state=true' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Player"
  },
  {
    "type": "POST",
    "url": "api/playlists/{playlist_id}/tracks",
    "title": "Add Tracks to a Playlist",
    "name": "Add_Tracks_to_a_Playlist",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Add one or more tracks to a user’s playlist..</p> <p>The Spotify URIs of the tracks to add can be passed either in the query string or as a JSON array in the request body</p> <p>. Passing them in the query string</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "optional": false,
            "field": "tracks",
            "description": "<p>{ string }  comma seperated string of track_ids that will be added to playlist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 201 Created. The response body contains the playlist in JSON format. on error 404 error will be sent with error object, if there are no tracks 401 response will be sent with bad request error</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\t\"tracks\":\"5e8cba1b7f37604d583f8d37\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"_id\":\"5e7cee3c35bf5449a0aa0a24\",\n  \"type\":\"playlist\",\n  \"Description\":\"\",\n  \"collaborative\":false,\n  \"name\":\"playlist1Demo\",\n  \"isPublic\":true,\"ownerId\":\"5e7ced3535bf5449a0aa0a23\",\n  \"images\":[],\n  \"snapshot\":[\n      {\n           \"hasTracks\":\n          [\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\"],*           \"_id\":\"5e7cf0e4f37b461aac6afdd0\",\"action\":\"Add Tracks\"}\n      ]\n  ,\"__v\":1}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}",
    "title": "Change a Playlist's Details",
    "name": "Change_a_Playlist's_Details",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Change a Playlist's Details Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)</p> Note that the request data is a JSON string, not separate fields <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Optional. The new name for the playlist</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Optional. Value for playlist description as displayed in Spotify Clients and in the Web API.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success the HTTP status code in the response header is 200 OK. On error, the header status code is 400 status and the response body contains an error object. Trying to change a playlist when you do not have the user’s authorization returns error 403 Forbidden.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\t\"name\":\"new name\"\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\":\"5e7cee3c35bf5449a0aa0a24\",\n\"type\":\"playlist\",\n\"Description\":\"anything\",\n\"collaborative\":false,\n\"name\":\"changedPlaylist1\",\n\"isPublic\":true,\n\"ownerId\":\"5e7ced3535bf5449a0aa0a23\",\n\"images\":[],\n\"snapshot\":[\n{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\"],\"_id\":\"5e7cf0e4f37b461aac6afdd0\",\"action\":\"Add Tracks\"},\n{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\"],\"_id\":\"5e7cf10728082026100db373\",\"action\":\"Add Tracks\"},\n{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\",\"5e7c95e2cb9f6a5270ea412d\"],\"_id\":\"5e7cf11d28082026100db374\",\"action\":\"Add Tracks\"},\n{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\",\"5e7c95e2cb9f6a5270ea412d\"],\"_id\":\"5e7cf12f28082026100db375\",\"action\":\"Add Tracks\"}],\n\"__v\":4}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "POST",
    "url": "api/users/playlists",
    "title": "Create a Playlist",
    "name": "Create_a_Playlist",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "name",
            "description": "<p>Required. The new name for the playlist</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "Describtion",
            "description": "<p>optional. The description for the playlist</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains the created playlist object in JSON format and the HTTP status code in the response header is 200 Ok Created. On error, the header status code is an error code and the response body contains an error object. Trying to create a playlist when you do not have the user’s authorization returns error 400 Forbidden.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'http://localhost:3000/api/users/playlists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\t\"name\":\"new playlist name\",\n\t\"describtion\":\"ant desc\"\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"_id\":\"5e7cee3c35bf5449a0aa0a24\",\n\"type\":\"playlist\",\n\"Description\":\"\",\n\"collaborative\":false,\n\"name\":\"playlist1Demo\",\n\"isPublic\":true,\n\"ownerId\":\"5e7ced3535bf5449a0aa0a23\",\n\"images\":[],\n\"snapshot\":[],\n\"__v\":0}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "GET",
    "url": "api/playlists/{playlist_id}/tracks",
    "title": "Get Tracks from a Playlist",
    "name": "Get_Tracks_from_a_Playlist",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Get Tracks from a playlist..</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 . The response body contains the playlist main info and array of its tracks in JSON format. on error 404 error will be sent with error object, if there are no tracks 401 response will be sent with bad request error</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n       \"id\": \"5e8cbe647f37604d583f8d60\",\n       \"type\": \"playlist\",\n       \"name\": \"SunShine\",\n       \"ownerId\": \"5e8cb118084a9d2e6c8f21d7\",\n       \"collaborative\": false,\n       \"isPublic\": true,\n       \"images\": [],\n       \"tracks\": [\n           {\n               \"trackid\": \"5e8cbb037f37604d583f8d47\",\n               \"name\": \"OH WOW\",\n               \"artistId\": \"5e8cb7037f37604d583f8d22\",\n               \"artistName\": \"nada\",\n               \"albumId\": \"5e8cb95d7f37604d583f8d2d\",\n               \"albumName\": \"KONNICHIWA KIDS\",\n               \"isLiked\": false\n           },\n           {\n               \"trackid\": \"5e8cbb147f37604d583f8d48\",\n               \"name\": \"WOW\",\n               \"artistId\": \"5e8cb7037f37604d583f8d22\",\n               \"artistName\": \"nada\",\n               \"albumId\": \"5e8cb96a7f37604d583f8d2f\",\n               \"albumName\": \"SAY YOU WON'T LET GO\",\n               \"isLiked\": false\n           },\n           {\n               \"trackid\": \"5e8cba6c7f37604d583f8d3e\",\n               \"name\": \"KILL ME\",\n               \"artistId\": \"5e8cb7037f37604d583f8d22\",\n               \"artistName\": \"nada\",\n               \"albumId\": \"5e8cb9457f37604d583f8d27\",\n               \"albumName\": \"HELLO SLEEP WALKERS\",\n               \"isLiked\": false\n           }\n       ],\n       \"isfollowed\": false,\n       \"checkType\": \"none\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "get",
    "url": "api/me/playlists",
    "title": "Get a List of Current User's Playlists",
    "name": "Get_a_List_of_Current_User's_Playlists.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Get a list of the playlists owned or followed by the current Spotify user.</p> <p>Returns list of user's playlists created and followed by user</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array of  playlist objects in JSON format. On error, the header status code is an error code 404 and the response body contains an error object. Please note that the access token has to be tied to a user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/playlists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n       \"id\": \"5e9d4a5917bf6c123f3f093d\",\n       \"name\": \"mm\",\n       \"ownerId\": \"5e8cb118084a9d2e6c8f21d7\",\n       \"owner\": \"nada\",\n       \"collaborative\": false,\n       \"isPublic\": true,\n       \"images\": [],\n       \"type\": \"created\"\n   },\n   {\n       \"id\": \"5e9dc7d4f01d440db972eec8\",\n       \"name\": \"spacetoon\",\n       \"ownerId\": \"5e8cb118084a9d2e6c8f21d7\",\n       \"owner\": \"nada\",\n       \"collaborative\": false,\n       \"isPublic\": true,\n       \"images\": [],\n       \"type\": \"created\"\n   },\n   {\n       \"id\": \"5e9dc832f01d440db972eed1\",\n       \"name\": \"MENNA\",\n       \"ownerId\": \"5e8cb118084a9d2e6c8f21d7\",\n       \"owner\": \"nada\",\n       \"collaborative\": false,\n       \"isPublic\": true,\n       \"images\": [],\n       \"type\": \"created\"\n   },\n   {\n       \"id\": \"5e9dca05f01d440db972eed8\",\n       \"name\": \"New Playlist\",\n       \"ownerId\": \"5e8cb118084a9d2e6c8f21d7\",\n       \"owner\": \"nada\",\n       \"collaborative\": false,\n       \"isPublic\": true,\n       \"images\": [],\n       \"type\": \"created\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "GET",
    "url": "api/users/{user_id}/playlists",
    "title": "Get a List of a User's Playlists created and followed",
    "name": "Get_a_List_of_a_User's_Playlists",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Get a list of the playlists owned or followed by a Spotify user.</br> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "path Parameters": [
          {
            "group": "path Parameters",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user’s Spotify user ID.</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.</p>"
          },
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000. Use with limit to get the next set of playlists</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an array of  playlist objects  in JSON format. On error, the header status code is an error code 404 and the response body contains an error object.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/users/5e8cb14d084a9d2e6c8f21db/playlists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\"_id\":\"5e7cee3c35bf5449a0aa0a24\",\n\"type\":\"playlist\",\n\"Description\":\"anything\",\n\"collaborative\":false,\n\"name\":\"changedPlaylist1\",\n\"isPublic\":true,\n\"ownerId\":\"5e7ced3535bf5449a0aa0a23\",\n\"images\":[],\n\"snapshot\":[{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",\"5e7c9618cb9f6a5270ea4139\"],\"_id\":\"5e7cf0e4f37b461aac6afdd0\",\"action\":\"Add Tracks\"}],\n\"__v\":4}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "GET",
    "url": "api/playlists/{playlist_id}",
    "title": "Get a Playlist",
    "name": "Get_a_Playlist.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Get a playlist owned by a Spotify user.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Query Paramaters": [
          {
            "group": "Query Paramaters",
            "optional": false,
            "field": "snapshot-id",
            "description": "<p>Optional. Snapshot is the id of the version of playlist if not give me it will be the last by defult</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains a playlist object in JSON format and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 400  and the response body contains an error object. Requesting playlists that you do not have the user’s authorization to access returns error 400 Forbidden. For the description in the Playlist object, it should be expected that HTML will be escaped.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"_id\":\"5e7b6413357189256c64f202\",\n\"type\":\"playlist\",\n\"collaborative\":false,\n\"name\":\"playlist1Demo\",\n\"isPublic\":true,\n\"images\":[],\n\"snapshot\":[],\n\"__v\":0}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "GET",
    "url": "api/me/deletedplaylists",
    "title": "Get user deleted Playlists",
    "name": "Get_user_deleted_Playlists.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Get user deleted Playlists</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "description": "<p>On success, the response body contains a array of deleted playlists object in JSON format and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 404  and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/deletedplaylists' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n   {\n       \"id\": \"5e9d8b96cee2040d0c675837\",\n       \"name\": \"New Playlist\",\n       \"songsNumber\": 0,\n       \"deletedAt\": \"2020-04-20T13:55:14.438Z\"\n   },\n   {\n       \"id\": \"5e9dbc06f01d440db972ee71\",\n       \"name\": \"mmm\",\n       \"songsNumber\": 0,\n       \"deletedAt\": \"2020-04-20T15:13:16.070Z\"\n   },\n   {\n       \"id\": \"5e8cbe6b7f37604d583f8d64\",\n       \"name\": \"SpaceToon\",\n       \"songsNumber\": 2,\n       \"deletedAt\": \"2020-04-20T16:00:21.601Z\"\n   },\n   {\n       \"id\": \"5e9dca05f01d440db972eed8\",\n       \"name\": \"New Playlist\",\n       \"songsNumber\": 0,\n       \"deletedAt\": \"2020-04-20T18:17:19.521Z\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "DELETE",
    "url": "api/playlists/{playlist_id}/tracks",
    "title": "Remove Tracks from a Playlist",
    "name": "Remove_Tracks_from_a_Playlist",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Remove one or more tracks from a user’s playlist.</p> There are several ways to specify which tracks to remove, determined by the request parameters. <b>Removing all occurrences of specific tracks</b> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Body parameter": [
          {
            "group": "Body parameter",
            "optional": false,
            "field": "track_ids",
            "description": "<p>required. comma seperated string contain ids of tracks to be removed from playlist</p>"
          },
          {
            "group": "Body parameter",
            "optional": false,
            "field": "snapshot_id",
            "description": "<p>optional. id of the snapshot to remove tracks from</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains a snapshot_id in JSON format and the HTTP status code in the response header is 200 OK.  On error, the header status code is an error code 404 and the response body contains an error object. Trying to remove a track when you do not have the user’s authorization returns error 403 Forbidden. Attempting to use several different ways to remove tracks returns 400 Bad Request</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\t\"track_ids\":\"5e8cba1b7f37604d583f8d37,5e8cba6c7f37604d583f8d3e\"\n\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}/tracks",
    "title": "Reorder a Playlist's Tracks",
    "name": "Reorder_a_Playlist's_Tracks",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Reorder a track or a group of tracks in a playlist.</p> <p>When reordering tracks, the timestamp indicating when they were added and the user who added them will be kept untouched. In addition, the users following the playlists won’t be notified about changes in the playlists when the tracks are reordered.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "type": "integer",
            "optional": false,
            "field": "range_start",
            "description": "<p>Required. The position of the first track to be reordered.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "integer",
            "optional": false,
            "field": "range_length",
            "description": "<p>Optional. The amount of tracks to be reordered. Defaults to 1 if not set. The range of tracks to be reordered begins from the range_start position, and includes the range_length subsequent tracks.</p>"
          },
          {
            "group": "Body Parameters",
            "type": "integer",
            "optional": false,
            "field": "insert_before",
            "description": "<p>Required. The position where the tracks should be inserted. To reorder the tracks to the end of the playlist, simply set insert_before to the position after the last track</p>"
          },
          {
            "group": "Body Parameters",
            "type": "string",
            "optional": false,
            "field": "snapshot_id",
            "description": "<p>Optional. The playlist’s snapshot ID against which you want to make the changes.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains a snapshot_id in JSON format and the HTTP status code in the response header is 200 OK. The snapshot_id can be used to identify your playlist version in future requests. On error, the header status code is an error code, the response body contains an error object, and the existing playlist is unmodified.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbe527f37604d583f8d5c/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\t\"range_start\":2\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"_id\":\"5e7cee3c35bf5449a0aa0a24\",\"type\":\"playlist\",*\"Description\":\"anything\",\n\"collaborative\":false,\n\"name\":\"changedPlaylist1\",\n\"isPublic\":false,\n\"ownerId\":\"5e7ced3535bf5449a0aa0a23\",\n\"images\":[],\n\"snapshot\":[\"hasTracks\":[\"5e7c95e1cb9f6a5270ea412a\",*\"5e7c95e2cb9f6a5270ea412d\",\"5e7c9618cb9f6a5270ea413a\",*\"5e7c95e2cb9f6a5270ea412c\",\"5e7c95e2cb9f6a5270ea412b\"],*\"_id\":\"5e7e63cb0348392ef49bf95d\",\"action\":\"Add Tracks\"},\n{\"hasTracks\":[\"5e7c95e1cb9f6a5270ea412a\",\"5e7c9618cb9f6a5270ea413a\",*\"5e7c95e2cb9f6a5270ea412c\",\"5e7c95e2cb9f6a5270ea412b\",*\"5e7c95e2cb9f6a5270ea412d\"],\"_id\":\"5e7e63dc0348392ef49bf95e\",*\"action\":\"reorder Tracks\"},{\"hasTracks\":[\"5e7c9618cb9f6a5270ea413a\",*\"5e7c95e2cb9f6a5270ea412c\",\"5e7c95e2cb9f6a5270ea412b\",*\"5e7c95e2cb9f6a5270ea412d\",\"5e7c95e1cb9f6a5270ea412a\"],*\"_id\":\"5e7e63f00348392ef49bf95f\",\"action\":\"reorder Tracks\"}],\n\"__v\":38}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "PUT",
    "url": "api/me/restoreplaylists",
    "title": "Restore user deleted Playlists.",
    "name": "Restore_user_deleted_Playlists.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">Restore user deleted Playlists.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "optional": false,
            "field": "playlistsIds",
            "description": "<p>The Spotify IDs for the playlists</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the response body contains a array of 1's and 0's values with the same order of the given array of playlists ids to detect whether restored or not and the HTTP status code in the response header is 200 OK. On error, the header status code is an error code 404  and the response body contains an error object, If the ids not given error 403 will be sent .</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/me/restoreplaylists?playlistsIds=5e8cbe6b7f37604d583f8d64' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  1\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "Delete",
    "url": "api/me/delete/playlists/{playlist_id}",
    "title": "delete a Playlist",
    "name": "delete_a_Playlist.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">delete a playlist owned by a Spotify user.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK. On error, the header status code is an error code and the response body contains an error object. Requesting playlists that you do not have the user’s authorization to access returns error 400 Forbidden. For the description in the Playlist object, it should be expected that HTML will be escaped.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/me/delete/playlists/5e8cbfa97f37604d583f8d6a' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"success\":\"Delete successfully\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}/collaborative",
    "title": "toggle playlist collaborative attribute",
    "name": "toggle_collaborative.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">toggle the collaborative attribute of the specified playlist in the request</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>on success, the HTTP status code in the response header is 200. On error, the header status code is an error code 404, the response body contains an error object, and the existing playlist is unmodified. Trying to set a track when you do not have the user’s authorization returns error 403 Forbidden.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbfa97f37604d583f8d6a/collaborative' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "PUT",
    "url": "api/playlists/{playlist_id}/public",
    "title": "toggle playlist public attribute",
    "name": "toggle_public.",
    "group": "Playlist",
    "description": "<p style=\"color:red;\">toggle the public attribute of the specified playlist in the request.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>on success, the HTTP status code in the response header is 200. On error, the header status code is an error code 404, the response body contains an error object, and the existing playlist is unmodified. Trying to set a track when you do not have the user’s authorization returns error 403 Forbidden.</p>"
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
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/playlists/5e8cbfa97f37604d583f8d6a/public' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "get",
    "url": "api/search",
    "title": "Search for an Item",
    "name": "Search_for_an_Item",
    "group": "Search",
    "description": "<p style=\"color:red;\">Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.</p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "name",
            "description": "<p>Required.Search query keywords.</p>"
          },
          {
            "group": "Query parameters",
            "optional": false,
            "field": "type",
            "description": "<p>Required.A comma-separated list of item types to search across.Valid types are: top, album , artist, playlist, and track.Search results include hits from all the specified item types.</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "optional": false,
            "field": "limit",
            "description": "<p>optional. the limit of response length .</p>"
          },
          {
            "group": "Body parameters",
            "optional": false,
            "field": "offset",
            "description": "<p>Optional. The index of the first object  to return..</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success: </br></br>In the response header the HTTP status code is 200 OK. </br></br>The response body contains an array of the given type objects EX : type =artist,track then the response body contains a json object of artists and tracks. </br> </br>On error: </br></br>The header status code is 404. </br></br>The response body contains &quot;No results found&quot;.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/search?name=nada&type=artist,playlist' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Search"
  },
  {
    "type": "PUT",
    "url": "api/recently-search",
    "title": "Add in search history",
    "name": "add_to_search_history",
    "group": "Search",
    "description": "<p style=\"color:red;\">add an object  to search history  </p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "type",
            "description": "<p>the type of object if playlist ,track ,artist ,artist or user</p>"
          },
          {
            "group": "Query parameters",
            "optional": false,
            "field": "id",
            "description": "<p>the object id</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK .</br> On error, the header status code is an error code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request PUT 'http://localhost:3000/api/recently-search?type=track&id=5eb0a51eec0c444e9c48982a' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "api/recently-search",
    "title": "get search history",
    "name": "get_search_history",
    "group": "Search",
    "description": "<p style=\"color:red;\">Get search history  </p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
        "content": "curl --location --request GET 'http://localhost:3000/api/recently-search' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200  and body has object of five arrays of object .</br> On error, the header status code is an error code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"playlists\": [\n        {\n            \"owner\": {\n                \"id\": \"5eb08fce30a9a01f144b722d\",\n                \"type\": \"user\",\n                \"name\": \"Dai\"\n            },\n            \"collaborative\": false,\n            \"type\": \"playlist\",\n            \"name\": \"My Playlist\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb52470680ef51b4c449295\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"id\": \"5eb5246b680ef51b4c449291\",\n            \"Description\": \"\",\n            \"isPublic\": true\n        }\n    ],\n    \"tracks\": [\n        {\n            \"track\": {\n                \"_id\": \"5eb1a3d8a5ebd959e08d5731\",\n                \"url\": \"undefined\",\n                \"images\": [],\n                \"duration\": 125,\n                \"availableMarkets\": [\n                    \"eg\",\n                    \"sa\"\n                ],\n                \"trackNumber\": 12,\n                \"name\": \"Alsajda\",\n                \"artistId\": \"5eb0a4659b15d854c08f736a\",\n                \"albumId\": \"5eb0a6a7ec0c444e9c489846\",\n                \"discNumber\": 1,\n                \"explicit\": false,\n                \"type\": \"Track\",\n                \"acousticness\": 19,\n                \"danceability\": 45,\n                \"energy\": 32,\n                \"instrumentalness\": 86,\n                \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n                \"liveness\": 34,\n                \"loudness\": 15,\n                \"mode\": 75,\n                \"speechiness\": 84,\n                \"tempo\": 94,\n                \"timeSignature\": \"2020-05-05T17:35:20.220Z\",\n                \"valence\": 37,\n                \"like\": 0,\n                \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n                \"genre\": [],\n                \"playable\": true\n            },\n            \"isLiked\": false,\n            \"album\": {\n                \"name\": \"Take cover\",\n                \"_id\": \"5eb0a6a7ec0c444e9c489846\",\n                \"artist\": {\n                    \"name\": \"artist9\",\n                    \"_id\": \"5eb0a4659b15d854c08f736a\"\n                }\n            }\n        },\n        {\n            \"track\": {\n                \"_id\": \"5eb0a51eec0c444e9c48982a\",\n                \"url\": \"undefined\",\n                \"images\": [\n                    {\n                        \"_id\": \"5eb0b3e6de66c65e34c18b6e\",\n                        \"height\": 100,\n                        \"width\": 100\n                    }\n                ],\n                \"duration\": 60,\n                \"availableMarkets\": [\n                    \"eg\",\n                    \"sa\"\n                ],\n                \"trackNumber\": 12,\n                \"name\": \"track28\",\n                \"artistId\": \"5eb0a4519b15d854c08f7364\",\n                \"albumId\": \"5eb0a51bec0c444e9c489828\",\n                \"discNumber\": 1,\n                \"explicit\": false,\n                \"type\": \"Track\",\n                \"acousticness\": 23,\n                \"danceability\": 85,\n                \"energy\": 68,\n                \"instrumentalness\": 34,\n                \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n                \"liveness\": 3,\n                \"loudness\": 61,\n                \"mode\": 52,\n                \"speechiness\": 34,\n                \"tempo\": 67,\n                \"timeSignature\": \"2020-05-04T23:28:30.501Z\",\n                \"valence\": 79,\n                \"like\": 0,\n                \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n                \"genre\": [],\n                \"playable\": true\n            },\n            \"isLiked\": false,\n            \"album\": {\n                \"name\": \"Badge of honor\",\n                \"_id\": \"5eb0a51bec0c444e9c489828\",\n                \"artist\": {\n                    \"name\": \"artist3\",\n                    \"_id\": \"5eb0a4519b15d854c08f7364\"\n                }\n            }\n        }\n    ],\n    \"albums\": [\n        {\n            \"album_type\": \"Single\",\n            \"artist\": {\n                \"type\": \"artist\",\n                \"id\": \"5eb0a44b9b15d854c08f7362\",\n                \"name\": \"artist1\"\n            },\n            \"available_markets\": [\n                \"rg\",\n                \"fr\",\n                \"ge\"\n            ],\n            \"images\": [\n                {\n                    \"_id\": \"5eb0b3d3de66c65e34c18b59\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"id\": \"5eb0a498ec0c444e9c48981e\",\n            \"name\": \"Ire desire\",\n            \"type\": \"album\",\n            \"isFollow\": false\n        }\n    ],\n    \"users\": [\n        {\n            \"name\": \"Dai\",\n            \"id\": \"5eb08fce30a9a01f144b722d\",\n            \"type\": \"user\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb51153dd06db2ffca30291\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"country\": \"eg\",\n            \"email\": \"dai.a.elrihany@gmail.com\"\n        }\n    ],\n    \"artists\": [\n        {\n            \"genre\": [\n                \"genre1\",\n                \"genre2\",\n                \"genre3\"\n            ],\n            \"type\": \"artist\",\n            \"name\": \"artist1\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb0b3cede66c65e34c18b56\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"id\": \"5eb0a44b9b15d854c08f7362\",\n            \"info\": \"info about artist 1\",\n            \"popularity\": 42,\n            \"isFollow\": false\n        },\n        {\n            \"genre\": [\n                \"genre1\",\n                \"genre2\",\n                \"genre3\"\n            ],\n            \"type\": \"artist\",\n            \"name\": \"artist13\",\n            \"images\": [\n                {\n                    \"_id\": \"5eb0b43dde66c65e34c18bcb\",\n                    \"height\": 100,\n                    \"width\": 100\n                }\n            ],\n            \"id\": \"5eb0a4749b15d854c08f736e\",\n            \"info\": \"info about artist 13\",\n            \"popularity\": 32,\n            \"isFollow\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Search"
  },
  {
    "type": "DELETE",
    "url": "api/recently-search",
    "title": "remove from search history",
    "name": "remove_from_search_history",
    "group": "Search",
    "description": "<p style=\"color:red;\">remove  an object  from search history  </p> <h1> Request parameters</h1> </br></br><h1> Endpoint</h1>",
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
            "field": "type",
            "description": "<p>the type of object if playlist ,track ,artist ,artist or user</p>"
          },
          {
            "group": "Query parameters",
            "optional": false,
            "field": "id",
            "description": "<p>the object id</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK .</br> On error, the header status code is an error code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request DELETE 'http://localhost:3000/api/recently-search?type=track&id=5eb0a51eec0c444e9c48982a' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwOTAwYTMwYTlhMDFmMTQ0YjcyMzMiLCJwcm9kdWN0IjoicHJlbWl1bSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg5NDkwMTIyLCJleHAiOjQ3MzU5NzY1MjJ9.5oARDdThgR3OvNE7fPp5erVRi9DqiiMvPVe3qXsFsvU' \\\n--header 'Content-Type: application/json' \\",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "api/audio-analysis/{id}",
    "title": "Get Audio Analysis for a Track (not implemented)",
    "name": "Get_Audio_Analysis_for_a_Track",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get a detailed audio analysis for a single track identified by its unique Spotify ID.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "id",
            "description": "<p>Required. The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an audio analysis object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/tracks/audio-features",
    "title": "Get Audio Features for Several Tracks",
    "name": "Get_Audio_Features_for_Several_Tracks",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get audio features for multiple tracks based on their Spotify IDs.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
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
            "field": "ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 100 IDs.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains</br> an object whose key is &quot;audio_features&quot; and whose value is an array of audio features objects in JSON format.</br></br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/tracks/audio-features' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n \"ids\":\"5e8cba1b7f37604d583f8d37,5e8cba367f37604d583f8d39\"\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"5e7f58bb4fe2420d34a881db\": {\n      \"explicit\": false,\n      \"acousticness\": 10,\n      \"danceability\": 23,\n      \"energy\": 23,\n      \"instrumentalness\": 4,\n      \"key\": 90,\n      \"liveness\": 25,\n      \"loudness\": 70,\n      \"mode\": 56,\n      \"speechiness\": 67,\n      \"tempo\": 76,\n      \"valence\": 70\n  },\n  \"5e7f5c6328a1a2111841e5d6\": {\n      \"explicit\": false,\n      \"acousticness\": 10,\n      \"danceability\": 23,\n      \"energy\": 23,\n      \"instrumentalness\": 4,\n      \"key\": 90,\n      \"liveness\": 25,\n      \"loudness\": 70,\n      \"mode\": 56,\n      \"speechiness\": 67,\n      \"tempo\": 76,\n      \"valence\": 70\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/track/audio-features/{id}",
    "title": "Get Audio Features for a Track",
    "name": "Get_Audio_Features_for_a_Track",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get audio feature information for a single track identified by its unique Spotify ID.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "id",
            "description": "<p>Required. The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an audio features object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/track/audio-features/5e8cba1b7f37604d583f8d37' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"explicit\": false,\n  \"acousticness\": 10,\n  \"danceability\": 23,\n  \"energy\": 23,\n  \"instrumentalness\": 4,\n  \"key\": 90,\n  \"liveness\": 25,\n  \"loudness\": 70,\n  \"mode\": 56,\n  \"speechiness\": 67,\n  \"tempo\": 76,\n  \"valence\": 70\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/tracks",
    "title": "Get Several Tracks",
    "name": "Get_Several_Tracks",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for multiple tracks based on their Spotify IDs.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body Parameters": [
          {
            "group": "Body Parameters",
            "optional": false,
            "field": "ids",
            "description": "<p>Required. A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains an object whose key is tracks and whose value is an array of track objects in JSON format.</br> Objects are returned in the order requested. If an object is not found, a null value is returned in the appropriate position.</br> Duplicate ids in the query will result in duplicate objects in the response. </br>On error, the header status code is an error code and the response body contains an error object. in 404</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/tracks' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\\n--data-raw '{\n\"ids\":\"5e8cba1b7f37604d583f8d37,5e8cba367f37604d583f8d39\"\n\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n      \"track\": {\n          \"availableMarkets\": [\n              \"ttyt,rewwf,fff\"\n          ],\n         \"_id\": \"5e7f58bb4fe2420d34a881db\",\n         \"trackNumber\": 55,\n         \"name\": \"frist\",\n        \"artistId\": \"5e7ef28326e2fa0da04f81ae\",\n       \"albumId\": \"5e7f44905cce7d09a82e5a75\",\n       \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 10,\n        \"danceability\": 23,\n        \"energy\": 100,\n        \"instrumentalness\": 4,\n        \"key\": 90,\n        \"liveness\": 25,\n        \"loudness\": 70,\n        \"mode\": 56,\n        \"speechiness\": 67,\n        \"tempo\": 76,\n        \"timeSignature\": \"2000-01-31T22:00:00.000Z\",\n        \"valence\": 70,\n        \"__v\": 0\n    },\n    \"isLiked\": true,\n    \"album\": {\n        \"name\": \"album1\",\n        \"_id\": \"5e7f44905cce7d09a82e5a75\",\n        \"artist\": {\n            \"name\": \"artist1\",\n            \"_id\": \"5e7ef28326e2fa0da04f81ae\"\n        }\n    }\n},\n{\n   \"track\": {\n       \"availableMarkets\": [\n           \"ttyt,rewwf,fff\"\n       ],\n       \"_id\": \"5e7f58bb4fe2420d34a881db\",\n       \"trackNumber\": 55,\n       \"name\": \"frist\",\n       \"artistId\": \"5e7ef28326e2fa0da04f81ae\",\n       \"albumId\": \"5e7f44905cce7d09a82e5a75\",\n       \"discNumber\": 1,\n       \"explicit\": false,\n       \"type\": \"Track\",\n       \"acousticness\": 10,\n       \"danceability\": 23,\n       \"energy\": 100,\n       \"instrumentalness\": 4,\n       \"key\": 90,\n       \"liveness\": 25,\n       \"loudness\": 70,\n       \"mode\": 56,\n       \"speechiness\": 67,\n       \"tempo\": 76,\n       \"timeSignature\": \"2000-01-31T22:00:00.000Z\",\n       \"valence\": 70,\n       \"__v\": 0\n   },\n   \"isLiked\": true,\n   \"album\": {\n       \"name\": \"album1\",\n       \"_id\": \"5e7f44905cce7d09a82e5a75\",\n       \"artist\": {\n           \"name\": \"artist1\",\n           \"_id\": \"5e7ef28326e2fa0da04f81ae\"\n       }\n   }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/me/track/{id}",
    "title": "Get a Track",
    "name": "Get_a_Track",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for a single track identified by its unique Spotify ID.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
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
            "description": "<p>Required.The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a track object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/me/track/5e8cba1b7f37604d583f8d37' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"availableMarkets\": [\n        \"ttyt,rewwf,fff\"\n    ],\n    \"_id\": \"5e7f58bb4fe2420d34a881db\",\n    \"trackNumber\": 55,\n    \"name\": \"frist\",\n    \"artistId\": \"5e7ef28326e2fa0da04f81ae\",\n    \"albumId\": \"5e7f44905cce7d09a82e5a75\",\n    \"discNumber\": 1,\n    \"explicit\": false,\n    \"type\": \"Track\",\n    \"acousticness\": 10,\n    \"danceability\": 23,\n    \"energy\": 100,\n    \"instrumentalness\": 4,\n    \"key\": 90,\n    \"liveness\": 25,\n    \"loudness\": 70,\n    \"mode\": 56,\n    \"speechiness\": 67,\n    \"tempo\": 76,\n    \"timeSignature\": \"2000-01-31T22:00:00.000Z\",\n    \"valence\": 70,\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/track/{id}",
    "title": "Get a Track",
    "name": "Get_a_Track_with_artist_name_&_isLike",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">Get Spotify catalog information for a single track identified by its unique Spotify ID.and get track artist name ,album name and if user like this track or no </p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
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
            "description": "<p>Required.The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a track object in JSON format. </br>On error, the header status code is an error code and the response body contains an error object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/track/5e8cba1b7f37604d583f8d37' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\\n--header 'Content-Type: application/json' \\\n \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"track\": {\n        \"availableMarkets\": [\n            \"ttyt,rewwf,fff\"\n        ],\n        \"_id\": \"5e7f58bb4fe2420d34a881db\",\n        \"trackNumber\": 55,\n        \"name\": \"frist\",\n        \"artistId\": \"5e7ef28326e2fa0da04f81ae\",\n        \"albumId\": \"5e7f44905cce7d09a82e5a75\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 10,\n        \"danceability\": 23,\n        \"energy\": 100,\n        \"instrumentalness\": 4,\n        \"key\": 90,\n        \"liveness\": 25,\n        \"loudness\": 70,\n        \"mode\": 56,\n        \"speechiness\": 67,\n        \"tempo\": 76,\n        \"timeSignature\": \"2000-01-31T22:00:00.000Z\",\n        \"valence\": 70,\n        \"__v\": 0\n    },\n    \"isLiked\": true,\n    \"album\": {\n        \"name\": \"album1\",\n        \"_id\": \"5e7f44905cce7d09a82e5a75\",\n        \"artist\": {\n            \"name\": \"artist1\",\n            \"_id\": \"5e7ef28326e2fa0da04f81ae\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "/api/tracks/related/full-track/{track_id}",
    "title": "get related full tracks for specific track",
    "name": "get_related_full_tracks",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">get related full tracks for specific track based on its genre. and first element is always the current track full info</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>Required. The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success 200 and get array of related tracks, on error or if no tracks then 404 not found</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/tracks/related/full-track/5e9b5e2de9c8d87fdc2eca81' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n    {\n        \"track\": {\n            \"availableMarkets\": [\n                \"\\\"eg\\\"\"\n            ],\n            \"genre\": [\n                \"quran\",\n                \"\"\n            ],\n            \"_id\": \"5e9b5e2de9c8d87fdc2eca81\",\n            \"url\": \"undefined\",\n            \"images\": [],\n            \"duration\": 3000,\n            \"trackNumber\": 1,\n            \"name\": \"el-doha\",\n            \"artistId\": \"5e9b5b656dff8d6ee4c13bbc\",\n            \"albumId\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"discNumber\": 1,\n            \"explicit\": false,\n            \"type\": \"Track\",\n            \"acousticness\": 36,\n            \"danceability\": 84,\n            \"energy\": 97,\n            \"instrumentalness\": 35,\n            \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n            \"liveness\": 84,\n            \"loudness\": 71,\n            \"mode\": 82,\n            \"speechiness\": 70,\n            \"tempo\": 66,\n            \"timeSignature\": \"2020-04-18T20:08:13.905Z\",\n            \"valence\": 0,\n            \"like\": 0,\n            \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n            \"__v\": 1\n        },\n        \"isLiked\": false,\n        \"album\": {\n            \"name\": \"quranAlbum\",\n            \"_id\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"artist\": {\n                \"name\": \"holy quran\",\n                \"_id\": \"5e9b5b656dff8d6ee4c13bbc\"\n            }\n        }\n    },\n    {\n        \"track\": {\n            \"availableMarkets\": [\n                \"\\\"eg\\\"\"\n            ],\n            \"genre\": [\n                \"quran\",\n                \"5403\"\n            ],\n            \"_id\": \"5e9b64e4e9c8d87fdc2ecbd8\",\n            \"url\": \"undefined\",\n            \"images\": [],\n            \"duration\": 3000,\n            \"trackNumber\": 1,\n            \"name\": \"el-sharh\",\n            \"artistId\": \"5e9b5b656dff8d6ee4c13bbc\",\n            \"albumId\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"discNumber\": 1,\n            \"explicit\": false,\n            \"type\": \"Track\",\n            \"acousticness\": 39,\n            \"danceability\": 67,\n            \"energy\": 56,\n            \"instrumentalness\": 85,\n            \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n            \"liveness\": 99,\n            \"loudness\": 37,\n            \"mode\": 26,\n            \"speechiness\": 4,\n            \"tempo\": 41,\n            \"timeSignature\": \"2020-04-18T20:36:52.877Z\",\n            \"valence\": 20,\n            \"like\": 0,\n            \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n            \"__v\": 0\n        },\n        \"isLiked\": false,\n        \"album\": {\n            \"name\": \"quranAlbum\",\n            \"_id\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"artist\": {\n                \"name\": \"holy quran\",\n                \"_id\": \"5e9b5b656dff8d6ee4c13bbc\"\n            }\n        }\n    },\n    {\n        \"track\": {\n            \"availableMarkets\": [\n                \"\\\"eg\\\"\"\n            ],\n            \"genre\": [\n                \"quran\",\n                \"\"\n            ],\n            \"_id\": \"5e9b62c3e9c8d87fdc2ecb58\",\n            \"url\": \"undefined\",\n            \"images\": [],\n            \"duration\": 3000,\n            \"trackNumber\": 1,\n            \"name\": \"el-kyama\",\n            \"artistId\": \"5e9b5b656dff8d6ee4c13bbc\",\n            \"albumId\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"discNumber\": 1,\n            \"explicit\": false,\n            \"type\": \"Track\",\n            \"acousticness\": 25,\n            \"danceability\": 78,\n            \"energy\": 30,\n            \"instrumentalness\": 85,\n            \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n            \"liveness\": 69,\n            \"loudness\": 76,\n            \"mode\": 6,\n            \"speechiness\": 44,\n            \"tempo\": 8,\n            \"timeSignature\": \"2020-04-18T20:27:47.497Z\",\n            \"valence\": 36,\n            \"like\": 0,\n            \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n            \"__v\": 0\n        },\n        \"isLiked\": false,\n        \"album\": {\n            \"name\": \"quranAlbum\",\n            \"_id\": \"5e9b5de4e9c8d87fdc2eca7f\",\n            \"artist\": {\n                \"name\": \"holy quran\",\n                \"_id\": \"5e9b5b656dff8d6ee4c13bbc\"\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "/api/tracks/related/{track_id}",
    "title": "get related tracks for specific track",
    "name": "get_related_tracks",
    "group": "Tracks",
    "description": "<p style=\"color:red;\">get related tracks for specific track based on its genre.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "track_id",
            "description": "<p>Required. The Spotify ID for the track.</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success 200 and get array of related tracks, on error or if no tracks then 404 not found</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request GET 'http://localhost:3000/api/tracks/related/5e9b64e4e9c8d87fdc2ecbd8' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg3MjM4MzE3LCJleHAiOjQ3MzM3MjQ3MTd9.QeijMcfcRjP3SzXFfT58cCnrTBVYEL7boMp9XYDKc2U' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n    {\n        \"availableMarkets\": [\n            \"\\\"eg\\\"\"\n        ],\n        \"genre\": [\n            \"quran\",\n            \"\"\n        ],\n        \"_id\": \"5e9b62c3e9c8d87fdc2ecb58\",\n        \"url\": \"undefined\",\n        \"images\": [],\n        \"duration\": 3000,\n        \"trackNumber\": 1,\n        \"name\": \"el-kyama\",\n        \"artistId\": \"5e9b5b656dff8d6ee4c13bbc\",\n        \"albumId\": \"5e9b5de4e9c8d87fdc2eca7f\",\n        \"discNumber\": 1,\n        \"explicit\": false,\n        \"type\": \"Track\",\n        \"acousticness\": 25,\n        \"danceability\": 78,\n        \"energy\": 30,\n        \"instrumentalness\": 85,\n        \"key\": \"pGMaFTpEPfnu0FkwQ9t1GQ\",\n        \"liveness\": 69,\n        \"loudness\": 76,\n        \"mode\": 6,\n        \"speechiness\": 44,\n        \"tempo\": 8,\n        \"timeSignature\": \"2020-04-18T20:27:47.497Z\",\n        \"valence\": 36,\n        \"like\": 0,\n        \"keyId\": \"88XgNh5mVLKPgEnHeLI5Rg\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "api/me",
    "title": "Get Current User's Profile",
    "name": "Get_Current_User's_Profile",
    "group": "Users_Profile",
    "description": "<p style=\"color:red;\">Get detailed profile information about the current user (including the current user’s username).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a user object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.</br></br></br> <b>Important!</b> If the user-read-email scope is authorized, </br>the returned JSON will include the email address that was entered when the user created their Spotify account.</br> This email address is unverified; do not assume that the email address belongs to the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/me' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[{\"_id\":\"5e80a8c6dd73fc4fa469b0ba\",\n\"email\":\"bahaaeldeen1999@gmail.com\",\n\"displayName\":\"bahaaEldeen\",\n\"gender\":\"Male\",\"country\":\"eg\",\n\"birthDate\":\"1999-01-11T22:00:00.000Z\",\n\"product\":\"free\",\n\"images\":[]}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Users_Profile"
  },
  {
    "type": "get",
    "url": "api/me-player",
    "title": "Get  Current User's Profile with player info",
    "name": "Get_Current_User's_Profile_with_player_info_and_product",
    "group": "Users_Profile",
    "description": "<p style=\"color:red;\">Get detailed profile information about the current user (including the current user’s username).</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
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
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a user object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> When requesting fields that you don’t have the user’s authorization to access, it will return error 403 Forbidden.</br></br></br> <b>Important!</b> If the user-read-email scope is authorized, </br>the returned JSON will include the email address that was entered when the user created their Spotify account.</br> This email address is unverified; do not assume that the email address belongs to the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/me-player' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n    {\n        \"displayName\": \"Aya\",\n        \"email\": \"ayasabohadima@gmail.com\",\n        \"birthDate\": \"2000-02-20T00:00:00.000Z\",\n        \"country\": \"eg\",\n        \"product\": \"premium\",\n        \"gender\": \"female\",\n        \"images\": [\n            {\n                \"_id\": \"5eb51185dd06db2ffca302a3\",\n                \"height\": 100,\n                \"width\": 100\n            }\n        ],\n        \"userType\": \"Artist\",\n        \"player\": {\n            \"source_name\": \"playlist\",\n            \"is_shuffled\": false,\n            \"volume\": 4,\n            \"is_repeat\": false,\n            \"current_source\": \"5eb5246b680ef51b4c449291\",\n            \"isPlaylist\": true,\n            \"currentTimeStampe\": 0,\n            \"isRepeatTrack\": false,\n            \"haveQueue\": true\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Users_Profile"
  },
  {
    "type": "get",
    "url": "api/users/{id}",
    "title": "Get a User's Profile",
    "name": "Get_a_User's_Profile",
    "group": "Users_Profile",
    "description": "<p style=\"color:red;\">Get public profile information about a Spotify user.</p> <h1>Request Parameters</h1></br></br> <h1> Endpoint</h1>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-auth-token",
            "description": "<p>Required. A valid access token from the Spotify Accounts service.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "PathParameters": [
          {
            "group": "PathParameters",
            "optional": false,
            "field": "id",
            "description": "<p>The user’s Spotify user ID.</p>"
          }
        ],
        "Removing Specific Occurance of a Track in a Specific Playlist Snapshot": [
          {
            "group": "Removing Specific Occurance of a Track in a Specific Playlist Snapshot",
            "optional": false,
            "field": "REQUEST_DATA",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "Format",
            "description": "<p>On success, the HTTP status code in the response header is 200 OK and the response body contains a user object in JSON format.</br> On error, the header status code is an error code and the response body contains an error object.</br> If a user with that user_id doesn’t exist, the status code is 404 NOT FOUND.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "curl --location --request GET 'http://localhost:3000/api/users/5e8cb12e084a9d2e6c8f21d9' \\\n--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThjYjExODA4NGE5ZDJlNmM4ZjIxZDciLCJwcm9kdWN0IjoiZnJlZSIsInVzZXJUeXBlIjoiQXJ0aXN0IiwiaWF0IjoxNTg2NTk3MDk4LCJleHAiOjQ3MzMwODM0OTh9.uP8Qm7K7537QBib4HGVEG1BF_Neb-o8EGeSRwwDwbRM' \\",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e80a8c6dd73fc4fa469b0ba\",\n    \"displayName\": \"bahaaEldeen\",\n    \"images\": [],\n    \"type\": \"user\",\n    \"followedBy\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "ApiDocumentation/Public_code/doc.js",
    "groupTitle": "Users_Profile"
  }
] });
