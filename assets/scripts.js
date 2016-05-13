var data = $.getJSON( "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c", function( data ) {
  var items = [];
  var results = data.results;
  var total_pages = data.total_pages;
  $.each( results, function( key, val ) {
      var title = this.title;
      var posterUrl = "http://image.tmdb.org/t/p/w300" + this.poster_path;
      var posterImg =
      $(".grid-container").append("<div class='col-4'><p><img src='" + posterUrl + "'><span class='title'>" + title + "</span></div>");
      $('img').error( function() {
      $(this).attr('src', 'http://lorempixel.com/300/450/nightlife');
    });
  });
});

// $(".grid-container").find(".col-4").append("<p><img src='" + url + "'>");

// var movie_details = {}, title = [], overview = [], popularity = [], vote_count = [], vote_average = [];
// results.forEach(
//   title: results.title,
//   overview: results.overview,
//   popularity: results.popularity,
//   voteCount: results.vote_count,
//   voteAvg: results.vote_average
// };
