import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/app.css";

function App() {
  return (
    <div className="page">
      <nav className="topbar"></nav>
      <main className="home">
        <div className="home_container offset-lg-1 offset-xl-2 col-lg-10 col-xl-8 d-flex flex-column justify-content-around">
          <div className="d-flex justify-content-around">
            <div className="thumbnail">1</div>
            <div className="thumbnail">2</div>
            <div className="thumbnail">3</div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="thumbnail">4</div>
            <div className="thumbnail">5</div>
            <div className="thumbnail">6</div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="thumbnail">7</div>
            <div className="thumbnail">8</div>
            <div className="thumbnail">9</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
