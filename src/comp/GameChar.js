import React from 'react';
import nightMare from '../imgs/nightmareChar.png'
import witchSaga from '../imgs/witchSagaChar.png'

const GameChar = (props) => {    

    console.log(props);
    const gameL = props.gameT === "nightMare" ? nightMare 
                : props.gameT === "witchSaga" ? witchSaga 
                : console.log('no match Title')

    return (
        <div className= "game-char">
            <img src= {gameL} alt="Char"/>
        </div>    
    );
}

export default GameChar;