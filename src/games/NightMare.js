import React from 'react';
import GameTitle from '../comp/GameTitle';
import GameIllustOne from '../comp/GameIllustOne';
import GameChar from '../comp/GameChar';
import GameYouTube from "../GameYouTube";

const NightMare = () => {
    return (
       <div className="game-page nightMare">
       <GameTitle gameT="nightMare"/>
       <GameIllustOne gameT="nightMare"/>
       <GameChar gameT="nightMare"/>
       <a 
       className='down-btn' 
       target="_blank"
       rel="noopener noreferrer"
       href='https://drive.google.com/file/d/1ORDNpB67dqJ1ebaYDianWHziBxw7G-5O/view'
       >
       Download
       </a>
       <div className='game-intro'>
        Nightmare는 도트그래픽으로 이루어진 액션 로그라이크 플랫포머 게임입니다.<br/> 
        맵을 탐험하며 토템을 수집하고, 적을 물리치세요. 다양한 조작과 폼 체인지를 통해,<br/>
        스타일리쉬한 액션을 즐기세요. 어려운 난이도를 극복하며 성취감을 느껴보세요.
        </div>
       <GameYouTube videoID="i8JYLnZPHTk" />
       </div>
    );
};

export default NightMare