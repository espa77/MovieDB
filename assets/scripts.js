
var url = "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=";
var page = null;

var data = $.getJSON( url + page, function( data, page ) {
  var results = data.results;
  var totalResults = data.total_results;
  var totalPages = data.total_pages;
  $.each( results, function( key, val ) {
      var title = this.title;
      var uniqueId = this.id;
      var releaseDate = Date.create(this.release_date).short();
      var popularity = Math.round(this.popularity);
      var overview = this.overview;
      var voteAvg = this.vote_average;
      var posterUrl = "http://image.tmdb.org/t/p/w300" + this.poster_path;
      $(".grid-container").append(
        "<div class='col-4'><p><a href='#openModal" + uniqueId + "' rel='modal:open'><img src='" +
        posterUrl + "' alt='" + title +"'></a><span class='title'>" +
        title + "</span></div>");
      $(".modal-container").append(
        "<div id=openModal" + uniqueId + " class='modal'><img src='" +
        posterUrl + "' alt='" + title +"'><h1>" +
        title + "</h1><h2>Release date: " + releaseDate + "<br><br>Popularity: " + popularity + "<br><br>Average vote: " + voteAvg + "</h2><br><h3>" +
        overview + "</h3>"
      );
      $('img').error( function() {
      $(this).attr('src', 'http://lorempixel.com/300/450/nightlife');
    });
  });
  paginate(totalPages, page);
});


function paginate(totalPages, page){
  if (page == "success") {
    page = 1;
  }
  $('.center').pagination({
      pages: totalPages,
      cssStyle: 'compact-theme',
      currentPage : page,
      onPageClick : function(page){
        showProjectPage(page);
      }
  });
}

function showProjectPage(page){
  $(".col-4").remove();
  $(".modal").remove();
  $.getJSON( url + page, function( data ) {
    var page = data.page;
    var results = data.results;
    var totalResults = data.total_results;
    var totalPages = data.total_pages;
    $.each( results, function( key, val ) {
        var title = this.title;
        var uniqueId = this.id;
        var releaseDate = Date.create(this.release_date).short();
        var popularity = Math.round(this.popularity);
        var overview = this.overview;
        var voteAvg = this.vote_average;
        var posterUrl = "http://image.tmdb.org/t/p/w300" + this.poster_path;
        $(".grid-container").append(
          "<div class='col-4'><p><a href='#openModal" + uniqueId + "' rel='modal:open'><img src='" +
          posterUrl + "' alt='" + title +"'></a><span class='title'>" +
          title + "</span></div>");
        $(".modal-container").append(
          "<div id=openModal" + uniqueId + " class='modal'><img src='" +
          posterUrl + "' alt='" + title +"'><h1>" +
          title + "</h1><h2>Release date: " + releaseDate + "<br><br>Popularity: " + popularity + "<br><br>Average vote: " + voteAvg + "</h2><br><h3>" +
          overview + "</h3>"
        );
        $('img').error( function() {
        $(this).attr('src', 'http://lorempixel.com/300/450/nightlife');
      });
    });
  });
}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 502) {
            $('li').eq(4).hide();
            $('li').eq(5).hide();
            $('li').eq(7).hide();
    }
});

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 502) {
            $('li').eq(4).show();
            $('li').eq(5).show();
            $('li').eq(7).show();
    }
});
