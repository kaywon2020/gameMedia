import React from 'react';
import nightMare from '../imgs/nightmare01.jpg'
import witchSaga from '../imgs/witchSaga01.jpg'

const GameIllustOne = (props) => {    

    console.log(props);
    const gameL = props.gameT === "nightMare" ? nightMare 
                : props.gameT === "witchSaga" ? witchSaga 
                : console.log('no match Title')

    return (
        <div className= "game-illust01">
            <img src= {gameL} />
        </div>    
    );
}

export default GameIllustOne;