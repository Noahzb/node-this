var request = require("request");
if (process.argv[2] == "movie-this")
{
var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" +
 movieName + "&y=&plot=short&apikey=trilogy";
 console.log(queryUrl);
 request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Title:" +" "+ JSON.parse(body).Title+"\n"
        + "year released:"+" "+JSON.parse(body).Year
        +"\n"+"Imdb rating:"+" "+JSON.parse(body).Ratings[0].Value
        +"\n"+"Rotten Tomatoes rating:"+" "+JSON.parse(body).Ratings[1].Value
        +"\n"+"Country of Origin:"+ " " +JSON.parse(body).Country
        +"\n"+"Language:"+ " "+JSON.parse(body).Language
        +"\n"+"plot:"+" "+JSON.parse(body).Plot
        +"\n"+"Actors:"+" "+JSON.parse(body).Actors);
    }})}
 else if (process.argv[2] == "concert-this"){
    var artist = process.argv[3];
    
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist +
        "/events?app_id=codingbootcamp";
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body))
            //no body.title or body.venue or anything would work.
            //would give me errors of it not existing
            //tried to use prettify programs to make the response easier to read
            //and was given error messages by every prettifier i used
            //tried json.stringify and was given the same errors
            //still kind of works, but just returns all of the data
            //instead of what i need
        
        }
    })}
 else if (process.argv[2] == "song-this"){
    song = process.argv[3]
    var queryUrl = "http://api.spotify.com/v1/songs/" +
     song + "/SPOTIFY_ID=07877603dfc74315b1b07dfdd598c668/SPOTIFY_SECRET=1866f9105b73481bbcdd4dfa11605786";
     request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body))}})
 }
 //have searched and searched for the documentation 
 //but get told i have no authorization every time