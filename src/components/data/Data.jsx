import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDI2ZGYwYzRjNWIxYjk1ZDY0YzljNDU2ODgyMTIwNCIsInN1YiI6IjY1ODg2YTA5YjBjZDIwNTJmNjU3ZWNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E67gylb0HWUj69UovTWLviy0XYJbza5K8KbO1IXPv-I'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });