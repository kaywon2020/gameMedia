import React from 'react';
import Slider from 'react-slick';
import { GAME_DATA } from '../games/GameData'



const GamePage = (props) => {

    const gameId = props.id;

    const sliderStngs = {
        dots: false,
        lazyload:true,
        infinite: true,
        speed: 1000,
        //1이상시 에러발생
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode:true,
        pauseOnHover:true,
        focusOnSelect:true,
        variableWidth: true,
    };
    const youtubeStngs = {
        width: "640",
        height: "390",
        playerVars: {
          autoplay: 0,
        },
    }
    return (
        <div className='gamePages'>
            <div className={GAME_DATA[gameId].title}>
            </div>
        </div>   
    ) 
}
