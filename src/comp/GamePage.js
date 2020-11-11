import React from 'react';
import Slider from 'react-slick';
import YouTube from "react-youtube";
import { GAME_DATA } from '../games/GameData'



const GamePage = (props) => {

    const Id = props.gameid;

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
            <div className={GAME_DATA[Id].classN}>
                <Slider {...sliderStngs}>
                    <div className='game-logo'>
                        <img src={GAME_DATA[Id].banner_img}/>
                    </div>
                    <div className='game-logo'>
                        <img src={GAME_DATA[Id].banner_img}/>
                    </div>
                    <div className='game-logo'>
                        <img src={GAME_DATA[Id].banner_img}/>
                    </div>
                    <div className='game-logo'>
                        <img src={GAME_DATA[Id].banner_img}/>
                    </div>
                </Slider>   
                <YouTube videoId={GAME_DATA[Id].videoId} opts={ youtubeStngs} />
                <a 
                className={GAME_DATA[Id].classN}
                target='_blank'
                rel='noopener noreferrer'
                href={GAME_DATA[Id].downLink} >
                    Download
                </a>
            </div>
        </div>   
    ) 
}

export default GamePage;