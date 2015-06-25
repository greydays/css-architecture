var get = function(e) {
  $('.album').empty();
  var getTags = "awesome, " + $('#flick_tags').val();
  var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var options = {
    tags: getTags,
    format: "json"
  };
  function showPhotos(data) {
    var photoList = '<ul class="album_contents container">';
    $.each(data.items, function(i, photo) {
      photoList += '<li class="album_li">';
      photoList += '<a href="' + photo.link + '">';
      photoList += '<img class="album_photo" src="' + photo.media.m + '"></a></li>';
    });
    photoList += '</ul>';
    $('.album').html(photoList);
  }
  $.getJSON(flickrAPI, options, showPhotos);
  $('#flick_tags').val('')
};

$('document').ready(function() {
  get();
});
$('#get_photos').click(function(e) {
  e.preventDefault();
  get();
});
$('#flick_tags').keydown(function(p) {
  if (p.keyCode == 13) {
    get();
  }
});
