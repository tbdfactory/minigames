import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="page">
      <nav className="topbar"></nav>
      <Home />
    </div>
  );
}

export default App;
