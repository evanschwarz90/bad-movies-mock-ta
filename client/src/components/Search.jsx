import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    fetch("http://localhost:3000/movies/genres")
      .then(data => data.json())
      .then(genres => {
        this.setState({ genres });
      })
      .catch(err =>
        console.error(
          "ERROR WITH GET REQUEST TO /genres ENDPOINT ON SERVER: ",
          err
        )
      );
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br />
        <br />
        <select onChange={e => this.props.handleGenreSelect(e)}>
          {this.state.genres.map(genre => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
