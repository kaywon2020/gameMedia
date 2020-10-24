import React from 'react';
import mypic from './imgs/2.png'
import GameYouTube from "./GameYouTube";

const Home = () => {
    return (
        <div className="App">
            <h1> 이곳이 나의 홈 </h1>
        <header className="App-header">
          <img src={mypic} className="App-logo" alt="logo" />
          <p>
            권영오애요
          </p>
          <GameYouTube videoID="niGkG2FLPdU"/>
          <a
            className="App-link"
            href="https://www.twitch.tv/rnjsduddh825"
            target="_blank"
            rel="noopener noreferrer"
          >
            요후요후
          </a>
        </header>
      </div>
    );
};

export default Home;