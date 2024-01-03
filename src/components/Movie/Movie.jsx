import "./movie.css";
import { useState, useEffect } from "react";
import api_URL from "../data/Data";
import requests from "../data/Request";


export function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api_URL + requests.fetchMovies);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  /* return (
    { <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul> }
  );*/
}
