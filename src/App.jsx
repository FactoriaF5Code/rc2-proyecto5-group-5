import "./App.css";
import { Header } from "./components/Header/Header";
import { Movies } from "./components/Movies/Movies";
import { Series } from "./components/Series/Series";
Series


function App() {
  return (
    <div>
      <Header />
      <Movies className="section1" />
      <Movies className="section2" />
      <Movies className="section3" />
      <Movies className="section4" />
      <Movies className="section5" />
      <Movies className="section6" />
      <Movies className="section7" />
      <Movies className="section8" />
    </div>
  );
}
export default App;
