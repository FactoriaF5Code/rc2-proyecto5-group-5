import "./Series.css";
import { useState, useEffect } from "react";

export const Series = () => {
  const [data, setData] = useState([]);
  const apiKey = "dd26df0c4c5b1b95d64c9c4568821204";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
    let series = localStorage.getItem("series");
    if (series === null) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("series", JSON.stringify(response));
          setData(response.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setData(JSON.parse(series).results);
    }
  }, []);

  return (
    <div className="App">
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
