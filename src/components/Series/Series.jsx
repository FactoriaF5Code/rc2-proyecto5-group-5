import "./Series.css";
import { useState } from "react";
import ApiFetcher from "../fetch/ApiFetcher";

export const Series = () => {
  const [data, setData] = useState([]);

  const handleDataFetched = (series) => {
    setData(series);
  };

  return (
    <div className="App">
      <ApiFetcher dataFetched={handleDataFetched} />
      <div className="serie">
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {data.map((serie) => (
              <li key={serie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${serie.backdrop_path}`}
                  alt={serie.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


