// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    //console.log(this.$el);
    
    var that = this.model; // ********* find a better way ************ //
    this.$el.on('ended', function(){
      console.log(that);
      that.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    console.log(this.model);
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
