import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    const { movies, movieClick } = this.props;
    return (
      <ul className="movies">
        {movies.map((movie, i) => (
          <li className="movie_item" onClick={() => movieClick(movie)} key={i}>
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.imageUrl}`}
            />
            <div>
              <h2>{movie.name}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>{movie.year}</span>
                </div>
                <div>
                  <span className="title">Rating</span>
                  <span>{movie.averageRating}</span>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
