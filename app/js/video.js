$('document').ready(function(){
  // play/pause
  $('#video, #play-pause').on('click', function(){
    if (video.paused == true) {
      video.play();
      $('#play-pause').text('||');
    } else {
      video.pause();
      $('#play-pause').text('>');
    }
  });
  //mute
  $('#mute').on('click', function(){
    if (video.muted == true) {
      video.muted = false;
      $('#mute').text('Mute');
    } else {
      video.muted = true;
      $('#mute').text('Unmute');
    }
  });
  //progress slider
  $('#seek-bar').on('change', function(){
    var time =  video.duration * ($('#seek-bar').val() / 100);
    video.currentTime = time;
  });
  $('#video').bind('timeupdate', function(){
    var value = (100 / video.duration) * video.currentTime;
    $('#seek-bar').val(value);
  });
  $('#seek-bar').on('mousedown', function(){
    video.pause();
  });
  $('#seek-bar').on('mouseup', function(){
    video.play();
  });
  //volume slider
  $('#volume-bar').on('change', function(){
    video.volume = $(this).val();
  })
  //full-screen
  $('#full-screen').on('click', function(){
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });
})
