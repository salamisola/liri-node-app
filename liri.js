require('dotenv').config();
var keys = require('./keys.js'); 
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var axios = require('axios');
const moment = require('moment');
//accessing keys info
console.log(keys)
var spotify = new Spotify({
  id:keys.spotify.id,
  secret:keys.spotify.secret
});

var spotifyThisSong = function(songName){
	var song = songName;
	//if no song is provided, use deafult song defined below
	if(!song){
		song = "the sign Ace of Base"
	}
	//input whatever in the variable songName inside the search function
	//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
	spotify.search({ type: 'track', query: song }, function(err, data) {
	  if (err) {
		console.log('Error occurred: ' + err);
		return ;
      }
      //console.log(data); 
	//console.log(data.tracks.items[0]); 
		var songs = data.tracks.items;
		//loop through songs and display all the attributes mentions below
		for(var i=0; i<songs.length; i++){
			console.log(i);
			//console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
			console.log('artist(s): ' + songs[i].artists[0].name);
			console.log('Song name: '+ songs[i].name);
			console.log('Preview Song: '+ songs[i].preview_url);
			console.log('Album: '+ songs[i].album.name);
			console.log('--------------------------------------------');
		}
	});
}

var concertThis = function(artistEvent){
	var artist = artistEvent;
	/* request('https://rest.bandsintown.com/artists/" + artist + '/events?app_id=codingbootcamp', function (error, response, body) {
		if(!error && response.statusCode = 200){ */
			request("https://rest.bandsintown.com/artists/" + artist + '/events?app_id=codingbootcamp', function (error, response, body) {
		if(!error && response.statusCode == 200){
		var band = JSON.parse(body); 
			if(band.length > 0){
				for(var i = 0; i < band.length; i++){
					console.log('Venue Name: ' + band[i].venue.name);
					console.log("Venue Location: " + band[i].venue.city + "," + band[i].venue.region+', ' + band[i].venue.country);
					console.log('Venue Location: ' +  band[i].venue.latitude + ", " + band[i].venue.longitude );	

					//var concertDate = moment(band[i].datetime).format("MM/DD/YYYY hh:ss A");
					var concertDate = moment(band[i].datetime).format("MM/DD/YYYY");
					console.log('Date of Event: ' + concertDate);
					console.log('--------------------------------------------');
				}
			}else {
				console.log('Concert or band info not available');
			}
	  }
		
	});
	

}

var movieThis = function(movieName){
	request('http://www.omdbapi.com/?i=tt3896198&apikey=d7cdd585&t=' + movieName + ' &y=&plot=short&r=json', function (error, response, body) {
	  //console.log('error:', error); // Print the error if one occurred
 	   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  //console.log('body:', body); // Print the HTML for the Google homepage.
	   if(!error && response.statusCode ==200){
		var jsonData = JSON.parse(body); 
		console.log('Title: '+  jsonData.Title);	
		console.log('Year: '+  jsonData.Year);	
		console.log('Rated: '+  jsonData.Rated);	
		console.log('IMDB Rating: '+  jsonData.imdbRating);	
		console.log('Country: '+  jsonData.Country);	
		console.log('Language: '+  jsonData.Language);	
		console.log('Plot: '+  jsonData.Plot);	
		console.log('Actors: '+  jsonData.Actors);	
		console.log('Rotten Tomatoes Rating: '+  jsonData.tomatoRating);
		console.log('Rotten Tomatoes URL: '+  jsonData.tomatoURL);			
	  }
	 
	});
		
}

var chooseApp = function(caseData, functionData){
	switch(caseData){
		case "spotify-this-song":
		spotifyThisSong(functionData);
		break;
		case "concert-this":
		concertThis(functionData);
		break;
		default:
		console.log('LIRI does not know');
		break;
	}
}


var userInput = function(argOne, argTwo){
	chooseApp(argOne, argTwo)
};

userInput(process.argv[2], process.argv[3]);