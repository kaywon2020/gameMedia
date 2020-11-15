import React from 'react';
import { NavLink } from "react-router-dom";
import { GAME_DATA } from '../games/GameData';

const BannerList = () => {

    return (
        <div className="banner-list fade-in">

            <div className='banner-row'>
                <div key={GAME_DATA[0].id} id={GAME_DATA[0].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[0].classN}>
                            <div>{GAME_DATA[0].title}</div>
                            <div>{GAME_DATA[0].platform}</div>
                            <div>{GAME_DATA[0].genre}</div>
                            <div>{GAME_DATA[0].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[0].banner_img}/>
                </div>
                <div key={GAME_DATA[1].id} id={GAME_DATA[1].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[1].classN}>
                            <div>{GAME_DATA[1].title}</div>
                            <div>{GAME_DATA[1].platform}</div>
                            <div>{GAME_DATA[1].genre}</div>
                            <div>{GAME_DATA[1].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[1].banner_img}/>
                </div>
                <div key={GAME_DATA[2].id} id={GAME_DATA[2].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[2].classN}>
                            <div>{GAME_DATA[2].title}</div>
                            <div>{GAME_DATA[2].platform}</div>
                            <div>{GAME_DATA[2].genre}</div>
                            <div>{GAME_DATA[2].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[2].banner_img}/>
                </div>
            </div>

            <div className='banner-row'>
                <div key={GAME_DATA[3].id} id={GAME_DATA[3].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[3].classN}>
                            <div>{GAME_DATA[3].title}</div>
                            <div>{GAME_DATA[3].platform}</div>
                            <div>{GAME_DATA[3].genre}</div>
                            <div>{GAME_DATA[3].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[3].banner_img}/>
                </div>
                <div key={GAME_DATA[4].id} id={GAME_DATA[4].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[4].classN}>
                            <div>{GAME_DATA[4].title}</div>
                            <div>{GAME_DATA[4].platform}</div>
                            <div>{GAME_DATA[4].genre}</div>
                            <div>{GAME_DATA[4].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[4].banner_img}/>
                </div>
                <div key={GAME_DATA[5].id} id={GAME_DATA[5].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[5].classN}>
                            <div>{GAME_DATA[5].title}</div>
                            <div>{GAME_DATA[5].platform}</div>
                            <div>{GAME_DATA[5].genre}</div>
                            <div>{GAME_DATA[5].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[5].banner_img}/>
                </div>
            </div>

            <div className='banner-row'>
                <div key={GAME_DATA[6].id} id={GAME_DATA[6].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[6].classN}>
                            <div>{GAME_DATA[6].title}</div>
                            <div>{GAME_DATA[6].platform}</div>
                            <div>{GAME_DATA[6].genre}</div>
                            <div>{GAME_DATA[6].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[6].banner_img}/>
                </div>
                <div key={GAME_DATA[7].id} id={GAME_DATA[7].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[7].classN}>
                            <div>{GAME_DATA[7].title}</div>
                            <div>{GAME_DATA[7].platform}</div>
                            <div>{GAME_DATA[7].genre}</div>
                            <div>{GAME_DATA[7].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[7].banner_img}/>
                </div>
                <div key={GAME_DATA[8].id} id={GAME_DATA[8].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[8].classN}>
                            <div>{GAME_DATA[8].title}</div>
                            <div>{GAME_DATA[8].platform}</div>
                            <div>{GAME_DATA[8].genre}</div>
                            <div>{GAME_DATA[8].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[8].banner_img}/>
                </div>
            </div>

            <div className='banner-row'>
                <div key={GAME_DATA[9].id} id={GAME_DATA[9].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[9].classN}>
                            <div>{GAME_DATA[9].title}</div>
                            <div>{GAME_DATA[9].platform}</div>
                            <div>{GAME_DATA[9].genre}</div>
                            <div>{GAME_DATA[9].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[9].banner_img}/>
                </div>
                <div key={GAME_DATA[10].id} id={GAME_DATA[10].classN} className='game'>
                    <div className='gameBanner'>
                        <NavLink className='gameLink' to={GAME_DATA[10].classN}>
                            <div>{GAME_DATA[10].title}</div>
                            <div>{GAME_DATA[10].platform}</div>
                            <div>{GAME_DATA[10].genre}</div>
                            <div>{GAME_DATA[10].team}</div>
                        </NavLink>
                    </div>    
                    <img alt='bannerImg' src={GAME_DATA[10].banner_img}/>
                </div>
                <div className='game'>
                </div>
            </div>
        </div>
    );
};

export default BannerList;