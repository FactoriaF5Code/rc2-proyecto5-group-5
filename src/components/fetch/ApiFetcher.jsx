import { useEffect } from "react";
import PropTypes from "prop-types";

const ApiFetcher = ({ dataFetched }) => {
  const apiKey = "dd26df0c4c5b1b95d64c9c4568821204";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    let myData = localStorage.getItem("myData");

    if (myData === null) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("myData", JSON.stringify(response));
          dataFetched(response.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      const parsedMyData = JSON.parse(myData).results;
      if (JSON.stringify(parsedMyData) !== JSON.stringify(dataFetched)) {
        dataFetched(parsedMyData);
      }
    }
  }, [dataFetched]);

  return null;
};

ApiFetcher.propTypes = {
  dataFetched: PropTypes.func.isRequired,
};

export default ApiFetcher;
