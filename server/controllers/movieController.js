const { saveMovie, deleteMovie, getFavorites } = require('../models/movieModel.js');
const { getGenres, getMoviesByGenre } = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // attaches an array of movie objects to the response
    getMoviesByGenre(req.query.id)
      .then(movies => res.send(movies))
      .catch(err => console.error('ERROR WITH getMoviesByGenre IN apiHelpers'));
  },
  getGenres: (req, res) => {
    // attaches an array of genre object to the response
    getGenres()
      .then(genres => {
        res.send(genres);
      })
      .catch(err => console.error('ERROR WITH getGenres IN apiHelpers: ', err));
  },
  saveMovie: (req, res) => {
    // returns a promise that resolves with the id of the inserted movie
    saveMovie(req.body);
    res.send();
  },
  deleteMovie: (req, res) => {
    console.log('req.body.id: ', req.body.id);
    deleteMovie(req.body.id);
    res.send();
  },
  getFavorites: (req, res) => {
    getFavorites()
      .then(movies => res.send(movies))
      .catch(err => console.error('ERROR CALLING getFavorites FROM movieModel: ', err));
  }
}