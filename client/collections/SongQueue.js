// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log(song);
      this.remove()
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