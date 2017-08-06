(function () {
    function SongPlayer (Fixtures) {
        var SongPlayer = {};
        var currentAlbum = Fixtures.getAlbum();

        /**
        @function getSongIndex
        @desc gets index number of active song
        @type {Object}
        @return number
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
};

/**
* @desc Buzz object audio file
* @type {Object}
*/
        var currentBuzzObject = null;

/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/

        var setSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
             }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });

             SongPlayer.currentSong = song;
          };

        SongPlayer.SongPlayer.currentSong = null;  //Why is this repeated here as stated in cp 8?//

        /**
        @function .play
        @desc Plays song selected if no song is SongPlayer.currentSong is null or if SongPlayer.currentSong is paused, then sets new song with setSong
        @param {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {

            setSong(song);

            playSong (song);
        }
      };

      /**
       @function .pause
       @desc Pauses SongPlayer.currentSong, then sets song.playing to false
       @param {Object} song
       */
      SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong; //What exactly is the purpose of adding this line?
            currentBuzzObject.pause();
            song.playing = false;
      };

      /**
        @function .previous
        @desc finds index of active song and decrements it by one, change active song to new song index
        */
      SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song;)
            }
      };

      function playSong (song)  {
            currentBuzzObject.play ();
            song.playing = true;


      }

        return SongPlayer;
    }



    angular
        .module('blocJams')
        .factory('SongPlayer',['Fixtures', SongPlayer]);

}) ();
