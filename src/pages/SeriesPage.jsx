import { Header } from '../components/Header/Header';
import { Average } from '../components/Movies/Categories/Average';
import { Comedy } from '../components/Series/Categories/Comedy';
import { Series } from '../components/Series/Series';

export const SeriesPage = () => {
  return (
    <>
      <Header />
      <Series />
      <Comedy />
      <Average />
    </>
  );
};
