import "./Movies.css";
import { useState } from "react";
import ApiFetcher from "../fetch/ApiFetcher";

export const Movies = () => {
  const [data, setData] = useState([]);

  const handleDataFetched = (movies) => {
    setData(movies);
  };

  return (
    <div className="App">
      <ApiFetcher dataFetched={handleDataFetched} />
      <div className="movie">
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {data.map((movie) => (
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
