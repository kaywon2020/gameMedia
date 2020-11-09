import React from 'react';
import Slider from 'react-slick';
import { GAME_DATA } from '../games/GameData';

const BannerSlider = () => {
    const settings  = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode:true,
        pauseOnHover:true,
        focusOnSelect:true
      };
    return (
        <div className="slider-wrap">
            <Slider {...settings}>
                {GAME_DATA.map((game) =>(
                    <div key={game.id} id={game.title} className='game'>
                        <img alt='bannerImg' src={game.banner_img}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;