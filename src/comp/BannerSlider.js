import React from 'react';
import Slider from 'react-slick';
import { GAME_DATA } from '../games/GameData';

const BannerSlider = () => {
    const settings  = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000
      };
    return (
        <div className="slider-wrap">
            <Slider {...settings}>
                {GAME_DATA.map((game) =>(
                    <div key={game.id} id={game.title} className='game'>
                        <img src={game.banner_img}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;