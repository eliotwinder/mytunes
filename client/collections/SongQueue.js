// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst(this.at(0));
      }
    }, this);

    this.on('ended', function(){
      console.log(this);
      console.log('hi');
    }, this);
  },

  playFirst: function(song) {
    song.play();
  }


});
    //   this.shift();
    //   console.log('this')
    //   if(this.length > 0){
    //     this.playFirst(this.at(0));
    //   }
    // }, this);