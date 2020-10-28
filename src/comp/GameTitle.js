import React from 'react';
import nightMare from '../imgs/nightmareLogo.png'
import witchSaga from '../imgs/witchSagaLogo.png'

const GameTitle = (props) => {    

    console.log(props);
    const gameL = props.gameT === "nightMare" ? nightMare 
                : props.gameT === "witchSaga" ? witchSaga 
                : console.log('no match Title')

    return (
        <div className= "game-title">
            <img src= {gameL} />
        </div>    
    );
}

export default GameTitle;