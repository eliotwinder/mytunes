// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
      this.playFirst();
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },
});
    //   this.shift();
    //   console.log('this')
    //   if(this.length > 0){
    //     this.playFirst(this.at(0));
    //   }
    // }, this);