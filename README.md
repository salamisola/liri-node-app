# liri-node-app
Summary:
LIRI is like iPhone's SIRI. But, instead of SIRI using Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI uses a command line node app that takes in parameters and gives a response to the user in the form of a command line text.

Operations:

Liri takes in any of the commands listed below and responds as detailed under each command.

   * `concert-this`
   Command: node liri concert-this "name of artist"
   Response: Liri will display all info related to upcoming concerts by the "artist" on the terminal. the information will contain details such as date of event, venue, and so on
   Resource: Data containing all details regarding each concert is retrieved through the Band in Town API. Link URL as below:
   "https://rest.bandsintown.com/artists/" + artist + '/events?app_id=USER_KEY'


   * `spotify-this-song`
   Command: node liri spotify-this-song "name of song"
   Response: Liri will display all info related to related to the song on the terminal. The information will contain details such as the year of release of the song, name of the artist, and so on
   Resource: Data containing all details regarding each song is retrieved through the Spotify API using their node packages. 

   * `movie-this`
   Command: node liri spotify-this-song "name ofmovie"
   Response: Liri will display all info related to related to the movie on the terminal. The information will contain details such as the year of release of the movie, name of the actors and actresses, rotten tomato rating and so on
   Resource: Data containing all details regarding each movie is retrieved through the OMDB API using their node packages.

   * `do-what-it-says`
   Command: node liri do-what-it-says 
   Response: Liri will execute a command as contained in the random.txt file. In this case it should spotify the song "I want it that way"
   Comment: This is not working well yet. Needs more work*****

Each of the functionality commands has been tested and screenshots taken. The screenshots are saved in a google drive and made available througha shring link.

# Below is the link to the screenshots of liriApp functions being tested.
https://docs.google.com/document/d/1jkwgdMKmkYgeCJR7ct5wtAUApM3bB7dThdhMArDv7bI/edit?usp=sharing.

Additional functions: It the user types no song name under "spotify-this-song" command, liri defaults to songs by Ace of Base
                      If user types no movie under "movie-this" command, liri defaults to the movie "Mr. Nobody"


