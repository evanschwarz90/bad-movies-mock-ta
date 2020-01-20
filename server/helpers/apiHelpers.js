const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');
const moviesUrl = 'https://api.themoviedb.org/3';

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

const getGenres = () => {
  return axios.get(moviesUrl + '/genre/movie/list', {
    params: {
      api_key: API_KEY 
    }
  })
    .then(results => results.data.genres)
    .catch(err => console.error('ERROR WITH API REQUEST IN getGenres: ', err));
};

const getMoviesByGenre = (genreId) => {
  return axios.get(moviesUrl + '/discover/movie', {
    params: {
      api_key: API_KEY,
      sort_by: 'vote_average.asc',
      with_genres: genreId
    }
  })
    .then(results => (
      results.data.results.map(movie => ({
        id: movie.id,
        name: movie.original_title,
        imageUrl: movie.poster_path,
        averageRating: movie.vote_average,
        year: movie.release_date.substring(0, 4)
      }))))
    .catch(err => console.error('ERROR WITH API REQUEST IN getMoviesByGenre: ', err));
}

module.exports = { getGenres, getMoviesByGenre };
