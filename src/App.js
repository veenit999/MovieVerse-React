//http://www.omdbapi.com/?i=tt3896198&apikey=77f246c7
// 77f246c7
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const movie1 = {
  Title: "The Batman",
  Year: "2022",
  imdbID: "tt1877830",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
};

const API_URL = "http://www.omdbapi.com?apikey=77f246c7";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>
        {" "}
        <b>MovieVerse.....</b>
      </h1>
      <div className="search">
        <input
          placeholder="Search for movies!"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {searchMovies(searchTerm)}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sorry No Movie Found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
