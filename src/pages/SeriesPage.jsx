import { Header } from '../components/Header/Header';
import { Comedy } from '../components/Series/Categories/Comedy';
import { Series } from '../components/Series/Series';

export const SeriesPage = () => {
  return (
    <>
      <Header />
      <Series />
      <Comedy />
    </>
  );
};
