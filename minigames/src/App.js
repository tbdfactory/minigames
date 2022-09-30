import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="page">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
