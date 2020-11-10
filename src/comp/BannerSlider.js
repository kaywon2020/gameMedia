import React from 'react';
import Slider from 'react-slick';
import { NavLink } from "react-router-dom";
import { GAME_DATA } from '../games/GameData';

const BannerSlider = () => {
    const settings  = {
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
    return (
        <div className="slider-wrap fade-in">
            <Slider {...settings}>
                {GAME_DATA.map((game) =>(
                    <div key={game.id} id={game.title} className='game'>
                        <div className='gameBanner'>
                            <NavLink className='gameLink' to={game.title}>
                                {game.title}
                            </NavLink>
                        </div>    
                        <img alt='bannerImg' src={game.banner_img}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;