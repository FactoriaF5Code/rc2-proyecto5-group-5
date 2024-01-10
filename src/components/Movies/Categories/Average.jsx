import '../Movies.css';
import { useState, useEffect } from 'react';

export const Average = () => {
  const [data, setData] = useState([]);
  const apiKey = 'dd26df0c4c5b1b95d64c9c4568821204';

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_average.asc&&vote_average.gte=8&language=es-ES`;
    let dataMoviesAverage = localStorage.getItem('dataMoviesAverage');
    if (dataMoviesAverage === null) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem('dataMoviesAverage', JSON.stringify(response));
          setData(response.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setData(JSON.parse(dataMoviesAverage).results);
    }
  }, []);

  return (
    <div className='App'>
      <div className='movie'>
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <section>
            <h2>Películas de comedia</h2>
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
          </section>
        )}
      </div>
    </div>
  );
};
