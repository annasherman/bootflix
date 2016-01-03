// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */
app.getMovieById = function getMovieById(id) {

  console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");


  // request URL for omdb's id search
  // http://www.omdbapi.com/?i=tt0095016&plot=full&r=json
  $.ajax({
    url: 'http://www.omdbapi.com/?i='+id+'&plot=full&r=json',
    type: 'GET',
    dataType: 'json',
    data: {param1: 'value1'},
  })
  .done(function(data) {
    console.log("success");
    var movie = new app.MovieModel(data);
    console.log(data);
    var view = new app.MovieView(movie);
  })
  .fail(function() {
    console.log("error");
  });

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM

}

/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {

  console.log("app.getMovieByTitle() has been called. the form stares at you blankly. wait, what? A title of '" + title + "' was entered");

    $.ajax({
    url: 'http://www.omdbapi.com/?t='+title+'&plot=full&r=json',
    type: 'GET',
    dataType: 'json',
    data: {param1: 'value1'},
   })
  .done(function(data) {
    console.log("success");
    var movie = new app.MovieModel(data);
    console.log(data);
    var view = new app.MovieView(movie);
  })
  .fail(function() {
    console.log("error");
  });
  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM


}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(data) {

  this.Actors = data.Actors;
  this.Awards = data.Awards;
  this.Country = data.Country;
  this.Director = data.Director;
  this.Genre = data.Genre;
  this.Language = data.Language;
  this.Metascore = data.Metascore;
  this.Plot = data.Plot;
  this.Poster = data.Poster;
  this.Rated = data.Rated;
  this.Released = data.Released;
  this.Response = data.Response;
  this.Runtime = data.Runetime;
  this.Title = data.Title;
  this.Type = data.Type;
  this.Writer = data.Writer;
  this.Year = data.Year;
  this.imdbID = data.imdbID;
  this.imdbRating = data.imdbRating;
  this.imdbVotes = data.imdbVotes
  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model
}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {

  // options should contain the `model` for which the view is using
  this.render = function(){
    var el = $('#movie-listing');
    el.append("<div class='movie'><table><tr><td><img src='http://img.omdbapi.com/?i="+options.imdbID+"&apikey=d31f1a94' alt="+options.Title+"></td><td><h3>"+options.Title+"</h3><p><strong>Released:</strong>"+options.Year+"<br><strong>Directed By:</strong>"+options.Director+"<br><em>"+options.Genre+"</em></p><p>"+options.Plot+"</p></td></tr></table><button id='delete'>Remove</button></div>");
  };
  this.render();
  // 1. create a view
  // 2. create a render() method
  // 3. render() should a div with a class of '.movie' via string concatenation
  //    you will want to add the id, title, rating, director, plot, year,
  //    and genre. See design/movielayout.html
  // 4. finally, render() will $(selector).append() each new '.movie' to "#movie-listing".

}


$(document).ready(function() {
  console.log('window is ready');
  $("body").on("click", "#delete", function () {
    console.log("whoo");
    $(this).closest('div').remove();
  });
});
