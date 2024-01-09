import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage } from '../pages/MoviesPage';
import { SeriesPage } from '../pages/SeriesPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MoviesPage />} />
        <Route path='/series' element={<SeriesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
