import { Header } from "../components/Header/Header";
import { Comedy } from "../components/Movies/Categories/Comedy";
import { Movies } from "../components/Movies/Movies";

export const MoviesPage = () => {
  return (
    <>
      <Header />
      <Movies />
      <Comedy />
    </>
  );
};
