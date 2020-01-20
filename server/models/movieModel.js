const db = require('../../db/sql');
const promisify = require('util').promisify;
const query = promisify(db.query.bind(db));

module.exports = {
  saveMovie: movie => {
    const queryStr = 'INSERT INTO movies VALUES(?, ?, ?, ?, ?)';
    const queryArgs = [movie.id, movie.name, movie.imageUrl, movie.averageRating, movie.year];
    query(queryStr, queryArgs)
      .then(response => response.insertId)
      .catch(err => console.error('ERROR INSERTING MOVIE INTO DATABASE: ', err));
  },
  deleteMovie: id => {
    query('DELETE FROM movies WHERE id = ?', id)
      .catch(err => console.error('ERROR DELETING MOVIE FROM DATABASE: ', err));
  },
  getFavorites: () => {
    return query('SELECT * FROM movies')
      .then(results => {
        movies = results.map(row => ({id: row.id, name: row.name, imageUrl: row.imageUrl, averageRating: row.averageRating, year: row.year}));
        return movies;
      })
      .catch(err => {
        console.error('ERROR GETTING MOVIES FROM DATABASE: ', err);
      });
  }
}
