var request = require("request");
if (process.argv[2]="concert-this"){
var artist = process.argv[3];

var queryUrl = "https://rest.bandsintown.com/artists/" + artist +
    "/events?app_id=codingbootcamp";
request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body))
    }
})}
