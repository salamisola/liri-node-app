require('dotenv').config();
//var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var axios = require('axios');
const moment = require('moment');
//accessing keys info
var spotify = new Spotify({
  id: '94566d9847e54475aabde2dd0d4d1430',
  secret: '7d84738803204f86af3a730f71af33f9'
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
var chooseApp = function(caseData, functionData){
	switch(caseData){
		case "spotify-this-song":
		spotifyThisSong(functionData);
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