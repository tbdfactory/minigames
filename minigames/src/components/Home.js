import "../styles/Home.css";
import g2048 from "../images/2048.png";
import dinogame from "../images/dinogame2.png";
import hangman from "../images/hangman.png";
import minesweeper from "../images/minesweeper.png";
import sudoku from "../images/sudoku.png";
import tictactoe from "../images/tictactoe.png";
import connect4 from "../images/connect4.jpg";
import { useEffect, useRef } from "react";

function Home() {
  return (
    <main className="home">
      <div className="home_container">
        <Thumbnail link="tictactoe" gameName="TIC TAC TOE" img={tictactoe} />
        <Thumbnail link="2048" gameName="2048" img={g2048} />
        <Thumbnail link="minesweeper" gameName="MINESWEEPER" img={minesweeper} />
        <Thumbnail link="dino" gameName="DINO" img={dinogame} />
        <Thumbnail link="sudoku" gameName="SUDOKU" img={sudoku} />
        <Thumbnail link="hangman" gameName="HANGMAN" img={hangman} />
        <Thumbnail link="connect4" gameName="CONNECT 4" img={connect4} />
      </div>
    </main>
  );
}

function Thumbnail({ link, gameName, img }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const handleMouseMove = (ev) => Card3D(el, ev);
    el.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = (ev) => {
      let cont = el.querySelector("div");
      cont.style.transform = "rotateX(0deg) rotateY(0deg)";
      cont.style.filter = "brightness(1)";
    };
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <a href={`/${link}`} className="thumbnail" ref={ref}>
      <div className="thumbnail_container">
        <img src={img} alt={gameName} className="thumbnail_img"></img>
        <div className="thumbnail_img_blur"></div>
        <p className="thumbnail_gameName">{gameName}</p>
      </div>
    </a>
  );
}

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let cont = card.querySelector("div");
  let cardRect = card.getBoundingClientRect();
  let mouseX = ev.clientX - cardRect.left;
  let mouseY = ev.clientY - cardRect.top;
  let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
  let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
  let brightness = map(mouseY, 0, cardRect.height, 1.4, 0.6);

  cont.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  cont.style.filter = `brightness(${brightness})`;
}

export default Home;
