var request = require("request");

song = process.argv[2]
var queryUrl = "http://api.spotify.com/v1/songs/" +
 song + "/SPOTIFY_ID=07877603dfc74315b1b07dfdd598c668/SPOTIFY_SECRET=1866f9105b73481bbcdd4dfa11605786";
 request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body))}})
