import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import GameContent from "./components/GameContent";

function App() {
  return (
    <div className="page">
      <NavBar />
      {/* <Home /> */}
      <main className="home">
        <GameContent
          game={{
            title: "TIC TAC TOE",
            description:
              "este es un juego que se juega con dos jugadores y trata de jugar con uso de la mentet y se gana haciendo perder al otro",
          }}
        />
      </main>
    </div>
  );
}

export default App;
