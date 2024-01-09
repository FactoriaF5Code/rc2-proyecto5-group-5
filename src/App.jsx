import "./App.css";
import { Header } from "./components/Header/Header";
import { Movies } from "./components/Movies/Movies";
import { Series } from "./components/Series/Series";
Series


function App() {
  return (
    <div>
      <Header />
      <Series className="section1" />
      <Series className="section2" />
      <Series className="section3" />
      <Series className="section4" />
      <Series className="section5" />
      <Series className="section6" />
      <Series className="section7" />
      <Series className="section8" />
    </div>
  );
}
export default App;
